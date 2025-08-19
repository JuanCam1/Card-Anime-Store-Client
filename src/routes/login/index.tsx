import { $, component$, useSignal } from "@builder.io/qwik";

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
				{/* Logo y Título */}
				<div class="text-center mb-8">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-4 shadow-lg">
						<svg
							class="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"
							/>
						</svg>
					</div>
					<h1 class="text-3xl font-bold text-white mb-2">AnimeCards</h1>
					<p class="text-purple-200">Intercambia tus cartas favoritas</p>
				</div>

				{/* Card de Login */}
				<div class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
					<h2 class="text-2xl font-semibold text-white text-center mb-6">
						Iniciar Sesión
					</h2>

					<div class="space-y-6">
						{/* Campo Email */}
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
									class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 transition-all `}
									placeholder="tu@email.com"
								/>
								<svg
									class="absolute right-3 top-3.5 w-5 h-5 text-purple-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
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
									class={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 transition-all `}
									placeholder="••••••••"
								/>
								<button
									type="button"
									onClick$={() => (showPassword.value = !showPassword.value)}
									class="absolute right-3 top-3.5 text-purple-300 hover:text-white transition-colors"
								>
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										{showPassword.value ? (
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
											/>
										) : (
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											/>
										)}
									</svg>
								</button>
							</div>
						</div>

						<div class="flex items-center justify-between">
							<button class="text-sm text-purple-300 hover:text-white transition-colors">
								¿Olvidaste tu contraseña?
							</button>
						</div>

						<button
							onClick$={handleSubmit}
							disabled={isLoading.value}
							class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
						>
							{isLoading.value ? (
								<>
									<svg
										class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Iniciando sesión...
								</>
							) : (
								"Iniciar Sesión"
							)}
						</button>
					</div>

					{/* Link al registro */}
					<div class="mt-6 text-center">
						<p class="text-purple-200">
							¿No tienes cuenta?{" "}
							<button class="text-purple-300 hover:text-white font-medium transition-colors">
								Regístrate aquí
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
});
