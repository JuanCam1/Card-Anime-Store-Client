import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex justify-center mt-8">
      <div class="flex items-center space-x-2">
        <button class="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button class="px-4 py-2 bg-purple-600 text-white rounded-md">1</button>
        <button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          2
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          3
        </button>
        <button class="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});
