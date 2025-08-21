export const getRarityColor = (rarity: string) => {
  const colors = {
    Común: "bg-gray-500",
    "Poco común": "bg-green-500",
    Rara: "bg-blue-500",
    Legendaria: "bg-purple-500",
    Especial: "bg-yellow-500",
  };
  return colors[rarity] || "bg-gray-500";
};

export const getConditionColor = (condition: string) => {
  const colors = {
    Nueva: "text-green-400",
    Excelente: "text-blue-400",
    Buena: "text-yellow-400",
    Regular: "text-orange-400",
    Dañada: "text-red-400",
  };
  return colors[condition] || "text-gray-400";
};
