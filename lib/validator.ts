import * as z from "zod";

export const eventFormSchema = z.object({
        title: z.string().min(3, "Title must be 3 characters long."),
        description: z.string().min(3, "Description must be 3 characters long.").max(400, "Description must be less then 400 characters"),
        location: z.string().min(3, "location must be 3 characters long.").max(400, "Location must be less then 400 characters"),
        imgUrl: z.string(),
        startDateTime: z.date(),
        endDateTime: z.date(),
        categoryId: z.string(),
        price: z.string(), 
        isFree: z.boolean(),
        url: z.string().url()
  });