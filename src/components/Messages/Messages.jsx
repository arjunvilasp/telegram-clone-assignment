import { ArrowLeft, EllipsisVertical, Mic, PanelRight, Paperclip, Phone, Search, SendHorizonal, Smile } from "lucide-react";
import "./Messages.css";
import { useState } from "react";
import MessageContainer from "../MessageContainer/MessageContainer";
import { useChatContext } from "../../context/ChatContext";

const Messages = ({onClick}) => {
  const [message, setMessage] = useState('');

  const {selectedConversation} = useChatContext();

  return (
    <div className="messages">
      <div className="message-header">
        <ArrowLeft className="back-btn" onClick={onClick}/>
        <div className="message-details">
          <p className="name">{selectedConversation.creator.name}</p>
          <p className="status">last seen recently</p>
        </div>
        <div className="message-icons">
          <Search size={18} />
          <Phone size={18} />
          <PanelRight size={18} />
          <EllipsisVertical size={18} />
        </div>
      </div>
      <MessageContainer/>
      <div className="message-input">
        <Paperclip size={25} cursor={'pointer'}/>
        <input 
          type="text" 
          placeholder="Write a message..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        />
        <Smile size={25} cursor={'pointer'}/>
        {
          message.length > 0 ? 
            <SendHorizonal cursor={'pointer'} fill="#4196d3" size={30} color="transparent"/> : 
            <Mic size={25} cursor={'pointer'}/>
        }
      </div>
    </div>
  );
};

export default Messages;
