import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-w-[1100px] mx-auto ">
      <div className="justify-center grid items-center pb-8 text-center">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img src={logo} className="max-w-[340px]" alt="logo" />
          </Link>
        </div>
        <div>
          <h2 className="text-[30px] font-bold">Busca tus recetas favoritas</h2>
          <p className="max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            mollitia in porro. Ducimus animi, quas doloribus veniam ratione
            voluptates alias.
          </p>
        </div>
      </div>
      <img
        src="https://www.recetasnestle.com.do/sites/default/files/2023-03/banners_sancocho.jpg"
        alt=""
      />
    </section>
  );
};

export default Hero;
