"use client";
import { usePathname } from "next/navigation";
import TopMenu from "./topMenu/TopMenu";
import Navbar from "./nav/Nav";
import classes from "./header.module.css";

export default function Header() {
  const pathname = usePathname();

  let variant = "default";
  if (pathname.startsWith("/forex")) variant = "forex";
  else if (pathname.startsWith("/crypto")) variant = "crypto";
  else if (pathname.startsWith("/contact-us")) variant = "contact";
  else if (pathname.startsWith("/checkout")) variant = "checkout";
   else if (pathname.startsWith("/login")) variant = "login";
   else if (pathname.startsWith("/forgetpass")) variant = "forgetpass";
   else if (pathname.startsWith("/signup")) variant = "signup";

  return (
    <header className={classes.header}>
      <TopMenu />
      <Navbar variant={variant} />
    </header>
  );
}
