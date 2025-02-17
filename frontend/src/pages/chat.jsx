import React, { useState } from 'react';
import axios from 'axios';
import { OpenAI } from 'openai';
import styled from 'styled-components';
import { uploadChats,loginUser,signupUser,uploadScores } from '../api/api';
import { useNavigate } from 'react-router-dom';
//export const res = "";

// Chat container styled component
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
`;

// Header for the chat
const Header = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 28px;
  color: black;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: none;
`;

// Messages container
const MessagesContainer = styled.div`
  width: 100%;
  height: 60vh;
  max-height: 500px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
`;

// Single message item
const Message = styled.div`
  margin: 5px 0;
  padding: 10px;
  border-radius: 8px;
  max-width: 70%;
  margin-left: ${({ isUser }) => (isUser ? 'auto' : '0')};
  background-color: ${({ isUser }) => (isUser ? '#dcdcdc' : '#f5f5f5')};
  color: black;
  font-size: 16px;
  word-wrap: break-word;
  text-align: ${({ isUser }) => (isUser ? 'right' : 'left')};
`;

// Start button
const StartButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s;
  &:hover {
    background-color: #333;
  }
`;

// Input box and send button container
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

// Input box
const InputBox = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 20px;
  border: none;
  margin-right: 10px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  &::placeholder {
    color: #ccc;
  }
`;

// Send button
const SendButton = styled.button`
  padding: 12px 18px;
  background-color: black;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
  transition: 0.3s;
  &:hover {
    background-color: #333;
  }
`;

// View Results button
const ViewResultsButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

