"use client";
import { ChangeEvent, useState } from "react";
import Button from "../component/button";

function Home() {
  const addhandle = () => {
    setIdentitas((i) => {
      return [
        ...i,
        {
          nama: "isan",
          kelas: "XI RPL",
        },

        {
          nama: "budi",
          kelas: "XI RPL",
          Alamat: "jakarta",
        },
      ];
    });
  };

  interface Identitas {
    nama: string;
    kelas: string;
    Alamat?: string;
  }

  const [identitas, setIdentitas] = useState<Identitas[]>([
    // {
    //   nama: "isan",
    //   kelas: "XI RPL",
    // },
    // {
    //   nama: "budi",
    //   kelas: "XI RPL",
    //   Alamat: "jakarta",
    // },
  ]);

  const [nama, setNama] = useState("");

  const handleChange = (event: ChangeEvent<any>) => {
    console.log("value", event.target.value);
    console.log("name", event.target.name);
    console.log("pleaceholder", event.target.placeholder);
    console.log("id", event.target.id);
    setNama(event.target.value);
  };

  const handleSubmit = (id: number) => {
    console.log("id", id);
  }

  return (
    <div className="grid grid-cols-1 gap-3">
      {identitas.length === 0 ? (
        <p className="text-black text-3xl text-left mt-2">User Profile</p>
      ) : null}
      {identitas.map((item, index) => (
        <div key={index} className="flex gap-2 mt-5 text-black">
          <span>Nama : {item.nama}</span>
          <span>Kelas : {item.kelas}</span>
          <span>Alamat : {item.Alamat || "-"}</span>
        </div>
      ))}
      <button
        onClick={() => {
          addhandle();
        }}
        className="w-32 border rounded px-2 h-11 bg-red-500 text-white"
      >
        tambah
      </button>

      <button
        onClick={() => {
          addhandle();
        }}
        className="w-32 border rounded px-2 h-11 bg-red-500 text-white"
      >
        tambah data
      </button>
      <button onClick={() => {
        handleSubmit(199);
      }} ></button>

      <input
        className="border border-black p-2 text-black"
        id="tes id"
        placeholder="123"
        value={nama}
        name="tes"
      />

      <input
        className="border border-black p-2 "
        value={nama}
        placeholder="nama..."
        name="tes"
        onChange={(e: ChangeEvent) => {
          handleChange(e);
        }}
      />
    </div>
  );
}

// interface identitas {}

// export default function Page() {
//   let [count, setcount] = useState(0);
//   const [number, setNumber] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const [identitas, setIdentitas] = useState({
//     name: "isan",
//     kelas: "XI RPL",
//     Alamat: "jakarta",
//   });
//   console.log("merender count", count);
//   return (
//     <>

//       <h1 className="text-black text-3xl text-left mt-2">User Profile</h1>
//       <h2 className="text-black">Nama: {identitas.name}</h2>
//       <h2 className="text-black">Kelas: {identitas.kelas}</h2>
//       <h2 className="text-black">Alamat: {identitas.Alamat}</h2>
//       <div className="flex gap-2 mt-5">
//       <input
//         className="border border-black p-2 rounded-md text-blue-500"
//         onChange={(e) => {
//           setIdentitas((prevState) => {
//             return {
//               ...prevState,
//               name: e.target.value,
//               Alamat: "",
//             };
//           });
//         }}
//         name= {"nama"}
//         value={identitas.name}
//       />

// <input
//         className="border border-black p-2 rounded-md text-blue-500"
//         onChange={(e) => {
//           setIdentitas((prevState) => {
//             return {
//               ...prevState,
//               kelas: e.target.value,
//               Alamat: "",
//             };
//           });
//         }}
//         name= {"nama"}
//         value={identitas.kelas}
//       />
//       </div>

{
  /* {JSON.stringify(number)}
      <Button title="simpan" colorSchema="blue" variant="solid" /> */
}
{
  /* <div className="text-red-500 border border-red-500 w-40 h-20 rounded-md mt-8 m-auto text-center">Hallo World</div>
      <button 
        onClick={() => {
          setcount((count) => {
            return count + 1;
          });
        }}
      ></button>
      <button onClick={() => {
        setcount ((c) => c - 1);
      }}>

      </button> */
}
//     </>
//   );
// }
export default Home;
