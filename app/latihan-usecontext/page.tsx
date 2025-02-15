"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
import Button from "../component/button";

function Page() {
  const appContext = useContext(AppContext);
  const { toggleTheme, logout, isAuthenticated } = appContext || {};

  const router = useRouter();

  const defaultColor = "#ef4444";
  const [colors, setColors] = useState<string[][]>(
    Array.from({ length: 3 }, () =>
      Array.from({ length: 5 }).map(() => defaultColor)
    )
  );
  const [lastPosition, setLastPosition] = useState({ row: -1, col: -1 });



  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const handleMouseMove = (rowIndex: number, colIndex: number) => {
    if (lastPosition.row !== rowIndex || lastPosition.col !== colIndex) {
      const newColors = colors.map((row) =>
        row.map(() => generateRandomColor())
      );
      setColors(newColors);
      setLastPosition({ row: rowIndex, col: colIndex });
    }
  };

  const handleMouseLeave = () => {
    setColors(
      Array.from({ length: 3 }, () =>
        Array.from({ length: 5 }).map(() => defaultColor)
      )
    );
    setLastPosition({ row: -1, col: -1 });
  };

  if (!appContext) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center p-5">
        <h1 className="text-3xl font-bold text-center mb-5">Belajar usecontext</h1>
        <div className="grid grid-cols-5 gap-1" onMouseLeave={handleMouseLeave}>
          {colors.map((colorRow, rowIndex) =>
            colorRow.map((color, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="h-32 w-48 transition-colors duration-100"
                style={{ backgroundColor: color }}
                onMouseEnter={() => handleMouseMove(rowIndex, colIndex)}
              ></div>
            ))
          )}
        </div>
        <div className="mt-10 flex gap-3">
          <Button
            title="Ubah Tema"
            colorSchema="blue"
            variant="outline"
            onClick={toggleTheme}
          >
            Ubah Tema
          </Button>
        </div>
      </div>
    </>
  );
}

export default Page;
