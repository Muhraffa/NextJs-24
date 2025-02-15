"use client";
import useBookModule from "../lib";
import { useFormik, Formik, FormikProvider } from "formik";
import { title } from "process";
import * as Yup from "yup";
import { BookCreatePayload } from "../interface";
import InputText from "@/app/component/TextInput";
import Button from "@/app/component/button";
import { useRouter } from "next/navigation";

const createBookSchema = Yup.object().shape({
  title: Yup.string().nullable().default("").required("wajib diisi"),
  author: Yup.string().nullable().default("").required("wajib diisi"),
  year: Yup.number()
    .nullable()
    .default(undefined)
    .min(2020, "tahun minimal 2020")
    .max(2028, "tahun maksimal 2028")
    .required("wajib pilih"),
  deskripsi: Yup.string().nullable().default(""),
});
export default function TambahBook() {
  const { useCreateBook } = useBookModule();
  const router = useRouter();
  const mutate = useCreateBook();

  const formik = useFormik<BookCreatePayload>({
    initialValues: createBookSchema.getDefault(),
    // isInitialValues : {
    //     title : "",
    //     author : "",
    //     year : undefined,
    //     deskripsi : ""
    // },
    validationSchema: createBookSchema,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,

    onSubmit: (values) => {
      mutate.mutate(values, {
        onSuccess: () => {
          resetForm();
          setValues(createBookSchema.getDefault());
          router.push("/book");
        },
      });
      console.log("berhasil submit", values);
    },
  });

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
  } = formik;
  return (
    <section className="flex items-center flex-col justify-center w-full h-full">
      ini halaman tambah buku
      {JSON.stringify(values)}
      <p>=============</p>
      {JSON.stringify(errors)}
      <FormikProvider value={formik}>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title" title="judul"></label>
            <InputText
              value={values.title}
              placeholder="judul buku"
              id="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.title}
              messageError={errors.title}
            />
          </section>
          <section>
            <label htmlFor="author" title="nama Author"></label>
            <InputText
              value={values.author}
              placeholder="nama Author"
              id="author"
              name="author"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.author}
              messageError={errors.author}
            />
          </section>
          <section>
            <label htmlFor="year" title="tahun"></label>
            <InputText
              value={values.year}
              placeholder="tahun.."
              id="year"
              name="year"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.year}
              messageError={errors.year}
            />
          </section>
          <section>
            <label htmlFor="deskripsi" title="deskripsi"></label>
            <InputText
              value={values.deskripsi}
              placeholder="deskripsi"
              id="deskripsi"
              name="deskripsi"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.deskripsi}
              messageError={errors.deskripsi}
            />
          </section>
          <Button
            isLoading={mutate.status === "pending"}
            title="submit"
            colorSchema="blue"
          />
        </form>
      </FormikProvider>
    </section>
  );
}
