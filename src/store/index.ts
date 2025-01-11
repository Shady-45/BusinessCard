import { create} from "zustand";
import { FormData} from "../models";


 const useFormStore= create<FormData>((set)=>({
    formData:{},
    updateFormData:(data) => set({formData:data})
}))


export default useFormStore                  
