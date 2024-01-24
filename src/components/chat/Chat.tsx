import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import  AddCircleOutline  from '@mui/icons-material/AddCircleOutline'
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"
import GifIcon from "@mui/icons-material/Gif"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import ChatMessage from './ChatMessage'

const Chat = () => {
  return (
    <div className='chat'>
      {/* chat Header */}
      <ChatHeader/>
      {/* chat Message */}
      <div className="chatMessage">
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      </div>
      {/* chat Input */}
      <div className="chatInput">
        <AddCircleOutline/>
        <form>
          <input type="text" placeholder='#Udemyへメッセージを送信' />
          <button type='submit' className='chatInputButton'>
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon/>
          <GifIcon/>
          <EmojiEmotionsIcon/>
        </div>
      </div>
    </div>
  )
}

export default Chat
