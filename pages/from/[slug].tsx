import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;
    switch (slug) {
      case 'kaion':
        router.push('/projects/kaion');
        break;
      case 'onepenlion':
        router.push('/projects/onepenlion');
        break;
      case 'thathornycat':
        window.location.replace('https://inkbunny.net/Superscripts');
        // router.push('/projects/thathornycat');
        break;
      default:
        router.push('/');
        break;
    }
  }, [slug]);

  return <main></main>;
};
export default Page;
