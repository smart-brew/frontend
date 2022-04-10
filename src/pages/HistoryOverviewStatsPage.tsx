import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';
import { BaseBrewingApi, StatusLogApi } from '../types/BrewingType';
import TimeHelper from '../helpers/TimeHelper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  elements: {
    point: {
      pointHoverRadius: 8,
      pointRadius: 7,
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
    },
  },
};

interface Props {
  brewStats: StatusLogApi[] | null;
}

export const HistoryOverviewStatsPage: React.FC<Props> = ({ brewStats }) => {
  if (brewStats) {
    console.log(JSON.parse(brewStats[0].params));
  }
  const chartTemp1: number[] = [];
  const chartTemp2: number[] = [];
  const chartMotor1: number[] = [];
  const chartMotor2: number[] = [];

  // const labels = [
  //   '00:00',
  //   '01:00',
  //   '02:00',
  //   '03:00',
  //   '04:00',
  //   '05:00',
  //   '06:00',
  //   '07:00',
  //   '08:00',
  //   '09:00',
  //   '10:00',
  // ];

  const labels: string[] = [];

  const mapStatusLogApiToChartData = (): void => {
    if (brewStats) {
      brewStats.map((value, index) => {
        const param = JSON.parse(value.params);
        console.log(param);
        chartTemp1.push(Math.floor(param.TEMPERATURE[0].TEMP));
        chartTemp2.push(Math.floor(param.TEMPERATURE[1].TEMP));
        chartMotor1.push(Math.floor(param.MOTOR[0].RPM));
        chartMotor2.push(Math.floor(param.MOTOR[1].RPM));
      });
    }
  };

  const mapStatusLogApiToLabels = (): void => {
    if (brewStats) {
      brewStats.map((value) => {
        labels.push(TimeHelper.msToMMSS(value.createdAt));
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
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 150 })),
        data: chartTemp1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Temp 2',
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 150 })),
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
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
        data: chartMotor1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Motor 2',
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
        data: chartMotor2,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center content-center items-center">
      <div className="w-4/5  p-6 space-y-5">
        <span className="text-xl font-semibold my-5">Temperature stats</span>
        <Line options={options} data={tempData} />
      </div>
      <div className="w-4/5  p-6 space-y-5">
        <span className="text-xl font-semibold my-5">Motor speed stats</span>
        <Line options={options} data={motorData} />
      </div>
    </div>
  );
};
