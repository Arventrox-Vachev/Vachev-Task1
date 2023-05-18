import { z } from "zod";

export const signInSchema = z.object({
  signInEmail: z
    .string({ invalid_type_error: "Invalid Email", required_error: "This field is required" })
    .email()
    .nonempty(),
  signInPassword: z
    .string({ required_error: "This field is required" })
    .min(3, "Password must be at least 3 characters long")
    .nonempty()
});
