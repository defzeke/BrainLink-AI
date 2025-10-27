'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Trash2, Plus, Copy, User, Bot, History, Users, FileText, Brain } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatHistory {
  id: string;
  title: string;
  preview: string;
}

export default function RoomPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Artificial Intelligence (AI) refers to intelligent computer systems that can learn, reason, and perform tasks that typically require human intelligence. It involves techniques like machine learning, natural language processing, and computer vision to analyze data, make decisions, and interact with humans. AI has applications in various fields and has the potential to revolutionize industries and improve efficiency and productivity.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    { id: '1', title: 'Write a persuasive email', preview: 'Write a persuasive email to convince potential customers to try our service' },
    { id: '2', title: 'Training video script', preview: 'Write a script for a training video on how to use our software' },
    { id: '3', title: '30-second commercial', preview: 'Generate a script for a 30-second commercial promoting our new product' },
    { id: '4', title: 'What is Artificial Intelligence?', preview: 'Tell me what is Artificial Intelligence?' },
  ]);
  const [activeUsers, setActiveUsers] = useState(3);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Artificial Intelligence (AI) can automate tasks, analyze data, understand human language, recognize images, personalize recommendations, detect fraud, assist in healthcare, power virtual assistants, and enable autonomous systems. Its capabilities continue to expand and advance.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput('');
  };

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const handleRegenerateResponse = () => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'assistant') {
        setIsLoading(true);
        setTimeout(() => {
          const newMessage: Message = {
            id: Date.now().toString(),
            role: 'assistant',
            content: 'This is a regenerated response with potentially different insights and perspectives on the topic.',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev.slice(0, -1), newMessage]);
          setIsLoading(false);
        }, 1500);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B42323] to-[#B42323] flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Study Room</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{activeUsers} active participants</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
              className="gap-2"
            >
              <History className="w-4 h-4" />
              History
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearChat}
              className="gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear Chat
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleNewChat}
              className="gap-2 bg-[#B42323] hover:bg-[#B42323]"
            >
              <Plus className="w-4 h-4" />
              New Chat
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B42323] to-[#B42323] flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Welcome to BrainLink AI</h2>
                <p className="text-gray-600">Start a conversation or ask anything...</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B42323] to-[#B42323] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <Card
                    className={`p-4 max-w-2xl ${
                      message.role === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white'
                    }`}
                  >
                    <p className="leading-relaxed">{message.content}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200/20">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleCopyMessage(message.content)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                          title="Copy"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        {message.role === 'assistant' && (
                          <button
                            className="p-1 hover:bg-gray-100 rounded transition-colors text-xs px-2"
                            title="Add to Editor"
                          >
                            Add to Editor
                          </button>
                        )}
                      </div>
                    </div>
                  </Card>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <Card className="p-4 max-w-2xl">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
                  </div>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Regenerate Button */}
        {messages.length > 0 && messages[messages.length - 1].role === 'assistant' && (
          <div className="px-6 pb-2 flex justify-center">
            <Button
              variant="outline"
              onClick={handleRegenerateResponse}
              className="gap-2"
              disabled={isLoading}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Regenerate Response
            </Button>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white border-t px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask or search anything"
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                <FileText className="w-4 h-4" />
                Browse Prompts
              </button>
              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                No Brand Voice
              </button>
              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors ml-auto">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Improve
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* History Sidebar */}
      {showHistory && (
        <div className="w-80 bg-white border-l flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-bold text-lg mb-1">History</h2>
            <p className="text-sm text-gray-600">Chat</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {chatHistory.map((chat) => (
              <button
                key={chat.id}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors flex items-start gap-2"
              >
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{chat.title}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{chat.preview}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Pro Plan Card */}
          <div className="p-4 border-t">
            <Card className="bg-gradient-to-br from-emerald-400 to-green-600 text-white p-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-1">Pro Plan</h3>
              <p className="text-2xl font-bold mb-1">$126.54<span className="text-sm font-normal">/month</span></p>
              <p className="text-sm opacity-90 mb-4">Get various other interesting features</p>
              <Button className="w-full bg-black hover:bg-black/90 text-white">
                Get Pro Plan Now
              </Button>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
