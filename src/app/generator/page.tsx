// src/app/GeneratorPage.tsx
'use client'
import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { supabase } from '@/supabaseClient';
import { useRouter } from 'next/navigation';

const GeneratorPage = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleGenerate = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/generateChatResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [inputText] }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate response');
      }

      const data = await response.json();
      setOutputText(data.response);
    } catch (error) {
      console.error('Error generating output:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="mainContainer flex justify-center items-center">
        <button
          className="absolute top-4 right-4 bg-[#B5002C] text-[#A5455C] text-xl px-4 py-2 rounded-full shadow-md"
          onClick={handleSignOut}
        >
          Sign Out
        </button>

        <div className="p-8 w-[600px]">
          <h1 className="text-[#FF2157] text-center text-4xl mb-8">Chat Generator</h1>

          <div className="text-center mb-6">
            <textarea
              id="textInput"
              className="block w-full px-4 py-2 rounded-md shadow-md"
              rows={4}
              value={inputText}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button
            className="bg-[#FF2157] text-white px-4 py-2 text-2xl rounded-full shadow-md w-full flex items-center justify-center"
            onClick={handleGenerate}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>

          {outputText && (
            <div className="mt-8 text-center">
              <h2 className="text-[#FF2157] text-2xl mb-4">Generated Response</h2>
              <p className="text-lg">{outputText}</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default GeneratorPage;
