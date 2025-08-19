import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/merge";

interface Props {
	classNames?: string;
}
export default component$<Props>(({ classNames }) => {
	return (
		<h1
			class={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				classNames,
			)}
		>
			<Slot />
		</h1>
	);
});
