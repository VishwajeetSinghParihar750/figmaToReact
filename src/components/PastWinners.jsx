import React, { useEffect, useState } from "react";

import CustomPagination from "./ui/CustomPagination";
import Navigation from "./ui/Navigation";
import Header from "./ui/Header";

const PastWinners = () => {
  const rowDataWeek = [
    {
      rank: "01",
      username: "User1",
      image: "/user4.jpg",
      winRate: "75%",
      roi: "20%",
      volume: "$50,000",
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
      volume: "$60,000",
      background: "#C9FDE4",
      borderColor: "#6FFDB9",
    },
    {
      rank: "03",
      username: "User3",
      image: "/user6.jpeg",

      winRate: "85%",
      roi: "30%",
      volume: "$70,000",
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
  const rowDataMonth = [
    {
      rank: "01",
      username: "User2",
      image: "/user5.jpeg",

      winRate: "80%",
      roi: "25%",
      volume: "$60,000",
      background: "#C9FDE4",
      borderColor: "#6FFDB9",
    },
    {
      rank: "02",
      username: "User1",
      image: "/user4.jpg",
      winRate: "75%",
      roi: "20%",
      volume: "$50,000",
      background: "#FFEEAD",
      borderColor: "#FFE06A",
      wentUp: true,
    },
  ];
  const rowData3Month = [
    {
      rank: "01",
      username: "User4",
      image: "/user1.svg",

      winRate: "70%",
      roi: "15%",
      volume: "$40,000",
      borderColor: "#E7E7ED",
      wentUp: true,
    },
    {
      rank: "02",
      username: "User1",
      image: "/user4.jpg",
      winRate: "75%",
      roi: "20%",
      volume: "$50,000",
      background: "#FFEEAD",
      borderColor: "#FFE06A",
      wentUp: true,
    },
    {
      rank: "03",
      username: "User2",
      image: "/user5.jpeg",

      winRate: "80%",
      roi: "25%",
      volume: "$60,000",
      background: "#C9FDE4",
      borderColor: "#6FFDB9",
    },
  ];

  // selected time
  const [time, setTime] = useState("week");

  const getRowData = () => {
    if (time == "week") return rowDataWeek;
    if (time == "month") return rowDataMonth;
    if (time == "3months") return rowData3Month;
  };

  console.log(time);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(getRowData());
  }, [time]);

  console.log(rowData?.[0]?.image, rowData?.[1]?.image);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const rowsPerPage = 8;
  const totalPages = Math.ceil(rowData.length / rowsPerPage);
  const paginatedData = rowData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md fixed h-full">
        <h1 className="font-bold my-12 mx-4">
          <img src="/VANGUARD.svg" alt="" />
        </h1>
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* header section */}

        <Header />
        <div className="mt-4 p-10 pt-0 bg-gray-100 ">
          {/* Leaderboard Section */}
          <h2 className="text-2xl font-medium text-gray-800 mb-8">
            Past Winners
          </h2>

          <div className="flex items-center justify-center">
            <div
              className={
                time == "week"
                  ? "bg-orangeNew text-white font-medium  rounded-3xl py-1 px-4 w-fit mx-4"
                  : " mx-4 cursor-pointer"
              }
              onClick={() => setTime("week")}
            >
              Last Week
            </div>
            <div
              className={
                time == "month"
                  ? "bg-orangeNew text-white  font-medium rounded-3xl py-1 px-4 w-fit mx-4"
                  : " mx-4 cursor-pointer"
              }
              onClick={() => setTime("month")}
            >
              Last Month
            </div>
            <div
              className={
                time == "3months"
                  ? "bg-orangeNew text-white font-medium rounded-3xl py-1 px-4 w-fit mx-4"
                  : " mx-4 cursor-pointer"
              }
              onClick={() => setTime("3months")}
            >
              Last 3 Months
            </div>
          </div>

          {/* Top 3 Cards */}
          <div className="flex justify-center items-center mb-10 mt-44">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6  "
              style={{ alignItems: "end" }}
            >
              <div className="bg-[#F7FFEA] border-[#E4FFBB] border-2 rounded-lg p-4 text-center shadow-md relative h-[310px] w-52 flex flex-col justify-end">
                <div className="absolute overflow-hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-4 border-[#ADEF44]">
                  <img
                    src={rowData?.[2]?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Image Placeholder */}
                <div className="absolute top-[-28%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16">
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
                {/* Crown Image */}
                <div className="pt-24">
                  {" "}
                  {/* Padding to push content up and keep it visible above the image */}
                  <h2 className="font-semibold text-2xl mb-[42px]">
                    <span> {rowData?.[2]?.username} </span>
                  </h2>
                  <p className="mt-2 flex ">
                    {" "}
                    <img
                      src="/threeDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span>{rowData?.[2]?.volume} Traded </span>
                  </p>
                  <p className="mt-2 flex">
                    {" "}
                    <img
                      src="/threeDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span> {rowData?.[2]?.winRate} Avg. WR </span>
                  </p>
                  <p className="mt-2 flex">
                    <img
                      src="/threeDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span> {rowData?.[2]?.roi} Avg. ROI </span>
                  </p>
                </div>
              </div>

              <div className="bg-[#FFF9E2] border-[#FFEEAD] border-2 rounded-lg p-4 text-center shadow-md relative h-[340px] w-52 flex flex-col justify-end">
                <div className="absolute overflow-hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border-4 border-[#FFCA28]">
                  <img
                    src={rowData?.[0]?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Image Placeholder */}
                <div className="absolute top-[-33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20">
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
                {/* Crown Image */}
                <div className="pt-24">
                  {" "}
                  {/* Padding to push content up and keep it visible above the image */}
                  <h2 className="font-semibold text-2xl mb-[42px]">
                    <span> {rowData?.[0]?.username} </span>
                  </h2>
                  <p className="mt-2 flex ">
                    {" "}
                    <img
                      src="/oneDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span>{rowData?.[0]?.volume} Traded </span>
                  </p>
                  <p className="mt-2 flex">
                    {" "}
                    <img
                      src="/oneDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span> {rowData?.[0]?.winRate} Avg. WR </span>
                  </p>
                  <p className="mt-2 flex">
                    <img
                      src="/oneDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span> {rowData?.[0]?.roi} Avg. ROI </span>
                  </p>
                </div>
              </div>

              <div className="bg-[#E9FFF4] border-[#C1FBDF] border-2 rounded-lg p-4 text-center shadow-md relative h-[310px] w-52 flex flex-col justify-end">
                <div className="absolute overflow-hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-4 border-[#49E89C]">
                  <img
                    src={rowData?.[1]?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Image Placeholder */}
                <div className="absolute top-[-28%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
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
                {/* Crown Image */}
                <div className="pt-24">
                  {" "}
                  {/* Padding to push content up and keep it visible above the image */}
                  <h2 className="font-semibold text-2xl mb-[42px]">
                    <span> {rowData?.[1]?.username} </span>
                  </h2>
                  <p className="mt-2 flex ">
                    {" "}
                    <img
                      src="/twoDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span>{rowData?.[1]?.volume} Traded </span>
                  </p>
                  <p className="mt-2 flex">
                    {" "}
                    <img
                      src="/twoDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span> {rowData?.[1]?.winRate} Avg. WR </span>
                  </p>
                  <p className="mt-2 flex">
                    <img
                      src="/twoDollarSign.svg"
                      alt=""
                      className="mr-3 w-7 h-7"
                    />
                    <span> {rowData?.[1]?.roi} Avg. ROI </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performers Table */}
          <div className=" rounded-lg  p-5 bg-white">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <h3 className="text-2xl font-medium">Top Performers</h3>

                <span className="text-orangeNew">
                  Ranks are based on total volume of coins traded
                </span>
              </div>
              <button className="border text-sm font-medium border-orangeNew  px-4 py-1 rounded  ">
                Filter by: <span className="text-orangeNew"> Win Rate</span>
              </button>
            </div>

            <table className="w-full text-left border-separate border-spacing-y-2 border-spacing-x-0">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 font-semibold">
                    <img src="/upDown.svg" alt="" className="px-2" />
                  </th>
                  <th className="py-2 px-4 font-semibold">Rank</th>
                  <th className="py-2 px-4 font-semibold">Username</th>
                  <th className="py-2 px-4 font-semibold">Average Win Rate</th>
                  <th className="py-2 px-4 font-semibold">Average ROI</th>
                  <th className="py-2 px-4 font-semibold">
                    Total Volume Traded
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
                      className="py-3 px-4 rounded-l-lg overflow-hidden border-y border-l "
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
                      className="py-3 px-4  overflow-hidden border-y "
                      style={{ borderColor: row.borderColor }}
                    >
                      {row.rank}
                    </td>
                    <td
                      className="py-3 px-4 flex items-center  border-y"
                      style={{ borderColor: row.borderColor }}
                    >
                      <img
                        src={row.image}
                        alt=""
                        className="rounded-full mr-3 w-8 h-8"
                      />
                      <span className="font-semibold">{row.username}</span>
                    </td>
                    <td
                      className="py-3 px-4  border-y"
                      style={{ borderColor: row.borderColor }}
                    >
                      {row.winRate}
                    </td>
                    <td
                      className="py-3 px-4  border-y"
                      style={{ borderColor: row.borderColor }}
                    >
                      {row.roi}
                    </td>
                    <td
                      className="py-3 px-4 rounded-r-lg overflow-hidden border-y border-r"
                      style={{ borderColor: row.borderColor }}
                    >
                      {row.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}

            <div className="flex justify-end mt-5">
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastWinners;
