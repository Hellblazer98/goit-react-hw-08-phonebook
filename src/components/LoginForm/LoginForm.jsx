import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";


export const LoginForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, resetField } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        dispatch(
            logIn({
                email: data.email,
                password: data.password,
            })
        );
        resetField('email', 'password');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email
                <input type="email" {...register("email", { required: true, maxLength: 50 })}/>
            </label>
            <label>
                Password
                <input type="password" {...register("password", { required: true, maxLength: 50 })}/>
            </label>
            <button type="submit">Login</button>
        </form>
    )
}