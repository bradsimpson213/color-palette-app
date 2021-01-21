// React imports
import React from 'react';
// Style imports
import './styles/PageStyles.css';


const Page = ({ children }) => {

    return (
        <section className="page">
            { children }
        </section>
    )
};

export default Page;