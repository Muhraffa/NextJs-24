"use client";
import { useContext, useEffect } from "react";
import Button from "../component/button";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const appContext = useContext(AppContext);
  const { isAuthenticated, login } = appContext;
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("belajar-usecontext");
    }
  }, [isAuthenticated]);
  return (
    <>
      {!isAuthenticated && <h2>Silahkan Login</h2>}
      <Button
        title="Login"
        colorSchema="blue"
        variant="outline"
        onClick={login}
      />
    </>
  );
}
