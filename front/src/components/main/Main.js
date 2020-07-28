import React, { useEffect, Fragment } from "react";
import Card from "./Card";
import Modal from "react-modal";
import ContactButton from "./ContactButton";
import { useState } from "react";
import { getCards } from "../../services";
const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    servicesGetCards();
  }, []);

  const servicesGetCards = async () => {
    const cards = await getCards();
    setItems(cards);
  };

  //   console.log(cards);var subtitle;
  // const handleModal = () =>
  //   this.setState({ modalIsOpen: !this.state.modalIsOpen });
  // const vehiculos = this.state.items;
  // const cards = vehiculos.map((vehiculo) => (
  //   <Card vehiculo={vehiculo} key={vehiculo.id} handleModal={handleModal} />
  // ));
  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };
  return (
    <Fragment>
      {/* <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Example Modal">
        {" "}
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={handleModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
      <div
        className="h-full w-full pr-4 bg-gray-300 flex flex-row flex-wrap"
        style={{}}
        id="main">
        {items.length > 0
          ? items.map((card, index) => {
              return <Card vehiculo={card} key={index} />;
            })
          : ""}
        <ContactButton />
      </div>
    </Fragment>
  );
};

export default Main;

// this.state = {
//
// };
