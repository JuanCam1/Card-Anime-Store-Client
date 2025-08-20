import * as v from 'valibot'

export const loginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty('El email es requerido'),
    v.email('El email no es válido'),
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty('La contraseña es requerida'),
    v.minLength(5, 'La contraseña debe tener al menos 6 caracteres'),
    v.maxLength(15, 'La contraseña debe tener menos de 100 caracteres'),
  ),
})

export type LoginForm = v.InferInput<typeof loginSchema>
