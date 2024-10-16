import React from "react";

function Footer() {
  return (
    <div className="sticy bg-white w-full h-10 m- text-black flex  justify-center items-center border-t-4 border-orange-500">
      <div className="flex flex-wrap  justify-center text-center">
        <h4 className="p-2">© All rights reserved</h4>

        <h4 className="p-2">-- Sonna Ajay,</h4>
        <div className="flex justify-center text-center items-center">
          <button className="m-1">Contact : </button>
          <h4 className="m-1">sonnaajay16@gmail.com</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
