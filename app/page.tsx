import React, { ReactNode } from "react";
export default function Home() {
    return (
        <div>
            <h1>halo</h1>
        </div>
    )
    
}


// import InputText from "./component/TextInput";

// const Page = () => {
//   return <div>page</div>;
// };

// // Materi pertama
// function App() {
//   return <div className="text-black">Hello World</div>;
// }

// interface InputType {
//   isEror?: boolean;
//   isSmk?: boolean;
//   number?: number;
//   isLoading?: boolean;
//   messageEror?: string;
//   ukuran?: 'sm' | 'md' | 'lg';  // Menambahkan properti ukuran
// }

// // Materi kedua
// function AppWithInput() {
//   return (
//     <div className="bg-green-400 text-black grid grid-cols-1 text-center justify-center">
//       siap belajar
//       <InputText ukuran={"sm"} isEror />
//       <InputText ukuran={"md"} isEror messageEror="wajib" />
//       <InputText ukuran={"lg"} isEror />
//     </div>
//   );
// }

// // Materi ketiga
// function MainApp() {
//   return (
//     <>
//       <div className="bg-blue-300 text-black grid grid-cols-1 text-center justify-center">
//         siap belajar frontend
//         <InputText isEror placeholder="isi bro" id="nama" isSmk />
//         <InputText number={100} placeholder="isi dulu" isSmk={false} />
//         <InputText isLoading number={100} />

//         <Note title="success">
//           <p>anda telah berhasil</p>
//         </Note>

//         <Note title="warning">
//           <p>anda dalam peringatan</p>
//         </Note>

//         <Card angka="1" nama="rapa" isLoading={true} nomor={100} />
//         <Card angka="2" nama="aska" isLoading />
//         <Card angka="3" nama="hardi" isLoading={false} />
//         <Card angka="4" nama="radis" />
//         <Card angka="5" nama="yono" />
//       </div>
//     </>
//   );
// }

// interface InputType {
//   isEror?: boolean;
//   isSmk?: boolean;
//   number?: number;
//   isLoading?: boolean;
//   ukuran?: "sm" | "md" | "lg";  // Menambahkan properti ukuran
// }

// function InputText({
//   isEror,
//   isSmk,
//   number = 0,
//   isLoading = false,
//   ukuran = "md",  // Default ukuran
//   ...props
// }: InputType & React.InputHTMLAttributes<HTMLInputElement>) {
//   if (isLoading) {
//     return <div className="bg-green-400 w-40 h-15">sedang Loading...</div>;
//   }

//   const ukuranClass =
//     ukuran === "sm" ? "text-sm" : ukuran === "lg" ? "text-lg" : "text-md";

//   return (
//     <>
//       <input
//         {...props}
//         className={`border rounded-sm border-pink-400 ${ukuranClass}`}
//       />
//       <div className="text-sm text-blue-800">tes</div>
//       {isSmk ? "sekolah" : isSmk === false ? "Bolos" : "sakit"}
//       {number === 100 ? "lulus " : "tidak lulus"}
//       {isEror ? <span className="text-red-500">wajib diisi</span> : ""}
//     </>
//   );
// }

// interface NoteType {
//   title: string;
//   children: ReactNode;
// }

// function Note({ title, children }: NoteType) {
//   return (
//     <div className="border p-2 rounded-md mb-5">
//       <p className="text-red-500 mb-1">{title}</p>
//       <div className="bg-blue-500 text-white">{children}</div>
//     </div>
//   );
// }

// interface CardType {
//   angka: string;
//   nama: string;
//   isLoading?: boolean;
//   nomor?: number;
// }

// function Card({ angka, nama, isLoading, nomor = 10 }: CardType) {
//   return (
//     <div className="h-20 w-40 bg-blue-500 ">
//       {angka}: {nama} {isLoading ? "lagi ambil data" : ""}
//       <span>{nomor}</span>
//     </div>
//   );
// }

// export default MainApp;
