import { component$, QRL, Signal } from "@builder.io/qwik";
import { LuLocate, LuStar, LuX } from "@qwikest/icons/lucide";
import Button from "~/components/button";
import useScrollLock from "~/hooks/use-scroll";
import {
  Condition,
  getConditionColor,
  getRarityColor,
  Rarity,
} from "~/utils/color-card";

interface Props {
  selectedCard: Signal<CardModelI | null>;
  closeCardDetails: QRL<() => void>;
  showDialog: Signal<boolean>;
}
export default component$<Props>(
  ({ selectedCard, closeCardDetails, showDialog }) => {
    useScrollLock(showDialog.value);

    if (!showDialog.value || !selectedCard.value) return null;

    return (
      <div class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="sticky top-0 border-b border-b-indigo-400  px-6 py-4 flex gap-2 items-center justify-between">
            <h2 class=" w-full text-2xl font-bold font-display tracking-widest truncate text-white pl-2">
              {selectedCard.value.name}
            </h2>
            <button
              onClick$={closeCardDetails}
              class="p-1 border border-gray-100 rounded-md cursor-pointer"
            >
              <LuX class="w-6 h-6 text-white" />
            </button>
          </div>

          <div class="p-6">
            <div class="flex gap-4">
              <div class="w-[30%] flex flex-col">
                <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 flex-1">
                  <img
                    src={selectedCard.value.image}
                    alt={selectedCard.value.name}
                    class="w-full h-full object-contain"
                    style={{
                      viewTransitionName: `card-image-${selectedCard.value.id}`,
                    }}
                  />
                </div>
                <div class="flex justify-center items-center gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      class="size-10 aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-purple-500 transition-all"
                    >
                      <img
                        src={selectedCard.value?.image}
                        alt={`${selectedCard.value?.name} ${i}`}
                        class="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Información de la Carta */}
              <div class="w-[70%]">
                <div>
                  <div class="flex items-center gap-3 mb-3">
                    <span
                      class={`${getRarityColor(selectedCard.value.rarity as Rarity)} text-white text-sm px-3 py-1 rounded-full font-semibold`}
                    >
                      {selectedCard.value.rarity}
                    </span>
                    <span
                      class={`${getConditionColor(selectedCard.value.condition as Condition)} font-semibold`}
                    >
                      {selectedCard.value.condition}
                    </span>
                  </div>
                  <h1 class="text-3xl font-bold text-purple-200 drop-shadow-sm">
                    {selectedCard.value.name}
                  </h1>
                  <p class="text-lg font-semibold text-indigo-300">
                    {selectedCard.value.anime}
                  </p>
                  <p class="text-gray-200 leading-relaxed text-sm mt-3">
                    Carta en excelente estado, mantenida en protector desde su
                    apertura. Sin dobleces, rayones o marcas visibles. Colores
                    vibrantes y esquinas perfectas. Ideal para coleccionistas o
                    jugadores competitivos.
                  </p>
                </div>

                {/* Información del Vendedor */}

                <div class="flex items-center justify-between mb-3 mt-6">
                  {/* Usuario */}
                  <div class="flex items-center gap-2 px-2 py-1 flex-1 min-w-0">
                    <div class="size-8 rounded-full overflow-hidden">
                      <img
                        src={selectedCard.value.user.image}
                        alt={selectedCard.value.user.name}
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <span class="text-md font-semibold text-white truncate flex-1">
                      {selectedCard.value.user.name}
                    </span>
                  </div>

                  {/* Rating + Ubicación */}
                  <div>
                    <div class="flex items-center justify-end text-sm gap-1 text-gray-300">
                      <LuStar class="text-yellow-300" />
                      <span>{selectedCard.value.user.rating}</span>
                    </div>
                    <div class="text-sm text-gray-300 flex items-center justify-end gap-1">
                      <LuLocate class="text-blue-300" />
                      <span class="truncate max-w-[120px]">
                        {selectedCard.value.location}
                      </span>
                    </div>
                  </div>

                  {/* Precio / Intercambio */}
                  <div class="ml-4">
                    {selectedCard.value.price ? (
                      <>
                        <span class="text-3xl font-extrabold text-green-300 drop-shadow-md block">
                          {`$ ${selectedCard.value.price.toLocaleString()}`}
                        </span>
                        {selectedCard.value.transaction === "ambos" && (
                          <p class="text-green-600 font-medium text-sm">
                            También acepto intercambios
                          </p>
                        )}
                      </>
                    ) : (
                      <span class="text-2xl font-bold text-green-600">
                        Solo Intercambio
                      </span>
                    )}
                  </div>
                </div>

                {/* Estadísticas */}
                <div class="w-full flex gap-2 justify-end mt-6">
                  <Button>Contactar Vendedor</Button>
                  <Button>Favorito</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
