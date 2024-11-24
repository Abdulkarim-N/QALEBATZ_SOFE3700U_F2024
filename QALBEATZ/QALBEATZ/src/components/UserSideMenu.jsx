import SectionContainer from "./SectionContainer";
import { faAreaChart, faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import { paths, routes } from "../shared/routes";
import SideMenuButton from "./Buttons/SideMenuButton";
import { useLocation } from "react-router-dom";
let uid = '';
export const us_id = (userid) => {
  uid = userid
  console.log(uid + 'in button file')

}
let usid = '';
export const usER_id = (userid) => {
  usid = userid
  console.log(usid + 'in button file')
}
export default function UserSideMenu() {
  const location = useLocation();

  const buttons = [
    {
      icon: faHome,
      label: "Home",
      href: routes.LOGGED.replace(':userid',uid),
    },
    {
      icon: faBook,
      label: "Journal Entries",
      href: `${paths.LOGGED.replace(":userid", usid)}/journalist`,

    },
    {
      icon: faAreaChart,
      label: "Statistics",
      //href: `${paths.LOGGED.replace(":userid", usid)}/journalist`,

    },
  ];

  console.log("Buttons array:", buttons);

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