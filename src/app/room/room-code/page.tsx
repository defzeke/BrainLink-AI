'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Playfair_Display } from 'next/font/google';
import { Loader2, Brain, PlusCircle } from 'lucide-react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export default function JoinRoomPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [roomCode, setRoomCode] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleJoinRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!roomCode.trim()) {
      setError('Please enter a room code');
      return;
    }

    if (roomCode.length !== 6) {
      setError('Room code must be 6 characters');
      return;
    }

    setIsJoining(true);

    // Simulate room joining
    setTimeout(() => {
      setIsJoining(false);
      router.push(`/room?code=${roomCode.toUpperCase()}`);
    }, 1500);
  };

  const handleCreateNewRoom = () => {
    router.push('/room/create-room');
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-md w-full p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className={`${playfair.className} text-3xl font-bold mb-2`}>Join Study Room</h1>
          <p className="text-gray-600">Enter a class code to join or create a new room</p>
        </div>

        <form onSubmit={handleJoinRoom} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Class Code</label>
            <Input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              placeholder="Enter class code (e.g. ABC123)"
              className="w-full text-center text-lg tracking-wider font-semibold"
              maxLength={6}
              required
            />
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="text-sm text-emerald-800">
              <p className="font-medium mb-1">Joining as {user.display_name || user.email}</p>
              <p>You'll be added to the study room once you enter a valid code.</p>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isJoining || !roomCode.trim()}
            className="w-full bg-emerald-600 hover:bg-emerald-700"
          >
            {isJoining ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining Room...
              </>
            ) : (
              <>
                <PeopleAltOutlinedIcon className="mr-2 text-xl" />
                Join Room
              </>
            )}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleCreateNewRoom}
            className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Create New Room
          </Button>

          <Button
            type="button"
            variant="ghost"
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
