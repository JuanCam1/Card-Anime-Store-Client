import { component$, useSignal } from "@builder.io/qwik";
import {
  LuCalendar,
  LuCamera,
  LuHeart,
  LuLocate,
  LuMail,
  LuMapPin,
  LuPencil,
  LuStar,
  LuUsers,
} from "@qwikest/icons/lucide";

// Interfaces
interface CardModelI {
  id: string;
  name: string;
  image: string;
  anime: string;
  price?: number;
  location: string;
  isAvailable: boolean;
  transaction: "venta" | "intercambio" | "ambos";
}

interface UserProfile {
  name: string;
  profileImage: string;
  coverImage: string;
  bio: string;
  location: string;
  joinDate: string;
  followers: number;
  following: number;
  rating: number;
  email: string;
}

// Componente de carta de anime (modificado para perfil)
const AnimeCard = component$<{ card: CardModelI }>(({ card }) => {
  return (
    <div class="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-md transition-all duration-200 cursor-pointer group overflow-hidden">
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
          <span class="flex items-center font-semibold text-gray-300">
            <LuLocate class="w-3 h-3 mr-1" />
            {card.location}
          </span>
        </div>
      </div>
    </div>
  );
});

// Componente principal del perfil
export default component$(() => {
  const isOwnProfile = useSignal(true);

  // Datos del usuario
  const userProfile: UserProfile = {
    name: "Akira Tanaka",
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop",
    bio: "Coleccionista apasionado de cartas de anime. Especializado en series clásicas y ediciones limitadas. ¡Siempre dispuesto a intercambiar!",
    location: "Tokyo, Japón",
    joinDate: "Enero 2023",
    followers: 1247,
    following: 892,
    rating: 4.8,
    email: "akira.tanaka@email.com",
  };

  // Datos de ejemplo de las cartas
  const animeCards: CardModelI[] = [
    {
      id: "1",
      name: "Pikachu Holográfica",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
      anime: "Pokémon",
      price: 15000,
      location: "Tokyo",
      isAvailable: true,
      transaction: "venta",
    },
    {
      id: "2",
      name: "Goku Ultra Instinto",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      anime: "Dragon Ball Super",
      location: "Tokyo",
      isAvailable: false,
      transaction: "intercambio",
    },
    {
      id: "3",
      name: "Naruto Nine-Tails",
      image:
        "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=300&h=300&fit=crop",
      anime: "Naruto",
      price: 8500,
      location: "Tokyo",
      isAvailable: true,
      transaction: "ambos",
    },
    {
      id: "4",
      name: "Luffy Gear 5",
      image:
        "https://images.unsplash.com/photo-1578662015955-5d0d94b5d8e8?w=300&h=300&fit=crop",
      anime: "One Piece",
      price: 12000,
      location: "Tokyo",
      isAvailable: true,
      transaction: "venta",
    },
  ];

  return (
    <div class="lg:w-[1000px] py-6 pt-20">
      <div class="w-full flex justify-center items-center py-6">
        <div class="w-40 h-40 relative">
          <div class="w-40 h-40 rounded-full border-4 border-purple-400 overflow-hidden bg-purple-400">
            <img
              src={userProfile.profileImage}
              alt={userProfile.name}
              class="w-full h-full object-cover"
            />
          </div>
          {isOwnProfile.value && (
            <button class="cursor-pointer absolute bottom-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors">
              <LuCamera class="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div class="pt-6 pb-8 ">
        <div class="text-center bg-black/40 backdrop-blur-sm rounded-md p-6 mb-8">
          <h1 class="text-4xl font-bold text-white mb-2">{userProfile.name}</h1>
          <p class="text-gray-300 max-w-2xl mx-auto px-4">{userProfile.bio}</p>
          {/* Botones de acción */}
          <div class="mt-6 flex justify-center gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
              <LuPencil class="w-4 h-4" />
              Editar Perfil
            </button>
            <button class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Mensaje
            </button>
          </div>
        </div>
        {/* Estadísticas del perfil */}
        <div class="bg-black/40 backdrop-blur-sm rounded-md p-6 mb-8">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div class="flex flex-col items-center justify-center">
              <div class="text-2xl font-bold text-white">
                {userProfile.followers.toLocaleString()}
              </div>
              <div class="text-gray-400 text-sm">Cartas Publicadas</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-2xl font-bold text-white">
                {userProfile.following.toLocaleString()}
              </div>
              <div class="text-gray-400 text-sm">Cartas Vendida</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-2xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                <LuStar class="w-5 h-5" />
                {userProfile.rating}
              </div>
              <div class="text-gray-400 text-sm">Calificación</div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div class="bg-black/40 backdrop-blur-sm rounded-md p-6 mb-8">
          <h3 class="text-xl font-semibold text-white mb-4">Información</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 ">
            <div class="flex items-center justify-center text-gray-300">
              <LuMapPin class="w-5 h-5 mr-3 text-blue-400" />
              <span>Vive en {userProfile.location}</span>
            </div>
            <div class="flex items-center justify-center text-gray-300">
              <LuCalendar class="w-5 h-5 mr-3 text-green-400" />
              <span>Se unió en {userProfile.joinDate}</span>
            </div>
            <div class="flex items-center justify-center text-gray-300">
              <LuMail class="w-5 h-5 mr-3 text-purple-400" />
              <span>{userProfile.email}</span>
            </div>
          </div>
        </div>
        {/* Publicaciones (Cartas de anime) */}
        <div class="bg-black/40 backdrop-blur-sm rounded-md p-6 ">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-white mb-2">
              Cartas Publicadas
            </h2>
            <p class="text-gray-400">Explora la colección de cartas de anime</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {animeCards.map((card) => (
              <AnimeCard key={card.id} card={card} />
            ))}
            {animeCards.map((card) => (
              <AnimeCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
