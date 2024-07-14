import { Menu, ArrowLeft } from "lucide-react";
import "./HomePage.css";
import UserChatCard from "../../components/UserChatCard/UserChatCard";
import SideBar from "../../components/SideBar/SideBar";
import { useState, useEffect } from "react";
import useGetChatList from "../../hooks/useGetChatList";
import { useChatContext } from "../../context/ChatContext";
import Loader from "../../components/Loader/Loader";
import Messages from "../../components/Messages/Messages";
import { useThemeContext } from "../../context/ThemeContext";

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {darkMode} = useThemeContext();

  const { loading, chatList } = useGetChatList();
  const { selectedConversation, setSelectedConversation } = useChatContext();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleChatSelection = (chat) => {
    setSelectedConversation(chat);
  };

  const handleBackToList = () => {
    setSelectedConversation(null);
  };

  const showChatList = !isMobile || (isMobile && !selectedConversation);
  const showChatWindow = !isMobile || (isMobile && selectedConversation);

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      {showChatList && (
        <div className="chat-users">
          <div className="header">
            <Menu
              style={{ cursor: "pointer" }}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
            <div className="search">
              <p>Search</p>
            </div>
          </div>
          <div className="chat-cards">
            {loading ? (
              <Loader />
            ) : (
              chatList.map((chat) => (
                <UserChatCard
                  key={chat.id}
                  chat={chat}
                  onClick={() => handleChatSelection(chat)}
                />
              ))
            )}
          </div>
        </div>
      )}

      {showChatWindow && (
        <div className={`chat-window ${isMobile ? 'active' : ''}`}>
          {selectedConversation ? (
            <>
              <Messages onClick={handleBackToList}/>
            </>
          ) : (
            <div className="no-chat-img">
              <p>Select a chat to start messaging</p>
            </div>
          )}
        </div>
      )}

      <SideBar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
    </div>
  );
};

export default HomePage;