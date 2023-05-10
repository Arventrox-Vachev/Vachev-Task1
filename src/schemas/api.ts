import { z } from "zod";

export const helloSchema = z.object({ userName: z.string() });
