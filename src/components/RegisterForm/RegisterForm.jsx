import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { registerFetch } from "redux/auth/operations";
import { selectError } from "redux/auth/selectors";
import { Form } from "./RegisterForm.styled";



export const RegisterForm = () => {
    const error = useSelector(selectError)
    const dispatch = useDispatch();
    const { register, handleSubmit, resetField } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        dispatch(
            registerFetch({
                name: data.name,
                email: data.email,
                password: data.password,
            })
        );
        resetField('name', 'email', 'password');
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {error ?
                <TextField
                    error
                    required
                    id="outlined-error"
                    label="Name"
                    type="text" {...register("name", { required: true, maxLength: 20 })}
                /> :
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    type="text" {...register("name", { required: true, maxLength: 20 })}
                />}
            
            {error ?
                <TextField
                    error
                    width='280'
                    required
                    id="outlined-error"
                    label="Email"
                    type="email" {...register("email", { required: true, maxLength: 50 })}

                /> :
                <TextField
                    required
                    width='280'
                    id="outlined-required"
                    label="Email"
                    type="email" {...register("email", { required: true, maxLength: 50 })}
                />}
            {error ?
                <TextField
                    error
                    required
                    id="outlined-error"
                    label="Email"
                    type="Password" {...register("password", { required: true, maxLength: 50 })}
                    helperText="A user with that email address already exists"
                /> :
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type="password" {...register("password", { required: true, maxLength: 50 })}
                />}
            
            <Button variant="contained" type="submit">Register</Button>
        </Form>
    );
};