import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { NavItem } from "../interfaces/index";

interface Props {
  items: NavItem[];
}

const MobileNav = ({ items }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className={buttonVariants({ variant: "secondary" })}
        >
          <Menu className="h-[1.2rem] w-[1.2rem] cursor-pointer" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-3 py-6 justify-center items-center">
          {items.map((item) => (
            <li key={item.label}>
              <NavLink to={item.to} onClick={() => setOpen(false)}>
                <p className="font-medium text-muted-foreground text-xl">{item.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
