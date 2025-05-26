import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { FcBusinessman, FcHome, FcRating, FcStatistics } from "react-icons/fc";

const AboutUs = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div>
      <SectionTitle title="About Us" />
      {/* Main Content */}
      <div className="py-16 px-4  max-w-7xl mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="relative">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="https://castro.jamstacktemplates.dev/assets/img/about/about-3.jpg"
                    alt="Construction equipment"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors group">
                      <button
                        onClick={handlePlayVideo}
                        className="text-green-500 group-hover:text-white ml-1"
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <video
                  src="/your-video-file.mp4"
                  controls
                  autoPlay
                  className="w-full h-auto rounded-md"
                />
              )}
            </div>

            <div>
              <h3 className="text-green-500  font-medium mb-2">
                Welcome to Safe solution international
              </h3>
              <h2 className="text-3xl font-bold mb-6">
                50 Years of Experience in Industry
              </h2>

              <p className="text-gray-700 mb-6 font-medium">
                We are ready to build your dream home Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dolorum, beatae.
              </p>

              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                repudiandae odit dolorum quis laudantium impedit beatae
                perferendis natus, hic libero sed atque quibusdam possimus
                error, voluptate est molestiae doloremque necessitatibus illum
                rerum sunt! Ad sunt obcaecati voluptatem sint sequi quos, qui
                non deleniti a praesentium, sapiente accusantium odit.
              </p>

              <Link
                href="#"
                className="inline-block bg-green-500 hover:bg-green-600 rounded text-white px-6 py-3 font-medium transition-colors"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full bg-[url('https://t4.ftcdn.net/jpg/08/13/43/03/360_F_813430325_TXrckwQPj9GpiuCaYn2YM4P7v0h3OccK.jpg')] bg-fixed bg-no-repeat bg-cover">
          <div className="bg-black/60 text-white h-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-20 max-w-7xl mx-auto">
              <div className="flex flex-col items-center justify-center">
              <FcHome  className="text-7xl" />
                <h1 className="text-3xl md:text-4xl py-4 font-bold">
                  +{employeeCount}
                </h1>
                <p className="text-lg md:text-lg uppercase ">Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center">
              <FcBusinessman className="text-7xl" />
                <h1 className="text-3xl md:text-4xl py-4 font-bold">
                  +{projectCount}
                </h1>
                <p className="text-lg md:text-lg uppercase ">Clients</p>
              </div>
              <div className="flex flex-col items-center justify-center">
              <FcStatistics className="text-7xl"/>
                <h1 className="text-3xl md:text-4xl py-4 font-bold">
                  +{clientCount}
                </h1>
                <p className="text-lg md:text-lg uppercase ">success</p>
              </div>
              <div className="flex flex-col items-center justify-center">
              <FcRating className="text-7xl" />
                <h1 className="text-3xl md:text-4xl py-4 font-bold">
                  +{clientCount}
                </h1>
                <p className="text-lg md:text-lg uppercase ">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
