import Link from "next/link";

// components
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between max-w-2xl mx-auto py-5 px-4 lg:px-0">
      <Link href={"/"} className="font-bold text-3xl">
        <h1 className="text-black/70 dark:text-white/80">
          mark<span className="text-primary/70">slorach</span>.
        </h1>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
