import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

export const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <>
      <ChartComponent
        height={height}
        width={width}
        id='charts'
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: 'white' }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          { stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />) }
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
};
