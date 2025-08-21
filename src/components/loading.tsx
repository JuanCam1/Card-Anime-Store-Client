import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>
  )
})
