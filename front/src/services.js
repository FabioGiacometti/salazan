
export const getCards = async () => {
  const response = await fetch("https://wrapapi.com/use/fabiogiacometti/salazan/usados/latest?wrapAPIKey=ILZSR0TnMMQ2GGMSkqBv32VXnoBBOhKe");
  return await response.json();
};
export const getCardById = async (id) => {
  let fetchurl = `https://wrapapi.com/use/fabiogiacometti/salazan/detalle/latest?id=${id}&wrapAPIKey=ILZSR0TnMMQ2GGMSkqBv32VXnoBBOhKe`
  const response = await fetch(fetchurl);
  const data = await response.json();
  return data;
};

export const getLatestCards = (a, b) => {
    if(a.fechaIngreso > b.fechaIngreso){
        return -1;}
    else if (a.fechaIngreso < b.fechaIngreso){
        return 1}
    else { return 0;}
}
