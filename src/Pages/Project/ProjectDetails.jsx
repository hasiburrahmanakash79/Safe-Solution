import SectionTitle from "../../components/SectionTitle";

const ProjectDetails = () => {
  return (
    <div>
      <SectionTitle title="Project Details" />
      <div className=" max-w-7xl mx-auto mt-10">
        <img
          src="https://castro.jamstacktemplates.dev/assets/img/projects/project-details.jpg"
          alt=""
          className="w-full object-cover"
        />

        <div className="grid grid-cols-3 gap-10 my-10 ">
          <div className="col-span-1">
            <div className="bg-gray-500 text-white p-5 mx-auto">
              <h3 className="text-2xl font-bold mb-6">Project Information</h3>
              <div className="space-y-4 text-base">
                <div className="flex justify-between border-b border-gray-600 pb-2">
                  <span className="font-semibold">Client:</span>
                  <span>RRS Company</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                  <span className="font-semibold">Location:</span>
                  <span>San Francisco</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                  <span className="font-semibold">Area(sf):</span>
                  <span>550,000 sf</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                  <span className="font-semibold">Year:</span>
                  <span>2019</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                  <span className="font-semibold">Budget:</span>
                  <span>$245000000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-semibold">Architect:</span>
                  <span>Scott &amp; Austin</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-4xl font-bold mb-2">Mountain Tunnel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quia autem, odit, suscipit asperiores quam adipisci id culpa
              quaerat voluptas, esse facilis quasi unde corporis sapiente
              molestiae quas? Maxime blanditiis praesentium ab maiores, ex quasi
              minus totam aut, inventore similique nulla sed corporis ullam
              eaque iure? Reiciendis, consequatur quidem. Ex aut sint
              blanditiis, culpa aperiam quasi tenetur repellendus deleniti ut,
              rerum non, eligendi cumque quae atque delectus ipsam
              exercitationem doloribus eum animi modi soluta quis? Incidunt,
              impedit! Cumque repellat nemo necessitatibus fugit nostrum
              voluptatem incidunt quam in fugiat est delectus adipisci dolores,
              deserunt beatae, recusandae amet labore? Omnis, dolorum culpa.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              adipisci nihil necessitatibus nemo in quos laboriosam neque
              expedita ducimus animi provident facilis, voluptatibus, odit hic
              praesentium veritatis a et est quae culpa eos, aperiam architecto?
              Earum sed ut error totam, cupiditate distinctio itaque doloribus
              aspernatur suscipit maxime recusandae sequi culpa unde
              consequuntur assumenda dolorem, debitis fuga quos eum libero natus
              deserunt quam. Unde error, itaque modi nam ad voluptatibus
              perspiciatis maxime excepturi cumque rem distinctio repudiandae.
              Voluptates incidunt molestiae, ipsa placeat ducimus pariatur rem
              ullam iure recusandae debitis laborum, voluptas modi
              necessitatibus atque aliquam deserunt perspiciatis. Quis provident
              sit quisquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
