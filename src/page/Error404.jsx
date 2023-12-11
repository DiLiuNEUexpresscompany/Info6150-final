import { useLocation } from 'react-router-dom';

function Error404() {
    let location = useLocation();
    return <h1>No match found for <code>{location.pathname}</code></h1>;
}

export default Error404;