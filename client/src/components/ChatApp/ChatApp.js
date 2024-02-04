import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import ChatsPage from "../ChatsPage/ChatsPage";
import './ChatApp.css';

function ChatApp() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default ChatApp;