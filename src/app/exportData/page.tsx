/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState, useEffect, useMemo } from "react";

import { useRouter } from "next/navigation";

import Modal from "react-modal";

import moment from "moment";

import { globalState } from "../../globalState"; // Adjust the path as needed

import Image from "next/image";

const ExportData = () => {
  const [data, setData] = useState<any[]>([]); // List of cars for the selected month

  const [loading, setLoading] = useState(false);

  const [month, setMonth] = useState("");

  const [selectedCarRecords, setSelectedCarRecords] = useState<any[]>([]);

  const [totalAgreedAmount, setTotalAgreedAmount] = useState(0);

  const [totalExpenses, setTotalExpenses] = useState(0);

  const [profit, setProfit] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);

  const [carDetails, setCarDetails] = useState<any>({});

  // Add new state for year
  const [year, setYear] = useState<string>("");

  const UserName = globalState.UserName;

  const router = useRouter();

  // Set the app element on the client side (in useEffect)

  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  // Generate years from 2025 to next year
  // const currentYear = moment().year();
  // const years = [];
  // for (let y = 2025; y <= currentYear + 1; y++) {
  //   years.push(y);
  // }

  const years = useMemo(() => {
    const currentYear = moment().year();
    const result: number[] = [];
    for (let y = 2025; y <= currentYear + 1; y++) {
      result.push(y);
    }
    return result;
  }, []);


  // Fetch the list of cars for the selected month

  // const exportLastMonthData = async () => {
  //   if (!month) {
  //     alert("Please select a month");

  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const response = await fetch(
  //       `http://72.61.245.17:3000/export-month?month=${month}`
  //     );

  //     const result = await response.json();

  //     if (response.ok) {
  //       setData(result.results); // All car entries for the month

  //       setTotalAgreedAmount(result.totalAgreedAmount);

  //       setTotalExpenses(result.totalExpenses);

  //       setProfit(result.profit);
  //     } else {
  //       alert(result.message || "An error occurred");
  //     }
  //   } catch (error: any) {
  //     console.error("Error fetching export data:", error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Handle the selection of a car

  const exportLastMonthData = async () => {
    if (!month || !year) {
      alert("Please select both month and year");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://72.61.245.17:3000/export-month?month=${month}&year=${year}`
      );
      // Old api call; revert back to this api call if anything goes wrong
      // const response = await fetch(
      //   `http://72.61.245.17:3000/export-month?month=${month}`
      // );

      const result = await response.json();

      if (response.ok) {
        setData(result.results);
        setTotalAgreedAmount(result.totalAgreedAmount);
        setTotalExpenses(result.totalExpenses);
        setProfit(result.profit);
      } else {
        alert(result.error || result.message || "An error occurred");
      }
    } catch (error: any) {
      console.error("Error fetching export data:", error.message);
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  const handleCarSelection = (vehicle_number: string) => {
    const selectedCar = data.filter(
      (item) => item.vehicle_number === vehicle_number
    );

    setSelectedCarRecords(selectedCar);

    // Calculate the totals for the selected car

    let carAgreedAmount = 0;

    let carExpenses = 0;

    selectedCar.forEach((item) => {
      carAgreedAmount += parseFloat(item.agreed_amount);

      carExpenses += parseFloat(item.total_expenses);
    });

    const carProfit = carAgreedAmount - carExpenses;

    setCarDetails({
      vehicle_number: vehicle_number,

      totalAgreedAmount: carAgreedAmount,

      totalExpenses: carExpenses,

      profit: carProfit,
    });

    setModalVisible(true);
  };

  // Filter the list of cars to show unique vehicle numbers

  const uniqueCarList = Array.from(
    new Set(data.map((item) => item.vehicle_number))
  ).map((vehicle_number) => {
    return data.find((item) => item.vehicle_number === vehicle_number);
  });

  return (
    <div className="safeArea">
      {/* Header */}

      <div className="header">
        <Image
          src="/webbuild/images/usericon.png"
          alt="User Icon"
          width={55}
          height={55}
          className="rounded-full margin-right-10"
        />

        <div className="user-text">
          <p className="helloname">Hello,</p>

          <p className="username">{UserName}</p>
        </div>

        <button className="logout-button" onClick={() => console.log("Logout")}>
          <Image
            src="/webbuild/images/Logout.png"
            alt="User Icon"
            width={25}
            height={25}
            className="rounded-full"
          />
        </button>
      </div>

      <div className="separator"></div>

      <div className="buttonRow">
        <button
          className="buttonledger"
          onClick={() => router.push("/customer_ledger")}
        >
          Pending Ledger
        </button>

        <button
          className="buttonledger"
          style={{ width: "250px" }}
          onClick={() => router.push("/CustomerWiseVehicleRecord")}
        >
          CustomerWise Vehicle Details
        </button>
      </div>

      <div className="container">
        {loading && <p className="loadingText">Loading...</p>}

        {/* Month Picker */}

        <h2 className="exportTitle">Export Last Month Data</h2>

        <div className="monthPickerContainer">
          <select
            className="picker"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            className="picker"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <button className="button" onClick={exportLastMonthData}>
            Export
          </button>
        </div>

        {/* Display Totals */}

        <div className="totalContainer">
          <p className="totalText">
            Net Amount: Rs.{totalAgreedAmount.toFixed(2)}
          </p>

          <p className="totalText">
            Total Expenses: Rs.{totalExpenses.toFixed(2)}
          </p>

          <p className="totalText">Profit: Rs.{profit.toFixed(2)}</p>
        </div>

        {/* List of Unique Cars */}

        {uniqueCarList.length > 0 && !loading && (
          <div>
            {uniqueCarList.map((item: any) => (
              <button
                key={item.vehicle_number}
                className="carCard"
                onClick={() => handleCarSelection(item.vehicle_number)}
              >
                Car: {item.vehicle_number}
              </button>
            ))}
          </div>
        )}

        {/* Modal to Show Car Records */}

        <Modal
          isOpen={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
          contentLabel="Car Records Modal"
          className="modalContent"
          overlayClassName="modalOverlay"
        >
          <h3 className="modalTitle">
            Monthly Record for {carDetails.vehicle_number}
          </h3>

          <div className="totalsContainer">
            <p className="totalsText">
              Total Agreed Amount: Rs.{" "}
              {carDetails.totalAgreedAmount?.toFixed(2)}
            </p>

            <p className="totalsText">
              Total Expenses: Rs. {carDetails.totalExpenses?.toFixed(2)}
            </p>

            <p className="totalsText">
              Total Profit: Rs. {carDetails.profit?.toFixed(2)}
            </p>
          </div>

          <div className="tableContainer">
            <div
              style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
            >
              <table className="recordsTable">
                <thead>
                  <tr>
                    <th>ID</th>

                    {/* <th>Vehicle No.</th> */}

                    <th style={{ minWidth: 120 }}>Date</th>

                    <th style={{ textAlign: "left" }}>Customer</th>

                    <th style={{ textAlign: "left" }}>Agreed Amount</th>

                    <th style={{ textAlign: "left" }}>Expenses</th>

                    <th style={{ textAlign: "left" }}>Profit</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedCarRecords.map((item, index) => (
                    <tr key={index} className="tableRow">
                      <td>{item.id}</td>

                      {/* <td>{item.vehicle_number}</td> */}

                      <td style={{ minWidth: 120 }}>
                        {moment(item.cleared_at).format("DD-MM-YYYY")}
                      </td>

                      <td style={{ textAlign: "left" }}>{item.issued_to}</td>

                      <td style={{ textAlign: "left" }}>
                        Rs.{item.agreed_amount}
                      </td>

                      <td style={{ textAlign: "left" }}>
                        Rs.{item.total_expenses}
                      </td>

                      <td style={{ textAlign: "left" }}>
                        Rs.
                        {(item.agreed_amount - item.total_expenses).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button
            className="closeModalButton"
            onClick={() => setModalVisible(false)}
          >
            Close
          </button>
        </Modal>
      </div>

      <style jsx>{`
        .safeArea {
          min-height: 100vh;

          background-color: #f8f8f8;
        }

        .header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin: 20px;
        }

        .usernameContainer {
          margin-left: 20px;

          text-align: left;
        }

        .usrimg {
          margin-left: 20px;

          margin-top: 20px;

          width: 50px;

          height: 50px;

          border-radius: 50%;

          object-fit: cover;
        }

        .user-text {
          margin-right: 1350px;

          padding-left: 10px;
        }

        .helloname {
          margin: 0;

          font-size: 14px;

          margin-bottom: 0px;

          margin-top: 0px;
        }

        .username {
          margin: 0;

          font-size: 16px;

          font-weight: bold;

          color: darkslategrey;

          margin-top: 0px;
        }

        .logout-button {
          position: absolute;

          top: 20px;

          right: 20px;

          background: none;

          border: none;

          cursor: pointer;
        }

        .logoutimg {
          width: 25px;

          height: 25px;
        }

        .separator {
          margin: 25px 20px 10px 20px;

          border-bottom: 1px solid #000;
        }

        .buttonRow {
          display: flex;

          justify-content: left;

          gap: 10px; /* Controls the horizontal space between buttons */
        }

        .buttonledger {
          background-color: #841584;

          color: white;

          padding: 12px;

          border: none;

          border-radius: 15px;

          width: 150px;

          height: 42px;

          margin: 10px;

          cursor: pointer;
        }

        .container {
          padding: 10px;

          text-align: center;
        }

        .loadingText {
          font-size: 18px;

          font-weight: bold;

          color: #4caf50;

          margin-top: 20px;
        }

        .exportTitle {
          font-size: 16px;

          font-weight: bold;

          margin: 10px 0 30px;
        }

        .monthPickerContainer {
          margin: 0 auto 20px;

          width: 90%;

          padding: 5px;

          border: 2px solid black;

          border-radius: 5px;

          display: flex;

          flex-direction: column;

          align-items: center;
        }

        .picker {
          height: 56px;

          width: 95%;

          border: 1px solid #ccc;

          border-radius: 25px;

          padding: 5px;

          font-size: 16px;

          margin-bottom: 10px;
        }

        .button {
          background-color: #841584;

          padding: 12px;

          border: none;

          border-radius: 15px;

          width: 200px;

          color: white;

          font-weight: bold;

          cursor: pointer;

          margin-bottom: 10px;
        }

        .totalContainer {
          background-color: #fff;

          padding: 15px;

          border-radius: 8px;

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

          width: 100%;

          margin: 55px auto 20px;

          margin-top: 10px;

          text-align: center;
        }

        .totalText {
          font-size: 16px;

          font-weight: bold;

          margin-bottom: 10px;

          color: #333;
        }

        .carCard {
          margin: 5px auto;

          padding: 15px;

          border: 1px solid #ccc;

          border-radius: 10px;

          width: 300px;

          background-color: #fff;

          cursor: pointer;

          display: block;
        }

        .carRecord {
          margin: 5px auto;

          padding: 15px;

          border: 1px solid #ccc;

          border-radius: 5px;

          width: 275px;

          background-color: #fff;

          text-align: left;
        }

        .detailsText {
          font-size: 15px;

          color: #333;

          margin-bottom: 5px;
        }

        /* Modal styles */

        .modalContent {
          background-color: #fff;

          padding: 25px;

          border-radius: 10px;

          width: 90%;

          max-width: 900px;

          margin: auto;

          max-height: 80vh;

          overflow-y: auto;
        }

        .modalOverlay {
          background-color: rgba(0, 0, 0, 0.5);

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .modalTitle {
          font-size: 20px;

          font-weight: bold;

          margin-bottom: 15px;

          text-align: center;

          color: #841584;
        }

        .totalsContainer {
          margin-bottom: 15px;

          text-align: center;

          background: #f8f8f8;

          padding: 15px;

          border-radius: 8px;
        }

        .totalsText {
          font-size: 16px;

          margin-bottom: 8px;

          font-weight: 500;
        }

        .closeModalButton {
          background-color: #841584;

          color: white;

          padding: 12px 25px;

          border: none;

          border-radius: 8px;

          cursor: pointer;

          margin-top: 15px;

          font-size: 14px;

          transition: opacity 0.3s;
        }

        .closeModalButton:hover {
          opacity: 0.9;
        }

        /* Updated Table Styles */

        .tableContainer {
          margin: 20px 0;

          border: 1px solid #e0e0e0;

          border-radius: 8px;

          overflow: hidden;

          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .recordsTable {
          width: 100%;

          border-collapse: collapse;

          background: white;

          font-size: 15px; /* Matches .detailsText size */
        }

        .recordsTable th {
          background-color: #841584;

          color: white;

          font-weight: bold; /* Matches .totalText weight */

          padding: 12px 15px;

          text-align: left;

          position: sticky;

          top: 0;

          font-size: 15px; /* Consistent with headers */
        }

        .recordsTable td {
          padding: 12px 15px;

          border-bottom: 1px solid #f0f0f0;

          color: #333; /* Matches .totalText color */

          font-size: 14px; /* Between .detailsText and .totalText */
        }

        .recordsTable tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .recordsTable tr:hover {
          background-color: #f5f5f5;
        }

        /* Right-align numeric columns without changing font */

        .recordsTable td:last-child,
        .recordsTable td:nth-child(3),
        .recordsTable td:nth-child(5),
        .recordsTable td:nth-child(7) {
          text-align: right;

          /* Removed monospace to match upper components' font */
        }

        .recordsTable th:nth-child(3),
        .recordsTable th:nth-child(5),
        .recordsTable th:nth-child(7) {
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default ExportData;
