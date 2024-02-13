import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components'

export const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Color Picker' />
      <div className='text-center'>
        <div id="preview" />
        
      </div>
    </div>
  );
};
