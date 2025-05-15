import "./Navbar.css";
import LinkComponent from "../LinkComponent";
import { useState } from "react";

export default function NavBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <nav className="Navbar" onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
      <button className="sidebar-toggle"></button>
      <LinkComponent name="Home" link="#" />
      <LinkComponent name="About" link="#" />
      <LinkComponent name="Contact us" link="#" />
    </nav>
  );
}
