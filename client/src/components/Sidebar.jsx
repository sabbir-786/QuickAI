
// 1. Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Protect, useClerk, useUser } from '@clerk/clerk-react';
import { assets } from '../assets/assets';
import {
    Edit3,
    Hash,
    Image,
    Scissors,
    Target,
    FileText,
    Zap,
    Home,
    Settings,
    User,
    CreditCard,
    LogOut,
    ChevronLeft,
    ChevronRight,
    X,
    User2,
    LogOutIcon
} from 'lucide-react';

const Sidebar = ({
    sidebarOpen,
    sidebarCollapsed,
    setSidebarOpen,
    toggleCollapse,
}) => {
    const location = useLocation();
    const { user } = useUser();
    const { signOut, openUserProfile } = useClerk();

    const navigationItems = [
        { name: 'Dashboard', href: '/ai', icon: Home, category: 'main' },
        { name: 'AI Article Writer', href: '/ai/write-article', icon: Edit3, category: 'tools' },
        { name: 'Blog Title Generator', href: '/ai/blog-titles', icon: Hash, category: 'tools' },
        { name: 'AI Image Generation', href: '/ai/generate-images', icon: Image, category: 'tools' },
        { name: 'Background Removal', href: '/ai/remove-background', icon: Scissors, category: 'tools' },
        { name: 'Object Removal', href: '/ai/remove-object', icon: Target, category: 'tools' },
        { name: 'Resume Review', href: '/ai/review-resume', icon: FileText, category: 'tools' },
        { name: 'Community', href: '/ai/community', icon: User2, category: 'tools' },

    ];

    const accountItems = [
        { name: 'Profile', href: '/profile', icon: User },
        { name: 'Billing', href: '/billing', icon: CreditCard },
        { name: 'Settings', href: '/settings', icon: Settings },
    ];

    const isActiveRoute = (href) => {
        return location.pathname === href;
    };

    return (
        <div className={`
      fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 shadow-lg
      transform transition-all duration-300 ease-in-out
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      ${sidebarCollapsed ? 'w-16' : 'w-64'}
      lg:translate-x-0 lg:static lg:inset-0
    `}>
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                {!sidebarCollapsed && (
                    <Link to="/" className="flex items-center space-x-2">
                        {assets?.logo ? (
                            <img src={assets.logo} alt="Logo" className="w-32 sm:w-44" />
                        ) : (
                            <>
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-gray-900">Quick.AI</span>
                            </>
                        )}
                    </Link>
                )}

                {/* Collapse button for desktop */}
                <button
                    onClick={toggleCollapse}
                    className="hidden lg:flex p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    {sidebarCollapsed ? (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                    ) : (
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                    )}
                </button>

                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
                {/* Main Navigation */}
                <div>
                    {!sidebarCollapsed && (
                        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Main
                        </h3>
                    )}
                    <div className="space-y-1">
                        {navigationItems.filter(item => item.category === 'main').map((item) => {
                            const IconComponent = item.icon;
                            const isActive = isActiveRoute(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive
                                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }
                  `}
                                    title={sidebarCollapsed ? item.name : ''}
                                >
                                    <IconComponent className={`
                    flex-shrink-0 w-5 h-5 transition-colors
                    ${isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'}
                  `} />
                                    {!sidebarCollapsed && (
                                        <span className="ml-3 truncate">{item.name}</span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* AI Tools */}
                <div>
                    {!sidebarCollapsed && (
                        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            AI Tools
                        </h3>
                    )}
                    <div className="space-y-1">
                        {navigationItems.filter(item => item.category === 'tools').map((item) => {
                            const IconComponent = item.icon;
                            const isActive = isActiveRoute(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive
                                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }
                  `}
                                    title={sidebarCollapsed ? item.name : ''}
                                >
                                    <IconComponent className={`
                    flex-shrink-0 w-5 h-5 transition-colors
                    ${isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'}
                  `} />
                                    {!sidebarCollapsed && (
                                        <span className="ml-3 truncate">{item.name}</span>
                                    )}
                                    {isActive && !sidebarCollapsed && (
                                        <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>


            <div className='w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between'>
                <div onClick={openUserProfile} className='flex gap-2 items-center cursor-pointer'>
                    <img src={user.imageUrl} className='w-8 rounded-full' alt="" />
                    <div>
                        <h1 className='text-sm font-medium'>{user.fullName}</h1>
                        <p className='text-xs text-gray-500'>
                            <Protect plan='premium' fallback="Free">Premium</Protect>
                            <span> Plan</span>
                        </p>
                    </div>

                </div>
                <LogOutIcon onClick={signOut} className='w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer' />

            </div>


        </div>
    );
};

export default Sidebar;