import { z } from "zod";

export const HelloSchema = z.object({ userName: z.string() });
