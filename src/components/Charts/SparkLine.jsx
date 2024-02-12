import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import React from 'react';

// export class SparkLine extends React.Component {
//   render(){
//     const { id, height, width, color, data, type, currentColor } = this.props
//     return(
//       <SparklineComponent
//       id={id}
//       height={height}
//       width={width}
//       lineWidth={1}
//       valueType='Numeric'
//       fill={color}
//       border={{ color: currentColor, width: 2 }}
//       dataSource={data}
//       xName='x'
//       yName='y'
//       type={type}
//       tooltipSettings={{
//         visible: true,
//         format: '${x} : data ${y}',
//         trackLineSettings: {
//           visible: true
//         }
//       }}
//     >
//       <Inject services={[ SparklineTooltip ]} />
//     </SparklineComponent>
//     );
//   }
// }

export const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <>
      <SparkLineChart
        data={data.map(item => item.yval)}
        height={100}
        showHighlight={true}
        showTooltip={true}
      />
      {/* <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType='Numeric'
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName='x'
        yName='y'
        type={type}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${y}',
          trackLineSettings: {
            visible: true
          }
        }}
      >
        <Inject services={[ SparklineTooltip ]} />
      </SparklineComponent> */}
    </>
  );
};
