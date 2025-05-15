import React, { useState } from 'react'
import emoji from "../assets/smileemoji.png"

const THILife = () => {

    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { id: "all", label: "All" },
        { id: "diwali", label: "Diwali" },
        { id: "birthday", label: "Birthday" },
        { id: "ganpati", label: "Ganpati" }
    ];

    const tabContents = {
        all: "This is the Profile tab content.",
        diwali: "This is the Dashboard tab content.",
        birthday: "This is the Settings tab content.",
        ganpati: "This is the Contacts tab content."
    };

    return (
        <>
            <section className='py-[100px]'>
                <div className="container">
                    <div className="row">
                        <div className="text-center mb-5">
                            <h6 className='text-[18px] sm:text-[20px] md:text-[26px] font-Secondary font-semibold capitalize '>Explore life</h6>
                            <h2 className='text-[38px] dark:text-Primary font-Secondary font-bold pb-[15px] sm:pb-0s flex items-center justify-center gap-2'>Celebrations, Functions, Festivals and much more! <img src={emoji} alt={emoji} className='w-10 h-10' /></h2>
                        </div>
                        {/* <div className="w-full px-[100px]">

                        </div> */}


                        <div className="px-[200px]">
                            <div className="mb-4">
                                <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" role="tablist">
                                    {tabs.map((tab) => (
                                        <li key={tab.id} className="me-2" role="presentation">
                                            <button
                                                className={`text-[16px]  inline-block p-4 border-b-2 rounded-t-lg font-Secondary ${activeTab === tab.id
                                                    ? 'text-Primary border-Primary'
                                                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                                    }`}
                                                onClick={() => setActiveTab(tab.id)}
                                                type="button"
                                                role="tab"
                                                aria-selected={activeTab === tab.id}
                                            >
                                                {tab.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div id="default-tab-content" className="w-full">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === tab.id ? '' : 'hidden'
                                            }`}
                                        role="tabpanel"
                                        aria-labelledby={`${tab.id}-tab`}
                                    >
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            This is the <strong className="font-medium text-gray-800 dark:text-white">{tab.label} </strong> content.
                                            <br />
                                            {tabContents[tab.id]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default THILife



// import React, { useState } from 'react';
// import emoji from "../assets/smileemoji.png";

// const THILife = () => {
//     const [activeTab, setActiveTab] = useState("profile");

//     const tabs = [
//         { id: "profile", label: "Profile" },
//         { id: "dashboard", label: "Dashboard" },
//         { id: "settings", label: "Settings" },
//         { id: "contacts", label: "Contacts" }
//     ];

//     const tabContents = {
//         profile: "This is the Profile tab content.",
//         dashboard: "This is the Dashboard tab content.",
//         settings: "This is the Settings tab content.",
//         contacts: "This is the Contacts tab content."
//     };

//     return (
//         <section className='py-[100px]'>
//             <div className="container">
//                 <div className="row">
//                     <div className="text-center">
//                         <h6 className='text-[18px] sm:text-[20px] md:text-[26px] font-Secondary font-semibold capitalize'>
//                             Explore life
//                         </h6>
//                         <h2 className='text-[38px] dark:text-Primary font-Secondary font-bold pb-[15px] sm:pb-0s flex items-center justify-center gap-2'>
//                             Celebrations, Functions, Festivals and much more!
//                             <img src={emoji} alt="emoji" className='w-10 h-10' />
//                         </h2>
//                     </div>

//                     {/* Tabs */}
//                     <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
//                         <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
//                             {tabs.map((tab) => (
//                                 <li key={tab.id} className="me-2" role="presentation">
//                                     <button
//                                         className={`inline-block p-4 border-b-2 rounded-t-lg ${
//                                             activeTab === tab.id
//                                                 ? 'text-blue-600 border-blue-600'
//                                                 : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
//                                         }`}
//                                         onClick={() => setActiveTab(tab.id)}
//                                         type="button"
//                                         role="tab"
//                                         aria-selected={activeTab === tab.id}
//                                     >
//                                         {tab.label}
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Tab Content */}
//                     <div id="default-tab-content" className="w-full">
//                         {tabs.map((tab) => (
//                             <div
//                                 key={tab.id}
//                                 className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
//                                     activeTab === tab.id ? '' : 'hidden'
//                                 }`}
//                                 role="tabpanel"
//                                 aria-labelledby={`${tab.id}-tab`}
//                             >
//                                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                                     This is the <strong className="font-medium text-gray-800 dark:text-white">{tab.label} tab</strong> content.
//                                     <br />
//                                     {tabContents[tab.id]}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default THILife;
