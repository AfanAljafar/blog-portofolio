import signuppict from "../../assets/signupthumbnail.png";
import signinpict from "../../assets/signinthumbnail.png";
import tempconv from "../../assets/temperaturConvert.png";

export type MiniProjectItem = {
  titleModal: string;
  desModal: string;
  image: string;
  key: string;
};

export const minisProjectData = [
  {
    titleModal: "Units Converter",
    desModal: "Units Converter",
    image: tempconv,
    key: "units-converter",
  },
  {
    titleModal: "Sign Up Form",
    desModal: "Sign Up Form",
    image: signuppict,
    key: "sign-up-form",
  },
  {
    titleModal: "Sign In Form",
    desModal: "Sign In Form",
    image: signinpict,
    key: "sign-in-form",
  },
  {
    titleModal: "To Do App",
    desModal: "To Do App",
    image: `/miniproject3.png`,
    key: "to-do-app",
  },
  {
    titleModal: "Shoping Cart",
    desModal: "Shoping Cart",
    image: `/miniproject4.png`,
    key: "shoping-cart",
  },
];
