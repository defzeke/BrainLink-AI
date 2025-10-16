'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatHistory {
  id: string;
  preview: string;
}

export default function Room() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Artificial Intelligence (AI) refers to intelligent computer systems that can learn, reason, and perform tasks that typically require human intelligence. It involves techniques like machine learning, natural language processing, and computer vision to analyze data, make decisions, and interact with humans. AI has applications in various fields and has the potential to revolutionize industries and improve efficiency and productivity.',
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'user',
      content: 'What can Artificial Intelligence do?',
      timestamp: new Date(),
    },
    {
      id: '3',
      type: 'ai',
      content: 'Artificial Intelligence (AI) can automate tasks, analyze data, understand human language, recognize images, personalize recommendations, detect fraud, assist in healthcare, power virtual assistants, and enable autonomous systems. Its capabilities continue to expand and advance.',
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [chatHistory] = useState<ChatHistory[]>([
    { id: '1', preview: '"Write a persuasive email to convince potential customers to try our service"' },
    { id: '2', preview: '"Write a script for a training video on how to use our software"' },
    { id: '3', preview: '"Generate a script for a 30-second commercial promoting our new product"' },
    { id: '4', preview: '"Tell me what is Artificial Intelligence?"' },
    { id: '5', preview: '"What can Artificial Intelligence do?"' },
  ]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'This is a simulated AI response. Integrate your AI backend here.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Super Chat</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {message.type === 'ai' ? (
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Message Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 leading-relaxed">{message.content}</p>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 text-sm ml-auto">
                      Copy
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 text-sm">
                      Add to Editor
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regenerate Button */}
          <div className="max-w-3xl mx-auto mt-6 flex justify-center">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium">Regenerate Response</span>
            </button>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t px-6 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask or search anything"
                className="flex-1 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
              <Button
                onClick={handleSend}
                className="bg-black hover:bg-gray-800 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <button className="flex items-center gap-2 hover:text-gray-800">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Browse Prompts
              </button>
              <button className="flex items-center gap-2 hover:text-gray-800">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                No Brand Voice
              </button>
              <button className="flex items-center gap-2 hover:text-gray-800 ml-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Improve
              </button>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed left-8 bottom-8 flex flex-col gap-3">
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* History Sidebar */}
      <div className="w-80 bg-white border-l flex flex-col">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-lg font-semibold">History</h2>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12m-12 5h12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-600">Chat</p>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-2">
            {chatHistory.map((chat) => (
              <button
                key={chat.id}
                className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-50 flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 line-clamp-2">{chat.preview}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Pro Plan Card */}
        <div className="m-4 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xl font-semibold">Pro Plan</span>
          </div>
          <div className="mb-2">
            <span className="text-3xl font-bold">$126.54</span>
            <span className="text-sm opacity-90">/month</span>
          </div>
          <p className="text-sm opacity-90 mb-4">Get various other interesting features</p>
          <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-lg py-3">
            Get Pro Plan Now
          </Button>
        </div>
      </div>
    </div>
  );
}