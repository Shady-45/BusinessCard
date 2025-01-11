import { RegisterOptions } from "react-hook-form";

type FormState = Record<string,any>
type UpdateFormState = (data: Record<string, any>) => void;
export type FormData = {
    formData:FormState,
    updateFormData:UpdateFormState
}

export type ModalState = {
    openModal:boolean,
    updateModal:(val:boolean)=> void
}

export type ColorType = 'primary' | 'secondary' | 'success' | 'danger'
export type SizeType = 'small' | 'medium' | 'large' | 'xl'| 'xxl'|'xxxl'
// Text Props
export type TextProps = {
    text:string,
    fontSize:SizeType,
    color:ColorType
    textType? :"Heading" | "text"

}
export type TextInputProps={
    inputType:string,
    inputLabel:string,
    validations:Object,
    maxLength?:number,
    onInput?:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
export type ValidateInputProps ={
    inputLabel:string,
    inputType:string,
    validations:RegisterOptions,
    maxLength?:number
    errorTextColor?:ColorType
    onInput?:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
export type ButtonProps ={
    title:string,
    type:'light' | 'dark',
    onSubmit?   :()=>void,

}