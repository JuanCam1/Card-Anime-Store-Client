import { component$, Slot, useSignal } from "@builder.io/qwik";
import Navbar from "~/components/navbar";

export default component$(() => {
  const notifications = useSignal(3);
  return (
    <>
      <div class="flex justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navbar notifications={notifications} />
        <Slot />
      </div>
    </>
  );
});
