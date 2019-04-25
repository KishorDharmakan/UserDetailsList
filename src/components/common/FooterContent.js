import React from "react";

const FooterContent = props => {
  return (
    <div>
        <a href="mailto:abcd@gmail.com" >
          Click for help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/Tweet">
          Our Twitter Feed
        </a>
      <p className="copyright">
        &copy; 2019 - ABCD
      </p>
    </div>
  );
};

export default FooterContent;
