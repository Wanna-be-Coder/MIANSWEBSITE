import React from "react";
import TabButton from "../TabButton/TabButton";
import style from "../../styles/ServiceSection.module.css";
import { brandGuideLineText } from "./paragraphs";
import Image from "next/image";
import BrandGuideLineImage from "./brandGuideLine.svg";

export const ServiceSection = () => {
  return (
    <div>
      <div className="logo">
        <h1>Our Service</h1>
        <p style={{ textAlign: "center" }}>
          We are a one stop solution for all your digital needs. Our main
          objective is <br /> to satisfy the ever-evolving digital experience of
          your clients and business <br /> through our strategies and flexible
          end-to-end services.
        </p>
      </div>
      <br />
      <div className={style.tabSections}>
        <TabButton name="Brand Strategy" />
        <TabButton name="Business Development" />
        <TabButton name="Design" />
        <TabButton name="Web Application" />
      </div>
      <br />

      <div className={style.description}>
        <p className={style.half}>
          {" "}
          <br /> <br />
          {brandGuideLineText}
        </p>
        <div>
          <Image
            src={BrandGuideLineImage}
            alt="BrandGuideLine"
            className={style.half}
            width={418.7}
            height={421.18}
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
