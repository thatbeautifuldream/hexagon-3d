"use client";

import React, { useState } from "react";

const HexagonCube: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hexagon-cube"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`shape ${isHovered ? "cube" : "hexagon"}`}>
        <div className="face front"></div>
        {isHovered && (
          <>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </>
        )}
      </div>
      <style jsx>{`
        .hexagon-cube {
          width: 200px;
          height: 200px;
          perspective: 600px;
        }
        .shape {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: all 0.5s ease;
        }
        .hexagon {
          transform: rotateX(0deg) rotateY(0deg);
        }
        .cube {
          transform: rotateX(-25deg) rotateY(45deg);
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #3498db;
          border: 2px solid #2980b9;
          opacity: 0.8;
          transition: all 0.5s ease;
        }
        .hexagon .face {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
        .cube .face {
          clip-path: none;
        }
        .front {
          transform: rotateY(0deg) translateZ(100px);
        }
        .back {
          transform: rotateY(180deg) translateZ(100px);
        }
        .right {
          transform: rotateY(90deg) translateZ(100px);
        }
        .left {
          transform: rotateY(-90deg) translateZ(100px);
        }
        .top {
          transform: rotateX(90deg) translateZ(100px);
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(100px);
        }
      `}</style>
    </div>
  );
};

export default HexagonCube;
