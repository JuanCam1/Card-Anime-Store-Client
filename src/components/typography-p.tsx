import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/merge";

interface Props {
	classNames?: string;
}
export default component$<Props>(({ classNames }) => {
	return (
		<p class={cn("leading-7 text-neutral-300 mt-4 mb-8 ", classNames)}>
			<Slot />
		</p>
	);
});
