import React from "react";
import Card from "./Card";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://wrapapi.com/use/fabiogiacometti/salazan/usados/latest?wrapAPIKey=ILZSR0TnMMQ2GGMSkqBv32VXnoBBOhKe"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("esto es result", result);
          this.setState({
            isLoaded: true,
            items: result.data.vehiculos
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
        );
      }
      
      render() {
        const vehiculos = this.state.items;
        console.log("el tipo de vehiculos es",typeof vehiculos === Array)
        const cards = vehiculos.map(vehiculo => <Card vehiculo={vehiculo} key={vehiculo.id}/>);
        
    return (
      <div
        className="w-full pr-4 bg-gray-200 flex flex-row flex-wrap"
        style={{ height: "100%", overflow: "scroll" }}
      >
        {cards}
      </div>
    );
  }
}
