import SectionContainer from "./SectionContainer";
import { faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import { paths, routes } from "../shared/routes";
import SideMenuButton from "./Buttons/SideMenuButton";
import { useLocation } from "react-router-dom";
import useJournalist from "../hooks/useJournalist"; 
let uid = '';
export const us_id = (userid) => {
  uid = userid
  console.log(uid + 'in button file')
}
export default function UserSideMenu() {
  const location = useLocation();

  
  const journalistId = "1"; 
  const [journalist] = useJournalist(journalistId); 

  const buttons = [
    {
      icon: faHome,
      label: "Home",
      href: routes.LOGGED.replace(':userid',uid),
    },
    {
      icon: faBook,
      label: "Journal Entries",
      //href: journalist ? `${paths.JOURNALLIST.replace(":journalistId", journalist.id)}` : "#",
    },
  ];

  return (
    <SectionContainer className="gap-6 px-6 py-5">
      {buttons.map((button) => (
        <SideMenuButton
          key={button.label}
          href={button.href}
          icon={button.icon}
          label={button.label}
          active={location.pathname === button.href}
        />
      ))}
    </SectionContainer>
  );
}