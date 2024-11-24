import React from 'react';
import axios from 'axios';
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
import { useState } from 'react'
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

export default function Signup() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [flag, setflag] = useState(false);
  const [flag2, setflag2] = useState(false);
  const userinfo = {
    username: username,
    password: password,
    email: email
  };
  const verify = (response) =>{
    console.log(response.message);
    if(response.message == 'Username already exists!'){
      setflag2(true);
      console.log('failed');
    }
    else if(response.message == 'Username successful'){
      console.log('success');
      setflag(false);
      axios.post('http://localhost:3000/signup',{userinfo}).then(response => (console.log(response.data))).catch(err => console.log(err))
      setusername('');
      setpassword('');
      setemail('');
      navigate(routes.HOME);
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
          Signup for QALBEATZ
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
            if(userinfo.username == '' || userinfo.password == '' || userinfo.email == '' || !(/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(userinfo.email))){
              setflag(true);
              return;
            }
            setusername('');
            setpassword('');
            setemail('');
            axios.post('http://localhost:3000/signup2',{userinfo}).then(response => (verify(response.data))).catch(err => console.log(err))
          }}
        >
           <FormInput
            type="text"
            id="email"
            name="email"
            hintText="Email"
            setParentValue={setemail}
          />

          <FormInput
            type="text"
            id="username"
            name="username"
            hintText="Username"
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
            Sign Up
          </PrimaryButton>
        </form>
          {flag ? <h1 style={{color:"red", textAlign:"center"}}>please enter valid values for all fields</h1> : undefined}
          {flag2 ? <h1 style={{color:"red", textAlign:"center"}}>username already exists</h1> : undefined}
        <div className="flex flex-col gap-5 items-center text-center">
          <Link to="#" text="Forgot your password?" />

          <hr className="hidden md:block w-full border-t-[1px] mb-6 border-zinc-800" />

          <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
            <p className="text-zinc-400">Have an account?</p>
            <Link to={routes.LOGIN} text="Login to QALBEATZ" />
          </div>
        </div>
      </main>
    </div>
  );
}
