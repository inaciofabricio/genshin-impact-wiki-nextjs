import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  
  const router = useRouter();

  useEffect(() => {
    router.push('/personagens');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}
