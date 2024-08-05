
import Link from "next/link";

const Header = () => {

  return (
    <header className="border-b border-black flex justify-between w-full">
      <nav className="flex gap-4 py-2">
        <Link
          href={"/products"}
          className="text-red-500 border border-red-500 p-2"
        >
         Products
        </Link>
        <Link
          href={"/food"}
          className="text-red-500 border border-red-500 p-2"
        >
          Food
        </Link>
        <Link
          href={"/movie"}
          className="text-red-500 border border-red-500 p-2"
        >
          Movie
        </Link>
      </nav>
    </header>
  );
};

export default Header;


