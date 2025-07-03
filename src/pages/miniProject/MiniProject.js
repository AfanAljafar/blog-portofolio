import ModalCard from "../../components/modal/ModalCard";
import OnlineShop from "../../components/onlineShop/OnlineShop";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import ToDoList from "../../components/toDoList/ToDoList";
import UnitsConverter from "../../components/unitsConverter/UnitsConverter";

const minisProject = [
  {
    titleModal: "Units Converter",
    desModal: "Units Converter",
    image: process.env.PUBLIC_URL + "/temperaturConvert.png",
    component: UnitsConverter,
  },
  {
    titleModal: "Sign Up Form",
    desModal: "Sign Up Form",
    image: process.env.PUBLIC_URL + "/miniproject2.png",
    component: SignUpForm,
  },
  {
    titleModal: "To Do List",
    desModal: "To Do List",
    image: process.env.PUBLIC_URL + "/miniproject3.png",
    component: ToDoList,
  },
  {
    titleModal: "Online Shop",
    desModal: "Online Shop",
    image: process.env.PUBLIC_URL + "/miniproject4.png",
    component: OnlineShop,
  },
];

const MiniProject = () => {
  return (
    <div className="min-h-screen bg-sky-950 px-4 py-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white pt-4 mb-8">
        Mini Project.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
  );
};

export default MiniProject;
