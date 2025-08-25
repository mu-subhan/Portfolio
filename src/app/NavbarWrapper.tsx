"use client";
import { usePathname } from "next/navigation";
import Navbar from "../component/Navbar";
import MainNavbar from "../component/MainNavbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  if (pathname === "/") {
    return <Navbar />;
  } else {
    return <MainNavbar />;
  }
}
