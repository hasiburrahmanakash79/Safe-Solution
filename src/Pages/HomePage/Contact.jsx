import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" max-w-7xl mx-auto px-20 py-16 rounded-3xl bg-green-500 text-white my-16 flex items-center gap-10">
      <div>
        <h1 className="text-3xl font-bold">Ready to get started ?</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laborum?
          Maxime sit in quis quo fugiat sint cum iste quisquam!
        </p>
      </div>
      <div className="w-36">
        <Link to='/contact' className="py-4 px-6 bg-white text-green-500 rounded-2xl">Contact Us</Link>
      </div>
    </div>
  );
};

export default Contact;
