"use client";
import Button from "../component/button";
import { useRef, useState } from "react";

const Home = () => {
  const targetAbout = useRef<HTMLDivElement>(null);
  const targetHome = useRef<HTMLDivElement>(null);
  const targetContent = useRef<HTMLDivElement>(null);

  const [contentText, setContentText] = useState("Content");

  const scrollToHome = () => {
    if (targetHome.current) {
      targetHome.current.classList.add('text-3xl');
      targetHome.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContent = () => {
    if (targetContent.current) {
      setContentText("Content");
      targetContent.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToAbout = () => {
    if (targetAbout.current) {
      const node = document.createElement("div");
      node.className = "text-white bg-red-500 p-2";
      const textnode = document.createTextNode("Water");
      node.appendChild(textnode);
      targetAbout.current.appendChild(node);

      targetAbout.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="h-screen w-screen">
      <nav className="h-[50px]">
        <Button
          onClick={scrollToHome}
          colorSchema="blue"
          variant="solid"
          title="Home"
        />
        <Button
          onClick={scrollToContent}
          colorSchema="red"
          variant="solid"
          title="Content"
        />
        <Button
          onClick={scrollToAbout}
          colorSchema="green"
          variant="solid"
          title="About"
        />
      </nav>
      <section className="h-[90%] overflow-auto">
        <div
          ref={targetHome}
          className="min-h-screen bg-red-500 flex items-center justify-center"
        >
          <h1 className="text-white">Home</h1>
        </div>
        <div
          ref={targetContent}
          className="min-h-screen bg-blue-500 flex items-center justify-center"
          onMouseEnter={() => setContentText("SMK MADINATUL QURAN")}
          onMouseLeave={() => setContentText("Content")}
        >
          <h1 className="text-white">{contentText}</h1>
        </div>
        <div
          ref={targetAbout}
          className="min-h-screen bg-yellow-500 flex items-center justify-center"
        >
          <h1 className="text-white">About</h1>
        </div>
      </section>
    </section>
  );
};

export default Home;