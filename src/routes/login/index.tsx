import { $, component$, QRL, useSignal } from '@builder.io/qwik'
import { DocumentHead, Link, routeLoader$ } from '@builder.io/qwik-city'
import {
  InitialValues,
  SubmitHandler,
  useForm,
  valiForm$,
} from '@modular-forms/qwik'
import { LuAtSign, LuEye, LuEyeOff } from '@qwikest/icons/lucide'
import Button from '~/components/button'
import TypographyH2 from '~/components/typography-h2'
import TypographyP from '~/components/typography-p'
import { LoginForm, loginSchema } from '~/modules/login/schemas/login-schema'

const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: '',
  password: '',
}))

export default component$(() => {
  const showPassword = useSignal(false)

  const [_, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    validate: valiForm$(loginSchema),
  })

  const handleSubmit: QRL<SubmitHandler<LoginForm>> = $((values, event) => {
    console.log(values)
  })

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div class="absolute inset-0 opacity-20"></div>

      <div class="relative w-full max-w-md">
        <div class="text-center mb-8">
          <TypographyH2 classNames="font-display tracking-widest text-4xl font-bold text-white mb-2">
            Anime Card Store
          </TypographyH2>
        </div>

        <div class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          <TypographyH2 classNames="text-2xl font-semibold text-white text-center mb-6">
            Iniciar Sesión
          </TypographyH2>

          <Form onSubmit$={handleSubmit} class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-purple-100 mb-2">
                Email o Usuario
              </label>
              <Field name="email">
                {(field, props) => (
                  <>
                    <div class="relative">
                      <input
                        type="email"
                        {...props}
                        value={field.value}
                        class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-0 ${field.error ? 'border-red-500' : ''}`}
                      />
                      <LuAtSign class="absolute right-3 top-3.5 w-5 h-5 text-purple-300" />
                    </div>
                    <div class="mt-1 h-3">
                      {field.error && (
                        <span class="text-red-400 text-sm">{field.error}</span>
                      )}
                    </div>
                  </>
                )}
              </Field>
            </div>

            <div>
              <label class="block text-sm font-medium text-purple-100 mb-2">
                Contraseña
              </label>
              <Field name="password">
                {(field, props) => (
                  <>
                    <div class="relative">
                      <input
                        {...props}
                        value={field.value}
                        type={showPassword.value ? 'text' : 'password'}
                        class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-0 ${field.error ? 'border-red-500' : ''}`}
                      />
                      <button
                        type="button"
                        onClick$={() =>
                          (showPassword.value = !showPassword.value)
                        }
                        class="absolute right-3 top-3.5 text-purple-300 hover:text-white transition-colors flex justify-center items-center cursor-pointer"
                      >
                        {showPassword.value ? (
                          <LuEyeOff class="w-5 h-5" />
                        ) : (
                          <LuEye class="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <div class="mt-1 h-3">
                      {field.error && (
                        <span class="text-red-400 text-sm">{field.error}</span>
                      )}
                    </div>
                  </>
                )}
              </Field>
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
          </Form>

          <div class="mt-6 text-center">
            <TypographyP classNames="text-purple-200 text-sm mb-3">
              ¿No tienes cuenta?{' '}
              <Link
                href="/register/"
                class="text-purple-300 hover:text-purple-400 font-medium transition-colors"
              >
                Regístrate aquí
              </Link>
            </TypographyP>
          </div>
          <div class="flex items-center justify-center">
            <span class="text-sm text-purple-300 hover:text-white transition-colors">
              ¿Olvidaste tu contraseña?
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Inicio de Sesión',
}
