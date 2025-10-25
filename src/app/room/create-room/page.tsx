'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Playfair_Display } from 'next/font/google';
import { Loader2, Brain, Users, Lock, Globe } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export default function CreateRoomPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const generateRoomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!roomName.trim()) {
      alert('Please enter a room name');
      return;
    }

    setIsCreating(true);

    // Simulate room creation
    setTimeout(() => {
      const code = generateRoomCode();
      setGeneratedCode(code);
      setIsCreating(false);
      
      // Redirect to room after a brief delay to show the code
      setTimeout(() => {
        router.push(`/room?code=${code}`);
      }, 2000);
    }, 1500);
  };

  const handleCopyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      alert('Room code copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (generatedCode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className={`${playfair.className} text-3xl font-bold mb-2`}>Room Created!</h1>
          <p className="text-gray-600 mb-6">Share this code with your study partners</p>
          
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Room Code</p>
            <p className="text-4xl font-bold text-emerald-600 tracking-wider">{generatedCode}</p>
          </div>

          <Button
            onClick={handleCopyCode}
            className="w-full bg-emerald-600 hover:bg-emerald-700 mb-3"
          >
            Copy Code
          </Button>
          
          <p className="text-sm text-gray-500">Redirecting to room...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-md w-full p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className={`${playfair.className} text-3xl font-bold mb-2`}>Create Study Room</h1>
          <p className="text-gray-600">Set up a new collaborative study space</p>
        </div>

        <form onSubmit={handleCreateRoom} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Room Name *</label>
            <Input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="e.g. Physics Study Group"
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description (Optional)</label>
            <textarea
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
              placeholder="What will you study in this room?"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 min-h-[80px]"
            />
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  {isPrivate ? <Lock className="w-5 h-5 text-emerald-600" /> : <Globe className="w-5 h-5 text-emerald-600" />}
                </div>
                <div>
                  <p className="font-medium">{isPrivate ? 'Private Room' : 'Public Room'}</p>
                  <p className="text-sm text-gray-600">
                    {isPrivate ? 'Only people with the code can join' : 'Anyone can discover this room'}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
                className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-600"
              />
            </label>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">You're creating as {user.display_name || user.email}</p>
                <p>You'll be the room owner and can manage participants.</p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isCreating}
            className="w-full bg-emerald-600 hover:bg-emerald-700"
          >
            {isCreating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Creating Room...
              </>
            ) : (
              'Create Room'
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="w-full"
          >
            Cancel
          </Button>
        </form>
      </Card>
    </div>
  );
}
