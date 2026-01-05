
 'use client';


import React, { useState } from 'react';

import Image from 'next/image';

import { globalState } from '../../globalState';


const Home = () => {

  const UserName = globalState.UserName;


  const [id, setId] = useState('');

  const [nameOfVehicle, setNameOfVehicle] = useState('');

  const [issuedTo, setIssuedTo] = useState('N/A');

  const [address, setAddress] = useState('N/A');

  const [agreedAmount, setAgreedAmount] = useState('0');

  const [receivedAmount, setReceivedAmount] = useState('0');

  const [date, setDate] = useState(new Date().toLocaleDateString('en-GB'));

  const [driverExpense, setDriverExpense] = useState('0');

  const [fuelExpense, setFuelExpense] = useState('0');

  const [maintenance, setMaintenance] = useState('0');


  // Convert input to uppercase before saving it as id

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const formattedText = e.target.value.toUpperCase();

    setId(formattedText);

  };


  const saveData = async () => {

    if (!id.trim() || !nameOfVehicle.trim() || !issuedTo.trim() || !address.trim()) {

      window.alert(

        'Validation Error: ID, Name of Vehicle, and Issued To are required.'

      );

      return;

    }


    const payload = {

      id,

      name_of_vehicle: nameOfVehicle,

      issued_to: issuedTo,

      address: address,

      Agreed_amount: agreedAmount ? parseInt(agreedAmount, 10) : 0,

      Received_amount: parseInt(receivedAmount, 10),

      date,

      driver_expense: parseInt(driverExpense, 10),

      Fuel_expense: parseInt(fuelExpense, 10),

      Maintenance: parseInt(maintenance, 10),

    };


    try {

      const response = await fetch('http://72.61.245.17:3000/addVehicle', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(payload),

      });


      const result = await response.json();

      if (response.ok) {

        window.alert('Success: ' + result.message);

        // Reset fields

        setId('');

        setNameOfVehicle('');

        setIssuedTo('N/A');

        setAddress('N/A');

        setAgreedAmount('0');

        setReceivedAmount('0');

        setDate(new Date().toLocaleDateString('en-GB'));

        setDriverExpense('0');

        setFuelExpense('0');

        setMaintenance('0');

      } else {

        console.error('Error:', result);

        window.alert(

          'Error: ' + (result.error || 'Failed to save vehicle details.')

        );

      }

    } catch (error) {

      console.error('Network Error:', error);

      window.alert('Network Error: Unable to connect to the server.');

    }

  };


  const handleSave = async () => {

    if (!id.trim() || !nameOfVehicle.trim() || !issuedTo.trim() || !address.trim()) {

      return window.alert(

        'Error: ID, Name of Vehicle, Issued To and address fields are required!'

      );

    }

    await saveData();

    window.alert('Vehicle Details Saved!');

  };


  return (

    <div className="safeArea">

      <div className="scrollView">

        {/* Header Section */}

        <div className="header">

          <div className="userContainer">

            <Image

              className="usrimg"

              src="/webbuild/images/usericon.png"

              alt="User Icon"

              width={50}

              height={50}

            />

            <div className="headerText">

              <p className="helloname">Hello,</p>

              <p className="username">{UserName}</p>

            </div>

          </div>

          <button

            className="logoutButton"

            onClick={() => console.log('Logout')}

          >

            <Image

              className="logoutimg"

              src="/webbuild/images/Logout.png"

              alt="Logout"

              width={25}

              height={25}

            />

          </button>

        </div>

        <hr className="divider" />


        {/* Vehicle Details Section */}

        <div className="section">

          <div className="sectionHeader">

            <Image

              src="/webbuild/images/Car.png"

              className="icon"

              alt="Car"

              width={25}

              height={25}

            />

            <p className="sectionTitle">Enter Vehicle Details</p>

          </div>

          <div className="inputGroup">

            <label>Name of Vehicle:</label>

            <input

              type="text"

              placeholder="Vehicle"

              value={nameOfVehicle}

              onChange={(e) => setNameOfVehicle(e.target.value)}

            />

          </div>

          <div className="inputGroup">

            <label>Vehicle Number:</label>

            <input

              type="text"

              placeholder="Vehicle No."

              value={id}

              onChange={handleIdChange}

            />

          </div>

          <div className="inputGroup">

            <label>Name of the person/Event vehicle issued to:</label>

            <input

              type="text"

              placeholder="Event/Person Name"

              value={issuedTo}

              onChange={(e) => setIssuedTo(e.target.value)}

            />

          </div>

          <div className="inputGroup">

            <label>Address:</label>

            <input

              type="text"

              placeholder="Enter address"

              value={address}

              onChange={(e) => setAddress(e.target.value)}

            />

          </div>

        </div>


        {/* Billing Details Section */}

        <div className="section">

          <div className="sectionHeader">

            <Image

              src="/webbuild/images/Bill.png"

              className="icon"

              alt="Bill"

              width={25}

              height={25}

            />

            <p className="sectionTitle">Billing Details</p>

          </div>

          <div className="inputGroup">

            <label>Agreed Amount:</label>

            <input

              type="number"

              placeholder="Rs."

              value={agreedAmount}

              onChange={(e) => setAgreedAmount(e.target.value)}

            />

          </div>

          <div className="inputGroup">

            <label>Received Amount:</label>

            <input

              type="number"

              placeholder="Rs."

              value={receivedAmount}

              onChange={(e) => setReceivedAmount(e.target.value)}

            />

          </div>

          <div className="inputGroup">

            <label>Date:</label>

            <input

              type="text"

              placeholder="dd/mm/yyyy"

              value={date}

              onChange={(e) => setDate(e.target.value)}

            />

          </div>

        </div>


        {/* Other Expenses Section */}

        <div className="section">

          <div className="sectionHeader">

            <Image

              src="/webbuild/images/Money.png"

              className="icon"

              alt="Money Logo"

              width={25}

              height={25}

            />

            <p className="sectionTitle">Other Expenses</p>

          </div>

          <div className="inputGroup">

            <label>Driver Expense:</label>

            <input

              type="number"

              placeholder="Rs."

              value={driverExpense}

              onChange={(e) => setDriverExpense(e.target.value)}

            />

          </div>

          <div className="inputGroup">

            <label>Fuel Expense:</label>

            <input

              type="number"

              placeholder="Rs."

              value={fuelExpense}

              onChange={(e) => setFuelExpense(e.target.value)}

            />

          </div>

          <div className="inputGroup">

            <label>Maintenance:</label>

            <input

              type="number"

              placeholder="Rs."

              value={maintenance}

              onChange={(e) => setMaintenance(e.target.value)}

            />

          </div>

        </div>


        {/* Save Button */}

        <div className="saveButtonContainer">

          <button className="saveButton" onClick={handleSave}>

            Save

          </button>

        </div>

      </div>


      <style jsx>{`

        .safeArea {

          background-color: #fff;

          min-height: 100vh;

          padding: 10px;

          box-sizing: border-box;

        }

        .scrollView {

          max-width: 800px;

          margin: 0 auto;

          padding: 10px;

        }

        .header {

          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 10px;

        }

        .userContainer {

          display: flex;

          align-items: center;

        }

        .usrimg {

          width: 50px;

          height: 50px;

          border-radius: 50%;

        }

        .headerText {

          margin-left: 10px;

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

        .logoutButton {

          background: none;

          border: none;

          cursor: pointer;

        }

        .logoutimg {

          width: 25px;

          height: 25px;

        }

        .divider {

          margin: 15px 0;

          border: none;

          border-bottom: 1px solid #ccc;

        }

        .section {

          margin-bottom: 20px;

        }

        .sectionHeader {

          display: flex;

          align-items: center;

          margin-bottom: 10px;

        }

        .icon {

          width: 25px;

          height: 25px;

          margin-right: 10px;

        }

        .sectionTitle {

          font-size: 20px;

          font-weight: 500;

          margin: 0;

        }

        .inputGroup {

          margin-bottom: 15px;

          display: flex;

          flex-direction: column;

        }

        .inputGroup label {

          margin-bottom: 5px;

          font-size: 15px;

        }

        .inputGroup input {

          width: 100%;

          padding: 10px;

          font-size: 15px;

          border: 1px solid gray;

          border-radius: 5px;

          background-color: #f0f0f0;

          box-sizing: border-box;

        }

        .saveButtonContainer {

          display: flex;

          justify-content: center;

          margin-top: 20px;

        }

        .saveButton {

          background-color: #841584;

          color: #fff;

          padding: 10px 20px;

          border: none;

          border-radius: 5px;

          cursor: pointer;

          font-size: 16px;

        }

        /* Responsive Styles */

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

          .sectionTitle {

            font-size: 18px;

          }

          .inputGroup input {

            font-size: 14px;

            padding: 8px;

          }

          .saveButton {

            width: 100%;

          }

        }

      `}</style>

    </div>

  );

};


export default Home;
