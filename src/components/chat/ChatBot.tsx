import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage } from '../../types';
import axios from 'axios';

// Preset responses for common queries
const presetResponses = {
  greetings: {
    triggers: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! I'm your AI assistant from AI-Code-Marketplace. How can I help you today? Feel free to ask about our services, pricing, or any web development needs!"
  },
  email: {
    triggers: ['email', 'contact email', 'mail', 'reach you'],
    response: "You can reach us at aicodemarketplace2@gmail.com. We typically respond within 24 hours. For urgent matters, please use the contact form on our website."
  },
  services: {
    triggers: ['services', 'what do you do', 'what can you offer', 'offerings'],
    response: "We offer comprehensive web development services including:\n• AI-Powered Web Development\n• UI/UX Design with 3D elements\n• AI Integration Services\n• E-Commerce Solutions\n• Mobile App Development\n• Digital Transformation Consulting\n\nWould you like to know more about any specific service?"
  },
  pricing: {
    triggers: ['price', 'cost', 'pricing', 'how much', 'rates', 'budget'],
    response: "We have special 90% OFF on all plans!\n\n• Basic Plan: $899 (1 page)\n• Standard Plan: $1,499 (5 pages)\n• Premium Plan: $2,499 (10 pages)\n• Enterprise Plan: $3,999 (20 pages)\n\nAll plans include free domain, SSL, and unlimited revisions. Visit our pricing page for full details!"
  },
  support: {
    triggers: ['support', 'help', 'assistance', 'customer service'],
    response: "We offer 24/7 support for all our clients! You can:\n• Use this chat for instant help\n• Email us at aicodemarketplace2@gmail.com\n• Fill out our contact form for a ticket\n• Schedule a free consultation\n\nHow can I assist you today?"
  },
  timeline: {
    triggers: ['how long', 'timeline', 'delivery', 'duration', 'time to complete'],
    response: "Project timelines vary by plan:\n• Basic Plan: 7 days\n• Standard Plan: 14 days\n• Premium Plan: 21 days\n• Enterprise Plan: 30 days\n\nWe can also accommodate rush orders. Let us know your deadline!"
  },
  technologies: {
    triggers: ['technologies', 'tech stack', 'programming', 'languages', 'frameworks'],
    response: "We work with cutting-edge technologies:\n• Frontend: React, Next.js, Vue, Angular\n• Backend: Node.js, Python, PHP, .NET\n• AI/ML: OpenAI, TensorFlow, LangChain\n• Databases: PostgreSQL, MongoDB, MySQL\n• Cloud: AWS, Google Cloud, Azure\n• 3D: Three.js, WebGL"
  },
  discount: {
    triggers: ['discount', 'offer', 'promotion', 'deal', 'sale'],
    response: "🎉 LIMITED TIME OFFER! Get 90% OFF on all our plans! This is a special promotion that saves you thousands of dollars. Don't miss out on this incredible opportunity to transform your business at a fraction of the regular cost!"
  }
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findPresetResponse = (input: string): string | null => {
    const lowerInput = input.toLowerCase();
    
    for (const category of Object.values(presetResponses)) {
      for (const trigger of category.triggers) {
        if (lowerInput.includes(trigger)) {
          return category.response;
        }
      }
    }
    
    return null;
  };

  const getAIResponse = async (input: string): Promise<string> => {
    // First check for preset responses
    const presetResponse = findPresetResponse(input);
    if (presetResponse) {
      return presetResponse;
    }

    // Use Gemini API if available
    const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!geminiApiKey) {
      // Return a helpful response if no API key
      return "I'm here to help! While my AI features are limited, I can assist with:\n• Service information\n• Pricing details (90% OFF!)\n• Contact information\n• General questions\n\nFor detailed inquiries, please contact us at aicodemarketplace2@gmail.com or use our contact form.";
    }

    try {
      // Gemini API call
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`,
        {
          contents: [{
            parts: [{
              text: `You are a helpful customer support assistant for AI-Code-Marketplace, a premium web development company. 
              We offer: Web Development, AI Integration, UI/UX Design, E-commerce, Mobile Apps.
              Pricing (90% OFF): Basic $899, Standard $1,499, Premium $2,499, Enterprise $3,999.
              Email: aicodemarketplace2@gmail.com
              Always be professional and helpful. User question: ${input}`
            }]
          }]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      // Enhanced fallback with more helpful information
      return `I'm experiencing a temporary connection issue, but I can still help!\n\n📧 Email: aicodemarketplace2@gmail.com\n💰 Pricing: Starting at $899 (90% OFF!)\n🚀 Services: Web Development, AI Integration, UI/UX Design\n\nPlease use our contact form or email us directly for immediate assistance.`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Get AI response
    const response = await getAIResponse(inputValue);
    
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center group"
          >
            <MessageSquare className="w-6 h-6 text-white" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] glass-morphism-strong rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-gray-400">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500' 
                        : 'bg-gradient-to-br from-purple-500 to-pink-500'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30'
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-white/10">
              <div className="flex gap-2 overflow-x-auto py-2">
                {['Services', 'Pricing', 'Contact', 'Support'].map((action) => (
                  <button
                    key={action}
                    onClick={() => {
                      setInputValue(action.toLowerCase());
                      handleSendMessage();
                    }}
                    className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs whitespace-nowrap transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-accent-neon transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={`p-2 rounded-full transition-all ${
                    inputValue.trim()
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
