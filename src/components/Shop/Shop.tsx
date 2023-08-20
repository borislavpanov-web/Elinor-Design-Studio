import VintageChair1 from "../../../public/Rectangle 13.png";
import VintageChair2 from "../../../public/Rectangle 14.png";
import VintageChair3 from "../../../public/Rectangle 15.png";

const Shop = () => {
  return (
    <div className="mx-6 lg:mx-44 mt-16">
      <div className="flex mt-8 justify-between">
        <h1 className="text-xl lg:text-4xl font-normal">Shop our favorites</h1>
        <a
          href="/"
          className="text-sm lg:text-base font-barlow font-normal relative tracking-widest"
        >
          SHOP ALL
          <hr className="border-black" />
        </a>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between flex flex-col justify-center items-center mt-14">
        <div className="lg:w-1/4 border-8 border-solid border-main-border my-3 lg:mb-0 w-2/3">
          <img className="w-full" src={VintageChair1} alt="VintageChair1" />
        </div>
        <h2 className="text-sm lg:text-2xl lg:hidden">Vintage Chair</h2>
        <a
          href="/"
          className="text-xs lg:text-base font-barlow font-normal relative tracking-widest mt-1 lg:hidden"
        >
          SHOP
          <hr className="border-black w-10 lg:w-24" />
        </a>
        <div className="lg:w-1/4 border-8 border-solid border-main-border my-3 lg:mb-0 w-2/3">
          <img className="w-full" src={VintageChair2} alt="VintageChair2" />
        </div>
        <h2 className="text-sm lg:text-2xl lg:hidden">Vintage Chair</h2>
        <a
          href="/"
          className="text-xs lg:text-base font-barlow font-normal relative tracking-widest mt-1 lg:hidden"
        >
          SHOP
          <hr className="border-black w-10 lg:w-24" />
        </a>
        <div className="lg:w-1/4 border-8 border-solid border-main-border my-3 w-2/3">
          <img className="w-full" src={VintageChair3} alt="VintageChair3" />
        </div>
        <h2 className="text-sm lg:text-2xl lg:hidden">Vintage Chair</h2>
        <a
          href="/"
          className="text-xs lg:text-base font-barlow font-normal relative tracking-widest mt-1 lg:hidden"
        >
          SHOP
          <hr className="border-black w-10 lg:w-24 " />
        </a>
      </div>
      <div className="flex-col lg:flex-row justify-between mt-6 hidden lg:flex">
        <div className="lg:w-1/4 text-center flex gap-20">
          <h2 className="text-sm lg:text-2xl">Vintage Chair</h2>
          <a
            href="/"
            className="text-xs lg:text-base font-barlow font-normal relative tracking-widest mt-1"
          >
            SHOP
            <hr className="border-black" />
          </a>
        </div>
        <div className="lg:w-1/4 text-center flex gap-20">
          <h2 className="text-sm lg:text-2xl">Vintage Chair</h2>
          <a
            href="/"
            className="text-xs lg:text-base font-barlow font-normal relative tracking-widest mt-1"
          >
            SHOP
            <hr className="border-black" />
          </a>
        </div>
        <div className="lg:w-1/4 text-center flex gap-20">
          <h2 className="text-sm lg:text-2xl">Vintage Chair</h2>
          <a
            href="/"
            className="text-xs lg:text-base font-barlow relative tracking-widest mt-1"
          >
            SHOP
            <hr className="border-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
