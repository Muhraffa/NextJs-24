import { BaseResponsePagination } from "@/lib/axiosClient";

interface Book {
  id: number;
  title: string;
  author: string;
  deskripsi: string;
  year: number | undefined | string;
  created_at: string;
  updated_at: string;
}

export interface BookListResponse extends BaseResponsePagination {
  data: Book[];
}
export interface BookListFilter extends Partial<Book> {
  from_year?: string;
  to_year?: string;
  page: number;
  pageSize: number;
}
export interface BookCreatePayload
  extends Pick<Book, "author" | "title" | "year"> {
  deskripsi:
    | ((string | number) & (string | number | readonly string[]))
    | undefined;
}

export interface BookCreatePayload
  extends Pick<Book, "author" | "title" | "year"> {}
 
export interface BookCreateArrayPayload {
  data: BookCreatePayload[];
}
export interface DetailBookResponse extends BaseResponsePagination {}
