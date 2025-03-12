const { z } = require("zod");

exports.UserRegistrationValidator = z.object({
  name: z
    .string()
    .min(3, "Name must have at least 3 characters")
    .max(30, "Name must have at most 30 characters")
    .refine(
      (field) =>
        field.toLowerCase().replaceAll(" ", "").replaceAll(/[a-z]/g, "")
          .length === 0,
      "Name must only contains characters or space",
    ),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  age: z.number().min(18, "Age must be 18 or older."),
});

exports.LoginValidator = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
