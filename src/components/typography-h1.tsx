import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/merge";

interface Props {
	classNames?: string;
}
export default component$<Props>(({ classNames }) => {
	return (
		<h1
			class={cn(
				"scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-neutral-200",
				classNames,
			)}
		>
			<Slot />
		</h1>
	);
});
