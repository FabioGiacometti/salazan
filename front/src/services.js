export const getCards = async () => {
  const response = await fetch("http://localhost:4000/api/vehiculos");
  const data = await response.json();
  return data;
};

export const getCardById = async (id) => {
  const response = await fetch(`http://localhost:4000/api/vehiculos/${id}`);
  const data = await response.json();
  return data;
};
