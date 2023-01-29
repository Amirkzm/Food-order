import ReactDOM from "react-dom";
import { Fragment, useState, useEffect } from "react";
import Card from "./Card";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.closeModal}
      className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-10 cursor-pointer"
    ></div>
  );
};

const Overlay = (props) => {
  const classes =
    props.classes +
    " absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-[50%] bg-white";
  return <Card classes={classes}>{props.children}</Card>;
};

const Modal = (props) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <Fragment>
      {domReady
        ? ReactDOM.createPortal(
            <Backdrop classes={props.classes} closeModal={props.closeModal}>
              {props.children}
            </Backdrop>,
            document.getElementById("overlay-root")
          )
        : null}
      {domReady
        ? ReactDOM.createPortal(
            <Overlay classes={props.classes} closeModal={props.closeModal}>
              {props.children}
            </Overlay>,
            document.getElementById("overlay-root")
          )
        : null}
    </Fragment>
  );
};

export default Modal;
