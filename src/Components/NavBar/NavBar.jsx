import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="bg-slate-900 text-white pb-2 flex justify-between ">
      <div className="text-4xl ps-3 pt-3 w-40 ">
        <a href="/">TechTales</a>
      </div>
      <div className="flex justify-around items-center pt-3 gap-3">
        <form>
        <input
              type="search"
              placeholder="Search"
              className="focus:border-gray-500 focus:outline-none focus:ring focus:ring-blue-100 rounded-lg p-2  bg-slate-800 text-base border-indigo-900 border-2 w-96"
            />
        </form>
        <div className="text-3xl bg-gray-100 w-10 h-10 rounded ps-1 pt-1 cursor-pointer">
        <IoMdNotificationsOutline />
        </div>
        <div className="w-11 h-11 border rounded-full">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
