import { PrettyChatWindow } from "react-chat-engine-pretty";
import '../ChatsPage/ChatsPage.css';

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"805a7386-4067-4185-baaf-4f15a2da6f9d"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;