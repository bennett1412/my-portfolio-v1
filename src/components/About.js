import whoami from "../whoami.png";
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Bennett. <br />
            <br className="hidden lg:inline-block" /> And I like building web apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a student at School of Engineering, Cochin University of
            Science and Technology.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
             Connect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-blue-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:shadow-md rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={whoami} //add a photo why use svg
          />
        </div>
      </div>
    </section>
  );
};

export default About;
