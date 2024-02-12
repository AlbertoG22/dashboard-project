import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../data/dummy';

export const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      height={height}
      width={width}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    </ChartComponent>
  );
};
