import React from 'react';
import CommonBanner from '../Components/CommonBanner'; // Assuming this component exists
import { FaHome } from 'react-icons/fa';

const CookiePage = () => {
    return (
        <main>
            {/*  Banner for the page title */}
       <div
           className={`banner w-full h-[150px]  flex flex-col justify-center items-center bg-[#F7F7F7]`}
       
         >
           <div className="text-center">
             <h1 className="text-[38px] font-semibold text-black capitalize">
               Cookie Policy
             </h1>
             <p className="text-[14px] text-black capitalize flex items-center gap-2 justify-center">
               <FaHome /> home / <span className="text-black">Cookie</span>
             </p>
           </div>
         </div>

            {/* Main content section for the cookie policy */}
            <section className="py-6 lg:py-10 bg-white">
                <div className="container">
                    <div className="prose lg:prose-lg max-w-none text-gray-700 px-4 sm:px-10 md:px-16 py-6 lg:px-32">
                        
                        {/* Section 1: Manage Your Cookies */}
                        <div className="mb-10">
                            <h2 className="text-base  font-bold text-gray-800 mb-2">
                                1. Manage Your Cookies
                            </h2>
                            <p className="leading-relaxed text-gray-500">
                                1.1 We use cookies when you visit the AA Sourcing LTD website, but you can control these through your browser settings. You can find out how to manage cookies on your devices below.
                            </p>
                        </div>

                        {/* Section 2: What are cookies? */}
                        <div className="mb-10">
                            <h2 className="text-base  font-bold text-gray-800 mb-2">
                                2. What are cookies?
                            </h2>
                            <p className="leading-relaxed text-gray-500">
                                2.1 Cookies are data files that can hold small amounts of information stored on your device (computer, smartphone, and other similar devices) when you first visit a website.
                            </p>
                        </div>

                        {/* Section 3: How do we use them */}
                        <div className="mb-10">
                            <h2 className="text-base  font-bold text-gray-800 mb-2">
                                3. How do we use them
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-500">
                                We use cookies for:
                            </p>
                            <ol className="list-decimal list-inside space-y-3 pl-2">
                                <li>Essential operations, like site navigation.</li>
                                <li>Allowing you to add items to your Wishlist or your Saved Items.</li>
                                <li>Analyzing visitor numbers and behaviors, such as what pages are frequently visited.</li>
                                <li>Assessing the success of our advertising campaigns, offers, and communications.</li>
                                <li>Targeting suitable advertising messages.</li>
                                <li>Understanding which Affiliates have helped us reach out to new customers or have promoted our products on their websites.</li>
                            </ol>
                        </div>

                        {/* Section 4: What types of cookies do we use */}
                        <div className="mb-10">
                            <h2 className="text-base  font-bold text-gray-800 mb-2">
                                4. What types of cookies do we use
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-500">
                                There are four main types.
                            </p>
                            <ol className="list-decimal list-inside space-y-4 pl-2">
                                <li>
                                    <strong className="font-semibold text-gray-800">Site functionality cookies</strong> – these allow you to navigate the site and use our features, such as "Add to Wishlist" and "Contact Us".
                                </li>
                                <li>
                                    <strong className="font-semibold text-gray-800">Site analytics cookies</strong> – These cookies allow us to measure and analyze how our customers use the site to improve both its functionality and your shopping experience.
                                </li>
                                <li>
                                    <strong className="font-semibold text-gray-800">Customer preference cookies</strong> – when you're browsing or contacting on AA Sourcing LTD website, these cookies will remember your preferences (like your language or location), so we can make your user experience as seamless as possible and more personal to you.
                                </li>
                                <li>
                                    <strong className="font-semibold text-gray-800">Targeting or advertising cookies</strong> – These are used to deliver ads relevant to you. They also limit the number of times that you see an ad and help us measure the effectiveness of our marketing campaigns.
                                </li>
                            </ol>
                        </div>

                        {/* Section 5: How to manage cookies */}
                        <div>
                            <h2 className="text-base  font-bold text-gray-800 mb-2">
                                5. How to manage cookies
                            </h2>
                            <p className="leading-relaxed text-gray-500">
                                5.1 Most browsers allow you to manage cookies saved on your device – just head to the help section of your browser. But do not forget, that if you modify your settings to block all cookies, you may not be able to access parts of our site or our service.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default CookiePage;