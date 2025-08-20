import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/merge";

interface Props {
	classNames?: string;
}
export default component$<Props>(({ classNames }) => {
	return (
		<h1
			class={cn(
				"font-display tracking-widest scroll-m-20 text-center text-4xl font-extrabold  text-balance text-neutral-200",
				classNames,
			)}
		>
			<Slot />
		</h1>
	);
});
