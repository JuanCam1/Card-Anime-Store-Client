import { useVisibleTask$ } from "@builder.io/qwik";

const useScrollLock = (isLocked: boolean) => {
  useVisibleTask$(({ cleanup, track }) => {
    track(() => isLocked);

    if (isLocked) {
      // Guardar el scroll actual
      const scrollY = window.scrollY;
      const body = document.body;

      // Aplicar estilos para bloquear scroll
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";

      cleanup(() => {
        // Restaurar estilos
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        body.style.overflow = "";

        // Restaurar posición del scroll
        window.scrollTo(0, scrollY);
      });
    }
  });
};

export default useScrollLock;
