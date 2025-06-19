import ModalCard from "../../components/modal/ModalCard";
import "./MiniProject.css";

const minisproject = [
  {
    titleModal: "Temperature Converter",
    desModal: "Temperature Converter",
    image: process.env.PUBLIC_URL + "/temperaturConvert.png",
  },
  {
    titleModal: "Mini Project 2",
    desModal: "Mini Project 2",
    image: process.env.PUBLIC_URL + "miniproject2",
  },
  {
    titleModal: "Mini Project 3",
    desModal: "Mini Project 3",
    image: process.env.PUBLIC_URL + "miniproject3",
  },
];

const MiniProject = () => {
  return (
    <div className="mini-project-page">
      <h2 className="title-page-mini-project">Mini Project.</h2>
      <div>
        <div className="grid-container">
          {minisproject.map((item, index) => (
            <ModalCard
              key={index}
              titleModal={item.titleModal}
              desModal={item.desModal}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniProject;
