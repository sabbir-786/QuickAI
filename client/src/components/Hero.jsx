import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {

    const navigate = useNavigate();
    return (
        <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center items-center
       bg-white min-h-screen overflow-hidden'>

            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-bounce slow-bounce"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-${i % 3 + 1}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Gradient Mesh Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center text-gray-800 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
                    Create amazing content with AI tools
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-600 animate-fade-in-up animation-delay-500">
                    Transform your content creation with our suite of premium AI tools. Write Article , Generate images
                    and enhance your workflow
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
                    <button onClick={() => {
                        navigate('/ai')
                    }} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                        Start Creating Now
                    </button>
                    <button className="px-8 py-4 border-2 border-gray-300 bg-white/80 backdrop-blur-md rounded-full text-gray-700 font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-200">
                        Watch Demo
                    </button>
                </div>

                <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600 justify-center'>
                    <img src={assets.user_group} alt="" className='h-8' /> Trusted by 10K+ people
                </div>
            </div>

            {/* Multi-layered Realistic Waves */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                {/* Wave Layer 1 - Main wave */}
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24 z-10">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        className="fill-blue-500/20 animate-wave-1"></path>
                </svg>

                {/* Wave Layer 2 - Secondary wave */}
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-20 z-20">
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        className="fill-purple-500/15 animate-wave-2"></path>
                </svg>

                {/* Wave Layer 3 - Top accent wave */}
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 z-30">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-gradient-to-r from-blue-400/10 to-purple-400/10 animate-wave-3"></path>
                </svg>

                {/* Wave Layer 4 - Foam effect */}
                <div className="absolute bottom-0 w-full h-8 z-40">
                    <div className="w-full h-full bg-gradient-to-t from-white/60 to-transparent animate-foam"></div>
                    <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 animate-shimmer"></div>
                </div>
            </div>

            <style jsx>{`
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .slow-bounce {
                    animation: bounce 3s infinite;
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes float-1 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes float-2 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(360deg); }
                }
                
                @keyframes float-3 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(270deg); }
                }
                
                @keyframes wave-1 {
                    0% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(-25px) translateY(-5px); }
                    100% { transform: translateX(-50px) translateY(0px); }
                }
                
                @keyframes wave-2 {
                    0% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(-35px) translateY(3px); }
                    100% { transform: translateX(-70px) translateY(0px); }
                }
                
                @keyframes wave-3 {
                    0% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(-15px) translateY(-2px); }
                    100% { transform: translateX(-30px) translateY(0px); }
                }
                
                @keyframes foam {
                    0%, 100% { opacity: 0.6; transform: scaleY(1); }
                    50% { opacity: 0.8; transform: scaleY(1.1); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateX(100%); opacity: 0; }
                }
                
                @keyframes wave {
                    0% { transform: translateX(0px); }
                    100% { transform: translateX(-50px); }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                .animate-float-1 {
                    animation: float-1 6s ease-in-out infinite;
                }
                
                .animate-float-2 {
                    animation: float-2 8s ease-in-out infinite;
                }
                
                .animate-float-3 {
                    animation: float-3 7s ease-in-out infinite;
                }
                
                .animate-wave-1 {
                    animation: wave-1 8s ease-in-out infinite;
                }
                
                .animate-wave-2 {
                    animation: wave-2 12s ease-in-out infinite reverse;
                }
                
                .animate-wave-3 {
                    animation: wave-3 6s ease-in-out infinite;
                }
                
                .animate-foam {
                    animation: foam 4s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                .animate-wave {
                    animation: wave 10s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default Hero