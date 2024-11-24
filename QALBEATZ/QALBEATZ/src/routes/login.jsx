import Logo from "../components/Logo";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import ThirdPartyAuthButton from "../components/Buttons/ThirdPartyAuthButton";
import FormInput from "../components/FormInput";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Link from "../components/Link";
import { useNavigate } from "react-router-dom";
import { routes } from "../shared/routes";
import { useState } from 'react';
import axios from 'axios';
import { user_id } from '../shared/routes';
import { u_id } from '../components/UserNavbar';
import {us_id } from '../components/UserSideMenu';
import {username_id} from '../routes/journal';
import {usr_id} from '../routes/userhome';

const authProviders = [
  {
    icon: faGoogle,
    name: "Google",
  },
  {
    icon: faFacebook,
    name: "Facebook",
  },
  {
    icon: faApple,
    name: "Apple",
  },
];

export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const userinfo = {
    username: username,
    password: password
  };
  const [flag, setflag] = useState(false);
  const verify = async(response) =>{
    let userid;
    console.log(response.message);
    if(response.message == 'Login successful!'){
      try{
        const axiosres = await axios.get('http://localhost:3000/userid',{params: {username: userinfo.username}})
        userid = axiosres.data[0].user_id;
        //localStorage.setItem('userid',userid);
        //user_id(userid)
        console.log(userid)
        user_id(userid);
        u_id(userid);
        us_id(userid);
        username_id(userid);
        usr_id(userid)
        const loggedRoute = routes.LOGGED.replace(':userid',userid)
        navigate(loggedRoute)
        //navigate(routes.LOGGED)
    }
    catch(error){
      console.log('error')
    }
    }
    else if(response.message == 'retrieval failed'){
      setflag(true);
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-stretch font-body bg-black md:bg-gradient-to-b md:from-zinc-900 md:to-black">
      <header className="py-12 md:py-8 px-8 md:px-12 md:mb-8 bg-black">
        <nav>
          <a href={routes.HOME} className="outline-none">
          </a>
        </nav>
      </header>

      <main className="self-center w-full max-w-[46rem] flex flex-col items-stretch gap-8 px-8 md:px-28 md:py-20 pb-20 md:rounded-lg bg-black">
        <h1 className="text-3xl md:text-[2.9rem] md:text-center md:mb-7 font-extrabold">
          Log in to QALBEATZ
        </h1>
        <div className="flex flex-col gap-2 md:px-[5.5rem]">
          {authProviders.map((provider) => (
            <ThirdPartyAuthButton
              key={provider.name}
              icon={provider.icon}
              provider={provider.name}
            />
          ))}
        </div>

        <hr className="border-t-[1px] border-zinc-800" />

        <form
          className="flex flex-col gap-5 md:px-[5.5rem]"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(userinfo);
            axios.post('http://localhost:3000/login',{userinfo}).then(response => (verify(response.data)))
            .catch(err => console.log(err))
          }}
        >
          <FormInput
            type="text"
            id="username"
            name="username"
            hintText="Username or Email"
            setParentValue={setusername}
          />

          <FormInput
            type="password"
            id="password"
            name="password"
            hintText="Password"
            setParentValue={setpassword}
          />

          <PrimaryButton type="submit" className="mt-5" style={{ color: "#a1051c" }}>
            Log In
          </PrimaryButton>
        </form>
          {flag ? <h1 style={{color: "red",textAlign: "center"}}>Incorrect username or password</h1> : undefined}
        <div className="flex flex-col gap-5 items-center text-center">
          <Link to="#" text="Forgot your password?" />

          <hr className="hidden md:block w-full border-t-[1px] mb-6 border-zinc-800" />

          <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
            <p className="text-zinc-400">Don&apos;t have an account?</p>
            <Link to={routes.SIGNUP} text="Sign up for QALBEATZ" />
          </div>
        </div>
      </main>
    </div>
  );
}