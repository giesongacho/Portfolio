
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="h-[30vh] dark:bg-slate-900 dark:text-white flex flex-col flex-nowrap ">
      <div className="h-3/4 grid grid-cols-5">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h2 className="h-1/4 flex items-center text-center text-[1rem] font-bold">Categories</h2>
          <ul className="h-3/4 font-semibold text-[0.8]">
            <li className="hover:docoration hover:underline cursor-pointer">
              <a>Home</a>
            </li>
            <li className="hover:docoration hover:underline cursor-pointer">
              <a>About</a>
            </li>
            <li className="hover:docoration hover:underline cursor-pointer">
              <a>Info</a>
            </li>
            <li className="hover:docoration hover:underline cursor-pointer">
              <a>Project</a>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h2 className="h-1/4 flex items-center justify-center font-bold text-[1rem]">Contact</h2>
          <div className="h-3/4 w-full  flex flex-col">
            <div className="ml-2 h-full flex flex-col justify-between">
              <i className="text-2xl cursor-pointer">
                <FaFacebook />
              </i>
              <i className="text-2xl cursor-pointer">
                <SiGmail />
              </i>
              <i className="text-2xl cursor-pointer">
                <FaInstagramSquare />
              </i>
            </div>
            <h2 className="text-center font-semibold text-[0.8rem]">
              giesongacho1@gmail.com
            </h2>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <h2 className="h-1/4 flex justify-center items-center font-bold text-[1rem]">
            Skillset
          </h2>
          <div className="h-3/4 flex items-center justify-center flex-wrap text-[0.8rem] p-2">
            <span> HTML | CSS | TAILWIND | JS | REACT</span>
          </div>
        </div>
      </div>

      <div className="h-1/4 flex items-center justify-center text-[0.8rem]">
        <h2>&copy; 2024 Copyright GG. All rights reserved</h2>
      </div>
    </div>
  );
}
export default Footer;