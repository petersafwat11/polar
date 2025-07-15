import { z } from "zod";

// Login Schema
export const loginSchema = z
  .object({
    username: z.string().min(1, "Username is required").optional(),
    email: z.string().email("Please enter a valid email").optional(),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.username || data.email, {
    message: "Either username or email is required",
    path: ["username"], // This will show the error on the username field
  });

// Signup Schema
export const signupSchema = z
  .object({
    username: z.string().min(1, "Username is required").trim(),
    email: z.string().email("Please enter a valid email").toLowerCase(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    passwordConfirm: z
      .string()
      .min(8, "Password confirmation must be at least 8 characters"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

// Reset Password Schema
export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    passwordConfirm: z
      .string()
      .min(8, "Password confirmation must be at least 8 characters"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

// Update Password Schema
export const updatePasswordSchema = z
  .object({
    passwordCurrent: z.string().min(1, "Current password is required"),
    password: z.string().min(8, "New password must be at least 8 characters"),
    passwordConfirm: z
      .string()
      .min(8, "Password confirmation must be at least 8 characters"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });






