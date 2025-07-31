import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().min(8).required(),
    passwordVal: yup.string()
        .oneOf([yup.ref('password'),null]).required()
});