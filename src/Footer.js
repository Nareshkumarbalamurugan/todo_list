import React from 'react';

const Footer = ({ length }) => {
    return (
        <footer style={{ textAlign: "center", marginTop: "20px", padding: "10px" }}>
            <p>
                {length} {length === 1 ? "item" : "items"} in the list
            </p>
        </footer>
    );
};

export default Footer;
