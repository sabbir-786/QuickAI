
// 2. Header.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import {
    Menu,
    ArrowRight,
    Edit3,
    Hash,
    Image,
    Scissors,
    Target,
    FileText,
    Home
} from 'lucide-react';

const Header = ({ toggleSidebar }) => {
    const location = useLocation();
    const { user } = useUser();
    const { openSignIn } = useClerk();

    const navigationItems = [
        { name: 'Dashboard', href: '/ai', icon: Home, category: 'main' },
        { name: 'AI Article Writer', href: '/ai/write-article', icon: Edit3, category: 'tools' },
        { name: 'Blog Title Generator', href: '/ai/blog-titles', icon: Hash, category: 'tools' },
        { name: 'AI Image Generation', href: '/ai/generate-images', icon: Image, category: 'tools' },
        { name: 'Background Removal', href: '/ai/remove-background', icon: Scissors, category: 'tools' },
        { name: 'Object Removal', href: '/ai/remove-object', icon: Target, category: 'tools' },
        { name: 'Resume Review', href: '/ai/review-resume', icon: FileText, category: 'tools' },
    ];

    const isActiveRoute = (href) => {
        return location.pathname === href;
    };

    return (
        <header className="bg-white/80 backdrop-blur-2xl border-b border-gray-200 px-4 py-4 lg:px-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {/* Mobile menu button */}
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Page title */}
                    <h1 className="text-xl font-semibold text-gray-900">
                        {navigationItems.find(item => isActiveRoute(item.href))?.name || 'Dashboard'}
                    </h1>
                </div>

                {/* User section */}
                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center space-x-3">
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-8 h-8"
                                    }
                                }}
                            />
                        </div>
                    ) : (
                        <button
                            onClick={openSignIn}
                            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5 hover:bg-primary/90 transition-colors"
                        >
                            Get Started <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
