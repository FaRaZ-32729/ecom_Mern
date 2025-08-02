import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import MultiBanner from '../components/MultiBanner'
import Collections from '../components/Collections'
import MidBanner from '../components/MidBanner'
import TopSellers from '../components/TopSellers'
import Features from '../components/Features'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("location object:", location);
    console.log("location.search:", location.search);

    const params = new URLSearchParams(location.search);
    const paymentStatus = params.get('payment');

    if (paymentStatus === 'success') {
      toast.success("Payment Successful");
      console.log('🎉 Payment Successful!');
    } else if (paymentStatus === 'cancel') {
      toast.error("Payment Cancelled");
      console.log("payment cancelled");
    }
  }, [location]);

  return (
    <div>
      <Banner />
      <MultiBanner />
      <Collections />
      <MidBanner />
      <TopSellers />
      <Features />
    </div>
  )
}

export default Home
