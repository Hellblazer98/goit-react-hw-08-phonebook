import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { registerFetch } from "redux/auth/operations";



export const RegisterForm = () => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Username
                <input type="text" {...register("name", { required: true, maxLength: 20 })}/>
            </label>
            <label>
                Email
                <input type="email" {...register("email", { required: true, maxLength: 20 })}/>
            </label>
            <label>
                Password
                <input type="password" {...register("password", { required: true, maxLength: 20 })}/>
            </label>
            <button type="submit">Register</button>
        </form>
    )
}