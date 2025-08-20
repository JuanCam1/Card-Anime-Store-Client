import { $, component$, useSignal } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { LuAtSign, LuEye, LuEyeOff } from "@qwikest/icons/lucide";
import Button from "~/components/button";
import Loading from "~/components/loading";
import TypographyH2 from "~/components/typography-h2";
import TypographyP from "~/components/typography-p";

export default component$(() => {
	const email = useSignal("");
	const password = useSignal("");
	const rememberMe = useSignal(false);
	const showPassword = useSignal(false);
	const errors = useSignal({});
	const isLoading = useSignal(false);

	const validateForm = $(() => {
		const newErrors = {
			email: "",
			password: "",
		};

		if (!email.value) {
			newErrors.email = "El email es requerido";
		} else if (!/\S+@\S+\.\S+/.test(email.value)) {
			newErrors.email = "El email no es válido";
		}

		if (!password.value) {
			newErrors.password = "La contraseña es requerida";
		} else if (password.value.length < 6) {
			newErrors.password = "La contraseña debe tener al menos 6 caracteres";
		}

		errors.value = newErrors;
		return Object.keys(newErrors).length === 0;
	});

	const handleSubmit = $(async () => {
		const validate = await validateForm();
		if (validate) {
			isLoading.value = true;
			// Simular llamada a API
			await new Promise((resolve) => setTimeout(resolve, 1500));
			isLoading.value = false;

			// Aquí iría la lógica de autenticación
			console.log("Login attempt:", {
				email: email.value,
				password: password.value,
				rememberMe: rememberMe.value,
			});
		}
	});

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

					<div class="space-y-6">
						<div>
							<label class="block text-sm font-medium text-purple-100 mb-2">
								Email o Usuario
							</label>
							<div class="relative">
								<input
									type="email"
									value={email.value}
									onInput$={(e) =>
										(email.value = (e.target as HTMLInputElement).value)
									}
									class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-0 transition-all `}
								/>
								<LuAtSign class="absolute right-3 top-3.5 w-5 h-5 text-purple-300" />
							</div>
						</div>

						<div>
							<label class="block text-sm font-medium text-purple-100 mb-2">
								Contraseña
							</label>
							<div class="relative">
								<input
									type={showPassword.value ? "text" : "password"}
									value={password.value}
									onInput$={(e) =>
										(password.value = (e.target as HTMLInputElement).value)
									}
									class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-0 transition-all `}
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
						</div>

						<div class="flex items-center justify-center w-full">
							<Button onClick$={handleSubmit} disabled={isLoading.value}>
								{isLoading.value ? (
									<>
										<Loading />
										Iniciando sesión...
									</>
								) : (
									"Iniciar Sesión"
								)}
							</Button>
						</div>
					</div>

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
						<span class="text-sm text-purple-300 hover:text-white transition-colors">
							¿Olvidaste tu contraseña?
						</span>
					</div>
				</div>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Inicio de Sesión",
};
