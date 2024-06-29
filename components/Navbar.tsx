import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ToggleTheme";

function Navbar() {
  return (
    <nav className="flex justify-between bg-muted py-4 sm:px-16 lg:px-24 px-4  items-center ">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center  gap-x-4 w-full">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
export default Navbar;
