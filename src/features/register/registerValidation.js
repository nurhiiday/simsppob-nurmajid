import * as yup from 'yup';

const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

export const registerSchema = yup.object().shape({
    email: yup.string().email().required().matches(emailRegex, "Email tidak valid"),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().min(8,"Password minimal 8 karakter").required(),
    passwordVal: yup.string()
        .oneOf([yup.ref('password'),null]).required()
});