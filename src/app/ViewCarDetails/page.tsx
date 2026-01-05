/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import moment from "moment";

import { globalState } from "../../globalState";

import Image from "next/image";

interface VehicleDetails {
  name_of_vehicle: string;

  agreed_amount: number;

  received_amount: number;

  issued_to: string;

  address: string;

  fuel_expense: number;

  maintenance: number;

  driver_expense: number;

  date: string;
}

const ViewCarDetails = () => {
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  const UserName = globalState.UserName;

  const router = useRouter();

  const vehicleId = globalState.TempforViewing;

  const [received_amount, setReceivedAmount] = useState("");

  const [agreed_amount, setAgreedAmount] = useState("");

  const [issued_to, setIssuedTo] = useState("");

  const [address, setAddress] = useState("");

  const [fuel_expense, setFuelExpense] = useState("");

  const [maintenance, setMaintenance] = useState("");

  const [driver_expense, setDriverExpense] = useState("");

  const [date, setDate] = useState("");

  const [customerSuggestions, setCustomerSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  // New state to toggle the display of clear options

  const [showClearOptions, setShowClearOptions] = useState(false);

  useEffect(() => {
    if (!vehicleId) {
      window.alert("No vehicle ID found");

      setLoading(false);

      return;
    }

    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(
          `http://72.61.245.17:3000/searchById?id=${encodeURIComponent(
            vehicleId
          )}`
        );

        const data = await response.json();

        if (data.length === 0) {
          window.alert("No details found for this vehicle");
        } else {
          setVehicleDetails(data[0]);

          setAgreedAmount(data[0].agreed_amount.toString());

          setIssuedTo(data[0].issued_to);

          setAddress(data[0].address || "");

          setReceivedAmount(data[0].received_amount.toString());

          setDate(data[0].date);

          setDriverExpense(data[0].driver_expense.toString());

          setFuelExpense(data[0].fuel_expense.toString());

          setMaintenance(data[0].maintenance.toString());
        }
      } catch (error) {
        console.error("Error fetching data:", error);

        window.alert("Error fetching data: " + (error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, []);

  const fetchCustomerSuggestions = async (query: string) => {
    if (!query || query.trim().length < 1) {
      setCustomerSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoadingSuggestions(true);
    try {
      const response = await fetch(
        `http://72.61.245.17:3000/issued-to-customer-suggestion?name=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setCustomerSuggestions(data.customers || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching customer suggestions:", error);
      setCustomerSuggestions([]);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  const saveCarDetails = async () => {
    // Validate date is entered
    if (!date || date.trim() === "") {
      window.alert("Please enter a valid date before saving.");
      return;
    }

    // Optional: Validate date format (DD/MM/YYYY)
    if (!moment(date, "DD/MM/YYYY", true).isValid()) {
      window.alert("Please enter date in DD/MM/YYYY format.");
      return;
    }

    try {
      const updatedCarDetails: {
        agreed_amount?: number;
        received_amount?: number;
        fuel_expense?: number;
        maintenance?: number;
        driver_expense?: number;
        issued_to?: string;
        address?: string;
        date?: string;
      } = {};

      if (agreed_amount !== undefined && agreed_amount !== "")
        updatedCarDetails.agreed_amount = parseInt(agreed_amount);

      if (received_amount !== undefined && received_amount !== "")
        updatedCarDetails.received_amount = parseInt(received_amount);

      if (fuel_expense !== undefined && fuel_expense !== "")
        updatedCarDetails.fuel_expense = parseInt(fuel_expense);

      if (maintenance !== undefined && maintenance !== "")
        updatedCarDetails.maintenance = parseInt(maintenance);

      if (driver_expense !== undefined && driver_expense !== "")
        updatedCarDetails.driver_expense = parseInt(driver_expense);

      if (issued_to !== undefined) updatedCarDetails.issued_to = issued_to.trim() || "N/A";

      if (address !== undefined) updatedCarDetails.address = address.trim();

      updatedCarDetails.date = date; // Always send date since it's required

      const response = await axios.put(
        `http://72.61.245.17:3000/updateCarDetails/${vehicleId}`,
        updatedCarDetails
      );

      if (response.status === 200) {
        window.alert("Car details updated successfully.");
        router.back();
      } else {
        window.alert("Failed to update car details.");
      }
    } catch (error) {
      console.error(
        "Error updating car details:",
        (error as any).response?.data || (error as any).message
      );
      window.alert("An error occurred while updating car details.");
    }
  };

  const formattedDate = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");

  const clearAndSaveDetails = async () => {
    try {
      const totalExpenses =
        (fuel_expense ? parseInt(fuel_expense) : 0) +
        (driver_expense ? parseInt(driver_expense) : 0) +
        (maintenance ? parseInt(maintenance) : 0);

      const dataToSave = {
        vehicle_number: vehicleId,

        agreed_amount: parseInt(agreed_amount) || 0,

        issued_to: issued_to || "N/A",

        address: address || "N/A",

        total_expenses: totalExpenses,

        cleared_date: formattedDate,
      };

      const response = await axios.post(
        "http://72.61.245.17:3000/saveClearedDetails",
        dataToSave
      );

      if (response.status === 200) {
        window.alert("Details saved successfully.");

        setIssuedTo("N/A");

        setAddress("N/A");

        setAgreedAmount("0");

        setReceivedAmount("0");

        setFuelExpense("0");

        setMaintenance("0");

        setDriverExpense("0");

        setDate("");
      } else {
        window.alert("Failed to save details.");
      }
    } catch (error) {
      console.error(
        "Error saving cleared details:",
        (error as any).response?.data || (error as any).message
      );

      window.alert("Vehicle is already cleared.");
    }
  };

  const calculatePendingAmount = () => {
    const agreed =
      agreed_amount ||
      (vehicleDetails ? vehicleDetails.agreed_amount.toString() : "0");

    const received =
      received_amount ||
      (vehicleDetails ? vehicleDetails.received_amount.toString() : "0");

    return parseInt(agreed, 10) - parseInt(received, 10);
  };

  const handlePendingAmount = async () => {
    const pendingAmount = calculatePendingAmount();

    if (pendingAmount > 0) {
      try {
        const response = await axios.post(
          "http://72.61.245.17:3000/processPendingAmount",
          {
            vehicleId: vehicleId,

            pending_amount: pendingAmount,

            customer_name: issued_to,

            address: address || "N/A",
          }
        );

        if (response.status === 200 || response.status === 201) {
          window.alert("Pending amount processed successfully.");

          await clearAndSaveDetails();

          setIssuedTo("N/A");

          setAddress("N/A");

          setAgreedAmount("0");

          setReceivedAmount("0");

          setFuelExpense("0");

          setMaintenance("0");

          setDriverExpense("0");

          setDate("");
        } else {
          const errorMessage = (response.data as { message: string }).message;

          window.alert("Failed to process pending amount: " + errorMessage);
        }
      } catch (error) {
        console.error(
          "Error processing pending amount:",
          (error as any).response?.data || (error as any).message
        );

        window.alert(
          "An error occurred while processing pending amount: " +
            ((error as any).response?.data.message || (error as any).message)
        );
      }
    } else {
      window.alert("Pending amount must be greater than zero.");
    }
  };

  // These functions are called when the user selects one of the clear options

  const handleClearFullPayment = async () => {
    await clearAndSaveDetails();

    setShowClearOptions(false);
  };

  const handleClearPendingPayment = async () => {
    await handlePendingAmount();

    setShowClearOptions(false);
  };

  const handleCancelClear = () => {
    setShowClearOptions(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!vehicleDetails) {
    return (
      <div className="error-container">
        <p className="error-message">No details available for this vehicle.</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      {/* Header */}

      <div className="header">
        <div className="user-container">
          <Image
            src="/webbuild/images/usericon.png"
            alt="User Icon"
            width={50}
            height={50}
            className="usrimg"
          />

          <div className="header-text">
            <p className="helloname">Hello,</p>

            <p className="username">{UserName}</p>
          </div>
        </div>

        <Image
          src="/webbuild/images/Logout.png"
          alt="logout"
          width={25}
          height={25}
          className="logoutimg"
        />
      </div>

      <hr className="separator" />

      {/* Vehicle Details Header */}

      <div className="section-header">
        <Image
          src="/webbuild/images/Car.png"
          alt="Car"
          width={25}
          height={25}
          className="icon"
        />

        <p className="section-title">Vehicle Details</p>
      </div>

      {/* Vehicle Detail Fields */}

      <div className="form-group">
        <label className="label">Name of Vehicle:</label>

        <input
          className="input"
          value={vehicleDetails.name_of_vehicle}
          readOnly
        />
      </div>

      <div className="form-group">
        <label className="label">Vehicle Number:</label>

        <input className="input" value={vehicleId || ""} readOnly />
      </div>

      {/* <div className="form-group">
        <label className="label">Issued To:</label>

        <input
          className="input"
          value={issued_to}
          onChange={(e) => setIssuedTo(e.target.value)}
          placeholder="Event/Person Name"
        />
      </div> */}
      <div className="form-group" style={{ position: "relative" }}>
        <label className="label">Issued To:</label>
        
        <input
          className="input"
          value={issued_to}
          onChange={(e) => {
            const value = e.target.value;
            setIssuedTo(value);
            
            // Only search if user has typed something (and not just "N/A")
            if (value !== "N/A") {
              fetchCustomerSuggestions(value);
            } else {
              setShowSuggestions(false);
            }
          }}
          onFocus={(e) => {
            if (e.target.value && e.target.value !== "N/A") {
              fetchCustomerSuggestions(e.target.value);
            }
          }}
          onBlur={() => {
            // Delay hiding to allow clicking suggestion
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          placeholder="Event/Person Name"
        />

        {/* Suggestions Dropdown */}
        {showSuggestions && customerSuggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {isLoadingSuggestions ? (
              <div className="suggestion-item loading">Searching...</div>
            ) : (
              customerSuggestions.map((name, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onMouseDown={() => {
                    setIssuedTo(name.trim()); // Trimmed value
                    setShowSuggestions(false);
                  }}
                >
                  {name}
                </div>
              ))
            )}
          </div>
        )}

        {showSuggestions && customerSuggestions.length === 0 && !isLoadingSuggestions && issued_to && issued_to !== "N/A" && (
          <div className="suggestions-dropdown">
            <div className="suggestion-item empty">No matching customers found</div>
          </div>
        )}
      </div>

      <div className="form-group">
        <label className="label">Address:</label>

        <input
          className="input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
        />
      </div>

      <div className="form-group">
        <label className="label">Agreed Amount:</label>

        <input
          className="input"
          value={agreed_amount}
          onChange={(e) => setAgreedAmount(e.target.value)}
          type="number"
          placeholder={vehicleDetails.agreed_amount.toString()}
        />
      </div>

      <div className="form-group">
        <label className="label">Received Amount:</label>

        <input
          className="input"
          value={received_amount}
          onChange={(e) => setReceivedAmount(e.target.value)}
          type="number"
          placeholder={vehicleDetails.received_amount.toString()}
        />
      </div>

      <div className="date-group">
        <label className="label">Date:</label>
        <input
          type="date"  // ← Change from text to date
          className="date-input"
          value={moment(date, "DD/MM/YYYY").format("YYYY-MM-DD") || ""}
          onChange={(e) => {
            const isoDate = e.target.value;
            if (isoDate) {
              const formatted = moment(isoDate).format("DD/MM/YYYY");
              setDate(formatted);
            } else {
              setDate("");
            }
          }}
          required
        />
      </div>

      {/* Expense Fields */}

      <div className="form-group">
        <label className="label">Driver Expense:</label>

        <input
          className="input"
          value={driver_expense}
          onChange={(e) => setDriverExpense(e.target.value)}
          type="number"
          placeholder={vehicleDetails.driver_expense.toString()}
        />
      </div>

      <div className="form-group">
        <label className="label">Fuel Expense:</label>

        <input
          className="input"
          value={fuel_expense}
          onChange={(e) => setFuelExpense(e.target.value)}
          type="number"
          placeholder={vehicleDetails.fuel_expense.toString()}
        />
      </div>

      <div className="form-group">
        <label className="label">Maintenance:</label>

        <input
          className="input"
          value={maintenance}
          onChange={(e) => setMaintenance(e.target.value)}
          type="number"
          placeholder={vehicleDetails.maintenance.toString()}
        />
      </div>

      <p className="pending-amount">
        Pending Amount: Rs.{calculatePendingAmount()}
      </p>

      {/* Save and Clear Buttons */}

      <div className="button-group">
        <button
          className="save-button"
          onClick={() => {
            if (window.confirm("Do you want to save the details?"))
              saveCarDetails();
          }}
        >
          Save
        </button>

        <button
          className="clear-button"
          onClick={() => setShowClearOptions(true)}
        >
          Clear
        </button>
      </div>

      {/* Render clear options if activated */}

      {showClearOptions && (
        <div className="clear-options">
          <p>Please select payment status:</p>

          <div className="option-buttons">
            <button className="option-button" onClick={handleClearFullPayment}>
              Full Payment
            </button>

            <button
              className="option-button"
              onClick={handleClearPendingPayment}
            >
              Pending Payment
            </button>

            <button
              className="option-button cancel-button"
              onClick={handleCancelClear}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .main-container {
          max-width: 800px;

          margin: 0 auto;

          padding: 20px;
        }

        .header {
          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 10px 0;
        }

        .user-container {
          display: flex;

          align-items: center;
        }

        .usrimg {
          width: 50px;

          height: 50px;

          border-radius: 50%;
        }

        .header-text {
          margin-left: 10px;
        }

        .helloname {
          font-size: 14px;

          margin: 0;
        }

        .username {
          font-size: 16px;

          font-weight: bold;

          color: darkslategrey;

          margin: 0;
        }

        .logoutimg {
          width: 25px;

          height: 25px;
        }

        .separator {
          margin: 25px 0;

          border-bottom: 1px solid black;
        }

        .section-header {
          display: flex;

          align-items: center;

          margin-bottom: 20px;
        }

        .icon {
          width: 25px;

          height: 25px;
        }

        .section-title {
          font-size: 20px;

          font-weight: 500;

          margin-left: 10px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .label {
          font-size: 15px;

          margin-bottom: 5px;

          display: block;
        }

        .input {
          width: 100%;

          padding: 10px;

          border: 1px solid gray;

          border-radius: 5px;

          background-color: #d3d3d3;

          font-size: 15px;
        }

        .date-group {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 15px;
        }

        .date-input {
          width: 30%;

          padding: 10px;

          border: 1px solid gray;

          border-radius: 5px;

          background-color: #d3d3d3;

          font-size: 15px;
        }

        .pending-amount {
          font-size: 18px;

          margin-top: 20px;
        }

        .button-group {
          display: flex;

          justify-content: center;

          gap: 20px;

          margin-top: 20px;
        }

        .save-button,
        .clear-button {
          padding: 10px 20px;

          background-color: #841584;

          color: white;

          border: none;

          border-radius: 5px;

          cursor: pointer;
        }

        .clear-options {
          margin-top: 20px;

          text-align: center;

          border: 1px solid #ccc;

          padding: 15px;

          border-radius: 5px;

          background-color: #f9f9f9;
        }

        .option-buttons {
          margin-top: 10px;

          display: flex;

          justify-content: center;

          gap: 10px;
        }

        .option-button {
          padding: 8px 16px;

          background-color: #841584;

          color: white;

          border: none;

          border-radius: 5px;

          cursor: pointer;
        }

        .cancel-button {
          background-color: #555;
        }

        .error-container {
          text-align: center;

          margin-top: 50px;
        }

        .error-message {
          color: red;

          font-size: 18px;
        }

        @media (max-width: 600px) {
          .usrimg {
            width: 40px;

            height: 40px;
          }

          .helloname {
            font-size: 12px;
          }

          .username {
            font-size: 14px;
          }

          .logoutimg {
            width: 20px;

            height: 20px;
          }

          .section-title {
            font-size: 18px;
          }

          .label {
            font-size: 14px;
          }

          .input {
            font-size: 14px;

            padding: 8px;
          }

          .date-group {
            flex-direction: column;

            align-items: flex-start;
          }

          .date-input {
            width: 100%;

            margin-top: 5px;
          }

          .pending-amount {
            font-size: 16px;
          }

          .button-group {
            flex-direction: column;

            gap: 10px;
          }

          .save-button,
          .clear-button {
            width: 100%;
          }
          
          .suggestions-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            max-height: 200px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            margin-top: 5px;
          }

          .suggestion-item {
            padding: 12px 15px;
            cursor: pointer;
            border-bottom: 1px solid #eee;
            font-size: 14px;
          }

          .suggestion-item:hover {
            background-color: #f0e6ff;
          }

          .suggestion-item:last-child {
            border-bottom: none;
          }

          .suggestion-item.loading {
            text-align: center;
            color: #666;
            font-style: italic;
          }

          .suggestion-item.empty {
            text-align: center;
            color: #999;
            font-style: italic;
            cursor: default;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewCarDetails;
