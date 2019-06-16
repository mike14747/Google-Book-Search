import React from 'react';

export default function Footer() {
    const styles = {
        color: "#333333",
        fontSize: "12px",
        position: "absolute",
        bottom: "0px",
        width: "100%",
        height: "40px",
        lineHeight: "40px"
    };
    
    return (
        <footer style={styles} className="d-flex align-items-center justify-content-center bg-light border-top p-2">
            Copyright &#169; 2019 mike14747
            </footer>
    );
}