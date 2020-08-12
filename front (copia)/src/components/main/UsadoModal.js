import React from "react";
import Modal from "react-modal";

export default class UsadoModal {
  render() {
    const handleModal = this.props.handleModal
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }
    var subtitle;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
      </Modal>
    );
  }
}
