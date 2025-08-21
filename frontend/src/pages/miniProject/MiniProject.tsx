import { useEffect, type ReactNode } from "react";
import ModalCard from "../../components/modalMiniProject/ModalCard";
import ShopingCart from "../../components/shopingCart/ShopingCart";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import TodoApp from "../../components/toDoApp/ToDoApp";
import UnitsConverter from "../../components/unitsConverter/UnitsConverter";
import SignInForm from "../../components/signInForm/SignInForm";
import { minisProjectData } from "./dataMiniProject";

const renderMap: Record<string, () => ReactNode> = {
  "units-converter": () => <UnitsConverter />,
  "sign-up-form": () => <SignUpForm />,
  "sign-in-form": () => <SignInForm />,
  "to-do-app": () => <TodoApp />,
  "shoping-cart": () => <ShopingCart />,
};

const Fallback = () => <div className="text-white">Component not found</div>;

const MiniProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // automatically scroll up when page is opened
  }, []);

  return (
    <div className="min-h-screen bg-sky-950 px-4 py-8 ">
      <h2 className="text-center text-2xl md:text-3xl pt-[60px] font-bold text-white mb-2">
        Mini Project.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {minisProjectData.map((item, index) => (
          <ModalCard
            key={item.key || index}
            titleModal={item.titleModal}
            desModal={item.desModal}
            image={item.image}
            component={renderMap[item.key] ?? Fallback}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniProject;
