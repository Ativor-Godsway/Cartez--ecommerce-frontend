import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero h-[80vh] flex flex-col  items-center justify-end pb-5 md:pb-20 text-white bg-cover  bg-center bg-[url('/banner2.jpg')] lg:bg-[url('/banner4.jpg')] relative"
      // style={{
      //   backgroundImage: `url(banner2.jpg)`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "top",
      // }}
    >
      <div className="h-[50%] w-full absolute  bottom-0 left-0 bg-gradient-to-t from-[#000000bf]  to-transparent"></div>
      <h1 className="text-7xl z-10 ">Cartez</h1>
      <p className="text-center text-xl md:text-2xl z-10">
        Break the rules, own the streets, and make every outfit a statement.{" "}
        <br />
        Your style, your story — unapologetically bold.
      </p>
      <Link to={"/shop"} className="z-10">
        <button className="btn bg-white text-[1.2rem] text-black border border-black px-5 py-1 mt-5 rounded-full hover:bg-[#c1c1c1] ">
          Shop
        </button>
      </Link>
    </div>
  );
};

export default Hero;
