import "./Navbar.css";
import LinkComponent from "../LinkComponent";

export default function NavBar() {
  return (
    <nav className="Navbar">
      <LinkComponent name="Home" link="#" />
      <LinkComponent name="About" link="#" />
      <LinkComponent name="Contact us" link="#" />
    </nav>
  );
}
