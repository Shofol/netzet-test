import Image from "next/image";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="flex justify-between w-full items-center lg:items-start lg:my-8">
      <div className="flex flex-1 justify-center lg:justify-start">
        <Image src={"/logo.svg"} width={170} height={73} alt="logo" />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
