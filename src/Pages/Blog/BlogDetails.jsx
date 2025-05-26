import { FaTags, FaCalendarAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const BlogDetails = () => {
  return (
    <div className="">
      <SectionTitle title="Blog Details" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 max-w-7xl mx-auto">
        {/* Blog Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
            alt="blog"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
          <div className="text-sm text-gray-500 flex items-center gap-3">
            <span>By Admin</span> • <FaCalendarAlt /> <span>30 October 2019</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Smart Work Management: Tools and Techniques for Modern Projects
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sunt perspiciatis error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores voluptatibus dignissimos ullam mollitia quisquam architecto tenetur enim quasi laborum sequi, placeat beatae maiores facilis eligendi ipsum consectetur dolore eveniet.
          </p>
          <blockquote className="p-5 bg-gray-50 italic border-l-4 border-green-500 text-gray-700 rounded-md shadow-sm">
            “Smart work is not just about tools, its about choosing the right techniques at the right time. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam est minima laboriosam quam rem, excepturi vel vitae itaque iusto reiciendis voluptates facilis tempore accusantium dicta eveniet, blanditiis autem nisi iste!”
          </blockquote>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cumque saepe vitae, sunt quas aperiam itaque! Dolorem aliquam asperiores eaque. Aut doloremque, sed voluptatem vel quidem, alias commodi culpa, suscipit omnis dolorem vero! Ad doloremque eligendi maiores atque esse nihil!.
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Categories</h2>
            <ul className="space-y-3">
              {[
                "General Construction",
                "Equipment Installation",
                "Material Transport",
                "Architectural Design",
                "Painting & Finishing",
                "Plumbing Services",
                "Urban Development",
              ].map((category, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 cursor-pointer transition"
                >
                  <FaTags className="text-green-500" />
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Popular Posts</h2>
            <div className="space-y-5">
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition"
                >
                  <img
                    src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                    className="w-16 h-16 object-cover rounded"
                    alt="Popular"
                  />
                  <div className="text-sm">
                    <h3 className="font-semibold text-gray-800">
                      Tools and Techniques for Modern Projects
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <FaCalendarAlt /> May 16, 2024
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
