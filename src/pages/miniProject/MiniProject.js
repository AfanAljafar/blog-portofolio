import ModalCard from "../../components/modal/ModalCard";
import OnlineShop from "../../components/onlineShop/OnlineShop";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import ToDoList from "../../components/toDoList/ToDoList";
import UnitsConverter from "../../components/unitsConverter/UnitsConverter";
import "./MiniProject.css";

const minisProject = [
  {
    titleModal: "Temperature Converter",
    desModal: "Temperature Converter",
    image: process.env.PUBLIC_URL + "/temperaturConvert.png",
    component: UnitsConverter,
  },
  {
    titleModal: "Sign Up Form",
    desModal: "Sign Up Form",
    image: process.env.PUBLIC_URL + "miniproject2",
    component: SignUpForm,
  },
  {
    titleModal: "To Do List",
    desModal: "To Do List",
    image: process.env.PUBLIC_URL + "miniproject3",
    component: ToDoList,
  },
  {
    titleModal: "Online Shop",
    desModal: "Online Shop",
    image: process.env.PUBLIC_URL + "miniproject3",
    component: OnlineShop,
  },
];

const MiniProject = () => {
  return (
    <div className="mini-project-page">
      <h2 className="title-page-mini-project">Mini Project.</h2>
      <div>
        <div className="grid-container">
          {minisProject.map((item, index) => (
            <ModalCard
              key={index}
              titleModal={item.titleModal}
              desModal={item.desModal}
              image={item.image}
              component={item.component}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniProject;
