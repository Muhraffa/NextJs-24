"use client"; // gunakan use client karena ada onChange pda komponen
import { ChangeEvent, useState } from "react";
import Label from "../component/label";
import InputText from "../component/TextInput";
import Select from "../component/select";
import Button from "../component/button";

interface Value {
  title: string;
  author: string;
  year: number | string;
  deskripsi: string;
}

const Home = () => {
  const [error, setError] = useState<boolean>(false);
  const [values, setValues] = useState<Value>({
    title: "",
    author: "",
    year: "",
    deskripsi: "",
  });

  const handleChange = (event: ChangeEvent<any>) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e: ChangeEvent<any>) => {
    e.preventDefault();
    if (!values.title || values.author || values.year) {
      alert("Harap isi semua field yang wajib diisi.");
      setError(true);

      return;
    }

    alert(JSON.stringify(values));
  };

  return (
    <main className="space-y-5">
      {JSON.stringify(values)}
      <h1 className="text-red-500 font-bold">Belajar Form</h1>
      <form onSubmit={handleSubmit} className="space-y-3 ">
        <section className="text-black">
          <Label htmlFor="author" isRequired title="Penulis" />
          <InputText
            isError={!values.author && error}
            placeholder="Nama Penulis buku"
            id="author"
            name="author"
            value={values.author}
            onChange={handleChange}
          />
        </section>

        <section className="text-black">
          <Label htmlFor="title" isRequired title="Judul Buku" />
          <InputText
            isError={!values.title && error}
            placeholder="Nama Judul buku"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </section>
        <section className="text-black">
          <Label htmlFor="year" title="Tahun Terbit" />
          <Select
            value={values.year}
            name="year"
            onChange={handleChange}
            isError={!values.year && error}
            id="year"
            options={[
              {
                value: 2020,
                label: "2020",
              },
              {
                value: 2021,
                label: "2021",
              },
              {
                value: 2022,
                label: "2022",
              },
              {
                value: 2023,
                label: "2023",
              },
            ]}
          />
        </section>

        <section className="text-black">
          <Label htmlFor="title" isRequired title="Deskripsi" />
          <InputText
            isError={!values.deskripsi && error}
            placeholder="tulis deskripsi"
            id="deskripsi"
            name="deskripsi"
            value={values.deskripsi}
            onChange={handleChange}
          />
        </section>

        <section>
          <Button type="submit" colorSchema="green" title="Simpan" />
        </section>
      </form>
    </main>
  );
};

export default Home;
