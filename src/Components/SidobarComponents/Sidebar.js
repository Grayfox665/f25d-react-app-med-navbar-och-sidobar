import "./Sidebar.css";
import LinkComponent from "../LinkComponent";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <LinkComponent name="Uppgift 2" link="#" />
      <LinkComponent name="Uppgift 3" link="#" />
    </aside>
  );
}
