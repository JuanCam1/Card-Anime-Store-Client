import { $, component$, useSignal } from "@builder.io/qwik";
import Card from "~/components/card";
import { mockCards } from "~/data/cards-list";
import DialogViewCard from "./components/dialog-view-card";

export default component$(() => {
  const selectedCard = useSignal<CardModelI | null>(null);

  const openCardDetails = $((card: CardModelI) => {
    selectedCard.value = card;
  });

  const closeCardDetails = $(() => {
    selectedCard.value = null;
  });

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockCards.map((card) => (
          <Card key={card.id} card={card} openCardDetails={openCardDetails} />
        ))}
      </div>

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
          <button class="px-4 py-2 bg-purple-600 text-white rounded-md">
            1
          </button>
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

      {selectedCard.value && (
        <DialogViewCard
          selectedCard={selectedCard}
          closeCardDetails={closeCardDetails}
        />
      )}
    </>
  );
});
