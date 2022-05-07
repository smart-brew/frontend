import React from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  TimeScale,
  Tooltip,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { BrewingApi } from '../types/BrewingType';
import TimeHelper from '../helpers/TimeHelper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  selectedBrew: BrewingApi | null;
}

export const HistoryOverviewStatsPage: React.FC<Props> = ({ selectedBrew }) => {
  // selectedBrew = generateDummyBrewingApi(120);
  const brewStats = selectedBrew?.StatusLogs;

  const subtractHourFromChartLabel = (value: number | string): string => {
    if (typeof value === 'number') {
      value = value.toString(10);
      return value;
    }
    if (value.length > 5) {
      const valueSplit = value.split(':');
      let seconds =
        +valueSplit[0] * 60 * 60 + +valueSplit[1] * 60 + +valueSplit[2];
      seconds -= 3600;
      value = TimeHelper.msToHHMMSS(seconds * 1000);
      return value;
    }
    return value;
  };

  const getBrewingDuration = (
    start: string | undefined,
    finish: string | undefined
  ): number => {
    if (start !== undefined && finish !== undefined) {
      const startDate = new Date(start);
      const finishDate = new Date(finish);

      return finishDate.getTime() - startDate.getTime();
    }
    return 0;
  };

  const isDurationMoreThanHour = TimeHelper.isTimeMoreThanHour(
    getBrewingDuration(selectedBrew?.startedAt, selectedBrew?.finishedAt)
  );

  const options: ChartOptions<'line'> = {
    responsive: true,
    elements: {
      point: {
        hoverRadius: 8,
        radius: 7,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 20,
        },
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          title(context: { label: any }[]) {
            const value = context[0].label;
            return subtractHourFromChartLabel(value);
          },
        },
      },
    },
    scales: {
      x: {
        min: isDurationMoreThanHour ? '00:00:00' : '00:00',
        type: 'time',
        bounds: 'ticks',
        ticks: {
          maxTicksLimit: 20,
          callback(value: string | number) {
            return subtractHourFromChartLabel(value);
          },
        },
        // distribution: 'series',
        time: {
          tooltipFormat: isDurationMoreThanHour ? 'HH:mm:ss' : 'mm:ss',
          unit: isDurationMoreThanHour ? 'hour' : 'minute',
          displayFormats: {
            hour: 'HH:mm:ss',
            minute: 'mm:ss',
          },
        },
      },
    },
  };

  const chartTemp1: number[] = [];
  const chartTemp2: number[] = [];
  const chartMotor1: number[] = [];
  const chartMotor2: number[] = [];

  const labels: number[] = [];

  const mapStatusLogApiToChartData = (): void => {
    if (brewStats) {
      brewStats.map((value) => {
        const param = JSON.parse(value.params);
        chartTemp1.push(Math.floor(param.TEMPERATURE[0].TEMP));
        chartTemp2.push(Math.floor(param.TEMPERATURE[1].TEMP));
        chartMotor1.push(Math.floor(param.MOTOR[0].RPM));
        chartMotor2.push(Math.floor(param.MOTOR[1].RPM));
        return null;
      });
    }
  };

  const mapStatusLogApiToLabels = (): void => {
    if (brewStats) {
      brewStats.map((value) => {
        // labels.push(TimeHelper.msToMMSS(value.createdAt));
        labels.push(value.createdAt);
        return null;
      });
    }
  };

  mapStatusLogApiToChartData();
  mapStatusLogApiToLabels();

  const tempData = {
    labels,
    datasets: [
      {
        label: 'Temp 1',
        data: chartTemp1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Temp 2',
        data: chartTemp2,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const motorData = {
    labels,
    datasets: [
      {
        label: 'Motor 1',
        data: chartMotor1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Motor 2',
        data: chartMotor2,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center content-center items-center">
      <div className="w-5/6 p-6 space-y-5">
        <span className="text-xl font-semibold my-5">Temperature stats</span>
        <Line options={options} data={tempData} />
      </div>
      <div className="w-5/6  p-6 space-y-5">
        <span className="text-xl font-semibold my-5">Motor speed stats</span>
        <Line options={options} data={motorData} />
      </div>
    </div>
  );
};
