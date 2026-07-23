import React from 'react';
import { MessageSquare } from 'lucide-react';
import './FloatingChat.css';

export default function FloatingChat() {
  const handleChatClick = () => {
    alert("Live Chat Support: Welcome to Hemsethu Technologies. Our support representatives are currently offline. Please email us at hemsethutechnologies@gmail.com for assistance.");
  };

  return (
    <div className="floating-chat">
      <button className="chat-btn" onClick={handleChatClick}>
        <MessageSquare size={24} />
        <span>Chat with Us</span>
      </button>
    </div>
  );
}
