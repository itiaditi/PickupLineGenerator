// src/components/ProtectedRoute.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { supabase } from '@/supabaseClient';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push('/login');
      }
    };
    checkUser();
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
