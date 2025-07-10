"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signupSchema } from "../../../utils/AuthSchemas";
import InputGroup from "../commen/inputGroup/InputGroup";
import AuthAPI from "../../../utils/auth";
import styles from "./SignupForm.module.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/ui/common/button/Button";

export default function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await AuthAPI.signup(data);

      // Handle successful signup
      toast.success("Signup successful! Please login.");
      console.log("Signup successful:", response);

      // Redirect to login page or dashboard
      router.push("/login");
    } catch (error) {
      toast.error(error.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputGroup
        id="username"
        label="Username"
        type="text"
        autoComplete="username"
        error={errors.username}
        register={register("username")}
      />

      <InputGroup
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email}
        register={register("email")}
      />

      <InputGroup
        id="password"
        label="Password"
        type="password"
        autoComplete="new-password"
        error={errors.password}
        register={register("password")}
      />

      <InputGroup
        id="passwordConfirm"
        label="Confirm Password"
        type="password"
        autoComplete="new-password"
        error={errors.passwordConfirm}
        register={register("passwordConfirm")}
      />

      <div className={styles.forgetPasswordWrapper}>
        <Link href="/forgetpass" className={styles.forgetPasswordLink}>
          Forgot Password?
        </Link>
      </div>

      <div className={styles.buttonWrapper}>
        <Button type="submit" className={styles.signupButton}>
          Sign Up
        </Button>
      </div>
    </form>
  );
}
