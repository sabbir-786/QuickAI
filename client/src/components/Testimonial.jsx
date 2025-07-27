import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {

    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Content Creator",
            company: "Digital Marketing Pro",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
            content: "This AI tool has completely transformed my content creation process. I can now generate engaging articles in minutes instead of hours. The quality is exceptional!",
            rating: 5,
            featured: true
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Marketing Director",
            company: "TechCorp Solutions",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            content: "The AI image generation feature is incredible. Our social media engagement has increased by 200% since we started using these tools for our campaigns.",
            rating: 5,
            featured: false
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Freelance Writer",
            company: "Independent",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            content: "As a freelancer, efficiency is everything. These AI tools help me deliver high-quality work faster, allowing me to take on more clients and increase my income.",
            rating: 5,
            featured: true
        },
        {
            id: 4,
            name: "David Park",
            role: "Small Business Owner",
            company: "Park's Photography",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            content: "The background removal tool is a game-changer for my photography business. What used to take hours in Photoshop now takes seconds. Absolutely amazing!",
            rating: 5,
            featured: false
        },
        {
            id: 5,
            name: "Lisa Thompson",
            role: "HR Manager",
            company: "InnovateCorp",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
            content: "The resume review feature has streamlined our hiring process significantly. We can now provide better feedback to candidates and make more informed decisions.",
            rating: 5,
            featured: true
        },
        {
            id: 6,
            name: "James Wilson",
            role: "Blogger",
            company: "TechReview Blog",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            content: "The blog title generator has helped me create more engaging headlines. My click-through rates have improved dramatically since I started using it.",
            rating: 5,
            featured: false
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied users who have transformed their workflow with our AI tools
                    </p>
                </div>

                {/* Main Testimonial Slider */}
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0">
                                    <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl mx-4 sm:mx-8">
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                                            {/* Quote Icon */}
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                                    <Quote className="w-8 h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="flex justify-center lg:justify-start mb-4">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                                <blockquote className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed italic">
                                                    "{testimonial.content}"
                                                </blockquote>
                                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                                                    />
                                                    <div className="text-center sm:text-left">
                                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                                        <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mb-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-blue-600 w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>



                {/* CTA Section */}
                <div className="text-center mt-12 sm:mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Ready to Join Thousands of Satisfied Users?
                        </h3>
                        <p className="text-lg sm:text-xl mb-8 opacity-90">
                            Start your AI-powered journey today and see the difference for yourself
                        </p>
                        <button onClick={() => { navigate('/ai') }} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Get Started Free
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;