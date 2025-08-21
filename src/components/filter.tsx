import { component$, QRL, Signal } from "@builder.io/qwik";
import { animeList } from "~/data/anime-list";
import { cities } from "~/data/city-list";

interface Props {
  selectedAnime: Signal<string>;
  selectedLocation: Signal<string>;
  selectedRarity: Signal<string>;
  selectedCondition: Signal<string>;
  showFilters: Signal<boolean>;
  priceRange: Signal<number[]>;
  selectedTransaction: Signal<string>;
  clearFilters: QRL<() => void>;
}
export default component$<Props>(
  ({
    selectedAnime,
    selectedLocation,
    selectedRarity,
    selectedCondition,
    clearFilters,
    priceRange,
    selectedTransaction,
    showFilters,
  }) => {
    return (
      <div
        class={`${showFilters.value ? "block" : "hidden"} lg:block w-80 flex-shrink-0`}
      >
        <div class="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-md p-6 sticky top-20">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-semibold text-white">Filtros</h2>
            <button
              onClick$={clearFilters}
              class="text-md text-white cursor-pointer"
            >
              Limpiar todo
            </button>
          </div>

          <div class="space-y-6">
            <div>
              <label class="block text-md font-bold text-gray-200 mb-2">
                Anime
              </label>
              <select
                value={selectedAnime.value}
                onChange$={(e) =>
                  (selectedAnime.value = (e.target as HTMLSelectElement).value)
                }
                class="text-neutral-200 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Todos los animes</option>
                {animeList.map((anime) => (
                  <option key={anime} value={anime}>
                    {anime}
                  </option>
                ))}
                <option value="otros">Otros</option>
              </select>
            </div>

            {/* Filtro por Precio */}
            <div>
              <label class="block text-md font-bold text-gray-200 mb-2">
                Precio: ${priceRange.value[0].toLocaleString()} - $
                {priceRange.value[1].toLocaleString()}
              </label>
              <div class="px-3">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange.value[1]}
                  onInput$={(e) =>
                    (priceRange.value = [
                      0,
                      parseInt((e.target as HTMLInputElement).value),
                    ])
                  }
                  class="text-neutral-200 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Filtro por Ubicación */}
            <div>
              <label class="block text-md font-bold text-gray-200 mb-2">
                Ubicación
              </label>
              <select
                value={selectedLocation.value}
                onChange$={(e) =>
                  (selectedLocation.value = (
                    e.target as HTMLSelectElement
                  ).value)
                }
                class="text-neutral-200 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Todas las ciudades</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por Rareza */}
            <div>
              <label class="block text-md font-bold text-gray-200 mb-2">
                Rareza
              </label>
              <select
                value={selectedRarity.value}
                onChange$={(e) =>
                  (selectedRarity.value = (e.target as HTMLSelectElement).value)
                }
                class="text-neutral-200 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Todas las rarezas</option>
                <option value="Común">Común</option>
                <option value="Poco común">Poco común</option>
                <option value="Rara">Rara</option>
                <option value="Legendaria">Legendaria</option>
                <option value="Especial">Especial</option>
              </select>
            </div>

            {/* Filtro por Condición */}
            <div>
              <label class="block text-md font-bold text-gray-200 mb-2">
                Condición
              </label>
              <select
                value={selectedCondition.value}
                onChange$={(e) =>
                  (selectedCondition.value = (
                    e.target as HTMLSelectElement
                  ).value)
                }
                class="text-neutral-200 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Todas las condiciones</option>
                <option value="Nueva">Nueva</option>
                <option value="Excelente">Excelente</option>
                <option value="Buena">Buena</option>
                <option value="Regular">Regular</option>
                <option value="Dañada">Dañada</option>
              </select>
            </div>

            {/* Filtro por Tipo de Transacción */}
            <div>
              <label class="block text-md font-bold text-gray-200 mb-2">
                Tipo de Transacción
              </label>
              <select
                value={selectedTransaction.value}
                onChange$={(e) =>
                  (selectedTransaction.value = (
                    e.target as HTMLSelectElement
                  ).value)
                }
                class="text-neutral-200 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Todos los tipos</option>
                <option value="venta">Solo venta</option>
                <option value="intercambio">Solo intercambio</option>
                <option value="ambos">Venta e intercambio</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
