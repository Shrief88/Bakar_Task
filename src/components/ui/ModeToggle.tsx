import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/Theme";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return theme === "dark" ? (
    <Button variant={"secondary"} size="icon" onClick={() => setTheme("light")}>
      <Sun className="h-[1.2rem] w-[1.2rem] cursor-pointer" />
    </Button>
  ) : (
    <Button variant={"secondary"} size="icon" onClick={() => setTheme("dark")}>
      <Moon className="h-[1.2rem] w-[1.2rem] cursor-pointer" />
    </Button>
  );
}
