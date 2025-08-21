import { component$, Signal } from "@builder.io/qwik";
import { LuBell, LuHeart } from "@qwikest/icons/lucide";
import logo from "../assets/images/image.svg";

interface Props {
  notifications: Signal<number>;
}

export default component$<Props>(({ notifications }) => {
  return (
    <header class="fixed top-0 left-0 w-full h-16 z-50 bg-[rgba(0,0,0,0.6)] backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="flex items-center justify-between h-full">
          {/* Logo */}
          <div class="flex items-center">
            <div class="flex items-center">
              <div class="size-9 rounded-full flex items-center justify-center mr-3">
                <img src={logo} alt="logo" class="w-full h-full object-cover" />
              </div>
              <h1 class="font-display tracking-widest text-xl font-bold text-white">
                AnimeCards
              </h1>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <button class="relative p-2 text-gray-200 hover:text-purple-400 transition-colors">
              <LuBell class="w-6 h-6" />
              {notifications.value > 0 && (
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.value}
                </span>
              )}
            </button>
            <button class="p-2 text-gray-200 hover:text-purple-400 transition-colors">
              <LuHeart class="w-6 h-6" />
            </button>
            <div class="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full cursor-pointer">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
