import { component$, QRL } from "@builder.io/qwik";
import { LuHeart, LuLocate, LuStar } from "@qwikest/icons/lucide";

interface Props {
  openCardDetails: QRL<(card: CardModelI) => void>;
  card: CardModelI;
}

export default component$<Props>(({ openCardDetails, card }) => {
  return (
    <div
      onClick$={() => openCardDetails(card)}
      class="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-md transition-all duration-200 cursor-pointer group overflow-hidden max-w-[250px]"
    >
      <div class="relative h-52 overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div class="absolute top-2 left-2 flex gap-1">
          {!card.isAvailable && (
            <span class="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full font-medium">
              Vendida
            </span>
          )}
        </div>
        <div class="absolute top-2 right-2">
          <button
            onClick$={(e) => e.stopPropagation()}
            class="bg-white/80 hover:bg-white p-1.5 rounded-full transition-colors"
          >
            <LuHeart class="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div class="p-3 space-y-1">
        <div class="flex justify-between items-start">
          <h3 class="font-semibold text-white text-sm line-clamp-1">
            {card.name}
          </h3>
          <div class="text-right">
            {card.price ? (
              <p class="text-sm font-bold text-purple-300 m-0">
                ${card.price.toLocaleString()}
              </p>
            ) : (
              <p class="text-sm font-semibold text-green-600 m-0">
                Intercambio
              </p>
            )}
            {card.transaction === "ambos" && card.price && (
              <p class="text-xs text-green-600 m-0">o intercambio</p>
            )}
          </div>
        </div>

        <div class="flex items-center justify-between text-xs text-gray-500">
          <p class="text-xs font-semibold text-gray-300 line-clamp-1">
            {card.anime}
          </p>
          <span class="flex items-center fonst-semibold text-gray-300">
            <LuLocate class="w-3 h-3 mr-1" />
            {card.location}
          </span>
        </div>

        <div class="flex items-center justify-between pt-1 ">
          <div class="flex items-center gap-1 w-[80%]">
            <div class="w-6 h-6 rounded-full overflow-hidden ">
              <img
                src={card.user.image}
                alt={card.user.name}
                class="w-full h-full object-cover"
              />
            </div>
            <span class="text-xs font-semibold text-white truncate max-w-[100px]">
              {card.user.name}
            </span>
          </div>
          <div class="flex items-center justify-end w-[20%]">
            <LuStar class="w-3 h-3 text-yellow-400 mr-1" />
            <span class="text-xs text-gray-300">{card.user.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
