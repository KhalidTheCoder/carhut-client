import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            title: "Special Financing Offers",
            description: "Our stress-free finance department can find financial solutions to save you money.",
            icon: (
               <img className="mb-4" src="https://i.ibb.co.com/MxFMPTcS/f1-svg.png" alt="" />
            )
        },
        {
            title: "Trusted Car Dealership",
            description: "Our stress-free finance department can find financial solutions to save you money.",
            icon: (
               <img className="mb-4" src="https://i.ibb.co.com/Jj2qrvpq/f2-svg-fill.png" alt="" />
            )
        },
        {
            title: "Transparent Pricing",
            description: "Our stress-free finance department can find financial solutions to save you money.",
            icon: (
                <img className="mb-4" src="https://i.ibb.co.com/C35qMP9t/f3-svg-fill.png" alt="" />
            )
        },
        {
            title: "Expert Car Service",
            description: "Our stress-free finance department that can find financial solutions to save you money.",
            icon: (
               <img className="mb-4" src="https://i.ibb.co.com/p6BQwn1T/f4-svg-fill.png" alt="" />
            )
        }
    ];

    return (
        <div className="text-black w-full max-w-7xl px-4 mx-auto py-6 md:py-12 mt-8">
            <h2 className="text-xl md:text-3xl font-bold mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start text-left">
                        {feature.icon}
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;