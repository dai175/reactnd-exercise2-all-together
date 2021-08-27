import React, { Component } from "react";

class InputGroup extends Component {
  state = {
    buttonDisabled: true,
    message: ''
  }

  changeMessage = (event) => {
    this.setState({
        buttonDisabled: event.target.value === '',
        message: event.target.value
    })
  }

  sendMessage = (event) => {
    event.preventDefault();
    const message = {
      username: this.props.user.username,
      text: this.state.message
    }
    this.props.addMessage(message)
    this.state.message = ''
  }

  isDisabled = () => {
    return this.state.buttonDisabled;
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.sendMessage}>
          <input type="text" className="form-control" placeholder="Enter your message..."  onChange={this.changeMessage} value={this.state.message} />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()} >
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputGroup;