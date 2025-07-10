"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../../../utils/AuthSchemas";
import InputGroup from "../commen/inputGroup/InputGroup";
import AuthAPI from "../../../utils/auth";
import styles from "./form.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/ui/common/button/Button";

export default function ChangePasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (!tokenFromUrl) {
      toast.error("Invalid or missing reset token");
      router.push("/login");
      return;
    }
    setToken(tokenFromUrl);
  }, [searchParams, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (data) => {
    if (!token) {
      toast.error("Invalid reset token");
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthAPI.resetPassword(token, {
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      });

      toast.success("Password changed successfully!");
      console.log("Password reset successful:", response);
      router.push("/login");
    } catch (error) {
      toast.error(
        error.message || "Failed to change password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputGroup
        id="password"
        label="New Password"
        type="password"
        autoComplete="new-password"
        error={errors.password}
        register={register("password")}
      />

      <InputGroup
        id="passwordConfirm"
        label="Confirm New Password"
        type="password"
        autoComplete="new-password"
        error={errors.passwordConfirm}
        register={register("passwordConfirm")}
      />

      <div className={styles.buttonWrapper}>
        <Button type="submit" className={styles.resetbtn}>
          Change Password
        </Button>
      </div>
    </form>
  );
}
