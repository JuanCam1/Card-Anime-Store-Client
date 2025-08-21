import { $, useSignal, useStore } from "@builder.io/qwik";
import { toast } from "qwik-sonner";
import { notify } from "~/lib/notification";
import { LoginForm, loginSchema } from "../schemas/login-schema";

const useLogin = () => {
  const formData = useStore<LoginForm>({
    email: "",
    password: "",
  });

  const showPassword = useSignal(false);

  const handleSubmit = $(async (e: Event) => {
    const validation = loginSchema.safeParse(formData);

    if (!validation.success) {
      toast.error("Errores de validación de formulariosaa");
      notify("Errores de validación de formularios", "error");
      console.log("❌ Errores:", validation.error.format());
      return;
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
    console.log("✅ Datos válidos:", formData);
  });
  return {
    formData,
    showPassword,
    handleSubmit,
  };
};
export default useLogin;
