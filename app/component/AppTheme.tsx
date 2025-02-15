"use client";
import { ReactNode, useContext } from "react";
import { AppContext } from "../context/AppContext";
import clsx from "clsx";
 
interface ThemeProps {
  title: string;
  children: ReactNode;
}
 
const AppTheme: React.FC<ThemeProps> = ({ title, children }) => {
  const appContext = useContext(AppContext);
  const { theme } = appContext;
  return (
    <>
      <header
        className={clsx(
          ` w-full  h-[5%] flex font-semibold items-center px-5 text-center justify-center`,
          {
            "bg-green-400": theme === "light",
            "bg-gray-800 text-white ": theme === "dark",
          }
        )}
      >
        {title}
      </header>
      <div
        className={clsx(` h-full w-full`, {
          "bg-gray-200": theme === "light",
          "bg-gray-800 text-white ": theme === "dark",
        })}
      >
        {children}
      </div>
    </>
  );
};
 
export default AppTheme;
 