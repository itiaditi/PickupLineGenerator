// src/app/login/page.tsx
'use client'
import { useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { useRouter } from 'next/navigation';
import { FaHeart } from "react-icons/fa"; 
import Image from 'next/image';
const Login = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.log('Error logging in with Google:', error.message);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push('/generator'); // Redirect to generator page if user session exists
      }
    };
    checkUser();
  }, [router]);

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <div className="bg-red-400 w-12 h-12 p-4 rounded-md text-center">
          <FaHeart className="text-white text-xl" />
        </div>
        <div>
          <h2 className="text-sm sm:text-lg font-semibold">Pickup line generator</h2>
          <p className="text-[10px] sm:text-[14px] text-gray-400 mt-4">Generate pickup line for your crush now!</p>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="rounded-lg border-2 p-2 sm:px-4 flex justify-center items-center mx-auto sm:gap-2"
        >
          <Image
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png"
            alt="google"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <h2 className="text-sm sm:text-md font-medium sm:font-semibold">Sign up with Google</h2>
        </button>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 -translate-y-10 text-center">
        <p className="text-[12px] md:text-xl text-gray-400 mt-4">
          By signing up, you agree to the Terms of Use, Privacy Notice
        </p>
      </div>
    </div>
  );
};

export default Login;
