import React from 'react';
import "./Footer.scss";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">
                <h2><i className="fab fa-js-square"></i></h2>
            </div>
            <p>{new Date().getFullYear()} by Kyle Wilson-McCormack</p>
        </footer>
    );
};