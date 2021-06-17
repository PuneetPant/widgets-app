import React from "react";

const Link = ({ href, className, children }) => {

  const onClickHandler = (event) => {
    // console.log(event);
    event.preventDefault();

    window.history.pushState({} , '' , href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return (
    <a
      onClick={onClickHandler}
      href={href}
      className={className}>
      {children}
    </a>
  )
};

export default Link;
