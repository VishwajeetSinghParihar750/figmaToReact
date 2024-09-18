import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: { background: "rgba(0, 0, 0, .5)", zIndex: "100" },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};

Modal.setAppElement("#root");

function AddWalletModal({ isOpen, onRequestClose, onSubmit }) {
  const [selectedImage, setSelectedImage] = useState("/solanaCry.svg");
  const [chain, setChain] = useState("Solana");
  const [address, setAddress] = useState("");

  // Handle image click and update both selected image and chain
  const handleImageClick = (imageSrc, chainName) => {
    setSelectedImage(imageSrc);
    setChain(chainName);
  };

  // Handle chain change and update the image
  const handleChainChange = (e) => {
    const selectedChain = e.target.value;
    setChain(selectedChain);

    const imageMap = {
      Solana: "/solanaCry.svg",
      Ethereum: "/ethereumCry.svg",
      TRON: "/tronCry.svg",
    };

    setSelectedImage(imageMap[selectedChain]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      chain,
      address,
      image: selectedImage,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="w-full h-full bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl">Add New Wallet</h3>
          <button
            className="text-gray-500 hover:text-gray-800 w-4"
            onClick={onRequestClose}
          >
            <img src="/cross.svg" alt="" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="my-14 flex gap-2 items-center justify-center">
            {/* Image selection */}
            {["/ethereumCry.svg", "/solanaCry.svg", "/tronCry.svg"].map(
              (src, index) => {
                const chainNames = {
                  "/ethereumCry.svg": "Ethereum",
                  "/solanaCry.svg": "Solana",
                  "/tronCry.svg": "TRON",
                };
                const chainName = chainNames[src];
                return (
                  <div
                    key={index}
                    className="relative cursor-pointer mx-3 max-xs:mx-1"
                    onClick={() => handleImageClick(src, chainName)}
                  >
                    <div
                      className={`bg-white shadow-xl rounded-lg w-28 h-28 relative ${
                        selectedImage === src ? "block" : "hidden"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Select Chain ${chainName}`}
                        className="w-20 h-20 absolute inset-0 m-auto" // Center the image within the box
                      />
                    </div>
                    {selectedImage !== src && (
                      <img
                        src={src}
                        alt={`Select Chain ${chainName}`}
                        className="w-16 h-16"
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="chain" className="block text-gray-700 mb-1">
              Chain
            </label>
            <select
              id="chain"
              value={chain}
              onChange={handleChainChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Solana">Solana</option>
              <option value="Ethereum">Ethereum</option>
              <option value="TRON">TRON</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-1">
              Wallet Address
            </label>
            <input
              required
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded outline-none"
              placeholder="Enter wallet address"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orangeNew rounded-lg text-white py-2"
          >
            Add Wallet
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddWalletModal;
