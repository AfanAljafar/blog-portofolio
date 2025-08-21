import React, { useEffect } from "react";
import concept from "../../assets/flow-concept.png";
import erd from "../../assets/inventory_management.png";

const InventoryManager = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // automatically scroll up when page is opened
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-sky-950 px-4 py-8">
      <div className="flex flex-col w-full pt-[60px] text-white text-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Inventory Manager App Project
        </h2>
        <p>Approaching to Enterprise Resource Planning App</p>
        <div className="flex flex-wrap justify-center items-center mb-1">
          <p>Repository:&nbsp;</p>
          <a href="https://github.com/AfanAljafar/inventory-manager-angular-go.git" target="_blank" rel="noopener noreferrer" className="leading-tight break-words underline underline-offset-4 hover:no-underline">https://github.com/AfanAljafar/inventory-manager-angular-go.git</a>
        </div>
        <button className="bg-slate-700 md:w-lg w-xs rounded-md">Demo</button>
      </div>
      <div className="flex flex-col md:flex-row text-white">
        <div className="fex-1 flex flex-col md:w-[40dvw] px-6 py-4">
          <h3 className="text-xl underline underline-offset-4 mb-2">
            Introduction
          </h3>
          <p className="text-justify font-light md:mb-4">
            &nbsp;&nbsp;&nbsp;&nbsp;This project is a comprehensive inventory
            management system that allows users to manage products, suppliers,
            and customers. It includes features for adding, editing, and
            deleting items, as well as viewing detailed information about each
            item.
          </p>
          <div className="md:hidden flex flex-col">
            <h3 className="text-xl mb-2 underline underline-offset-4">
              Flow Concept
            </h3>
            <img
              src={concept}
              alt="Inventory Manager Project Concept"
              className="w-[450px] rounded-lg shadow-lg "
            /></div>
          <div className="flex flex-col ">
            <ul className="list-disc list-inside space-y-3">
              <li className="text-xl underline underline-offset-4">
                Problem Statement
              </li>
              <div className="md:hidden flex flex-col"><p className="text-justify font-light">
              Many small to medium-sized businesses struggle with managing their
              inventory due to a lack of proper tools. Issues include inaccurate
              stock levels, limited user access control, and the absence of
              real-time tracking of goods in and out. There is also a need to
              differentiate user roles, such as administrators and regular
              users, for accountability and security purposes.
            </p></div>
              <li className="text-xl underline underline-offset-4">
                Objectives
              </li>
              <div className="md:hidden flex flex-col ml-4"><ul className="list-disc list-inside text-justify font-light space-y-4">
              <li>
                To develop a responsive and user-friendly Inventory Management
                Web Application
              </li>
              <li>
                To provide CRUD functionality for both inventory items and user
                management
              </li>
              <li>
                To implement role-based access control (Admin & Regular User)
              </li>
              <li>
                To track inventory transactions with timestamps and user
                identification
              </li>
              <li>
                To enhance business operations through digitalization and data
                transparency
              </li>
            </ul></div>
              <li className="text-xl underline underline-offset-4">
                Eternity Relationship Diagram
              </li>
              <div className="md:hidden flex flex-col"> <img
              src={erd}
              alt="Inventory Manager Project Concept"
              className="w-[530px] rounded-lg shadow-lg "
            /></div>
              <li className="text-xl underline underline-offset-4">
                Solution Approach and Tech Stack
              </li>
              <div className="md:hidden flex flex-col ml-14"><ul className="list-disc list-inside text-justify font-light space-y-4">
                <li>Frontend: Angular JS, Tailwind CSS</li>
                <li>Backend: Go, Echo V4</li>
                <li>Database: PostgreSQL</li>
                <li>Hashing: bcrypt</li>
                <li>Authentication: JWT</li>
              </ul></div>
            </ul>
          </div>
        </div>
        <div className="fex-1 md:flex flex-col hidden md:w-[60dvw] px-5 py-4 max-h-[62dvh] overflow-y-auto">
          <div className="flex flex-col h-full w-full items-center mb-28">
            <h3 className="text-xl mb-2 underline underline-offset-4">
              Flow Concept
            </h3>
            <img
              src={concept}
              alt="Inventory Manager Project Concept"
              className="w-[450px] rounded-lg shadow-lg "
            />
          </div>
          <div className="flex flex-col items-center w-full min-h-[62dvh] pt-8 mb-28">
            <h3 className="text-xl mb-2 underline underline-offset-4">
              Problem Statement
            </h3>
            <p className="text-justify font-light">
              Many small to medium-sized businesses struggle with managing their
              inventory due to a lack of proper tools. Issues include inaccurate
              stock levels, limited user access control, and the absence of
              real-time tracking of goods in and out. There is also a need to
              differentiate user roles, such as administrators and regular
              users, for accountability and security purposes.
            </p>
          </div>
          <div className="flex flex-col items-center w-full min-h-[62dvh] pt-8 mb-28">
            <h3 className="text-xl mb-2 underline underline-offset-4">
              Objectives
            </h3>
            <ul className="list-disc list-inside text-justify font-light space-y-4">
              <li>
                To develop a responsive and user-friendly Inventory Management
                Web Application
              </li>
              <li>
                To provide CRUD functionality for both inventory items and user
                management
              </li>
              <li>
                To implement role-based access control (Admin & Regular User)
              </li>
              <li>
                To track inventory transactions with timestamps and user
                identification
              </li>
              <li>
                To enhance business operations through digitalization and data
                transparency
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-full min-h-[62dvh] pt-8 mb-28">
            <h3 className="text-xl mb-2 underline underline-offset-4">
              Eternity Relationship Diagram
            </h3>
            <img
              src={erd}
              alt="Inventory Manager Project Concept"
              className="w-[530px] rounded-lg shadow-lg "
            />
          </div>
          <div className="container2 flex flex-col w-full min-h-[62dvh] pt-8 ">
            <h3 className="text-xl mb-2 underline text-center underline-offset-4">
              Solution Approach and Tech Stack
            </h3>
            <div className="ml-14">
              <ul className="list-disc list-inside text-justify font-light space-y-4">
                <li>Frontend: Angular JS, Tailwind CSS</li>
                <li>Backend: Go, Echo V4</li>
                <li>Database: PostgreSQL</li>
                <li>Hashing: bcrypt</li>
                <li>Authentication: JWT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryManager;
