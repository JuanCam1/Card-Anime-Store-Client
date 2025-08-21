import { $, useSignal, useStore } from '@builder.io/qwik'
import noUser from '../../../assets/images/no-user.webp'
import { RegisterForm, registerSchema } from '../schemas/register-schema'

const useRegister = () => {
  const formData = useStore<RegisterForm>({
    name: '',
    email: '',
    password: '',
    phone: '',
    image: null,
  })

  const imagePreview = useSignal(noUser)
  const showPassword = useSignal(false)

  const handleSubmit = $(async (e: Event) => {
    const validation = registerSchema.safeParse(formData)

    if (!validation.success) {
      console.log('❌ Errores:', validation.error.format())
      return
    }

    // const data = new FormData();
    // data.append('name', formData.name);
    // data.append('email', formData.email);
    // data.append('password', formData.password);
    // data.append('phone', formData.phone);
    // if (formData.image) {
    //   data.append('image', formData.image);
    // }

    // try {
    //   const res = await fetch('http://localhost:3000/api/auth/register', {
    //     method: 'POST',
    //     body: data,
    //   });

    //   const result = await res.json();
    //   console.log('✅ Respuesta:', result);
    // } catch (err) {
    //   console.error('⚠️ Error en petición:', err);
    // }
    console.log('✅ Datos válidos:', formData)
  })
  return {
    formData,
    imagePreview,
    showPassword,
    handleSubmit,
  }
}
export default useRegister
