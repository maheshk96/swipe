import React from "react";
import "./Footer.css";

export default function Footer(props) {
    return (
        <div className="footer">
            <button className="reject">
                No, Thanks
            </button>
            <button className="accept">
                I'll Take it
            </button>
        </div>
    );
}
