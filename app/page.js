import Head from 'next/head';
import ClientOnly from "@/components/ClientOnly";
import Header from "@/components/Header";
import Hero from '@/components/Hero';
import RecentPosts from '@/components/RecentPosts';
import FeaturedWorks from '@/components/FeaturedWorks'
import Footer from '@/components/Footer';  

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />  
    </div>
  );
}
