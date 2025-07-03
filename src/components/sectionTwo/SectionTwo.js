import React, { forwardRef } from "react";
import {
  Clock,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  User,
  Award,
} from "lucide-react";
import profileImage from "../../assets/profile-linkedin.jpg";

const SectionTwo = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-w-screen min-h-screen pt-[72px] px-[30px]"
    >
      <div className="flex flex-col m-[20px]">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Aboute Me
        </h1>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Kolom Kiri: Gambar Profil */}
        <div className="flex-shrink-0 w-full md:w-2/3 lg:w-1/3 flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={profileImage}
              alt="Afan Aljafar Profile"
              className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full rounded-md object-cover"
            />
          </div>
        </div>

        {/* Kolom Kanan: Konten Deskripsi & Info Pribadi */}
        <div className="flex-grow w-full lg:w-2/3 text-gray-800">
          {/* Bagian "Who Am I" dan "My Approach" */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Who Am I Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center md:items-start md:text-left">
              <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                <Clock size={24} />
              </div>
              <h2 className="text-xl font-bold mb-2">Who Am I</h2>
              <p className="text-sm leading-relaxed">
                I'm a frontend developer who crafts responsive, interactive, and
                clean UIs. With a background in Informatics Engineering, I blend
                design sense with technical logic.
              </p>
            </div>

            {/* My Approach Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center md:items-start md:text-left">
              <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                <MapPin size={24} />{" "}
                {/* Ikon ini sesuai gambar lebih ke arah location/map pin */}
              </div>
              <h2 className="text-xl font-bold mb-2">My Approach</h2>
              <p className="text-sm leading-relaxed">
                I focus on user-centered design, performance, and accessibility,
                always evolving with modern tech to deliver seamless digital
                experiences.
              </p>
            </div>
          </div>

          {/* Bagian "Personal Info" */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <User size={24} />
              </div>
              <h2 className="text-xl font-bold">Personal Info</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-sm">
              {/* Info Baris 1 */}
              <div className="flex items-center gap-3">
                <div className="text-blue-600">
                  <User size={18} />
                </div>
                <p>
                  <span className="font-semibold">Name:</span> Muhammad Afan
                  Aljafar
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-600">
                  <Calendar size={18} />
                </div>
                <p>
                  <span className="font-semibold">Date of Birth:</span> June, 12
                  1998
                </p>
              </div>

              {/* Info Baris 2 */}
              <div className="flex items-center gap-3">
                <div className="text-blue-600">
                  <MapPin size={18} />
                </div>
                <p>
                  <span className="font-semibold">Place of Birth:</span>{" "}
                  Tangerang, Indonesia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-600">
                  <Mail size={18} />
                </div>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  muhammadafanaljafar@gmail.com
                </p>
              </div>

              {/* Info Baris 3 */}
              <div className="flex items-center gap-3">
                <div className="text-blue-600">
                  <Phone size={18} />
                </div>
                <p>
                  <span className="font-semibold">Phone:</span> +62 8528 3934
                  156
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-600">
                  <GraduationCap size={18} />
                </div>
                <p>
                  <span className="font-semibold">Education:</span> Telkom
                  University
                </p>
              </div>

              {/* Info Baris 4 (GPA) */}
              <div className="flex items-center gap-3 col-span-1 sm:col-span-2">
                {/* GPA mengambil seluruh lebar di mobile, tapi 2 kolom di sm ke atas */}
                <div className="text-blue-600">
                  <Award size={18} />
                </div>
                <p>
                  <span className="font-semibold">GPA:</span> 3.55 / 4.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div
    //
    //   className="section-three flex flex-col min-h-screen bg-transparent"
    // >
    //   <div className="box-title-s3 flex w-full justify-center">
    //     <h1 className="sect3Title mt-[25px] text-[60px]">about.</h1>
    //   </div>
    //   <p className="desc-about text-base p-[35px] text-center">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
    //     leo vel ligula convallis, nec sodales ligula aliquam. Integer eu
    //     venenatis risus, a aliquam velit. In hac habitasse platea dictumst.
    //     Curabitur laoreet, nibh non congue malesuada, justo metus ultrices enim,
    //     eu hendrerit nibh risus vitae augue. Vivamus porttitor tortor non tellus
    //     ornare pretium. Fusce commodo, nunc ornare pellentesque viverra, ante
    //     est volutpat justo, at luctus felis odio at felis. Vivamus dolor arcu,
    //     imperdiet eu urna sit amet, bibendum tempor augue. Nam tincidunt ante in
    //     odio tempus porttitor. Nam faucibus lobortis diam, quis consectetur
    //     nulla aliquam eget. Class aptent taciti sociosqu ad litora torquent per
    //     conubia nostra, per inceptos himenaeos. Nulla eleifend turpis ac mi
    //     pellentesque, at auctor risus vehicula. Sed ornare nisi leo, id maximus
    //     massa scelerisque non.
    //   </p>
    // </div>
  );
});

SectionTwo.displayName = "SectionTwo";
export default SectionTwo;
