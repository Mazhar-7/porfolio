import React, { useEffect, useRef, useLayoutEffect } from "react";
import SideBar from "../Components/SideBar";

import Projects from "./Projects";
import "./home.css";

const Home = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!container) return;
    const context = canvas.getContext("2d");

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    // console.log(`This is containerWidth ${containerWidth}`);
    // console.log(`This is containerHeight ${containerHeight}`);
    const dpr = window.devicePixelRatio;
    // console.log(`This canvas dpr ${dpr}`);
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    // console.log(`This canvas width ${canvas.width}`);
    // console.log(`This canvas width ${canvas.height}`);
    context.scale(dpr, dpr);
    context.lineWidth = 1;
    context.strokeStyle = "rgba(255, 255, 255, 0.3)"; // line  color with 50% opacity

    // Divide the numbers to get a closere ten
    function getSquareSize(containerWidth, containerHeight, tolerance = 2) {
      const minDimension = Math.min(containerWidth, containerHeight);
      for (let i = Math.floor(minDimension * 1); i > 0; i--) {
        if (Math.abs(containerWidth % i) <= tolerance && Math.abs(containerHeight % i) <= tolerance) {
          return i;
        }
      }
      return 1; // default to 1 if no suitable square size found
    }
    // console.log(
    //   `i am get Square size ${getSquareSize(containerWidth, containerHeight)}`
    // );

    const squareSize =Math.trunc(
      getSquareSize(containerWidth, containerHeight)
    );  // adjust this value to fit the container size
    // console.log(`This is trunc ${squareSize}`);

    function draw(width, height) {
      context.beginPath();
      context.rect(-width / 2, -height / 2, width, height);
      context.stroke();
    }

    for (let i = squareSize; i <= containerWidth; i += squareSize) {
      for (let j = squareSize; j <= containerHeight; j += squareSize) {
        context.save();
        context.translate(i, j);
        draw(squareSize, squareSize);
        context.restore();
      }
    }
  }, [canvasRef]);

  return (
    <>
      <SideBar />
      <section id="home">
        <div className="home-container" ref={containerRef}>
          <canvas ref={canvasRef} width={30} height={30} />
          <div className="blink-line"></div>
          <div className="blink-line"></div>
          <div className="blink-line"></div>
          <div className="blink-line"></div>
          <div className="home-intro">
            <h1>Assalam o alaikum</h1>
            <h3>Front End Developer</h3>
          </div>
        </div>
      </section>
      {/* <Steps /> */}
      <Projects />
    </>
  );
};

export default Home;
