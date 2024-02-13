import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../data/dummy';
import { BarChart } from '@mui/x-charts';

export const Stacked = ({ width, height }) => {
  return (
    <>
      {/* <ChartComponent
        height={height}
        width={width}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      </ChartComponent> */}
      <BarChart
        series={[
          { data: [1, 6, 5, 8, 1, 7, 4], stack: 'A', color: '#4ade80'},
          { data: [3, 1, 8, 7, 2, 1, 9], stack: 'A', color: '#e5e7eb' },
        ]}
        width={400}
        height={350}
      />
    </>
  );
};
