import { Outlet } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer/Footer";
import UserSidebar from "../components/UserSideBar";




export default function User() {
  return (
    <div className="h-screen min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 bg-black">
      <UserSidebar />

      <SectionContainer className="overflow-auto relative bg-local bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900">
        <header className="sticky top-0 px-7 py-5 bg-[hsla(0,0%,7%,0.7)] mb-[-4rem] z-50">
          <UserNavbar />
        </header>

        <main>
          <Outlet />
        </main>

        <Footer />
      </SectionContainer>
    </div>
  );
}
