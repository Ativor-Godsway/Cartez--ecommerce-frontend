import { BsPerson } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <header className="flex justify-between py-2 px-5 items-center z-20 fixed w-full bg-white">
      <Link to={"/"}>
        <h1 className="text-4xl">Cartez</h1>
      </Link>
      <nav className=" hidden md:flex gap-3">
        <ul>
          <Link
            to={"/shop"}
            className="font-semibold text-[1.2rem] border border-transparent hover:border-b-4 hover:border-b-black px-3 transition-all duration-200"
          >
            All
          </Link>
        </ul>
        <ul>
          <Link
            to={"/streetwear"}
            className="font-semibold text-[1.2rem] border border-transparent hover:border-b-4 hover:border-b-black px-3 transition-all duration-200"
          >
            Streetwear
          </Link>
        </ul>
        <ul>
          <Link
            to={"/shoes"}
            className="font-semibold text-[1.2rem] border border-transparent hover:border-b-4 hover:border-b-black px-3 transition-all duration-200"
          >
            Shoes
          </Link>
        </ul>
        <ul>
          <Link
            to={"/accessories"}
            className="font-semibold text-[1.2rem] border border-transparent hover:border-b-4 hover:border-b-black px-3 transition-all duration-200"
          >
            Accessories
          </Link>
        </ul>
        <ul>
          <Link
            to={"/formal-wear"}
            className="font-semibold text-[1.2rem] border border-transparent hover:border-b-4 hover:border-b-black px-3 transition-all duration-200"
          >
            Formal Wear
          </Link>
        </ul>
      </nav>
      <div className="flex gap-4 items-center">
        <IoIosSearch className="size-6 md:hidden" />
        <label className="input items-center border p-1 rounded-full hidden md:flex ">
          <IoIosSearch size={25} />
          <input
            type="search"
            required
            placeholder="Search"
            className="active:border-0"
          />
        </label>

        <Link to={"/cart"}>
          <div className="indicator relative">
            <IoBagOutline size={30} />
            <span className="badge badge-sm indicator-item bg-transparent border border-none  text-black absolute  top-[19px] right-[15px]">
              {totalQuantity}
            </span>
          </div>
        </Link>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <BsPerson className=" size-8" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <Link to={"/cart"}>Account</Link>
            </li>
            <li>
              <Link to={"/cart"}>Orders</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
          </ul>
        </div>

        <IoIosMenu className=" md:hidden size-10" />
      </div>
    </header>
  );
};

export default Navbar;
