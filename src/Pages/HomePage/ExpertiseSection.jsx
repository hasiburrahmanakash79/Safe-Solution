import { FaCamera, FaPlayCircle, FaEnvelope, FaStar, FaWifi, FaSnowflake, FaThumbtack, FaCheckCircle, FaEye, FaEdit, FaLightbulb } from 'react-icons/fa';

const iconsLeft = [
    { icon: <FaCamera />, color: 'bg-blue-500' },
    { icon: <FaPlayCircle />, color: 'bg-blue-400' },
    { icon: <FaEnvelope />, color: 'bg-purple-500' },
    { icon: <FaStar />, color: 'bg-blue-300' },
    { icon: <FaWifi />, color: 'bg-teal-400' },
    { icon: <FaSnowflake />, color: 'bg-purple-300' },
    { icon: <FaThumbtack />, color: 'bg-purple-700' },
];

const features = [
    {
        icon: <FaCheckCircle className="text-blue-500" />,
        title: 'Nulla lobortis nunc',
        desc: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
    {
        icon: <FaEye className="text-teal-500" />,
        title: 'Vestibulum faucibus',
        desc: 'In id nisi id neque venenatis molestie Quisque lacinia purus ut libero facilisis.',
    },
    {
        icon: <FaEdit className="text-purple-500" />,
        title: 'Suspendisse porttitor',
        desc: 'Unc quis sem quis velit tincidunt congue a sit amet ante.',
    },
    {
        icon: <FaLightbulb className="text-yellow-500" />,
        title: 'Ut sed eros',
        desc: 'In hac habitasse platea dictumst. In mi nulla, fringilla vestibulum finibus et.',
    },
];

const ExpertiseSection = () => {
    return (
        <section className=" max-w-7xl mx-auto py-16 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left section with diamond and icons */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] flex items-center justify-center lg:block">
                {/* For small devices, show only text */}
                <div className="block lg:hidden text-center text-blue-500 font-bold text-xl sm:text-2xl">
                    Our Expertise
                </div>
                {/* For larger devices, show the design */}
                <div className="hidden lg:block">
                    <div className="absolute w-full h-full border-2 border-blue-200 rotate-45 rounded-xl"></div>
                    <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] border-2 border-blue-300 rotate-45 rounded-xl"></div>
                    <div className="absolute w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] bg-blue-500 rotate-45 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm sm:text-xl font-bold rotate-[-45deg]">Our Expertise</span>
                    </div>
                    {/* Floating icons */}
                    {iconsLeft.map((item, i) => (
                        <div
                            key={i}
                            className={`absolute p-2 rounded-full text-white shadow-lg ${item.color}`}
                            style={{
                                transform: `rotate(${(360 / iconsLeft.length) * i}deg) translate(140px) rotate(-${(360 / iconsLeft.length) * i}deg)`
                            }}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right content */}
            <div className="max-w-full lg:max-w-2xl text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                    A successful project is built with a successful team.
                </h2>
                <p className="text-gray-600 mb-8">
                    Which is why we provide you with the human resources you need to build whenever you need them.
                    Your team is dedicated to your projects. And the team is flexible!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <div className="text-2xl">{item.icon}</div>
                            <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;




// import { FaCamera, FaPlayCircle, FaEnvelope, FaStar, FaWifi, FaSnowflake, FaThumbtack, FaCheckCircle, FaEye, FaEdit, FaLightbulb } from 'react-icons/fa';

// const iconsLeft = [
//     { icon: <FaCamera />, color: 'bg-blue-500' },
//     { icon: <FaPlayCircle />, color: 'bg-blue-400' },
//     { icon: <FaEnvelope />, color: 'bg-purple-500' },
//     { icon: <FaStar />, color: 'bg-blue-300' },
//     { icon: <FaWifi />, color: 'bg-teal-400' },
//     { icon: <FaSnowflake />, color: 'bg-purple-300' },
//     { icon: <FaThumbtack />, color: 'bg-purple-700' },
// ];

// const features = [
//     {
//         icon: <FaCheckCircle className="text-blue-500" />,
//         title: 'Nulla lobortis nunc',
//         desc: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//     },
//     {
//         icon: <FaEye className="text-teal-500" />,
//         title: 'Vestibulum faucibus',
//         desc: 'In id nisi id neque venenatis molestie Quisque lacinia purus ut libero facilisis.',
//     },
//     {
//         icon: <FaEdit className="text-purple-500" />,
//         title: 'Suspendisse porttitor',
//         desc: 'Unc quis sem quis velit tincidunt congue a sit amet ante.',
//     },
//     {
//         icon: <FaLightbulb className="text-yellow-500" />,
//         title: 'Ut sed eros',
//         desc: 'In hac habitasse platea dictumst. In mi nulla, fringilla vestibulum finibus et.',
//     },
// ];

// const ExpertiseSection = () => {
//     return (
//         <section className="bg-white py-16 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
//             {/* Left section with diamond and icons */}
//             <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
//                 {/* Background diamonds */}
//                 <div className="absolute w-full h-full border-2 border-blue-200 rotate-45 rounded-xl"></div>
//                 <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] border-2 border-blue-300 rotate-45 rounded-xl"></div>
//                 <div className="absolute w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] bg-blue-500 rotate-45 rounded-xl flex items-center justify-center">
//                     <span className="text-white text-sm sm:text-xl font-bold rotate-[-45deg]">Our Expertise</span>
//                 </div>
//                 {/* Floating icons */}
//                 {iconsLeft.map((item, i) => (
//                     <div
//                         key={i}
//                         className={`absolute p-2 rounded-full text-white shadow-lg ${item.color}`}
//                         style={{
//                             transform: `rotate(${(360 / iconsLeft.length) * i}deg) translate(140px) rotate(-${(360 / iconsLeft.length) * i}deg)`
//                         }}
//                     >
//                         {item.icon}
//                     </div>
//                 ))}
//             </div>

//             {/* Right content */}
//             <div className="max-w-full lg:max-w-2xl text-center lg:text-left">
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
//                     A successful project is built with a successful team.
//                 </h2>
//                 <p className="text-gray-600 mb-8">
//                     Which is why we provide you with the human resources you need to build whenever you need them.
//                     Your team is dedicated to your projects. And the team is flexible!
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {features.map((item, i) => (
//                         <div key={i} className="flex gap-3 items-start">
//                             <div className="text-2xl">{item.icon}</div>
//                             <div>
//                                 <h4 className="font-semibold">{item.title}</h4>
//                                 <p className="text-sm text-gray-600">{item.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ExpertiseSection;