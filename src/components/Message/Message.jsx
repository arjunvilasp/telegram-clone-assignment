import Avatar from 'react-avatar'
import './Message.css'
import { useChatContext } from '../../context/ChatContext';

const Message = ({data}) => {

  const {selectedConversation} = useChatContext();

  const isSelect = data?.sender_id === 1;


  return (
    <div className='message'>
        <Avatar round={true} size='35'name={data.sender.name}/>
        <p className="content"  style={{ backgroundColor: isSelect ? 'var(--message-box-bg-color-own)' : 'var(--message-box-bg-color)' }}>{data.message}</p>
    </div>
  )
}

export default Message