import { useFormContext } from 'react-hook-form'
import { TextInputProps } from '../../models'

const TextInput:React.FC<TextInputProps>= ({inputLabel,inputType,validations,onInput,...rest}) => {
    const {register} = useFormContext()
    return (
    <div>
      <input className={`mt-4 mb-4 bg-black outline-none border-b-2 border-white px-1 text-white  ${inputType === 'file' ? 'w-full' : 'w-[170%]'}`} placeholder={inputLabel} type={inputType} onInput={onInput} autoComplete='off'  {...rest} {...register(inputLabel,validations )} />
    </div> 
  )
}

export default TextInput
