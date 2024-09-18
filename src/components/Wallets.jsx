import React, { useEffect, useState } from "react";
import Wrapper from "./ui/Wrapper";
import CustomPagination from "./ui/CustomPagination";
import AddWalletModal from "./ui/AddWalletModal";
import EditWalletModal from "./ui/EditWalletModal"; // Import EditWalletModal
import WalletCard from "./ui/WalletCard";
import axios from "axios";

function Wallets() {
  const [wallets, setWallets] = useState([]);
  const [currentWallet, setCurrentWallet] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchWallets = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/wallets`
      );
      setWallets(response.data);
    } catch (error) {
      console.error("Error fetching wallets:", error);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  const handleAddSubmit = async (newWallet) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/wallets`,
        newWallet
      );
      setWallets([response.data, ...wallets]);
    } catch (error) {
      console.error("Error adding wallet:", error);
    }
    closeAddModal();
  };

  const handleEditSubmit = async (updatedWallet) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/wallets/${currentWallet.id}`,
        updatedWallet
      );
      setWallets(
        wallets.map((wallet) =>
          wallet.id === currentWallet.id ? response.data : wallet
        )
      );
    } catch (error) {
      console.error("Error updating wallet:", error);
    }
    closeEditModal();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/wallets/${id}`);
      setWallets(wallets.filter((wallet) => wallet.id !== id));
    } catch (error) {
      console.error("Error deleting wallet:", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const rowsPerPage = 3;
  const totalPages = Math.ceil(wallets.length / rowsPerPage);
  const paginatedData = wallets.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (wallet) => {
    setCurrentWallet(wallet);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setCurrentWallet(null);
    setIsEditModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="mt-4 py-10 pt-0 bg-gray-100">
        <div className="mx-10 mb-8 max-sm:mb-4 max-sm:mx-5 flex items-center justify-between">
          <h2 className="text-3xl text-gray-800 max-xs:hidden">Wallets</h2>
          <button
            className="px-6 py-3 bg-orangeNew text-white flex items-center justify-center rounded-lg font-semibold max-xs:flex-1"
            onClick={openAddModal}
          >
            <img src="/plusWhite.svg" alt="" className="mr-2" />
            <span>Add New Wallet</span>
          </button>
        </div>

        <div className="mx-10 max-sm:mx-5 rounded-lg p-5 bg-white max-xs:p-0 max-xs:bg-inherit mt-8 max-sm:mt-0">
          <h3 className="text-xl mb-4 mt-1 max-xs:hidden">Added Wallets</h3>

          <div className="hidden xs:block">
            <table className="w-full text-left border-separate border-spacing-y-2 border-spacing-x-0">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 font-semibold w-10">
                    <input type="checkbox" className="w-4 h-4" />
                  </th>
                  <th className="py-2 px-4 font-semibold max-sm:text-xs max-sm:px-2 max-xs:px-1">
                    Wallet
                  </th>
                  <th className="py-2 px-4 font-semibold max-sm:text-xs max-sm:px-2 max-xs:px-1">
                    Wallet Address
                  </th>
                  <th className="py-2 px-4 font-semibold max-sm:text-xs max-sm:px-2 max-xs:px-1">
                    Balance
                  </th>
                  <th className="py-2 px-4 font-semibold max-sm:text-xs max-sm:px-2 max-xs:px-1">
                    Status
                  </th>
                  <th className="py-2 px-4 font-semibold max-sm:text-xs max-sm:px-2 max-xs:px-1">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, index) => (
                  <tr key={index} className="bg-white rounded-lg">
                    <td className="py-3 px-4 w-10 max-[750px]:px-1">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="py-3 px-4 flex items-center max-sm:text-sm max-sm:w-fit max-[750px]:px-1">
                      <div className="flex items-center max-md:flex-col justify-center">
                        <img src={row.image} alt="" className="w-15 h-15" />
                        <span>{row.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 break-all overflow-hidden max-sm:text-sm max-sm:w-fit max-[750px]:px-1">
                      {row.address}
                    </td>
                    <td className="py-3 px-4 overflow-hidden max-sm:text-sm max-sm:w-fit max-[750px]:px-1">
                      {row.balance}
                    </td>
                    <td className="py-3 px-4 max-[750px]:px-1">
                      <span
                        className={`px-3 py-2 rounded-full text-sm font-medium ${
                          row.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 max-[750px]:px-1">
                      <div className="flex items-center">
                        <button
                          className="text-blue-600 hover:text-blue-800 font-semibold w-10"
                          onClick={() => openEditModal(row)}
                        >
                          <img src="/editPen.svg" alt="" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 ml-4 font-semibold max-lg:ml-2"
                          onClick={() => handleDelete(row.id)}
                        >
                          <img src="/bin.svg" alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="block xs:hidden">
            {paginatedData.map((wallet, index) => (
              <WalletCard
                key={index}
                image={wallet.image}
                name={wallet.name}
                address={wallet.address}
                balance={wallet.balance}
                status={wallet.status}
                onEdit={() => openEditModal(wallet)}
                onDelete={() => handleDelete(wallet.id)}
              />
            ))}
          </div>
        </div>
        <div className="mx-5 flex justify-end mt-5">
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>

      <AddWalletModal
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
        onSubmit={handleAddSubmit}
      />
      <EditWalletModal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        onSubmit={handleEditSubmit}
        wallet={currentWallet}
      />
    </Wrapper>
  );
}

export default Wallets;
