// header, link React/dom/css/footer/
import { useRouteError } from 'react-router-dom';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
const error = useRouteError();
console.error(error);

    return (
    <div id="error-page">
        <h1 className='interjection'>Op !</h1>
        <p className='errorMsg'>It seems an unexpected error has occurred.</p>
        <p><i>{error.statusText || error.message}</i></p>
    </div>
);
}

export default ErrorPage;
