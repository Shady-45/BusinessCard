//all custom function

import { ColorType, SizeType } from "../models"

export const colorClasses:Record<ColorType,string> = {
    primary:'text-white',
    secondary:"text-black",
    success:"text-green-600",
    danger:"text-red-600"
}

export const sizeClasses:Record<SizeType,string>={
    small:'text-sm',
    medium:'text-md',
    large:'text-xl',
    xl:'text-2xl',
    xxl:'text-3xl',
    xxxl:'text-4xl',
}