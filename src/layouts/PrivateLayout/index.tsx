
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

export default function PrivateLayout() {
  return (
    <main style={{ background: "#383838", minHeight: `100vh` }}>
      <TopBar />
      <section>
        <Outlet />
      </section>
    </main>
  );
}
