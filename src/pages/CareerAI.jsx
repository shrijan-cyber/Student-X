import { useState } from 'react';
import { FiMenu, FiSend, FiCpu } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';

const CareerAI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI career assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const suggestedQuestions = [
    'What career path is best for me?',
    'Create a skill roadmap for full-stack development',
    'How do I prepare for tech interviews?',
    'Suggest freelancing opportunities for beginners'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Great question! Based on your profile and interests, I recommend focusing on...'
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      <Navbar />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64 pt-16">
        <div className="h-[calc(100vh-4rem)] flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mb-4 p-2 rounded-lg bg-white dark:bg-gray-800"
            >
              <FiMenu size={24} />
            </button>
            <h1 className="text-3xl font-bold font-display flex items-center">
              <FiCpu className="mr-3 text-primary" />
              Career AI Assistant
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Get personalized career guidance powered by AI
            </p>
          </div>

          {/* Chat Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'glass-card'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {suggestedQuestions.map((question, index) => (
                  <Card
                    key={index}
                    hover
                    className="cursor-pointer"
                    onClick={() => setInput(question)}
                  >
                    <p className="text-sm">{question}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about your career..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <Button onClick={handleSend} variant="gradient">
                <FiSend />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAI;
