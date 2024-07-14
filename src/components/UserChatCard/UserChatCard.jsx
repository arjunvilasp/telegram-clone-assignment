import { useChatContext } from '../../context/ChatContext';
import './UserChatCard.css'
import Avatar from 'react-avatar';

const UserChatCard = ({chat}) => {

  const {setSelectedConversation} = useChatContext();
  return (
    <div className='user-chat-card' onClick={()=> setSelectedConversation(chat)}>
        <Avatar className='avatar' size={50} round={true} name={chat.creator.name} />
        <div className="chat-details">
            <div className="chat-info">
                <p>{chat.creator.name}</p>
                {/* <p>Hi there...</p> */}
            </div>
            <div className="message-info">
                <span className='msg-time'>23:30</span>
                <span className='unread-msg-count'>{chat.msg_count}</span>
            </div>
        </div>
    </div>
  )
}

export default UserChatCard