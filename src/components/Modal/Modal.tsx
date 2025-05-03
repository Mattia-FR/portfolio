import { useRef, useEffect, type ReactNode } from "react";
import "./Modal.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useGSAP(
    () => {
      if (isOpen && modalOverlayRef.current && modalContentRef.current) {
        gsap.set(modalOverlayRef.current, { opacity: 0 });
        gsap.set(modalContentRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 20,
        });

        const tl = gsap.timeline();

        tl.to(modalOverlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(
          modalContentRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.1",
        );
      }
    },
    { dependencies: [isOpen] },
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} ref={modalOverlayRef}>
      <div
        className="modal-content"
        onClick={(e): void => e.stopPropagation()}
        ref={modalContentRef}
      >
        <button className="modal-close" onClick={onClose} type="button">
          [&nbsp;X&nbsp;]
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
