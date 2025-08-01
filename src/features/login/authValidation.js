import * as yup from 'yup';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginSchema = yup.object().shape({
    email: yup.string().email().required().matches(emailRegex, "Email tidak valid"),
    password: yup.string().min(8, "Password minimal 8 karakter").required(),
});