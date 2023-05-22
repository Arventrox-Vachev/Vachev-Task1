import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be minimum 2 characters long"),
    email: z
      .string({ invalid_type_error: "Invalid Email", required_error: "This field is required" })
      .email()
      .nonempty(),
    password: z
      .string({ required_error: "This field is required" })
      .min(6, "Password must be at least 6 characters long"),
    matchPassword: z
      .string({ required_error: "This field is required" })
      .min(6, "Password must be at least 6 characters long"),

    image: z.string()
  })
  .refine(data => data.password === data.matchPassword, {
    message: "Passwords don't match",
    path: ["matchPassword"]
  });
