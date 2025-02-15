"use client";
import { Form, useFormik, FormikProvider } from "formik";
import useBookModule from "../../lib";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { BookCreatePayload } from "../../interface";
import InputText from "@/app/component/TextInput";
import Button from "@/app/component/button";
import Label from "@/app/component/label";

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

export default function Update({ params }: { params: { id: string } }) {
  const { useDetailBook, useCreateBook } = useBookModule();
  const { useUpdateBook } = useBookModule();
  const { data, isFetching } = useDetailBook(params.id);
  const { mutate, message, setMessage } = useUpdateBook(params.id);
  const router = useRouter();

  console.log("data", data);

  const formik = useFormik<BookCreatePayload>({

    initialValues : {
        title : data?.title,
        author : data?.author,
        year : data?.year,
        deskripsi : data?.deskripsi
    },
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
      console.log("values", values);
    },
  });
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    setFieldValue,
    setValues,
    resetForm,
  } = formik;

  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold mb-4 text-black">update buku</h1>
      {JSON.stringify(values)}
      <p>===============</p>
      {JSON.stringify(errors)}

      <FormikProvider value={formik}>
        <Form className="space-y-4" onSubmit={handleSubmit}>
          <section>
            <Label htmlFor="title" title="judul" />
            <InputText
              name="title"
              id="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.title}
              messageError={errors.title}
              placeholder="judul buku"
            />
          </section>
          <section>
            <Label htmlFor="author" title="nama penulis" />
            <InputText
              name="author"
              id="author"
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.author}
              messageError={errors.author}
              placeholder="nama penulis"
            />
          </section>
          <section>
            <Label htmlFor="year" title="tahun" />
            <InputText
              name="year"
              id="year"
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.year}
              messageError={errors.year}
              placeholder="tahun"
            />
          </section>
          <section>
            <Label htmlFor="deskripsi" title="Deskripsi" />
            <InputText
              name="deskripsi"
              id="deskripsi"
              value={values.deskripsi}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.deskripsi}
              messageError={errors.deskripsi}
              placeholder="deskripsi buku"
            />
          </section>
          <section>
            <Button
              title="update"
              type="submit"
              colorSchema="blue"
              isLoading={mutate.status === "pending"}
            />
          </section>
        </Form>
      </FormikProvider>
    </section>
  );
}
