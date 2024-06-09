import path from 'path'
import {z} from 'zod'

const plans = ['free', 'basic', 'medium', 'prime'] as const

export type Plans = (typeof plans)[number]
export const mappedPlans : {[key in Plans]: string} = {
    free: 'Free',
    basic: 'Basic',
    medium: 'Medium',
    prime: 'Prime'
}

export const userSchema = z.object({
    name: z.string().min(3, {
        message: 'El nombre debe tener al menos 3 caracteres'
    }).max(15, {
        message: 'El nombre no puede tener más de 15 caracteres'
    }),
    email: z.string().email({
        message: 'El email no es válido'
    }),
    password: z.string().min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres'
    }),
    confirmPass: z.string().min(6,{
        message: 'La contraseña debe tener al menos 6 caracteres'
    }),
    weight: z.string().refine(weight => !isNaN(parseFloat(weight)),{
        message: 'El peso debe ser un número'
    }),
    dateOfBirth: z.string().refine(dob => new Date(dob).toString() !== "Invalid Date", {
        message: 'La fecha de nacimiento no es válida'
    }),
    plan: z.enum(plans, {
        errorMap: () => ({message: 'Selecciona un plan'})
    })
}).refine(data => data.password === data.confirmPass, {
    message: 'Las contraseñas no coinciden',
    path: ["confirmPass"]
} ) 

