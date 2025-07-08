import React, { forwardRef } from "react";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  User,
  Award,
  Info,
  Goal,
  Download,
} from "lucide-react";
import profileImage from "../../assets/profile-linkedin.jpg";

const SectionTwo = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-w-screen min-h-screen pt-[72px] px-4">
      <div className="flex flex-col m-[10px]">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          {props.titleSection}
        </h1>
        <p className="text-white text-center">{props.summarySection}</p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* left column: profile picture */}
        <div className="flex-shrink-0 w-full md:w-2/3 lg:w-1/3 flex flex-col items-center gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={profileImage}
              alt="Afan Aljafar Profile"
              className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full rounded-md object-cover"
            />
          </div>
          <a
            href={`${process.env.PUBLIC_URL}/Curriculum-Vitae-Muhammad-Afan-Aljafar.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 py-2 px-28 rounded hover:bg-cyan-700 flex items-center gap-2 transition"
          >
            <Download size={16} />
            Download My CV
          </a>
        </div>

        {/* right column: context description */}
        <div className="flex-grow w-full lg:w-2/3 text-gray-800">
          {/* section card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Icon + Heading Sejajar */}
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Info size={24} />
                </div>
                <h2 className="text-xl font-bold">Who Am I</h2>
              </div>

              {/* Deskripsi */}
              <p className="indent-8 text-sm leading-relaxed text-justify">
                {props.selfDesc}
              </p>
            </div>

            {/* card 2*/}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Goal size={24} />
                </div>
                <h2 className="text-xl font-bold">My Goal</h2>
              </div>
              <p className="indent-8 text-sm leading-relaxed text-justify">
                {props.myGoal}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Personal info */}
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <User size={24} />
            </div>
            <h2 className="text-xl font-bold">Personal Info</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-sm">
            {/* info row 1 */}
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                <User size={18} />
              </div>
              <p>
                <span className="font-semibold">Name:</span>
                {props.name}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                <Calendar size={18} />
              </div>
              <p>
                <span className="font-semibold">Date of Birth:</span>
                {props.birthDate}
              </p>
            </div>

            {/* info row 2 */}
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                <MapPin size={18} />
              </div>
              <p>
                <span className="font-semibold">Place of Birth:</span>{" "}
                {props.birthPlace}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                <Mail size={18} />
              </div>
              <p>
                <span className="font-semibold">Email:</span> {props.email}
              </p>
            </div>

            {/* info row 3 */}
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                <Phone size={18} />
              </div>
              <p>
                <span className="font-semibold">Phone:</span> {props.phone}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                <GraduationCap size={18} />
              </div>
              <p>
                <span className="font-semibold">Education:</span> {props.univ}
              </p>
            </div>

            {/* info row 4 (ipk) */}
            <div className="flex items-center gap-3 col-span-1 sm:col-span-2">
              <div className="text-blue-600">
                <Award size={18} />
              </div>
              <p>
                <span className="font-semibold">GPA:</span> {props.gpa}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SectionTwo.displayName = "SectionTwo";
export default SectionTwo;
