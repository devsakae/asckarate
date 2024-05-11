import React, { useEffect } from 'react';
import Hero from './components/Hero';
import { getLogsHelper } from './store/Firebase';

const Home = () => {
  useEffect(() => {
    // chama da funçao na pagina inicial
    getLogsHelper('home_page_visited')
  }, [])
  return (
    <>
      <Hero />
    </>
  )
}

export default Home