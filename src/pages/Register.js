import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Register = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Registration</title>
                </Helmet>
                <RegisterForm />
            </div>
        </HelmetProvider>
    );
};

export default Register;