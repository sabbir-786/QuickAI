import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonials from '../components/Testimonial'
import PricingCards from '../components/PricingCard'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AiTools />
            <Testimonials />
            <PricingCards />
            <Footer />
        </>
    )
}

export default Home