import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

import {
  LuArrowBigLeftDash,
  LuAtSign,
  LuEye,
  LuEyeOff,
} from "@qwikest/icons/lucide";
import Button from "~/components/button";
import TypographyH2 from "~/components/typography-h2";
import TypographyP from "~/components/typography-p";
import useLogin from "~/modules/login/hooks/use-login";

export default component$(() => {
  const { formData, handleSubmit, showPassword } = useLogin();
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div class="absolute z-10 left-0 top-0 p-4">
        <Link href="/">
          <button class="cursor-pointer duration-200 hover:scale-125 active:scale-100 bg-fuchsia-950 p-1 rounded-md">
            <LuArrowBigLeftDash class="size-7 text-white" />
          </button>
        </Link>
      </div>

      <div class="absolute inset-0 opacity-20"></div>

      <div class="w-full max-w-md">
        <div class="text-center mb-8">
          <TypographyH2 classNames="font-display tracking-widest text-4xl font-bold text-white mb-2">
            Anime Card Store
          </TypographyH2>
        </div>

        <div class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          <TypographyH2 classNames="text-2xl font-semibold text-white text-center mb-6">
            Iniciar Sesión
          </TypographyH2>

          <form
            preventdefault:submit
            class="space-y-6"
            onSubmit$={handleSubmit}
          >
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-purple-100 mb-2"
              >
                Email
              </label>
              <div class="relative">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onInput$={(_, el) => (formData.email = el.value)}
                  type="email"
                  class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-0 `}
                />
                <LuAtSign class="absolute right-3 top-3.5 w-5 h-5 text-purple-300" />
              </div>
              {/* <div class="mt-1 h-3">
                      {field.error && (
                        <span class="text-red-400 text-sm">{field.error}</span>
                      )}
                    </div> */}
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-purple-100 mb-2"
              >
                Contraseña
              </label>
              <div class="relative">
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onInput$={(_, el) => (formData.password = el.value)}
                  type={showPassword.value ? "text" : "password"}
                  class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-0 `}
                />
                <button
                  type="button"
                  onClick$={() => (showPassword.value = !showPassword.value)}
                  class="absolute right-3 top-3.5 text-purple-300 hover:text-white transition-colors flex justify-center items-center cursor-pointer"
                >
                  {showPassword.value ? (
                    <LuEyeOff class="w-5 h-5" />
                  ) : (
                    <LuEye class="w-5 h-5" />
                  )}
                </button>
              </div>
              {/* <div class="mt-1 h-3">
                      {field.error && (
                        <span class="text-red-400 text-sm">{field.error}</span>
                      )}
                    </div> */}
            </div>

            <div class="flex items-center justify-center w-full">
              <Button type="submit">
                Iniciar Sesión
                {/* {isLoading.value ? (
                  <>
                    <Loading />
                    Iniciando sesión...
                  </>
                ) : (
                  'Iniciar Sesión'
                )} */}
              </Button>
            </div>
          </form>

          <div class="mt-6 text-center">
            <TypographyP classNames="text-purple-200 text-sm mb-3">
              ¿No tienes cuenta?{" "}
              <Link
                href="/register/"
                class="text-purple-300 hover:text-purple-400 font-medium transition-colors"
              >
                Regístrate aquí
              </Link>
            </TypographyP>
          </div>
          <div class="flex items-center justify-center">
            <Link
              href="/home/"
              class="text-sm text-purple-300 hover:text-white transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Inicio de Sesión",
};
