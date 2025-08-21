import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { component$, Slot } from '@builder.io/qwik'

type ButtonProps = QwikIntrinsicElements['button']

interface Props extends ButtonProps {
  action?: () => Promise<void>
}
export default component$<Props>(({ action, ...props }) => {
  return (
    <button
      onClick$={action}
      class="max-sm:w-full cursor-pointer bg-fuchsia-950 text-white border border-fuchsia-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md  active:opacity-75 group"
      {...props}
    >
      <span class="bg-fuchsia-400 shadow-fuchsia-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      <Slot />
    </button>
  )
})
