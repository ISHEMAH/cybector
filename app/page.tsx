"use client"
import Image from "next/image";
import "@fontsource/poppins"; 
import { Navbar } from "@/components";
import {Hero} from "@/components";
import Menu from "@/components/Menu";
import { useState } from "react";
import {Partners} from "@/components";



export default function Home() {
  const [menu, setMenu] = useState(false);

  function toggleMenu(){
    setMenu(!menu);
  }


  return (
    <main className="w-full h-screen relative overflow-x-hidden">
      <Navbar menuClick={toggleMenu}/>
      <Menu menuClick={toggleMenu} active={menu}/>
      <Hero/>
      <Partners/>
    </main>
  );
}


