import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    document.body.classList.add("scroll-lock");
    return () => document.body.classList.remove("scroll-lock");
  }, []);

  return createPortal(
    <div className="Lightbox" onClick={onClose}>
      <img className="LightboxImg" src={src} alt="Fullscreen" />
    </div>,
    document.body
  );
}
