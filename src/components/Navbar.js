import { ArrowRightIcon } from "@heroicons/react/solid";
import styled from 'styled-components';
const navLink = styled.a`
  color:red;
  &:hover{
    color:red;
  }
`;
const Navbar = () => {
  
  return (
    <header className="bg-gray-100 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-gray-900 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Bennett
          </a>
        </a>
        <nav className="text-gray-800 md:mr-auto md:ml-4 md:py-1 md:pl-3 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
         <navLink>hello</navLink>
          <a href="#skills" className="mr-5 hover:text-blue-900">
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:shadow-md hover:bg-white rounded text-gray-900 mt-4 md:mt-0"
        >
          Connect with Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
