import VintageChair1 from "../../../public/Rectangle 13.png";
import VintageChair2 from "../../../public/Rectangle 14.png";
import VintageChair3 from "../../../public/Rectangle 15.png";

const Shop = () => {
  return (
    <div className="mx-6 lg:mx-56 mt-16">
      <div className="flex mt-8 justify-between">
        <h1 className="text-xl lg:text-5xl font-normal">Shop our favorites</h1>
        <a
          href="/"
          className="text-sm lg:text-lg font-barlow font-normal relative tracking-widest"
        >
          SHOP ALL
          <hr className="border-black" />
        </a>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between gap-20 flex flex-col justify-center items-center mt-14">
        <div className="lg:flex lg:flex-col">
          <div className="border-8 border-solid border-main-border my-3 lg:mb-0">
            <img className="" src={VintageChair1} alt="VintageChair1" />
          </div>
          <div className="flex justify-between mt-2">
            <h2 className="lg:text-2xl">Vintage Chair</h2>
            <a
              href="/"
              className="text-xs lg:text-lg text-end font-barlow font-normal relative tracking-widest mt-1"
            >
              SHOP
              <hr className="border-black" />
            </a>
          </div>
        </div>
        <div className="lg:flex lg:flex-col">
          <div className="border-8 border-solid border-main-border my-3 lg:mb-0">
            <img className="" src={VintageChair2} alt="VintageChair2" />
          </div>
          <div className="flex justify-between mt-2">
            <h2 className="lg:text-2xl">Vintage Chair</h2>
            <a
              href="/"
              className="text-xs lg:text-lg font-barlow font-normal relative tracking-widest mt-1"
            >
              SHOP
              <hr className="border-black" />
            </a>
          </div>
        </div>
        <div className="lg:flex lg:flex-col">
          <div className="border-8 border-solid border-main-border my-3 lg:mb-0">
            <img className="" src={VintageChair3} alt="VintageChair3" />
          </div>
          <div className="flex justify-between mt-2">
            <h2 className="lg:text-2xl">Vintage Chair</h2>
            <a
              href="/"
              className="text-xs lg:text-lg font-barlow font-normal relative tracking-widest mt-1"
            >
              SHOP
              <hr className="border-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
