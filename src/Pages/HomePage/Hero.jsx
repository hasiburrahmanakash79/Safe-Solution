

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/blue-skyline-with-modern-construction-site-silhouettes-building-with-scaffolds_88272-8833.jpg?semt=ais_hybrid&w=740')" }}
            ></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-8  max-w-7xl mx-auto">
                <div>
                    <h1 className="text-5xl font-bold">Safe solution International</h1>
                    <p className="text-xl my-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos,
                        voluptatem rerum, tenetur iusto magni quia doloribus dicta atque facere
                        pariatur consequatur itaque? Praesentium itaque neque nulla provident at,
                    </p>
                    <div className="flex gap-4">
                        <button className="px-10 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white">
                            See Detail
                        </button>
                    </div>
                </div>
                <div className="p-5">
                    {/* You can add extra content or leave empty */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
