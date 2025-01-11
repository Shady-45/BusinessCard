import { ValidateInputProps } from '../../models'
import Text from './Text'
import TextInput from './TextInput'
import {useFormContext} from 'react-hook-form'


const ValidateInput:React.FC<ValidateInputProps> = ({inputLabel,inputType,validations,errorTextColor,onInput}) => {
    const {formState} =useFormContext()
    const {errors}=formState
  return (
    <div className='flex relative  flex-col items-start gap-1 mb-8 w-[170%]'>
      <div>
      <TextInput  inputLabel={inputLabel} inputType={inputType}  validations={validations} onInput={onInput}/>
      </div>
      <div className='absolute bottom-[-10px]'>
      <Text color={errorTextColor || 'danger'} fontSize='medium' text={errors?.[inputLabel]?.message as string} />
    </div>
    </div>
  )
}

export default ValidateInput
