import miniProject from "../../assets/miniProject.png";
import inProgress from "../../assets/in-progress.jpeg";

export type DataProject = {
  title: string;
  content: string;
  image: string;
  path: string;
};

export const dataProject: DataProject[] = [
  {
    title: "Mini Project",
    content: "kompilasi mini project",
    image: miniProject,
    path: "/mini-project",
  },
  {
    title: "Microcontroller Project",
    content: "IOT Web-ESP32",
    image: inProgress,
    path: "/microcontroller-project",
  },
  {
    title: "Project Inventory Manager",
    content: `Inventory Manager App Project\n(Approaching to Enterprise Resource Planning)\nAngular JS - GO`,
    image: inProgress,
    path: "/project-inventory-manager",
  },
  {
    title: "Project 4",
    content: "dekripsi singkat project.",
    image: inProgress,
    path: "",
  },
  {
    title: "Project 5",
    content: "dekripsi singkat project.",
    image: inProgress,
    path: "",
  },
  {
    title: "Project 6",
    content: "dekripsi singkat project.",
    image: inProgress,
    path: "",
  },
  {
    title: "Project 7",
    content: "dekripsi singkat project.",
    image: inProgress,
    path: "",
  },
  {
    title: "Project 8",
    content: "dekripsi singkat project.",
    image: inProgress,
    path: "",
  },
  {
    title: "Project 9",
    content: "dekripsi singkat project.",
    image: inProgress,
    path: "",
  },
  {
    title: "Project 10",
    content: "dekripsi singkat project.",
    image: inProgress,
    path: "",
  },
];
