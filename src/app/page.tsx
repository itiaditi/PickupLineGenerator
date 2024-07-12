// src/app/page.tsx
'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();
  return (
    
      <div
        className="mainContainer"
        style={{
          backgroundImage: `url('/main.png')`,
          minHeight: '100vh',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="p-10">
          <h1 className="text-white text-center">Pickup Line Generator</h1>
        </div>
        <div>
          <button><Link href="/generator">Generate one for me</Link></button>
        </div>
      </div>
    
  );
};

export default HomePage;
