import { MouseEventHandler } from "react";

export interface ButtonProps {
    title:string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface NavbarProps {
    menuClick: () => void;
  }

export interface MenuProps {
    menuClick: () => void;
    active:boolean;
  }  

export interface HeaderProps{
  title:String;

}  