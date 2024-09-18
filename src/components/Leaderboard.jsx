import React, { useState } from "react";

import CustomPagination from "./ui/CustomPagination";
import Navigation from "./ui/Navigation";
import Header from "./ui/Header";
import Wrapper from "./ui/Wrapper";

const Leaderboard = () => {
  const rowData = [
    {
      rank: "01",
      username: "User1",
      image: "/user4.jpg",
      winRate: "75%",
      roi: "20%",
      volume: "$50K",
      background: "#FFEEAD",
      borderColor: "#FFE06A",
      wentUp: true,
    },
    {
      rank: "02",
      username: "User2",
      image: "/user5.jpeg",

      winRate: "80%",
      roi: "25%",
      volume: "$60K",
      background: "#C9FDE4",
      borderColor: "#6FFDB9",
    },
    {
      rank: "03",
      username: "User3",
      image: "/user6.jpeg",

      winRate: "85%",
      roi: "30%",
      volume: "$70K",
      background: "#EAFECB",
      borderColor: "#C7FF6D",
    },
    // Add more rows as needed
    {
      rank: "04",
      username: "User4",
      image: "/user1.svg",

      winRate: "70%",
      roi: "15%",
      volume: "$40,000",
      borderColor: "#E7E7ED",
      wentUp: true,
    },
    {
      rank: "05",
      username: "User5",
      image: "/user2.svg",

      winRate: "65%",
      roi: "10%",
      volume: "$30,000",
      borderColor: "#E7E7ED",
    },
    {
      rank: "06",
      username: "User6",
      image: "/user1.svg",

      winRate: "90%",
      roi: "35%",
      volume: "$80,000",
      borderColor: "#E7E7ED",
    },
    {
      rank: "07",
      username: "User7",
      image: "/user1.svg",

      winRate: "95%",
      roi: "40%",
      volume: "$90,000",
      borderColor: "#E7E7ED",
    },
    {
      rank: "08",
      username: "User8",
      image: "/user1.svg",

      winRate: "60%",
      roi: "5%",
      volume: "$20,000",
      borderColor: "#E7E7ED",
    },
    {
      rank: "09",
      username: "User9",
      image: "/user2.svg",

      winRate: "55%",
      roi: "8%",
      volume: "$15,000",
      borderColor: "#E7E7ED",
      wentUp: true,
    },
    {
      rank: "10",
      username: "User10",
      image: "/user3.svg",

      winRate: "50%",
      roi: "12%",
      volume: "$25,000",
      borderColor: "#E7E7ED",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const rowsPerPage = 8;
  const totalPages = Math.ceil(rowData.length / rowsPerPage);
  const paginatedData = rowData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Wrapper>
      <div className="mt-4 py-10 max-sm:py-5 pt-0 bg-gray-100 ">
        {/* Leaderboard Section */}
        <h2 className=" mx-10  max-sm:mx-5  text-3xl text-gray-800 mb-8 max-xs:hidden ">
          Leaderboard
        </h2>
        {/* Top 3 Cards */}
        <div className=" mx-10  max-sm:mx-5 flex justify-center items-center mb-10 mt-48 max-sm:mt-20">
          <div
            className="grid grid-cols-3 gap-6 max-sm:gap-3 "
            style={{ alignItems: "end" }}
          >
            <div className="bg-[#F7FFEA] border-[#E4FFBB] border-2 rounded-lg max-sm:rounded-t-3xl p-4 max-xs:p-2 text-center shadow-md relative h-[310px]  max-w-52 lg:w-52  flex flex-col justify-end">
              <div className=" max-sm:scale-75 max-xs:scale-50 absolute top-0 left-1/2">
                <div className="absolute overflow-hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-4 border-[#ADEF44]">
                  <img
                    src={rowData?.[2]?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Image Placeholder */}
                <div className="absolute top-[-87px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16">
                  <img
                    src="/threeCrown.svg"
                    alt="Crown"
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Crown Image */}
                <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
                  <img
                    src="/threeColored.svg"
                    alt="Crown"
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
              </div>
              {/* Crown Image */}
              <div className="pt-10 max-sm:px-3 max-xs:px-0">
                {" "}
                {/* Padding to push content up and keep it visible above the image */}
                <h2 className="font-semibold text-2xl mb-[52px] max-sm:mb-10">
                  <span> {rowData[2].username} </span>
                </h2>
                <p className="mt-4 flex  max-sm:flex-col items-center">
                  {" "}
                  <img
                    src="/threeDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {rowData[2].volume} Traded{" "}
                  </span>
                </p>
                <p className="mt-4 flex max-sm:flex-col items-center">
                  {" "}
                  <img
                    src="/threeDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {" "}
                    {rowData[2].winRate} Avg. WR{" "}
                  </span>
                </p>
                <p className="mt-4 flex max-sm:flex-col items-center">
                  <img
                    src="/threeDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {" "}
                    {rowData[2].roi} Avg. ROI{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-[#FFF9E2] border-[#FFEEAD] border-2 rounded-lg max-sm:rounded-t-3xl p-4 max-xs:p-2 text-center shadow-md relative h-[340px] max-w-52 lg:w-52  flex flex-col justify-end">
              <div className=" max-sm:scale-75 max-xs:scale-50  absolute top-0 left-1/2">
                <div className="absolute overflow-hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border-4 border-[#FFCA28]">
                  <img
                    src={rowData?.[0]?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Image Placeholder */}
                <div className="absolute top-[-115px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20">
                  <img
                    src="/oneCrown.svg"
                    alt="Crown"
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Crown Image */}
                <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14">
                  <img
                    src="/oneColored.svg"
                    alt="Crown"
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
              </div>
              {/* Crown Image */}
              <div className="pt-10 max-sm:px-3 max-xs:px-0">
                {" "}
                {/* Padding to push content up and keep it visible above the image */}
                <h2 className="font-semibold text-2xl mb-[42px] max-sm:mb-10">
                  <span> {rowData[0].username} </span>
                </h2>
                <p className="mt-4 flex  max-sm:flex-col items-center">
                  {" "}
                  <img
                    src="/oneDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {rowData[0].volume} Traded{" "}
                  </span>
                </p>
                <p className="mt-4 flex max-sm:flex-col items-center">
                  {" "}
                  <img
                    src="/oneDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {" "}
                    {rowData[0].winRate} Avg. WR{" "}
                  </span>
                </p>
                <p className="mt-4 flex max-sm:flex-col items-center">
                  <img
                    src="/oneDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {" "}
                    {rowData[0].roi} Avg. ROI{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-[#E9FFF4] border-[#C1FBDF] border-2 rounded-lg max-sm:rounded-t-3xl p-4 max-xs:p-2 text-center shadow-md relative h-[310px]  max-w-52 lg:w-52 flex flex-col justify-end">
              <div className=" max-sm:scale-75 max-xs:scale-50  absolute top-0 left-1/2">
                <div className="absolute overflow-hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-4 border-[#49E89C]">
                  <img
                    src={rowData?.[1]?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Image Placeholder */}
                <div className="absolute top-[-87px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
                  <img
                    src="/twoCrown.svg"
                    alt="Crown"
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Crown Image */}
                <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
                  <img
                    src="/twoColored.svg"
                    alt="Crown"
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
              </div>
              {/* Crown Image */}
              <div className="pt-10 max-sm:px-3 max-xs:px-0">
                {" "}
                {/* Padding to push content up and keep it visible above the image */}
                <h2 className="font-semibold text-2xl mb-[42px] max-sm:mb-10  ">
                  <span> {rowData[1].username} </span>
                </h2>
                <p className="mt-4 flex  max-sm:flex-col items-center">
                  {" "}
                  <img
                    src="/twoDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {rowData[1].volume} Traded{" "}
                  </span>
                </p>
                <p className="mt-4 flex max-sm:flex-col items-center">
                  {" "}
                  <img
                    src="/twoDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {" "}
                    {rowData[1].winRate} Avg. WR{" "}
                  </span>
                </p>
                <p className="mt-4 flex max-sm:flex-col items-center">
                  <img
                    src="/twoDollarSign.svg"
                    alt=""
                    className="mr-3 w-7 h-7"
                  />
                  <span className="max-sm:text-nowrap max-sm:text-xs">
                    {" "}
                    {rowData[1].roi} Avg. ROI{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Top Performers Table */}
        <div className=" mx-10  max-xs:mx-0 max-xs:rounded-t-[80px] max-xs:drop-shadow-md rounded-lg  p-5 bg-white">
          <div className="flex justify-between items-center mb-4 max-xs:justify-center">
            <div className="flex flex-col max-xs:items-center ">
              <span className="w-12 p-2 py-1 bg-orangeNew rounded-3xl mb-3 hidden max-xs:block"></span>
              <h3 className="text-2xl font-medium max-xs:font-normal ">
                Top Performers
              </h3>

              <span className="text-orangeNew max-xs:text-center max-xs:text-sm">
                Ranks are based on total volume of coins traded
              </span>
            </div>
            <button className="border text-sm font-medium border-orangeNew  px-4 py-1 rounded max-sm:hidden ">
              Filter by: <span className="text-orangeNew"> Win Rate</span>
            </button>
          </div>

          <table className="w-full text-left border-separate border-spacing-y-2 border-spacing-x-0 max-sm:text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 font-semibold w-16 max-sm:w-10  max-sm:text-xxs max-sm:px-2 max-xs:px-1">
                  <img
                    src="/upDown.svg"
                    alt=""
                    className="px-2  max-sm:p-0 w-7 max-sm:w-3  "
                  />
                </th>
                <th className="py-2 px-4 font-semibold  max-sm:text-xxs max-sm:px-2 max-xs:px-1">
                  RANK
                </th>
                <th className="py-2 px-4 font-semibold  max-sm:text-xxs max-sm:px-2 max-xs:px-1">
                  USERNAME
                </th>
                <th className="py-2 px-4 font-semibold  max-sm:text-xxs max-sm:px-2 max-xs:px-1">
                  AVG. WIN RATE
                </th>
                <th className="py-2 px-4 font-semibold  max-sm:text-xxs max-sm:px-2 max-xs:px-1">
                  AVG. ROI
                </th>
                <th className="py-2 px-4 font-semibold  max-sm:text-xxs max-sm:px-2 max-xs:px-1">
                  TOTAL VOL. TRADED
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: row.background,
                    // borderColor: row.borderColor,
                    borderWidth: "1px",
                    margin: "10px",
                  }}
                  className="rounded-lg overflow-hidden"
                >
                  <td
                    className="flex-wrap py-3 px-4 rounded-l-lg overflow-hidden border-y border-l  max-sm:text-sm max-sm:w-fit max-sm:px-0"
                    style={{ borderColor: row.borderColor }}
                  >
                    <img
                      src={
                        row.wentUp ? "/greenUpArrow.svg" : "/redDownArrow.svg"
                      }
                      alt=""
                    />
                  </td>
                  <td
                    className="py-3 px-4  overflow-hidden border-y  max-sm:text-sm max-sm:w-fit max-sm:px-0"
                    style={{ borderColor: row.borderColor }}
                  >
                    {row.rank}
                  </td>
                  <td
                    className="flex-wrap py-3 px-4 pb-4  flex items-center  border-y max-sm:text-sm max-sm:w-fit max-sm:px-0"
                    style={{ borderColor: row.borderColor }}
                  >
                    <div className="flex items-center flex-wrap">
                      <img
                        src={row.image}
                        alt=""
                        className="rounded-full mr-3 max-sm:mr-1 w-8 h-8  "
                      />
                      <span className="font-semibold">{row.username}</span>
                    </div>
                  </td>
                  <td
                    className="py-3 px-4  border-y max-sm:text-sm max-sm:w-fit max-sm:px-0"
                    style={{ borderColor: row.borderColor }}
                  >
                    {row.winRate}
                  </td>
                  <td
                    className="py-3 px-4  border-y max-sm:text-sm max-sm:w-fit max-sm:px-0"
                    style={{ borderColor: row.borderColor }}
                  >
                    {row.roi}
                  </td>
                  <td
                    className="py-3 px-4 rounded-r-lg overflow-hidden border-y border-r max-sm:text-sm max-sm:w-fit max-sm:px-0"
                    style={{ borderColor: row.borderColor }}
                  >
                    {row.volume}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className=" px-10 flex justify-end mt-5">
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
        {/* </div> */}
      </div>
    </Wrapper>
  );
};

export default Leaderboard;
