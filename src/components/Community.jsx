import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { GoogleGenerativeAI } from "@google/generative-ai";
import './community.css';
import Navbar from './Navbar';

function Community() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, user: 'some_random_user', text: 'Finally completed the ‘Introduction to Python’ course! 🎉 The projects were so much fun. Anyone else working on this course?', replies: [] },
    { id: 2, user: 'MathGeniusX', text: 'Struggling a bit with the probability section in the ‘Advanced Math’ course. Does anyone have any tips?', replies: [] }
  ]);
  const [replyInput, setReplyInput] = useState({});
 


  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCrg-QdB4iIetlTQPjX4kLNZlaLp-StoFU");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const botMessage = { sender: 'bot', text: result.response.text() };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReplyChange = (postId, value) => {
    setReplyInput({ ...replyInput, [postId]: value });
  };

  const handleReplySubmit = (postId) => {
    const newPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, replies: [...post.replies, replyInput[postId]] };
      }
      return post;
    });
    setPosts(newPosts);
    setReplyInput({ ...replyInput, [postId]: '' });
  };

  return (
    <div className='community h-screen w-full overflow-x-hidden'>
      <Navbar />
      <div className="community-container">
        <div className="header">
          <h1>COMMUNITY <span>SECTION</span></h1>
        </div>
        <div className="lower-co">
          <div className="lower-left">
            <div className="input-container">
              <i className="ri-search-line"></i>
              <input type="text" placeholder='search for help' />
            </div>

            <div className="post-container">
              {posts.map(post => (
                <div key={post.id} className="post">
                  <h1>{post.user}</h1>
                  <p>{post.text}</p>
                  <button onClick={() => handleReplyChange(post.id, '')}>Reply</button>
                  {post.replies.map((reply, index) => (
                    <div key={index} className="reply">
                      <p>{reply}</p>
                    </div>
                  ))}
                  {replyInput[post.id] !== undefined && (
                    <div className="reply-input">
                      <input
                        type="text"
                        value={replyInput[post.id]}
                        onChange={(e) => handleReplyChange(post.id, e.target.value)}
                        placeholder="Write a reply..."
                      />
                      <button onClick={() => handleReplySubmit(post.id)}>Submit</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lower-right">
            <div className="container-ai">
              <div className="header-ai">
                <h1>AI Chatbot</h1>
              </div>
              <div className="middle-container">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    <p>{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="lower-container">
                <input
                  type="text"
                  placeholder='type your query'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <i className="ri-send-plane-line" onClick={sendMessage}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community;