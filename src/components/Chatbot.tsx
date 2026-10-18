import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { getBotResponse } from '../data/bot-faq';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
}

const quickReplies = [
  'Cosa fare in caso di decesso',
  'Orari cerimonia',
  'Servizi offerti',
  'Dove siete',
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Buongiorno, sono l\'Assistente Pecorari. Sono un assistente automatico. Per urgenze chiami il 059 260667 (24h). Come posso aiutarla?',
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const simulateTyping = async (text: string): Promise<string> => {
    return new Promise((resolve) => {
      let currentText = '';
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          const chunkSize = Math.floor(Math.random() * 3) + 1;
          currentText += text.slice(index, index + chunkSize);
          index += chunkSize;
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg && lastMsg.sender === 'bot' && lastMsg.isTyping) {
              lastMsg.text = currentText;
            }
            return [...newMessages];
          });
        } else {
          clearInterval(interval);
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg) {
              lastMsg.isTyping = false;
            }
            return [...newMessages];
          });
          resolve(currentText);
        }
      }, 30);
    });
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate "thinking" delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 500));

    const response = getBotResponse(text);

    // Add bot message with typing effect
    setMessages(prev => [...prev, {
      id: Date.now() + 1,
      text: '',
      sender: 'bot',
      isTyping: true,
    }]);

    await simulateTyping(response);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-50 md:bottom-6 md:right-24 w-14 h-14 bg-tortora-700 hover:bg-tortora-800 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label={isOpen ? 'Chiudi chat' : 'Apri chat assistente'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-40 right-4 z-50 md:bottom-24 md:right-24 w-[calc(100vw-2rem)] md:w-96 h-[calc(100vh-12rem)] md:h-[500px] bg-white rounded-xl shadow-2xl border border-tortora-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-tortora-700 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">Assistente Pecorari</p>
              <p className="text-xs text-white/80">Online • Demo</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-tortora-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-tortora-700 text-white rounded-br-md'
                      : 'bg-white text-text-primary border border-tortora-200 rounded-bl-md'
                  }`}
                >
                  {msg.isTyping && !msg.text && (
                    <span className="flex gap-1">
                      <span className="w-2 h-2 bg-tortora-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-tortora-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-tortora-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </span>
                  )}
                  {msg.text && <p className="whitespace-pre-wrap">{msg.text}</p>}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-tortora-50 border-t border-tortora-200 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="text-xs bg-white border border-tortora-300 text-tortora-800 px-3 py-1.5 rounded-full hover:bg-tortora-100 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-tortora-200 bg-white flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="flex-1 px-4 py-2 border border-tortora-200 rounded-full text-sm focus:outline-none focus:border-tortora-500"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 bg-tortora-700 text-white rounded-full flex items-center justify-center hover:bg-tortora-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Invia messaggio"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
