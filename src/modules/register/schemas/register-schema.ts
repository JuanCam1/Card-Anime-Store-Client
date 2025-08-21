import z from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z.email('El correo no es válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 1024 * 1024,
      'El archivo debe ser menor a 1MB',
    )
    .optional()
    .nullable(),
})

export type RegisterForm = z.infer<typeof registerSchema>
