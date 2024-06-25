import React from "react";

const SocialMediaLinks = ({ socialMedia }) => {
  return (
    <>
      {Object.entries(socialMedia).map(([key, value]) => (
        <div key={key}>{value && <h5>{`${key}: ${value}`}</h5>}</div>
      ))}
    </>
  );
};

export default SocialMediaLinks;
