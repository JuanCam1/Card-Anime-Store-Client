export type Rarity = "Común" | "PocoComún" | "Rara" | "Legendaria" | "Especial";

export const getRarityColor = (rarity: Rarity) => {
  const colors: Record<Rarity, string> = {
    Común: "bg-gray-500 ",
    PocoComún: "bg-green-500",
    Rara: "bg-blue-500",
    Legendaria: "bg-purple-500 text-white font-semibold",
    Especial: "bg-yellow-500",
  };
  return colors[rarity] || "bg-gray-500";
};

export type Condition = "Nueva" | "Excelente" | "Buena" | "Regular" | "Dañada";

export const getConditionColor = (condition: Condition) => {
  const colors: Record<Condition, string> = {
    Nueva: "text-green-400",
    Excelente: "text-blue-400",
    Buena: "text-yellow-400",
    Regular: "text-orange-400",
    Dañada: "text-red-400",
  };
  return colors[condition] || "text-gray-400";
};
