import React, { useState } from "react";
import Wrapper from "./ui/Wrapper";
import CustomPagination from "./ui/CustomPagination";
import AddWalletModal from "./ui/AddWalletModal";
import WalletCard from "./ui/WalletCard";

function Wallets(props) {
  const [wallets, setWallets] = useState([
    {
      image: "/tronCry.svg",
      name: "TRON (TRX)",
      address: "0x1234abcd5678efgh9012ijkl3456mnop7890qrst",
      balance: "$10,000",
      status: "Active",
    },
    {
      image: "/ethereumCry.svg",
      name: "Ethereum (ETH)",
      address: "0x2345bcde6789fghi0123jklm4567nopq8901rstu",
      balance: "$5,000",
      status: "Inactive",
    },
    {
      image: "/solanaCry.svg",
      name: "Solana (SOL)",
      address: "0x3456cdef7890ghij1234klmn5678opqr9012stuv",
      balance: "$15,000",
      status: "Active",
    },
    {
      image: "/solanaCry.svg",
      name: "Solana (SOL)",
      address: "0x4567defg8901hijk2345lmno6789pqrs0123tuvw",
      balance: "$7,500",
      status: "Active",
    },
    {
      image: "/ethereumCry.svg",
      name: "Ethereum (ETH)",
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
    const newWalletEntry = {
      image: newWallet.image,
      name: newWallet.chain,
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
      <div className="mt-4 py-10 pt-0 bg-gray-100">
        <div className="mx-10 mb-8 max-sm:mb-4 max-sm:mx-5 flex items-center justify-between">
          <h2 className="text-3xl text-gray-800 max-xs:hidden">Wallets</h2>
          <button
            className="px-6 py-3 bg-orangeNew text-white flex items-center justify-center rounded-lg font-semibold max-xs:flex-1"
            onClick={openModal}
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
                        <button className="text-blue-600 hover:text-blue-800 font-semibold w-10">
                          <img src="/editPen.svg" alt="" />
                        </button>
                        <button className="text-red-600 hover:text-red-800 ml-4 font-semibold max-lg:ml-2">
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
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSubmit={handleSubmit}
      />
    </Wrapper>
  );
}

export default Wallets;
