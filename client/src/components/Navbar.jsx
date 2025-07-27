import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowBigLeft, ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();


    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between itmes-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer'>
            <img src={assets.logo} alt="" className='w-32 sm:w-44' onClick={() => {
                navigate('/')
            }} />

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
    )
}

export default Navbar