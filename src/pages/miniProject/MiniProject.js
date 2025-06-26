import ModalCard from "../../components/modal/ModalCard";
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
    titleModal: "Mini Project 2",
    desModal: "Mini Project 2",
    image: process.env.PUBLIC_URL + "miniproject2",
    component: SignUpForm,
  },
  {
    titleModal: "Mini Project 3",
    desModal: "Mini Project 3",
    image: process.env.PUBLIC_URL + "miniproject3",
    component: ToDoList,
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
