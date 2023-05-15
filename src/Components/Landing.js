import logo from "../logo.svg";
import React from "react";
import { onChildAdded, ref } from "firebase/database";
import { database } from "../firebase";
import { Outlet } from "react-router-dom";

const DB_MESSAGES_KEY = "messages";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isLoggedIn: false,
      email: "",
    };
  }

  componentDidMount() {
    const messagesRef = ref(database, DB_MESSAGES_KEY);
    onChildAdded(messagesRef, (data) => {
      this.setState((state) => ({
        messages: [...state.messages, { key: data.key, val: data.val() }],
      }));
    });
  }

  render() {
    let messageListItems = this.state.messages.map((message) => (
      <li key={message.key}>
        <div className="Column">
          {message.val.message} - {message.val.date}
          {message.val.url ? (
            <img src={message.val.url} alt={message.val.url} />
          ) : (
            "No url"
          )}{" "}
        </div>
      </li>
    ));
    return (
      <div className="App">
        <header>
          <Outlet />
          <img src={logo} className="App-logo" alt="logo" />
          <ol>{messageListItems}</ol>
        </header>
      </div>
    );
  }
}

export default Landing;
