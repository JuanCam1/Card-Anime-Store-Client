import { component$, QRL, Signal } from "@builder.io/qwik";
import { getConditionColor, getRarityColor } from "~/utils/color-card";

interface Props {
  // biome-ignore lint/suspicious/noExplicitAny: any
  selectedCard: Signal<any>;
  closeCardDetails: QRL<() => void>;
}
export default component$<Props>(({ selectedCard, closeCardDetails }) => {
  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-gray-900">
            {selectedCard.value.name}
          </h2>
          <button
            onClick$={closeCardDetails}
            class="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galería de Imágenes */}
            <div>
              <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={selectedCard.value.image}
                  alt={selectedCard.value.name}
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    class="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-purple-500 transition-all"
                  >
                    <img
                      src={selectedCard.value.image}
                      alt={`${selectedCard.value.name} ${i}`}
                      class="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Información de la Carta */}
            <div class="space-y-6">
              <div>
                <div class="flex items-center gap-3 mb-3">
                  <span
                    class={`${getRarityColor(selectedCard.value.rarity)} text-white text-sm px-3 py-1 rounded-full font-medium`}
                  >
                    {selectedCard.value.rarity}
                  </span>
                  <span
                    class={`${getConditionColor(selectedCard.value.condition)} font-medium`}
                  >
                    {selectedCard.value.condition}
                  </span>
                </div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCard.value.name}
                </h1>
                <p class="text-xl text-gray-600 mb-4">
                  {selectedCard.value.anime}
                </p>

                {selectedCard.value.price ? (
                  <div class="mb-4">
                    <span class="text-4xl font-bold text-purple-600">
                      ${selectedCard.value.price.toLocaleString()}
                    </span>
                    {selectedCard.value.type === "ambos" && (
                      <p class="text-green-600 font-medium">
                        También acepto intercambios
                      </p>
                    )}
                  </div>
                ) : (
                  <div class="mb-4">
                    <span class="text-3xl font-bold text-green-600">
                      Solo Intercambio
                    </span>
                  </div>
                )}
              </div>

              {/* Información del Vendedor */}
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                    <div>
                      <h3 class="font-semibold text-gray-900">
                        {selectedCard.value.seller}
                      </h3>
                      <div class="flex items-center text-sm text-gray-600">
                        <svg
                          class="w-4 h-4 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>
                          {selectedCard.value.rating} • 127 transacciones
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right text-sm text-gray-600">
                    <svg
                      class="w-4 h-4 inline mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {selectedCard.value.location}
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                  Descripción
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Carta en excelente estado, mantenida en protector desde su
                  apertura. Sin dobleces, rayones o marcas visibles. Colores
                  vibrantes y esquinas perfectas. Ideal para coleccionistas o
                  jugadores competitivos.
                </p>
              </div>

              {/* Estadísticas */}
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="text-gray-500">Publicado:</span>
                  <p class="font-medium">Hace 3 días</p>
                </div>
                <div>
                  <span class="text-gray-500">Vistas:</span>
                  <p class="font-medium">{selectedCard.value.views}</p>
                </div>
              </div>

              {/* Botones de Acción */}
              <div class="flex flex-col gap-3">
                <button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Contactar Vendedor
                </button>
                <div class="grid grid-cols-3 gap-2">
                  <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg
                      class="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
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
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </button>
                  <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
