import React, { useEffect, Fragment } from "react";
import Card from "./Card";
import { useState } from "react";
import { getCards } from "../../services";

const Main = (busqueda) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState([])

  const search = busqueda?.busqueda?.toUpperCase();

  useEffect(() => {
    servicesGetCards();
  }, []);
  
  useEffect(() => {
    buscador();
  }, [busqueda]);

  function buscador() {
    let x = items.filter(function (item, i) {
      return (
        item["anio"].match(search) ||
        item["combustible"].match(search) ||
        item["id"].match(search) ||
        item["modelo"].match(search)
      );
    });
    setNewItems(x);
  }

  const servicesGetCards = async () => {
    const data = await getCards();
    const vehiculo = data.data.vehiculos;

    let newArr = [];
    for (let i = 0; i < vehiculo.length; i++) {
      let arr = vehiculo[i].specs.split("       - ");
      let anio = arr[0];
      let combustibleId = arr[1].split("#");
      let combustible = combustibleId[0];
      let id = combustibleId[1];

      let precio = Number(
        vehiculo[i].precio.replace(".", "").replace(".", "").slice(2)
      );
      newArr.push({
        ...vehiculo[i],
        anio,
        combustible,
        id,
        precio,
      });
      setIsLoaded(true);
    }
    setItems(newArr);
  };



  return (
    <Fragment>
      <div
        className="h-full w-full pr-4 bg-gray-100 flex flex-row flex-wrap min-h-screen"
        style={{}}
        id="main">
        {newItems.length <= 0 ? (items.length > 0
          ? items.map((card, index) => {
      
              return <Card vehiculo={card} key={index} />;
            })
          : "Cargando, por favor espere") : 
          newItems.map((card, index) => {
      
            return <Card vehiculo={card} key={index} />;
          })}
      </div>
    </Fragment>
  );
};

export default Main;
