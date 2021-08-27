import React, { Component } from 'react';
import MessageList from "./MessageList";
import InputGroup from "./InputGroup";

class ChatWindow extends Component {

  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user.username}</div>
        <MessageList user={this.props.user} messages={this.props.messages} />
        <InputGroup user={this.props.user} addMessage={this.props.addMessage} />
      </div>
    )
  }
}

export default ChatWindow;