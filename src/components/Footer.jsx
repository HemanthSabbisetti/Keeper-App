import React from "react";

function Footer(){
    const time = new Date();
    const currentYear = time.getFullYear();

    return (
        <footer>
           <p>Copyright © {currentYear}</p>
        </footer>
    );
}

export default Footer;