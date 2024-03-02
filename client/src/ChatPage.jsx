import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";


const ChatPage = () => {
  const data = JSON.parse(localStorage.getItem("USER"));
  // console.log(data.username);
  const chatProps = useMultiChatLogic(
    "3c5d70ef-b3e2-4f1b-befd-ca07fa2d2ebf", 
    data.username, 
    data.password
    );

    
  
  return (
    <div>

      <MultiChatSocket {...chatProps} />
      <MultiChatWindow  {...chatProps} style={{ height: '100vh' }} />
    </div>
  )
}

export default ChatPage