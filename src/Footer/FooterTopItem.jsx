import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
const FooterTopItem = ({ image, handleToggle, instagram, id }) => {
  return (
    <div
      className="footer__top__image"
      onMouseEnter={() => handleToggle(id)}
      onMouseLeave={() => handleToggle("")}
    >
      <img
        src={image}
        alt=""
        style={{ filter: id === instagram ? "blur(16px)" : "blur(0px)" }}
      />
      <div
        className="instagram"
        style={{ opacity: id === instagram ? "1" : "0" }}
      >
        <div className="footer__top__icon">
          <InstagramIcon
            fontSize="large"
            style={{
              color: "white",
              fill: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTopItem;
