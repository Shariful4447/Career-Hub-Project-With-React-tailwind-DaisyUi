import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>OOpsss !!!! there is something wrong</h2>
            <Link to={'/'}>Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;