import React, { useState } from "react";
import { FooterTopInfo } from "./FooterInfo";
import FooterTopItem from "./FooterTopItem";

const FooterTop = () => {
  const [instagram, setInstagram] = useState(null);
  let handleToggle = (id) => {
    if (instagram === id) {
      setInstagram(null);
      return false;
    }
    setInstagram(id);
  };
  return (
    <div className="footer__top">
      <div className="footer__top__text">
        <h1>Follow me on Instagram</h1>
      </div>
      <div className="footer__top__images">
        {FooterTopInfo.map((item) => (
          <FooterTopItem
            image={item.image}
            key={item.id}
            handleToggle={handleToggle}
            instagram={instagram}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
