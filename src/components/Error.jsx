import { useRouteError } from 'react-router-dom';

import kittenImage from '../assets/kitten.png'// Make sure to have an image of a kitten in your assets folder

const Error = () => {

    const err = useRouteError();
    console.log("error component ",err)
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-title">Ooops!!!</h1>
                <h2 className="error-subtitle">Something Went Wrong</h2>
                <p className="error-message">
                    We encountered an unexpected issue. Please try again later or enjoy this cute kitten in the meantime.
                </p>
                <img src={kittenImage} alt="Cute Kitten" className="error-kitten" />
                <button className="error-button" onClick={() => window.location.reload()}>Retry</button>
                <a className="error-link" href="/">Go to Home</a>
            </div>
        </div>
    );
}

export default Error;
