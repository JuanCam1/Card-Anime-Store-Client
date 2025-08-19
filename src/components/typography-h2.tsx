import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/merge";

interface Props {
	classNames?: string;
}
export default component$<Props>(({ classNames }) => {
	return (
		<h1
			class={cn(
				"text-3xl font-semibold tracking-tight dark:text-blue-500 text-blue-600",
				classNames,
			)}
		>
			<Slot />
		</h1>
	);
});
