import Image from "next/image";
import Navigation from "../layout/Navigation";

const Header = () => {
  return (
    <header className="mt-4 flex w-full items-center justify-between lg:my-8 lg:items-start">
      <div className="flex flex-1 justify-center lg:justify-start">
        <Image src={"/logo.svg"} width={170} height={73} alt="logo" />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
