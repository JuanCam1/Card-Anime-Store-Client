import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { cn } from "~/lib/merge";
import image from "../assets/images/Charizard.webp";

interface Props {
	loading?: boolean;
	frontSrc?: string;
	backSrc?: string;
	title?: string;
	class?: string;
}

export default component$<Props>(
	({ loading, frontSrc, backSrc, title, class: className }) => {
		useStylesScoped$(styles);
		return (
			<div class={cn("relative mx-auto select-none", className)}>
				<div class="card-scene">
					<div class={cn("card", loading && "card--spinning")}>
						<div class="relative card-face card-front bg-gradient-to-b from-rose-400 to-red-500">
							<div class="absolute bottom-4 left-1/2 -translate-x-1/2 ">
								<span class="font-display text-2xl font-extrabold tracking-widest text-white drop-shadow-md">
									Charizad
								</span>
							</div>
							{frontSrc ? (
								<img
									src={frontSrc}
									alt={title}
									class="h-full w-full object-contain rounded-[1.25rem] "
								/>
							) : (
								<img
									src={image}
									alt={title}
									class="h-full w-full object-contain rounded-[1.25rem]"
								/>
							)}
						</div>

						<div class="card-face card-back">
							{backSrc ? (
								<img
									src={backSrc}
									alt="Card back"
									class="h-full w-full object-contain rounded-[1.25rem]"
								/>
							) : (
								<div class="pokeball-back h-full w-full rounded-[1.25rem]" />
							)}
						</div>
					</div>
				</div>

				{/* sombra suave debajo */}
				<div
					class={cn(
						"pointer-events-none mx-auto mt-4 h-2 w-40 rounded-full bg-black/20 blur-md",
						loading ? "animate-pulse" : "",
					)}
				/>
			</div>
		);
	},
);

const styles = `
.card-scene {
  perspective: 1200px;
  width: 12rem;  
  height: 18rem;  
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 1.25rem; 
  box-shadow:
    0 10px 25px rgba(0,0,0,.15),
    inset 0 0 0 2px rgba(255,255,255,.08);
  background: linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
}


.card--spinning {
  animation: spin3d 2s linear infinite;
}

@keyframes spin3d {
  0%   { transform: rotateY(0deg) rotateX(0deg); }
  50%  { transform: rotateY(180deg) rotateX(2deg); }
  100% { transform: rotateY(360deg) rotateX(0deg); }
}

.card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 1.25rem;
  overflow: hidden;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

.pokeball-back {
  position: relative;
  background:
    radial-gradient(circle at center, #ffffff 0 32%, transparent 33%) center/100% 100%,
    linear-gradient(#e53e3e 0 50%, #1a202c 50% 52%, #2b6cb0 52% 100%);
}

.pokeball-back::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, #1a202c 0 10%, #fff 11% 22%, #1a202c 23% 24%, transparent 25%);
  mix-blend-mode: multiply;
  opacity: .35;
}
`;
