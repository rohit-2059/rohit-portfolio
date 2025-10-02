import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconFolderOpen,
  IconMail,
} from "@tabler/icons-react";

const Navigation = () => {
  const navLinks = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-primary" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-primary" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconFolderOpen className="h-full w-full text-primary" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-primary" />
      ),
      href: "#contact",
    },
  ];

  return (
    <FloatingDock items={navLinks} orientation="vertical" />
  );
};

export default Navigation;
