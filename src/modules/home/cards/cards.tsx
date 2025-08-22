import { $, component$, useSignal } from "@builder.io/qwik";
import Card from "~/components/card";
import Pagination from "~/components/pagination";
import { mockCards } from "~/data/cards-list";
import DialogViewCard from "./components/dialog-view-card";

export default component$(() => {
  const selectedCard = useSignal<CardModelI | null>(null);
  const showDialog = useSignal(false);

  const openCardDetails = $((card: CardModelI) => {
    selectedCard.value = card;
    showDialog.value = true;
  });

  const closeCardDetails = $(() => {
    selectedCard.value = null;
    showDialog.value = false;
  });

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {mockCards.map((card) => (
          <Card key={card.id} card={card} openCardDetails={openCardDetails} />
        ))}
      </div>

      <Pagination />

      <DialogViewCard
        selectedCard={selectedCard}
        closeCardDetails={closeCardDetails}
        showDialog={showDialog}
      />
    </>
  );
});
