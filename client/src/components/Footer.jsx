import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Zap
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'AI Article Writer', href: '/ai/write-article' },
            { name: 'Blog Title Generator', href: '/ai/blog-titles' },
            { name: 'AI Image Generation', href: '/ai/generate-images' },
            { name: 'Background Removal', href: '/ai/remove-background' },
            { name: 'Object Removal', href: '/ai/remove-object' },
            { name: 'Resume Review', href: '/ai/review-resume' }
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Careers', href: '/careers' },
            { name: 'Press Kit', href: '/press' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' }
        ],
        resources: [
            { name: 'Help Center', href: '/help' },
            { name: 'API Documentation', href: '/api-docs' },
            { name: 'Tutorials', href: '/tutorials' },
            { name: 'Community', href: '/community' },
            { name: 'Status Page', href: '/status' },
            { name: 'Changelog', href: '/changelog' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
            { name: 'GDPR', href: '/gdpr' },
            { name: 'Refund Policy', href: '/refunds' },
            { name: 'License', href: '/license' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/quickai', color: 'hover:text-blue-600' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/quickai', color: 'hover:text-blue-400' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/quickai', color: 'hover:text-pink-600' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/quickai', color: 'hover:text-blue-700' },
        { name: 'GitHub', icon: Github, href: 'https://github.com/quickai', color: 'hover:text-gray-900' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">


            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">Quick.AI</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering creators and businesses with cutting-edge AI tools.
                            Transform your workflow with intelligent automation and creative solutions.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span>hello@quickai.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <Phone className="w-4 h-4 text-green-500" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <MapPin className="w-4 h-4 text-red-500" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">AI Tools</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">10K+</div>
                            <div className="text-sm text-gray-400">Active Users</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">50M+</div>
                            <div className="text-sm text-gray-400">AI Generations</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                            <div className="text-sm text-gray-400">Uptime</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">24/7</div>
                            <div className="text-sm text-gray-400">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="text-sm text-gray-400">
                            © {currentYear} Quick.AI. All rights reserved. Made with ❤️ for creators worldwide.
                        </div>

                        {/* Social Links */}
                        <div className="mt-4 md:mt-0">
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800`}
                                            aria-label={social.name}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Back to top"
            >
                <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
            </button>
        </footer>
    );
};

export default Footer;