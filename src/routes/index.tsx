import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button";
import TypographyH1 from "~/components/typography-h1";
import TypographyP from "~/components/typography-p";
import logo from "../assets/image.svg";

export default component$(() => {
	return (
		<div class="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen grid grid-cols-1 md:grid-cols-2">
			<div class="flex flex-col justify-center items-center text-center p-8 ">
				<div class="bg-white/10 backdrop-blur-lg rounded-2xl px-10 py-20 shadow-xl">
					<TypographyH1 classNames=" text-6xl drop-shadow-md">
						Anime Cliente
					</TypographyH1>
					<TypographyP classNames="text-2xl font-bold">
						Encuentra tus cartas favoritas en un solo lugar.
					</TypographyP>
					<div class="flex gap-4 flex-wrap justify-center">
						<Button name="Iniciar Sesión" url="login" />
						<Button name="Registrarse" url="/register" />
					</div>
				</div>
			</div>

			<div class="flex items-center justify-center p-6">
				<img
					src={logo}
					alt="logo"
					class="w-2xl drop-shadow-2xl animate-[float_3s_ease-in-out_infinite] hover:[animation-play-state:paused]"
				/>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Bienvenido a AnimeStore",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
