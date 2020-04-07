import React from "react";
import Card from "./Card";
import Modal from 'react-modal';;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      modalIsOpen: false,
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
            items: result.data.vehiculos,
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
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
    var subtitle
    const  handleModal = () => this.setState({modalIsOpen: !this.state.modalIsOpen})
    const vehiculos = this.state.items
    const cards = vehiculos.map((vehiculo) => (<Card vehiculo={vehiculo} key={vehiculo.id} handleModal={handleModal}/>))
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    return (
      <>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={handleModal}
          style={customStyles}
          contentLabel="Example Modal"
        > <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={handleModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
        <div
          className="w-full pr-4 bg-gray-300 flex flex-row flex-wrap"
          style={{ height: "100%" }}
          id="main"
        >
          
          {cards}
        </div>
      </>
    );
  }
}

