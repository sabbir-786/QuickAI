import React, { useState } from 'react';
import { tools } from '../assets/assets';

const AiTools = () => {
    const [hoveredCard, setHoveredCard] = useState(null);


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent px-2">
                        Powerful AI Tools
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
                        Everything you need to create, enhance, and optimize your content with
                        cutting-edge AI technology.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
                    {tools.map((tool, index) => {
                        const IconComponent = tool.icon;
                        return (
                            <a
                                key={tool.id}
                                href={tool.link}
                                className="group relative bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer border border-gray-100 block no-underline"
                                style={{
                                    animationDelay: tool.delay,
                                    animation: `slideInUp 0.6s ease-out forwards ${tool.delay}`
                                }}
                                onMouseEnter={() => setHoveredCard(tool.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Gradient Background Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>

                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    {/* Icon Container */}
                                    <div className="relative flex-shrink-0">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${tool.bgColor} rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>

                                        {/* Animated Ring */}
                                        <div className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 ${tool.bgColor} rounded-lg opacity-30 scale-110 animate-ping ${hoveredCard === tool.id ? 'block' : 'hidden'}`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                                            {tool.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                                            {tool.description}
                                        </p>
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Border Animation */}
                                <div className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${tool.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl`}></div>
                            </a>
                        );
                    })}
                </div>


            </div>

            <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .grid {
            padding: 0 1rem;
          }
        }
      `}</style>
        </div>
    );
};

export default AiTools;