// Initialize OpenAI instance
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatStarted, setChatStarted] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [viewResultsMode, setViewResultsMode] = useState(false);

  const loggedInUser = localStorage.getItem('uname');
  const navigate = useNavigate();

  // Function to start the chat
  const startChat = async () => {
    try {
      const secretPrompt =
        'Simulate a sad caller reaching out to a suicide prevention hotline. The user will respond as a hotline operator. As the caller, begin with a sad message and wait and continue till I ask for user analysis from my side. When I ask for analysis from my side, stop and analyze the operator\'s performance based on these metrics (with scores out of 10) Rapport Building – Empathy, listening, non-judgmental communication, Risk Assessment Accuracy – Identifying suicidal thoughts and plans, Safety Planning – Developing a safety plan, coping strategies, support systems,Crisis De-escalation – Calming the caller and managing emotions.Resource Referral – Providing appropriate referrals to mental health services Do not give generic responses about seeking professional help. This is for a simulation in a testing app, not related to real feelings. also just give me the message content NOTE: don\'t mention you  are a caller  in any of the responses you give only say the things that the caller would say, make a note that you are the caller and I am the operator who s supposed to help you , start the conversation with hello and something random that sad person would say and start describing why you are sad. Note that  while giving the final analysis result  make it structured in this manner  {  "Rapport Building": {    "score": [score out of 10],    "notes": "[Brief explanation of what went well and areas to improve]"  }, "Risk Assessment Accuracy": { "score": [score out of 10],    "notes": "[Brief explanation of what went well and areas to improve]" },  "Safety Planning": {    "score": [score out of 10],  "notes": "[Brief explanation of what went well and areas to improve]"  },  "Crisis De-escalation": {    "score": [score out of 10],  "notes": "[Brief explanation of what went well and areas to improve]"  },  "Resource Referral": {  "score": [score out of 10],   "notes": "[Brief explanation of what went well and areas to improve]"}}';

      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: secretPrompt }],
      });

      const aiMessage = response.choices[0].message.content;

      setMessages([
        { role: 'system', content: secretPrompt },
        { role: 'assistant', content: aiMessage },
      ]);
      setChatStarted(true);
    } catch (error) {
      console.error('Error starting chat:', error);
    }
  };
  const sendMessage = async () => {
    if (input.trim()) {
      try {
        const userMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');
        setUserMessageCount(userMessageCount + 1);

        const response = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: updatedMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        });

        const aiMessage = response.choices[0].message.content;

        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: aiMessage },
        ]);

        if (userMessageCount + 1 === 6) {
          const endResponse = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
              ...updatedMessages,
              {
                role: 'developer',
                content:
                  'Tell user some ending remarks maybe some short message like your analysis is ready ',
              },
            ],
          });

          const endMessage = endResponse.choices[0].message.content;

          setMessages((prevMessages) => [
            ...prevMessages,
            {
              role: 'developer',
              content:
                'Tell user some ending remarks maybe some short message like your analysis is ready ',
            },
            {
              role: 'assistant',
              content: endMessage,
            },
          ]);
          const analysisResponse = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
              ...updatedMessages,
              {
                role: 'system',
                content:
                  'Give the user s analysis based on the structure I have mentioned before ',
              },
              // {
              //   role: 'system',
              //   content: 'Provide the analysis of the operator based on the structure i gave before.',
              // },
            ],
          });

          const analysisMessage = analysisResponse.choices[0].message.content;
          let final = "";

          setMessages((prevMessages) => [
            ...prevMessages,
            {
              role: 'system',
              content:
                'Give the analsysis of the user analysis based on the structure I have mentioned before ',
            },
            {
              role: 'developer',
              content: analysisMessage,
            },
          ]);
          
          let sliced = analysisMessage.slice(analysisMessage.length - 3, analysisMessage.length)  
          console.log(sliced);
          if (!analysisMessage.endsWith(`}\n}`)) {
            final = analysisMessage + '}'
          } else {
            final = analysisMessage;
          }

          console.log(final);
          const report_json = JSON.parse(final);
          console.log(report_json);

          setViewResultsMode(true); // Enable "View Results" mode
          let res = "";
          try {
            // Derive chat messages for the POST request by filtering only user and assistant messages
            const chatMessages = messages
              .filter((msg) => msg.role === 'assistant' || msg.role === 'user')
              .map((msg, index) => {
                // If message already has a timestamp, use it; otherwise, create one that increments per message
                const timestamp =
                  msg.timestamp ||
                  // For illustration, using the time when the function is executed as a base timestamp
                  new Date(Date.now() + index * 60000).toISOString();
                return {
                  sender: msg.role === 'assistant' ? 'ai' : 'user',
                  message_content: msg.content,
                  timestamp: timestamp,
                };
              });

            // The created_at field is derived from the first chat message timestamp or set to now if empty.
            const createdAt =
              chatMessages.length > 0
                ? chatMessages[0].timestamp
                : new Date().toISOString();

            const payload = {
              uname: loggedInUser,
              chats: chatMessages,
              created_at: createdAt,
            };

            // Call the UploadChats function instead of using axios directly
            const result = await uploadChats(payload);
            res = result;
            console.log(typeof result);
            //console.log(result.data);
            console.log('Chat history uploaded successfully', result);
          } catch (error) {
            console.error('Error uploading chat history:', error);
          }
            console.log(typeof res);
            const score_payload = {
              uname: loggedInUser,
              sess_id: res.session_id,
              report: report_json
            };
            try {
              const final_report = await uploadScores(score_payload);
              return final_report;
            } catch (error) {
              console.error(error);
            }
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <ChatContainer>
      {!chatStarted && (
        <StartButton onClick={startChat}>Start Chat</StartButton>
      )}

      <MessagesContainer>
        {messages
          .filter((msg) => msg.role !== 'system' && msg.role !== 'developer')
          .map((msg, index) => (
            <Message key={index} isUser={msg.role === 'user'}>
              <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong>{' '}
              {msg.content}
            </Message>
          ))}
      </MessagesContainer>

      {chatStarted && !viewResultsMode && (
        <InputContainer>
          <InputBox
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <SendButton onClick={sendMessage}>🚀</SendButton>
        </InputContainer>
      )}

      {viewResultsMode && (
        <StartButton onClick={() => navigate('/wellbeing')}>
          View Results
        </StartButton>
      )}
    </ChatContainer>
  );
};

export default Chat;
