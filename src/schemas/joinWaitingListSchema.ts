import { z } from "zod";

export const joinWaitingListSchema = z.object({
  email: z
    .string({ invalid_type_error: "Invalid Email", required_error: "This field is required" })
    .email(),
  agreedToTOS: z
    .boolean()
    .refine(value => value === true, "You must agree to the terms of service"),
  newsLetter: z.boolean().optional()
});
