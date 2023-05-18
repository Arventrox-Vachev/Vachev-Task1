import { z } from "zod";

export const registerSchema = z.object({
  regName: z.string().min(2, "Name must be minimum 2 characters long"),
  regEmail: z
    .string({ invalid_type_error: "Invalid Email", required_error: "This field is required" })
    .email()
    .nonempty(),
  regPassword: z
    .string({ required_error: "This field is required" })
    .min(3, "Password must be at least 3 characters long")
});
