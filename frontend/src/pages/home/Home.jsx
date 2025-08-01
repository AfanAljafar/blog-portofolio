import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionOne from "../../components/sectionOne/SectionOne";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";
import SectionFour from "../../components/sectionFour/SectionFour";
import SectionFive from "../../components/sectionFive/SectionFive";
import SectionSix from "../../components/sectionSix/SectionSix";
import SectionSeven from "../../components/sectionSeven/SectionSeven";

const Home = ({
  sectionHomeRef,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
  section6Ref,
  section7Ref,
}) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scrollTo");

    if (scrollTarget === "sectionOne" && sectionHomeRef?.current) {
      sectionHomeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, sectionHomeRef]);

  useEffect(() => {
    window.scrollTo(0, 0); // automatically scroll up when page is opened
  }, []);
  return (
    <div className="home text-antiquewhite bg-sky-950 bg-repeat">
      <SectionOne
        intro={"Hi, I'm Afan Aljafar 👋"}
        role={"Junior Fullstack Developer"}
        summary={`I’m a Bachelor of Electrical and Electronic Engineering graduate from Telkom University (2021) with a strong interest in technology, systems development, and innovation.
          Experienced as a Sales Engineer at PT Tayoh Sarana Sukses (2025), Engineering and Maintenance Unit Head 'Glaze Application section' at PT. Mulia Keramik Indah Raya (2023).
          I am transitioning from a career in Maintenance and Sales Engineering to Full-Stack Development or Software and Hardware Programming.
          `}
        programmingExperience={"1 - 2 Years"}
        mainLang={"JavaScript, Python"}
        totalProjects={"10+ Projects"}
        gpa={"2.89 / 4.00"}
        ref={sectionHomeRef}
      />
      <SectionTwo
        titleSection={"About Me"}
        summarySection={"To Infinity and Beyond!"}
        selfDesc={`My Name is Afan, I’m a Bachelor of Electrical Engineering
                graduate from Telkom University (2021) with a strong interest in
                technology, systems development, and innovation. My background
                gave me a solid foundation in electrical and electronic systems,
                problem-solving, teamwork, and technical analysis skills.
                Experienced as a Sales Engineer at PT Tayoh Sarana Sukses
                (2025), Engineering and Maintenance Unit Head 'Glaze Application
                section' at PT. Mulia Keramik Indah Raya (2023), Instrument
                Maintenance intern staff at PT. Pupuk Kujang and Civil
                Electrical Mechanical Maintenance (CME) Intern Staff at PT.
                Telekomunikasi Indonesia Tbk. (WITEL Karawang).`}
        myGoal={`I am transitioning from a career in Maintenance and Sales
                Engineering to Full-Stack Development or Software and Hardware
                Programming. I am driven by a strong passion for building
                scalable digital solutions and programming both software and
                hardware systems. With a foundation in electrical engineering
                and professional experience in maintenance and sales, with full
                commitment, I am shifting my career toward a focus on electrical
                engineering, software, and hardware programming to better align
                with my interest in technology development and innovation.`}
        name={` Muhammad Afan Aljafar`}
        birthDate={`June, 12 1998`}
        birthPlace={`Tangerang, Indonesia`}
        email={`muhammadafanaljafar@gmail.com`}
        phone={`+62 8528 3934 156`}
        univ={`Telkom University`}
        gpa={`2.89 / 4.00`}
        ref={section2Ref}
      />
      <SectionThree ref={section3Ref} />
      <SectionFour ref={section4Ref} />
      <SectionFive ref={section5Ref} />
      <SectionSix
        props={{
          testimonialTitle: `What People Say`,
          testimonialTagLine: ` Voices from clients, collaborators, and friends who have experienced
          my work`,
        }}
        ref={section6Ref}
      />
      <SectionSeven ref={section7Ref} />
    </div>
  );
};

export default Home;
