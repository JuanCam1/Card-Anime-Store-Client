import { $, component$, useSignal } from "@builder.io/qwik";
import { LuSearch } from "@qwikest/icons/lucide";
import Filter from "~/components/filter";
import Cards from "~/modules/home/cards/cards";

export default component$(() => {
  const searchTerm = useSignal("");
  const selectedAnime = useSignal("");
  const priceRange = useSignal([0, 100000]);
  const selectedLocation = useSignal("");
  const selectedRarity = useSignal("");
  const selectedCondition = useSignal("");
  const selectedTransaction = useSignal("");
  const showFilters = useSignal(false);

  const clearFilters = $(() => {
    searchTerm.value = "";
    selectedAnime.value = "";
    priceRange.value = [0, 100000];
    selectedLocation.value = "";
    selectedRarity.value = "";
    selectedCondition.value = "";
    selectedTransaction.value = "";
  });

  return (
    <div class="lg:w-[1200px] py-6 pt-20">
      <div class="flex gap-6">
        <Filter
          selectedAnime={selectedAnime}
          selectedLocation={selectedLocation}
          selectedRarity={selectedRarity}
          selectedCondition={selectedCondition}
          clearFilters={clearFilters}
          priceRange={priceRange}
          selectedTransaction={selectedTransaction}
          showFilters={showFilters}
        />

        <div class="flex-1">
          <h1 class="text-5xl font-bold text-white">Cartas Disponibles</h1>
          <div class="flex gap-2 w-full my-6">
            <input
              type="text"
              placeholder="Buscar cartas, anime ..."
              class={`lg:w-[50%] px-4 py-3 bg-white/5 border rounded-md text-white focus:outline-none focus:ring-0 `}
              value={searchTerm.value}
              onInput$={(e) =>
                (searchTerm.value = (e.target as HTMLInputElement).value)
              }
            />
            <button class="cursor-pointer bg-fuchsia-950 border border-fuchsia-950 text-white py-2 px-3 rounded-md transition-transform duration-200 hover:scale-105">
              <LuSearch class="w-6 h-6" />
            </button>
          </div>

          <Cards />
        </div>
      </div>
    </div>
  );
});
