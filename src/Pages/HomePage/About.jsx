import { useState, useEffect } from "react";

const About = () => {
    const [employeeCount, setEmployeeCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 3 seconds
        const steps = 60; // Number of updates
        const interval = duration / steps;

        const animateCount = (target, setter) => {
            let current = 0;
            const increment = target / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setter(target);
                    clearInterval(timer);
                } else {
                    setter(Math.ceil(current));
                }
            }, interval);
        };

        animateCount(200, setEmployeeCount);
        animateCount(1220, setProjectCount);
        animateCount(300, setClientCount);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center min-h-[50vh] gap-5 p-5 max-w-7xl mx-auto">
            <div className="md:col-span-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    About Us
                </h1>
            </div>
            <div className="md:col-span-2">
                <p className="text-xl md:text-3xl text-center md:text-left">
                    Through our large capacity we dare to say we are different.
                </p>
                <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl md:text-4xl font-bold">+{employeeCount}</h1>
                            <div className="h-2 w-14 mx-auto bg-green-500 rounded-full my-5"></div>
                            <p className="text-lg md:text-xl uppercase">Employee</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl md:text-4xl font-bold">+{projectCount}</h1>
                            <div className="h-2 w-14 mx-auto bg-green-500 rounded-full my-5"></div>
                            <p className="text-lg md:text-xl uppercase">Projects</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl md:text-4xl font-bold">+{clientCount}</h1>
                            <div className="h-2 w-14 mx-auto bg-green-500 rounded-full my-5"></div>
                            <p className="text-lg md:text-xl uppercase">Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
