"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../../../utils/AuthSchemas";
import InputGroup from "../commen/inputGroup/InputGroup";
import AuthAPI from "../../../utils/auth";
import styles from "./ForgetPassForm.module.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/ui/common/button/Button";

export default function ForgetPassForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await AuthAPI.forgotPassword(data.email);

      // Handle successful password reset request
      toast.success("Password reset email sent! Check your inbox.");
      console.log("Password reset email sent:", response);
      router.push("/");
    } catch (error) {
      toast.error(
        error.message || "Failed to send reset email. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputGroup
        id="email"
        label="Forgot your password?"
        type="email"
        autoComplete="email"
        error={errors.email}
        register={register("email")}
        labelClassName={styles.forgotPasswordLabel}
      />

      <div className={styles.buttonWrapper}>
        <Button type="submit" className={styles.resetbtn}>
          Reset
        </Button>
      </div>
    </form>
  );
}
