import { NavLink } from "react-router-dom";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { ModeToggle } from "./ui/ModeToggle";
import MobileNav from "./MobileNav";

const navItems = [
  { label: "Transactions", to: "/transactions" },
  { label: "Account", to: "/account" },
];

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 inset-x-0 h-fit py-4 bg-card">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="col-span-1 flex items-center">
              <NavLink to="/">
                <p className="text-2xl font-black tracking-tighter">BAKAR</p>
              </NavLink>
            </div>

            <div className="hidden md:flex md:col-span-1 md:gap-4 md:justify-center md:items-center">
              {navItems.map((item) => (
                <NavLink to={item.to}>
                  <p className="font-medium text-foreground">{item.label}</p>
                </NavLink>
              ))}
            </div>

            <div className="col-span-1 flex justify-end items-center gap-4">
              <ModeToggle />
              <div className="md:hidden">
                <MobileNav items={navItems} />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
