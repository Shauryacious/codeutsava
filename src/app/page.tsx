import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "./IntroScreen.css"; // Use regular CSS
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="overlay">
          <Spline scene="https://prod.spline.design/ZYfAHRKDyhrSAhoD/scene.splinecode" />
        </div>
        <div className="content">
          <h1 className="heading">Codeutsava 8.0</h1>
          <Link className="button" href="/home">
            Explore
          </Link>
        </div>
      </section>
    </>
  );
}
