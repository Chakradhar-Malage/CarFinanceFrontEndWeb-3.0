
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { globalState } from "../../globalState";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type VehicleRecord = {
  id: number;
  vehicle_number: string;
  agreed_amount: string;
  issued_to: string;
  address?: string;
  total_expenses: string;
  cleared_at: string;
};

const CustomerWiseVehicleDetails = () => {
  const [customers, setCustomers] = useState<string[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState<VehicleRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalAgreedAmount, setTotalAgreedAmount] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [profit, setProfit] = useState(0);

  // New states for searchable dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const UserName = globalState.UserName;
  const router = useRouter();

  // Fetch unique customers
  useEffect(() => {
    fetch("http://72.61.245.17:3000/unique-customers")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch customers");
        return res.json();
      })
      .then((json) => setCustomers(json.customers || []))
      .catch((err) => console.error("Error fetching customers:", err));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const wrapper = document.querySelector(".customerDropdownWrapper");
      if (wrapper && !wrapper.contains(event.target as Node)) {
        setDropdownOpen(false);
        setSearchQuery(""); // Optional: clear search when closing
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownOpen]);

  // Filtered customers based on search
  const filteredCustomers = customers.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fetch data for selected customer
  const handleFetchData = () => {
    if (!selectedCustomer) {
      alert("Please select a customer");
      return;
    }

    setLoading(true);

    const url = new URL("http://72.61.245.17:3000/cleared-details");
    url.searchParams.set("customer_name", selectedCustomer);

    if (startDate && endDate) {
      url.searchParams.set("start_date", startDate);
      url.searchParams.set("end_date", endDate);
    }

    fetch(url.toString())
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        const rows = (json.data || []) as VehicleRecord[];
        setData(rows);

        const agg = rows.reduce(
          (sum, r) => sum + parseFloat(r.agreed_amount || "0"),
          0
        );
        const exp = rows.reduce(
          (sum, r) => sum + parseFloat(r.total_expenses || "0"),
          0
        );

        setTotalAgreedAmount(agg);
        setTotalExpenses(exp);
        setProfit(agg - exp);
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF("landscape");
    autoTable(doc, {
      head: [
        [
          "ID",
          "Vehicle Number",
          "Agreed Amount",
          "Issued To",
          "Address",
          "Cleared At",
        ],
      ],
      body: data.map((r) => [
        r.id,
        r.vehicle_number,
        `Rs.${parseFloat(r.agreed_amount || "0").toFixed(2)}`,
        r.issued_to,
        r.address || "N/A",
        moment(r.cleared_at).format("DD-MM-YYYY"),
      ]),
    });
    doc.save("CustomerWiseVehicleDetails.pdf");
  };

  return (
    <div className="safeArea">
      {/* Header */}
      <div className="header">
        <Image
          src="/webbuild/images/usericon.png"
          alt="User Icon"
          width={55}
          height={55}
        />
        <div className="user-text">
          <p className="helloname">Hello,</p>
          <p className="username">{UserName}</p>
        </div>
        <button onClick={() => console.log("Logout")}>
          <Image
            src="/webbuild/images/Logout.png"
            alt="Logout"
            width={25}
            height={25}
          />
        </button>
      </div>

      <div className="separator"></div>

      {/* Nav Buttons */}
      <div className="buttonRow">
        <button
          className="buttonledger"
          onClick={() => router.push("/customer_ledger")}
        >
          Pending Ledger
        </button>
        <button
          className="buttonledger"
          onClick={() => router.push("/CustomerWiseVehicleRecord")}
        >
          CustomerWise Vehicle Details
        </button>
      </div>

      {/* Filter Panel */}
      <div className="container">
        <h2 className="pageTitle">Customerwise Vehicle Details</h2>

        <div className="selectionContainer">
          {/* === SEARCHABLE CUSTOMER DROPDOWN === */}
          <div className="customerDropdownWrapper">
            <div
              className="searchableSelect"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="selectedValue">
                {selectedCustomer || "-- Select Customer --"}
              </span>
              <div className="icons">
                {/* Magnifier Icon - Replace with your actual search icon or use SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
              </div>
            </div>

            {dropdownOpen && (
              <div className="dropdownList">
                <div className="searchBox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search customer..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    autoFocus
                  />
                </div>

                <div className="options">
                  {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((name) => (
                      <div
                        key={name}
                        className="option"
                        onClick={() => {
                          setSelectedCustomer(name);
                          setDropdownOpen(false);
                          setSearchQuery("");
                        }}
                      >
                        {name}
                      </div>
                    ))
                  ) : (
                    <div className="noResults">No customers found</div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* === END OF DROPDOWN === */}

          <input
            type="date"
            className="datePicker"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <input
            type="date"
            className="datePicker"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <button className="button" onClick={handleFetchData}>
            Fetch Data
          </button>
        </div>

        {loading && <p className="loadingText">Loading...</p>}

        {/* Totals */}
        {data.length > 0 && !loading && (
          <div className="totalContainer">
            <p className="totalText">
              Net Amount: Rs.{totalAgreedAmount.toFixed(2)}
            </p>
            <p className="totalText">
              Total Expenses: Rs.{totalExpenses.toFixed(2)}
            </p>
            <p className="totalText">Profit: Rs.{profit.toFixed(2)}</p>
          </div>
        )}

        {/* Print PDF */}
        {data.length > 0 && !loading && (
          <button className="button" onClick={generatePDF}>
            Print PDF
          </button>
        )}

        {/* Data Table */}
        {data.length > 0 ? (
          <div className="tableContainer">
            <table className="recordsTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Vehicle No.</th>
                  <th>Agreed Amount</th>
                  <th>Issued To</th>
                  <th>Address</th>
                  <th>Cleared At</th>
                </tr>
              </thead>
              <tbody>
                {data.map((r) => (
                  <tr key={`${r.id}-${r.address || "N/A"}`}>
                    <td>{r.id}</td>
                    <td>{r.vehicle_number}</td>
                    <td>
                      Rs.
                      {parseFloat(r.agreed_amount || "0").toFixed(2)}
                    </td>
                    <td>{r.issued_to}</td>
                    <td>{r.address || "N/A"}</td>
                    <td>{moment(r.cleared_at).format("DD-MM-YYYY")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && <p>No data available</p>
        )}
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
        .user-text {
          margin-right: auto;
          padding-left: 10px;
        }
        .helloname {
          margin: 0;
          font-size: 14px;
        }
        .username {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
          color: darkslategrey;
        }
        .separator {
          margin: 25px 20px 10px 20px;
          border-bottom: 1px solid #000;
        }
        .buttonRow {
          display: flex;
          justify-content: left;
          gap: 10px;
          margin: 10px 20px;
        }
        .buttonledger {
          background-color: #841584;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 15px;
          width: 150px;
          height: 42px;
          cursor: pointer;
        }
        .container {
          padding: 20px;
          text-align: center;
        }
        .pageTitle {
          font-size: 16px;
          font-weight: bold;
          margin: 10px 0 30px;
        }
        .selectionContainer {
          margin: 0 auto 20px;
          width: 90%;
          padding: 5px;
          border: 2px solid black;
          border-radius: 5px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }
        .datePicker {
          height: 56px;
          width: 200px;
          border: 1px solid #ccc;
          border-radius: 25px;
          padding: 5px;
          font-size: 16px;
        }
        .button {
          background-color: #841584;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 15px;
          width: 200px;
          font-weight: bold;
          cursor: pointer;
        }
        .loadingText {
          font-size: 18px;
          font-weight: bold;
          color: #4caf50;
          margin-top: 20px;
        }
        .totalContainer {
          background-color: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          width: 100%;
          margin: 20px auto;
          text-align: center;
        }
        .totalText {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }
        .tableContainer {
          margin: 20px 0;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 10px;
        }

        .recordsTable {
          width: 100%;
          min-width: 800px; /* Increase if table still feels cramped (e.g., 900px) */
          border-collapse: collapse;
          background: white;
          font-size: 15px;
          white-space: nowrap;
        }

        .recordsTable th {
          background-color: #841584;
          color: white;
          font-weight: bold;
          padding: 12px 15px;
          text-align: center;
          position: sticky;
          top: 0;
          z-index: 10;
          font-size: 15px;
        }
        
        .recordsTable td {
          padding: 12px 15px;
          border-bottom: 1px solid #f0f0f0;
          color: #333;
          font-size: 14px;
        }
        .recordsTable tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .recordsTable tr:hover {
          background-color: #f5f5f5;
        }
        .recordsTable td:nth-child(1),
        .recordsTable td:nth-child(3),
        .recordsTable td:nth-child(5) {
          text-align: right;
        }
        .recordsTable th:nth-child(1),
        .recordsTable th:nth-child(3),
        .recordsTable th:nth-child(5) {
          text-align: right;
        }

        /* === CUSTOM SEARCHABLE DROPDOWN STYLES === */
        .customerDropdownWrapper {
          position: relative;
          width: 300px;
        }
        .searchableSelect {
          height: 56px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 25px;
          padding: 0 15px;
          font-size: 16px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .selectedValue {
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 70%;
        }
        .icons {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #666;
        }
        .arrow {
          font-size: 12px;
        }
        .dropdownList {
          position: absolute;
          top: 65px;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #ccc;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          z-index: 1000;
          max-height: 300px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .searchBox {
          display: flex;
          align-items: center;
          padding: 12px;
          border-bottom: 1px solid #eee;
          gap: 10px;
        }
        .searchBox input {
          border: none;
          outline: none;
          font-size: 16px;
          width: 100%;
        }
        .searchBox input::placeholder {
          color: #aaa;
        }
        .options {
          overflow-y: auto;
          max-height: 240px;
        }
        .option {
          padding: 12px 20px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .option:hover {
          background-color: #f0e6ff;
        }
        .noResults {
          padding: 20px;
          text-align: center;
          color: #999;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default CustomerWiseVehicleDetails;