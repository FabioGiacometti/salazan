export const getCards = async () => {
  const response = await fetch(
    "https://wrapapi.com/use/fabiogiacometti/salazan/usados/latest?wrapAPIKey=ILZSR0TnMMQ2GGMSkqBv32VXnoBBOhKe"
  );
  return await response.json();
};
export const getCardById = async (id) => {
  let fetchurl = `https://wrapapi.com/use/fabiogiacometti/salazan/detalle/latest?id=${id}&wrapAPIKey=ILZSR0TnMMQ2GGMSkqBv32VXnoBBOhKe`;
  const response = await fetch(fetchurl);
  const data = await response.json();
  return data;
};

export const getLatestCards = (a, b) => {
  if (a.fechaIngreso > b.fechaIngreso) {
    return -1;
  } else if (a.fechaIngreso < b.fechaIngreso) {
    return 1;
  } else {
    return 0;
  }
};

export const getSheetsApi = async () => {
  const response = await fetch(
    "https://spreadsheets.google.com/feeds/cells/1kZTjwdwL5WIE1LTvm81s-3JhjBWSwDuWwWC6Hay3N3s/1/public/full?alt=json"
  );
  const datos = await response.json()
  console.log("estos son los datos",datos)
  return armarObjeto(datos)

};

const armarObjeto = (data) => {
  const entry = data.feed.entry;
  let headers = []
  let slides = []
  let slide = {}
  let count = 0
  for(let h = 0; h < 5;h++){
      headers = [ ...headers, entry[h].content.$t,]
  }
  console.log("estos son headers",headers)
  for(let s = 5; s < entry.length; s++){
      slide[`${headers[count]}`] = entry[s].content.$t;
      count++
      if(count === 5){
          slides = [ ...slides, slide];
          slide = {};
          count = 0;
      }
  }
  return slides

}


