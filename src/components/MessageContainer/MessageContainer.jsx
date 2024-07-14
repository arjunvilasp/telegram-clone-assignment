import Loader  from "../Loader/Loader";
import useGetConversation from "../../hooks/useGetConversation";
import Message from "../Message/Message";
import "./MessageContainer.css";
import { useEffect, useRef } from "react";

const MessageContainer = () => {
  const { loading, messages } = useGetConversation();
  const lastMessageRef = useRef(null);
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  return (
    <div className="message-container">
       {loading && <Loader />}
      {!loading && messages.length > 0 && (
        messages.map((data, i) => (
          <div key={i} ref={i === messages.length - 1 ? lastMessageRef : null}>
            <Message key={data.id} data={data} />
          </div>
        ))
      )}
    </div>
  );
};

export default MessageContainer;
