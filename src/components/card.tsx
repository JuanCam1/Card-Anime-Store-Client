import { component$, QRL } from "@builder.io/qwik";
import { LuHeart, LuLocate, LuStar } from "@qwikest/icons/lucide";
import { getConditionColor, getRarityColor } from "~/utils/color-card";

interface Props {
  openCardDetails: QRL<(card: CardModelI) => void>;
  card: CardModelI;
}
export default component$<Props>(({ openCardDetails, card }) => {
  return (
    <div
      onClick$={() => openCardDetails(card)}
      class="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 cursor-pointer group overflow-hidden"
    >
      <div class="relative">
        <img
          src={card.image}
          alt={card.name}
          class="w-full h-[60%] object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div class="absolute top-3 left-3 flex gap-2">
          <span
            class={`${getRarityColor(card.rarity)} text-white text-xs px-2 py-1 rounded-full font-medium`}
          >
            {card.rarity}
          </span>
          {!card.isAvailable && (
            <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Vendida
            </span>
          )}
        </div>
        <div class="absolute top-3 right-3">
          <button class="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
            <LuHeart class="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      <div class="p-4 pt-0 bg-red-400">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-gray-900 text-md">{card.name}</h3>
          <div class="text-right">
            {card.price ? (
              <p class="text-ms font-bold text-purple-600 m-0">
                ${card.price.toLocaleString()}
              </p>
            ) : (
              <p class="text-lg font-semibold text-green-600 m-0">
                Intercambio
              </p>
            )}
            {card.transaction === "ambos" && card.price && (
              <p class="text-sm text-green-600 m-0">o intercambio</p>
            )}
          </div>
        </div>

        <p class="text-gray-600 m-0">{card.anime}</p>

        <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span class={getConditionColor(card.condition)}>
            {card.condition}
          </span>
          <span class="flex items-center">
            <LuLocate class="w-4 h-4 mr-1" />
            {card.location}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <div class="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2">
              <img
                src={card.user.image}
                alt={card.user.name}
                class="w-full h-full object-cover rounded-full bg-red-400"
              />
            </div>
            <span class="text-sm text-gray-600 truncate">{card.user.name}</span>
          </div>
          <div class="flex items-center">
            <LuStar class="w-4 h-4 text-yellow-400 mr-1" />
            <span class="text-sm text-gray-600">{card.user.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
