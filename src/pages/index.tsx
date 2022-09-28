import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/template/App'));

export default Home;
