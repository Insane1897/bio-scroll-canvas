import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm here to help you learn more about Priya. Ask me anything about her background, education, family, or interests!",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const bioData = {
    personal: {
      name: "Priya Sharma",
      age: "28 years old",
      education: "B.Tech Computer Science",
      occupation: "Software Engineer",
      height: "5'4\"",
      diet: "Vegetarian",
      manglik: "Non-Manglik",
      caste: "Brahmin",
      gotra: "Bharadwaj"
    },
    family: {
      father: "Mr. Rajesh Sharma - Government Officer",
      mother: "Mrs. Sunita Sharma - Teacher",
      siblings: "1 Elder Brother (Married)",
      familyType: "Nuclear Family with Traditional Values"
    },
    contact: {
      location: "Delhi, India",
      phone: "+91 98765 43210",
      email: "priya.sharma@email.com"
    },
    interests: [
      "Reading", "Cooking", "Travelling", "Classical Music", "Yoga"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('name')) {
      return `Her name is ${bioData.personal.name}. She's a wonderful person with a great personality!`;
    } else if (message.includes('age')) {
      return `Priya is ${bioData.personal.age}.`;
    } else if (message.includes('education') || message.includes('study') || message.includes('qualification')) {
      return `She has completed ${bioData.personal.education} and works as a ${bioData.personal.occupation}.`;
    } else if (message.includes('family') || message.includes('father') || message.includes('mother')) {
      return `Her family consists of ${bioData.family.father} and ${bioData.family.mother}. She has ${bioData.family.siblings}. They are a ${bioData.family.familyType}.`;
    } else if (message.includes('height') || message.includes('tall')) {
      return `She is ${bioData.personal.height} tall with a lovely personality.`;
    } else if (message.includes('diet') || message.includes('food')) {
      return `She follows a ${bioData.personal.diet} diet and enjoys cooking traditional Indian cuisine.`;
    } else if (message.includes('manglik') || message.includes('astrology')) {
      return `She is ${bioData.personal.manglik}. Her gotra is ${bioData.personal.gotra}.`;
    } else if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return `She's currently based in ${bioData.contact.location}.`;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('call')) {
      return `You can reach her at ${bioData.contact.phone} or email ${bioData.contact.email}.`;
    } else if (message.includes('hobby') || message.includes('interest') || message.includes('like')) {
      return `Her interests include ${bioData.interests.join(', ')}. She believes in maintaining a balanced lifestyle.`;
    } else if (message.includes('caste')) {
      return `She belongs to the ${bioData.personal.caste} community.`;
    } else if (message.includes('job') || message.includes('work') || message.includes('career')) {
      return `She works as a ${bioData.personal.occupation} and is passionate about technology and innovation.`;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Priya. Feel free to ask about her background, family, education, or any other details!";
    } else if (message.includes('thank')) {
      return "You're welcome! Feel free to ask if you have any other questions about Priya.";
    } else {
      return "I'd be happy to help! You can ask me about Priya's education, family background, interests, career, or any personal details. What would you like to know?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: getBotResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center animate-pulse-glow ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl transition-all duration-300 z-50 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Priya's Assistant</h3>
              <p className="text-xs opacity-90">Ask me anything!</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-primary' : 'bg-accent'}`}>
                  {message.type === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                </div>
                <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-primary text-white' : 'bg-muted text-foreground'}`}>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2 max-w-[80%]">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Priya..."
              className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};