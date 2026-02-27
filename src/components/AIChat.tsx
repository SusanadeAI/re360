import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to RE360. How may I assist with your travel plans today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { id: Date.now(), text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "I can certainly help with that. Would you like me to check availability or connect you with a concierge?", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-white text-black flex items-center justify-center shadow-2xl ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 right-8 z-50 w-[380px] h-[500px] bg-black border border-white/20 shadow-2xl flex flex-col"
          >
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div>
                <h3 className="text-white text-xs font-medium uppercase tracking-widest mb-1">RE360 Concierge</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Online
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-black">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-xs leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-white text-black' 
                      : 'bg-white/5 text-gray-300 border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-white/10 bg-black">
              <div className="relative flex items-center border-b border-white/20 pb-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="TYPE YOUR MESSAGE..." 
                  className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-xs tracking-widest uppercase pr-10"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-0 text-gray-500 hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
