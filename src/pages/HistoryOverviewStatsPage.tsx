import { Chart, registerables } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';
import React from 'react';
import { StatusLogApi } from '../types/BrewingType';

interface Props {
  brewStats: StatusLogApi[] | null;
}

export const HistoryOverviewStatsPage: React.FC<Props> = ({ brewStats }) => {
  return (
    <div>
      <div>Chart for temps</div>
      <div>Chart for motor speed</div>
    </div>
  );
};
