/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

const CustomerLedger = () => {
  const [ledgerData, setLedgerData] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [transactionType, setTransactionType] = useState("credit");

  const [modifyAmounts, setModifyAmounts] = useState<string[]>([]);

  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState<
    number | null
  >(null);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchLedgerData = async () => {
      try {
        const response = await fetch("http://72.61.245.17:3000/getLedgerData");
        // const response = await fetch("http://localhost:3001/getLedgerData");

        const result = await response.json();

        if (response.ok) {
          setLedgerData(result);

          setModifyAmounts(new Array(result.length).fill(""));
        } else {
          setError(result.message || "Failed to fetch ledger data");
        }
      } catch (error) {
        console.error("Error fetching ledger data:", error);

        setError("An error occurred while fetching ledger data");
      } finally {
        setLoading(false);
      }
    };

    fetchLedgerData();
  }, []);

  const handleModifyPayment = () => {
    if (selectedCustomerIndex === null) return;

    const modifyAmount = parseFloat(modifyAmounts[selectedCustomerIndex]);

    if (isNaN(modifyAmount)) {
      window.alert("Please enter a valid numeric value for the amount.");

      return;
    }

    const updatedData = [...ledgerData];

    const currentBalance =
      Number(updatedData[selectedCustomerIndex].balance) || 0;

    if (transactionType === "credit") {
      updatedData[selectedCustomerIndex].balance =
        currentBalance + modifyAmount;
    } else {
      updatedData[selectedCustomerIndex].balance =
        currentBalance - modifyAmount;
    }

    const requestBody = {
      customer_name: updatedData[selectedCustomerIndex].customer_name,

      address: updatedData[selectedCustomerIndex].address || "N/A",

      modifyAmount: modifyAmount,

      transactionType: transactionType,
    };

    fetch("http://72.61.245.17:3000/saveCustomerLedger", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.message) {
          window.alert(data.message);

          setLedgerData(updatedData);

          setModifyAmounts((prev) => {
            const newAmounts = [...prev];

            newAmounts[selectedCustomerIndex!] = "";

            return newAmounts;
          });

          setSelectedCustomerIndex(null);
        } else {
          window.alert(data.error || "Failed to update ledger");
        }
      })

      .catch((err) => {
        console.error(err);

        window.alert("An error occurred while saving the ledger");
      });
  };

  const renderLedgerItem = (item: any, index: number) => {
    const balance = Number(item.balance) || 0;

    const isNegative = balance < 0;

    return (
      <div key={index} className="card">
        <div className="cardHeader">
          <div className="customerInfo">
            <h2 className="customerName">{item.customer_name}</h2>

            <p className="customerAddress">Address: {item.address || "N/A"}</p>

            <div className="metaInfo">
              <p className="transactionDate">
                {new Date(item.transaction_date).toLocaleString()}
              </p>

              <div className={`balance ${isNegative ? "negative" : ""}`}>
                Rs.{Math.abs(balance).toFixed(2)}
                <span className="balanceLabel">
                  {isNegative ? " owed" : " credit"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="inputSection">
          <input
            className="amountInput"
            type="number"
            placeholder="Enter amount"
            value={modifyAmounts[index]}
            onChange={(e) => {
              const updatedAmounts = [...modifyAmounts];

              updatedAmounts[index] = e.target.value;

              setModifyAmounts(updatedAmounts);
            }}
          />

          <div className="buttonGroup">
            <div className="transactionButtons">
              <button
                className={`transButton credit ${
                  selectedCustomerIndex === index &&
                  transactionType === "credit"
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setTransactionType("credit");

                  setSelectedCustomerIndex(index);
                }}
              >
                Add Credit
              </button>

              <button
                className={`transButton debit ${
                  selectedCustomerIndex === index && transactionType === "debit"
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setTransactionType("debit");

                  setSelectedCustomerIndex(index);
                }}
              >
                Add Debit
              </button>
            </div>

            <button
              className="saveButton"
              onClick={handleModifyPayment}
              disabled={selectedCustomerIndex !== index}
            >
              Confirm Transaction
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="safeArea">
        <div className="loadingContainer">
          <div className="spinner"></div>

          <p className="loadingText">Loading ledger data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="safeArea">
        <div className="errorContainer">
          <div className="errorIcon">⚠️</div>

          <p className="errorText">{error}</p>

          <button
            className="retryButton"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Client-side filtering of ledgerData based on searchQuery

  const filteredLedgerData = ledgerData.filter((item) =>
    item.customer_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="safeArea">
      {/* Header */}

      <header className="appHeader">
        <div className="headerContent">
          <div className="userInfo">
            <div className="userAvatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="userDetails">
              <p className="greeting">Good Day,</p>

              <h1 className="userName">OmSai</h1>
            </div>
          </div>

          <button className="logoutButton">
            <Image
              className="logoutIcon"
              src="/webbuild/images/Logout.png"
              alt="Logout"
              width={28}
              height={28}
            />
          </button>
        </div>
      </header>

      <main className="mainContent">
        {/* Search Input */}

        <div className="searchContainer">
          <input
            type="text"
            className="searchInput"
            placeholder="Search by customer name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="listContainer">
          {filteredLedgerData.length > 0 ? (
            filteredLedgerData.map((item, index) =>
              renderLedgerItem(item, index)
            )
          ) : (
            <p>No matching customer found.</p>
          )}
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;

          margin: 0;

          padding: 0;
        }

        :root {
          --primary-color: #6d28d9;

          --secondary-color: #8b5cf6;

          --success-color: #10b981;

          --error-color: #ef4444;

          --text-dark: #1f2937;

          --text-light: #6b7280;

          --background: #f8fafc;
        }

        .safeArea {
          min-height: 100vh;

          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;

          padding: 1rem;
        }

        .appHeader {
          background: white;

          border-radius: 1rem;

          padding: 1rem;

          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

          margin-bottom: 2rem;
        }

        .headerContent {
          display: flex;

          justify-content: space-between;

          align-items: center;

          max-width: 1200px;

          margin: 0 auto;
        }

        .userInfo {
          display: flex;

          align-items: center;

          gap: 1rem;
        }

        .userAvatar {
          width: 48px;

          height: 48px;

          border-radius: 50%;

          background: #e9d5ff;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .userAvatar svg {
          width: 28px;

          height: 28px;

          color: var(--primary-color);
        }

        .userDetails .greeting {
          color: var(--text-light);

          font-size: 0.875rem;
        }

        .userName {
          color: var(--text-dark);

          font-size: 1.25rem;

          font-weight: 600;
        }

        .logoutButton {
          background: none;

          border: none;

          padding: 0.5rem;

          border-radius: 50%;

          transition: background 0.2s;
        }

        .logoutButton:hover {
          background: #f1f5f9;
        }

        .mainContent {
          max-width: 1200px;

          margin: 0 auto;
        }

        .listContainer {
          display: grid;

          gap: 1.5rem;
        }

        .card {
          background: white;

          border-radius: 1rem;

          padding: 1.5rem;

          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

          transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
          transform: translateY(-2px);

          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .cardHeader {
          margin-bottom: 1.5rem;
        }

        .customerName {
          color: var(--text-dark);

          font-size: 1.125rem;

          font-weight: 600;

          margin-bottom: 0.25rem;
        }

        .metaInfo {
          display: flex;

          justify-content: space-between;

          align-items: center;
        }

        .transactionDate {
          color: var(--text-light);

          font-size: 0.875rem;
        }

        .balance {
          font-size: 1.25rem;

          font-weight: 600;

          color: var(--success-color);

          display: flex;

          align-items: baseline;

          gap: 0.5rem;
        }

        .balance.negative {
          color: var(--error-color);
        }

        .balanceLabel {
          font-size: 0.75rem;

          font-weight: 400;

          color: currentColor;

          opacity: 0.8;
        }

        .inputSection {
          display: grid;

          gap: 1rem;
        }

        .amountInput {
          width: 100%;

          padding: 0.875rem;

          border: 2px solid #e2e8f0;

          border-radius: 0.75rem;

          font-size: 1rem;

          transition: border-color 0.2s;
        }

        .amountInput:focus {
          outline: none;

          border-color: var(--primary-color);

          box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
        }

        .buttonGroup {
          display: grid;

          gap: 1rem;
        }

        .transactionButtons {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 0.75rem;
        }

        .transButton {
          padding: 0.75rem;

          border: none;

          border-radius: 0.75rem;

          font-weight: 600;

          cursor: pointer;

          transition: all 0.2s;
        }

        .transButton.credit {
          background: #e9d5ff;

          color: var(--primary-color);
        }

        .transButton.credit.active,
        .transButton.credit:hover {
          background: var(--primary-color);

          color: white;
        }

        .transButton.debit {
          background: #fee2e2;

          color: var(--error-color);
        }

        .transButton.debit.active,
        .transButton.debit:hover {
          background: var(--error-color);

          color: white;
        }

        .saveButton {
          width: 100%;

          padding: 1rem;

          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );

          color: white;

          border: none;

          border-radius: 0.75rem;

          font-weight: 600;

          cursor: pointer;

          transition: opacity 0.2s;
        }

        .saveButton:disabled {
          opacity: 0.6;

          cursor: not-allowed;
        }

        .loadingContainer {
          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          min-height: 50vh;

          gap: 1.5rem;
        }

        .spinner {
          width: 3rem;

          height: 3rem;

          border: 4px solid #e2e8f0;

          border-top-color: var(--primary-color);

          border-radius: 50%;

          animation: spin 1s linear infinite;
        }

        .loadingText {
          color: var(--text-light);

          font-size: 1.125rem;
        }

        .errorContainer {
          text-align: center;

          padding: 2rem;

          max-width: 400px;

          margin: 2rem auto;
        }

        .errorIcon {
          font-size: 3rem;

          margin-bottom: 1rem;
        }

        .errorText {
          color: var(--error-color);

          margin-bottom: 1.5rem;

          line-height: 1.5;
        }

        .retryButton {
          padding: 0.75rem 1.5rem;

          background: var(--error-color);

          color: white;

          border: none;

          border-radius: 0.75rem;

          font-weight: 600;

          cursor: pointer;

          transition: opacity 0.2s;
        }

        .retryButton:hover {
          opacity: 0.9;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .safeArea {
            padding: 0.75rem;
          }

          .customerName {
            font-size: 1rem;
          }

          .transactionDate {
            font-size: 0.75rem;
          }

          .balance {
            font-size: 1rem;
          }

          .amountInput {
            padding: 0.75rem;
          }

          .transButton {
            font-size: 0.875rem;

            padding: 0.625rem;
          }

          .saveButton {
            padding: 0.875rem;

            font-size: 0.875rem;
          }

          /* Styling for the search input */

          .searchContainer {
            margin-bottom: 1rem;

            text-align: center;
          }

          .searchInput {
            padding: 0.5rem;

            width: 100%;

            max-width: 400px;

            border: 1px solid #ccc;

            border-radius: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerLedger;
