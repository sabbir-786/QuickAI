import { PricingTable } from '@clerk/clerk-react';

const PricingCards = () => {
    return (
        <div className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. No hidden fees, no surprises.
                    </p>
                </div>

                {/* Pricing Table */}
                <div className="flex justify-center mb-20">
                    <PricingTable />
                </div>

            </div>
        </div>
    );
};

export default PricingCards;
