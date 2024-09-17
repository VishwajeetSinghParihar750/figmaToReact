import React, { useState } from "react";
import Wrapper from "./ui/Wrapper";
import CustomPagination from "./ui/CustomPagination";
import AddWalletModal from "./ui/AddWalletModal";

function Wallets(props) {
  const [wallets, setWallets] = useState([
    {
      wallet: (
        <div className="flex items-center">
          <img src="/tronCry.svg" alt="" className="mr-2" />
          TRON (TRX)
        </div>
      ),
      address: "0x1234abcd5678efgh9012ijkl3456mnop7890qrst",
      balance: "$10,000",
      status: "Active",
    },
    {
      wallet: (
        <div className="flex items-center">
          <img src="/ethereumCry.svg" alt="" className="mr-2" />
          Ethereum (ETH)
        </div>
      ),
      address: "0x2345bcde6789fghi0123jklm4567nopq8901rstu",
      balance: "$5,000",
      status: "Inactive",
    },
    {
      wallet: (
        <div className="flex items-center">
          <img src="/solanaCry.svg" alt="" className="mr-2" />
          Solana (SOL)
        </div>
      ),
      address: "0x3456cdef7890ghij1234klmn5678opqr9012stuv",
      balance: "$15,000",
      status: "Active",
    },
    {
      wallet: (
        <div className="flex items-center">
          <img src="/solanaCry.svg" alt="" className="mr-2" />
          Solana (SOL)
        </div>
      ),
      address: "0x4567defg8901hijk2345lmno6789pqrs0123tuvw",
      balance: "$7,500",
      status: "Active",
    },
    {
      wallet: (
        <div className="flex items-center">
          <img src="/ethereumCry.svg" alt="" className="mr-2" />
          Ethereum (ETH)
        </div>
      ),
      address: "0x5678efgh9012ijkl3456mnop7890qrst1234uvwx",
      balance: "$3,200",
      status: "Inactive",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const rowsPerPage = 3;
  const totalPages = Math.ceil(wallets.length / rowsPerPage);
  const paginatedData = wallets.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (newWallet) => {
    // Map new wallet data into the format used in `wallets`
    const newWalletEntry = {
      wallet: (
        <div className="flex items-center">
          <img src={newWallet.image} alt="" className="mr-2" />
          {newWallet.chain}
        </div>
      ),
      address: newWallet.address,
      balance: "$0.00", // Default balance for new wallet (can be changed)
      status: "Active", // Default status for new wallet (can be changed)
    };

    // Update the wallets state with the new wallet entry
    setWallets([newWalletEntry, ...wallets]);
    closeModal();
  };

  return (
    <Wrapper>
      <div className="mt-4 p-10 pt-0 bg-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl  text-gray-800">Wallets</h2>
          <button
            className="px-6 py-3 bg-orangeNew text-white flex items-center rounded-lg font-semibold"
            onClick={openModal}
          >
            <img src="/plusWhite.svg" alt="" className="mr-2" />
            <span>Add New Wallet</span>
          </button>
        </div>

        <div className="rounded-lg p-5 bg-white mt-8">
          <h3 className="text-xl mb-4 mt-1">Added Wallets</h3>

          <table className="w-full text-left border-separate border-spacing-y-2 border-spacing-x-0">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 font-semibold">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="py-2 px-4 font-semibold">Wallet</th>
                <th className="py-2 px-4 font-semibold">Wallet Address</th>
                <th className="py-2 px-4 font-semibold">Balance</th>
                <th className="py-2 px-4 font-semibold">Status</th>
                <th className="py-2 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => (
                <tr key={index} className="bg-white rounded-lg">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="py-3 px-4 font-semibold">{row.wallet}</td>
                  <td className="py-3 px-4">{row.address}</td>
                  <td className="py-3 px-4">{row.balance}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-2 font-semibold rounded-full text-sm font-medium ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      <img src="/editPen.svg" alt="" />
                    </button>
                    <button className="text-red-600 hover:text-red-800 ml-4 font-semibold">
                      <img src="/bin.svg" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-5">
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <AddWalletModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSubmit={handleSubmit}
      />
    </Wrapper>
  );
}

export default Wallets;
