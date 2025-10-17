import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, AlertCircle, Pill } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm TNAAR Healthcare Assistant. How can I help you today?\n\nI can assist you with:\n• Product information\n• Dosage & side effects\n• Company details\n• Promotions & offers\n• Order status\n• Complaints & feedback\n\nPlease ask me anything about TNAAR Healthcare!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { icon: "💊", label: "Products" },
    { icon: "📦", label: "Order Status" },
    { icon: "🏥", label: "Store Locator" },
    { icon: "📋", label: "Complaints" },
    { icon: "💰", label: "Offers" },
    { icon: "📞", label: "Contact Us" },
  ];

  const botResponses: Record<string, string> = {
    // Product Information
    "product": "We offer a range of pharmaceutical products:\n\n• Heart Health medicines\n• Diabetes care medicines\n• Vitamins & Supplements\n• General wellness products\n\nWhich category are you interested in?",
    "heart": "HeartCare improves heart health and manages blood pressure.\n\nWould you like me to explain dosage, side effects, or lifestyle tips next?",
    "diabetes": "TNAAR Healthcare diabetes medicines include insulin regulators, sugar control tablets, and dietary supplements.\n\nDo you want information about a specific diabetes product?",
    "supplement": "TNAAR Healthcare supplements include vitamins, minerals, and general wellness products.\n\nDo you have a specific health goal in mind?",
    
    // Side Effects & Dosage
    "side": "Common side effects of HeartCare tablets include:\n\n• Mild dizziness\n• Nausea or upset stomach\n• Headache (rare)\n\nI can provide general information, but for personalized advice, please consult a licensed healthcare professional.\n\nDo you want me to tell you the recommended dosage?",
    "dosage": "Take 1 HeartCare tablet after meals in the morning. Do not exceed the prescribed dosage. Drink plenty of water.\n\nDo you want to know about possible interactions with other medicines?",
    
    // Company Info
    "contact": "You can reach TNAAR Healthcare at:\n\n📞 Phone: +91-XXXX-XXXXXX\n📧 Email: support@tnaarhealthcare.com\n🌐 Website: www.tnaarhealthcare.com\n🏢 Address: 123 Pharma Street, Hyderabad, India\n\nWorking hours: Monday to Friday, 9 AM – 6 PM IST",
    "address": "Our headquarters is located at:\n\n123 Pharma Street, Hyderabad, India\n\nWe also have stores across the country. Would you like me to provide store locations near you?",
    
    // Complaints & Feedback
    "complaint": "I'm sorry to hear you're having an issue. Could you please provide your order number? I will connect you to our support team for replacement or refund.",
    "damage": "I'm sorry to hear that you received a damaged product. Could you please provide your order number? I will connect you to our support team for replacement or refund.",
    
    // Promotions & Offers
    "offer": "We have ongoing offers for registered customers. Please visit our website or contact our sales team for the latest promotions.",
    "discount": "We have ongoing offers for registered customers. Please visit our website or contact our sales team for the latest promotions.",
    
    // Multi-language Support
    "telugu": "Sure! TNAAR Healthcare lo heart health, diabetes care, vitamins & supplements mariyu general wellness products unnayi. Mee health goals ki yedaina specific product gurinchi cheppali?",
    "supplement telugu": "Sure! TNAAR Healthcare supplements lo vitamins, minerals, and general wellness products unnayi. Mee health goals ki yedaina specific product gurinchi cheppali?",
    "diabetes telugu": "Sure! TNAAR Healthcare diabetes medicines lo insulin regulators, sugar control tablets, and dietary supplements unnayi. Mee health condition ki yedaina specific info kavala?",
    
    // Product Availability
    "available": "Yes! Our products are available at TNAAR Healthcare stores and online. Would you like me to provide store locations near you?",
    "hyderabad": "Yes! Our products are available at our Hyderabad stores and online. Would you like me to provide store locations?",
    
    // Pricing Queries
    "price": "HeartCare tablets cost ₹500 for a pack of 30 tablets. Prices may vary by location.\n\nWould you like to know about our current offers?",
    
    // Order Status Queries
    "order": "Please provide your order number. I will check and update you with the latest status.",
    
    // Subscription / Repeat Orders
    "subscribe": "Yes! TNAAR offers subscription services. Would you like me to guide you through the process?",
    
    // Product Comparisons
    "compare": "Both HeartCare and HeartSafe are effective. HeartCare focuses on overall heart health, while HeartSafe targets cholesterol control. Please consult your doctor to choose the right one.",
    
    // Lifestyle Recommendations
    "exercise": "Yes, light exercises are generally safe with HeartCare medication. Avoid intense workouts if your doctor advises. Always follow your doctor's recommendations.",
    
    // Handling Frustrated Users
    "delay": "I understand this is frustrating. Let me connect you to our support team who can assist you immediately.",
    "angry": "I understand your frustration. Let me connect you to our support team who can assist you immediately.",
    "upset": "I understand this is frustrating. Let me connect you to our support team who can assist you immediately.",
    
    // Personalized Advice Disclaimer
    "prescribe": "I'm sorry, I cannot provide personalized prescriptions. Please consult your licensed doctor for that.",
    "personal": "I can provide general information, but for personalized advice, please consult a licensed healthcare professional.",
    
    // Out-of-scope Queries
    "cricket": "I'm here to help with TNAAR Healthcare info. For other queries, please contact our support team.",
    "weather": "I'm here to help with TNAAR Healthcare info. For other queries, please contact our support team.",
    
    // FAQ
    "hours": "Our working hours are Monday to Friday, 9 AM – 6 PM IST.",
    "time": "Our working hours are Monday to Friday, 9 AM – 6 PM IST.",
    
    // Default responses
    "hello": "Hello! 👋 I'm TNAAR Healthcare Assistant. How can I help you today?",
    "hi": "Hi there! 👋 I'm TNAAR Healthcare Assistant. How can I assist you with TNAAR Healthcare today?",
    "help": "I can help you with:\n• Product information\n• Dosage & side effects\n• Company details\n• Promotions & offers\n• Order status\n• Complaints & feedback\n\nWhat would you like to know?",
    "thanks": "You're welcome! Is there anything else I can help you with today?",
    "thank you": "You're welcome! Is there anything else I can help you with today?"
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Check for specific keywords
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerInput.includes(keyword)) {
        return response;
      }
    }
    
    // Handle vague queries
    if (lowerInput.includes("heartcare")) {
      return "Do you want me to tell you about:\n\n• Dosage\n• Side effects\n• Availability\n• Benefits";
    }
    
    // Personalization example
    if (lowerInput.match(/\b(my name is|i'm|i am)\b/)) {
      const nameMatch = lowerInput.match(/\b(my name is|i'm|i am)\s+(\w+)/);
      if (nameMatch && nameMatch[2]) {
        return `Hi ${nameMatch[2]}! Welcome to TNAAR Healthcare. How can I help you today?`;
      }
    }
    
    // Default response
    return "I'm not sure, but I can connect you to a TNAAR Healthcare representative. Alternatively, I can help with:\n• Product information\n• Dosage & side effects\n• Company details\n• Promotions & offers\n• Order status\n• Complaints & feedback\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleQuickPrompt = (label: string) => {
    setInputValue(label);
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: label,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsLoading(true);

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getResponse(label),
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 800);
    }, 100);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <>
      {/* Animated Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center z-40 hover:scale-110 active:scale-95"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6 md:h-7 md:w-7" />
        ) : (
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        )}
      </button>

      {/* Premium Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modern Chat Window - Responsive */}
      {isOpen && (
        <div className="fixed inset-4 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-96 md:w-[420px] sm:h-[600px] md:h-[700px] max-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col z-50 animate-in fade-in slide-in-from-bottom-5 duration-400 overflow-hidden backdrop-blur-xl">
          
          {/* Premium Animated Header */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-4 py-4 flex-shrink-0 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 md:h-10 md:w-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Pill className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg">TNAAR Healthcare Assistant</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm opacity-95">
                <div className="h-2 w-2 bg-white rounded-full" />
                <span>Always online • Instant support</span>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gradient-to-b from-slate-800/50 via-slate-900 to-slate-900 scroll-smooth"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)',
            }}
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl break-words transition-all duration-300 text-sm ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-none shadow-lg shadow-emerald-500/30 border border-emerald-400/50"
                        : "bg-slate-700/60 text-slate-100 rounded-bl-none border border-slate-600/50 backdrop-blur-sm shadow-lg"
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <span className={`text-xs opacity-70 mt-2 block ${
                      message.sender === "user" ? "opacity-90" : ""
                    }`}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700/60 border border-slate-600/50 rounded-2xl rounded-bl-none px-4 py-3 backdrop-blur-sm">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce" />
                      <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Prompts Grid */}
          {messages.length === 1 && (
            <div className="px-3 sm:px-4 py-3 border-t border-slate-700/50 bg-slate-800/50 backdrop-blur-sm flex-shrink-0">
              <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">Quick actions</p>
              <div className="grid grid-cols-3 gap-2">
                {quickPrompts.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleQuickPrompt(item.label)}
                    className="text-xs px-2 py-2 sm:px-3 sm:py-2.5 bg-gradient-to-br from-slate-700/60 to-slate-800/60 hover:from-emerald-500/20 hover:to-teal-500/20 text-slate-200 hover:text-emerald-300 rounded-xl transition-all duration-200 border border-slate-600/50 hover:border-emerald-500/50 font-medium backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 flex flex-col items-center gap-1"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="line-clamp-1">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-slate-700/50 bg-slate-800/50 flex-shrink-0 space-y-3 backdrop-blur-sm">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
                placeholder="Ask about TNAAR Healthcare products..."
                disabled={isLoading}
                className="flex-1 px-3 py-2.5 text-sm bg-slate-700/40 border border-slate-600/50 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 text-slate-100 placeholder-slate-500 disabled:opacity-50 transition-all backdrop-blur-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="h-10 w-10 flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-500/50 active:scale-95 flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;