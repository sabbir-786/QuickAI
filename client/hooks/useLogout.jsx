import { useState } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const useLogout = (userPlan, user) => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const { signOut } = useClerk();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        setIsLoggingOut(true);

        try {
            // Clear any user-specific data based on plan
            if (userPlan === 'premium') {
                // Clear premium user data
                localStorage.removeItem('premium-user-data');
                localStorage.removeItem('premium-settings');
                // Cancel any ongoing premium operations
                // await cancelPremiumOperations();
            } else {
                // Clear free user data
                localStorage.removeItem('free-user-data');
                localStorage.removeItem('free-usage-limits');
            }

            // Clear common user data
            localStorage.removeItem('user-preferences');
            localStorage.removeItem('recent-activities');

            // Optional: Send logout analytics
            // await trackUserLogout(user.id, userPlan);

            // Perform Clerk logout
            await signOut();

            // Navigate to home page
            navigate('/');

        } catch (error) {
            console.error('Logout error:', error);
            // Still try to sign out even if cleanup fails
            await signOut();
            navigate('/');
        } finally {
            setIsLoggingOut(false);
        }
    };

    return {
        handleSignOut,
        isLoggingOut
    };
};

export default useLogout;