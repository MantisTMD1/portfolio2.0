import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Thanks for viiting my site 👽 |{/* updates year for me */}
        {new Date().getFullYear()}&nbsp;
      </p>
    </div>
  );
}

export default Footer;
