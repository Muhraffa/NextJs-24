import React from "react";


interface inputFormProps {
  isError?: boolean;
  messageError?: string;
  id: string | number;
  nama: string;
  value: string | number | undefined;
  
}


const Inputform = ( {isError, messageError, id, nama, value} : inputFormProps) => {
  return (
    <>
    <input type="text" className="border border-black rounded-sm text-black px-4" id={""} value={value}  /> 
    {isError ? <span className="text-red-500">{messageError}</span> : null}
    </>
  );
};


export default Inputform; 

// px untuk mengatur jarak kana kiri