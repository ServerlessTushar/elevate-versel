import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showX?: boolean;
}

const Modal = ({ isOpen, onClose, children, showX }: ModalProps) => {
  if (!isOpen) return null;

  const modalOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Ensure it appears on top
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "20px",
    position: "relative",
    width: "100%",
    height: "100%",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const closeButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        {showX && (
          <button style={closeButtonStyle} onClick={onClose}>
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
