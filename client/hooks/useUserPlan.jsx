import { useState, useEffect } from 'react';

const useUserPlan = (user) => {
    const [userPlan, setUserPlan] = useState('free');

    useEffect(() => {
        if (user) {
            // Method 1: Check from Clerk user metadata
            const plan = user.publicMetadata?.plan || user.privateMetadata?.plan || 'free';
            setUserPlan(plan);

            // Method 2: Alternative - check from your backend API
            // fetchUserPlan(user.id).then(plan => setUserPlan(plan));
        }
    }, [user]);

    // Check if user can access premium features
    const canAccessPremiumFeature = (item) => {
        return !item.premium || userPlan === 'premium';
    };

    return {
        userPlan,
        canAccessPremiumFeature
    };
};

export default useUserPlan;