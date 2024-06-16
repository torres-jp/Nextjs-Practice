import { z } from "zod";

export const signupSchema = z
  .object({
    firstname: z
      .string({
        required_error: "El nombre es requerido",
      })
      .min(5)
      .max(15),
    lastname: z
      .string({
        required_error: "El apellido es requerido",
      })
      .min(5)
      .max(15),
    email: z
      .string({
        required_error: "El email es requerido",
      })
      .email({
        message: "El email no es válido",
      }),
    password: z
      .string({
        required_error: "La contraseña es requerida",
      })
      .min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
      })
      .max(30),
    confirmPassword: z.string().min(6).max(30),
    age: z
      .number({
        required_error: "La edad es requerida",
      })
      .int()
      .positive()
      .min(1)
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
