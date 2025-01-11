import {create} from 'zustand'
import { ModalState } from '../models'

const useModalStore = create<ModalState>((set)=>({
    openModal :false,
    updateModal:((val)=>set({openModal:val}))
    }))

export default useModalStore;