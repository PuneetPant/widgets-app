import React, { useState , useEffect } from 'react';

const Route = ({ path, children }) => {
    const [currentPath , setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const locationChange = () => {
            // console.log('Location change');
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', locationChange);

        return () => {
            window.removeEventListener('popstate');
        }
    }, [])
    return (
        <>
            {
                currentPath === path ? children : null
            }
        </>
    )
}

export default Route;