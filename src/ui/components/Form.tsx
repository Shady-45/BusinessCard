import { FormProvider,useForm } from 'react-hook-form'
import Button from './Button'
import ValidateInput from './ValidateInput'
import { _ADDRESS_VALIDATIONS, _DESIGNATION_VALIDATIONS, _EMAIL_VALIDATIONS, _IMAGE_VALIDATIONS, _NAME_VALIDATIONS, _ORGANIZTION_VALIDATIONS, _PHONE_NUMBER_VALIDATIONS } from '../../utils/Validations'
import useFormStore from '../../store'
import useModalStore from '../../store/Modal'
import chalk from 'chalk'

const Form = () => {
  const log = console.log
    const methods = useForm()
   const {updateFormData}= useFormStore()
   const {updateModal} = useModalStore()
    function onSub(data:any){
      log(chalk.blue.bgRed.bold("Your Info 🤫🤫",data));
        updateFormData(data)
        updateModal(true);
    }
  return (
    <div>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSub)} >
            <ValidateInput inputLabel='Name' inputType='text' maxLength={30} validations={_NAME_VALIDATIONS} errorTextColor='danger' />
            <ValidateInput inputLabel='Email' inputType='email' validations={_EMAIL_VALIDATIONS} errorTextColor='danger' />
            <ValidateInput inputLabel='Phone' inputType='text' maxLength={10} validations={_PHONE_NUMBER_VALIDATIONS} errorTextColor='danger' onInput={(e) => {
              <input onChange={(e)=>{}} / >
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  }} />
            <ValidateInput inputLabel='Organization' inputType='text' validations={_ORGANIZTION_VALIDATIONS} errorTextColor='danger' />
            <ValidateInput inputLabel='Designation' inputType='text' validations={_DESIGNATION_VALIDATIONS} errorTextColor='danger' />
            <ValidateInput inputLabel='image' inputType='file' validations={_IMAGE_VALIDATIONS} errorTextColor='danger' /> 
            <Button title='Submit' type='light' />
            </form>
        </FormProvider>
    </div>
  )
}

export default Form
