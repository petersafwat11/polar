"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../utils/AuthSchemas";
import InputGroup from "../commen/inputGroup/InputGroup";
import AuthAPI from "../../../utils/auth";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/ui/common/button/Button";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // Prepare the data for the backend
      const loginData = {
        password: data.password,
      };

      loginData.email = data.email;

      const response = await AuthAPI.login(loginData);

      // Handle successful login
      toast.success("Login successful!");
      console.log("Login successful:", response);

      // Redirect to dashboard or home page
      router.push("/");
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputGroup
        id="email"
        label="Email"
        type="text"
        autoComplete="email"
        error={errors.email}
        register={register("email")}
      />

      <InputGroup
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        error={errors.password}
        register={register("password")}
      />
      <div className={styles.buttonWrapper}>
        <Button type="submit" className={styles.loginButton}>
          Login Now
        </Button>
      </div>

      {/* <ConfirmBtn type="submit" isLoading={isLoading} disabled={isLoading}>
        Login Now
      </ConfirmBtn> */}
    </form>
  );
}
