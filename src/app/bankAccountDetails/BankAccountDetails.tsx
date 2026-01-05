/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Modal from 'react-modal';
import { globalState } from '../../globalState'; // Adjust path as needed

// Set app element for react-modal on client-side
if (typeof window !== 'undefined') {
  Modal.setAppElement(document.body);
}

const BankAccountDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bankName = searchParams.get('bankName') || '';
  const UserName = globalState.UserName;

  // State to hold account details (fetched from API)
  const [account, setAccount] = useState<any>(null);

  // States for transaction form
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactionType, setTransactionType] = useState<string | null>(null); // 'credit' or 'debit'
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Options for view transactions
  const options = [
    { title: 'View Transactions', key: 'transactions' },
  ];

  // Function to fetch all accounts, then filter for the current account by bankName
  const fetchAccountData = async () => {
    try {
      const response = await fetch('http://72.61.245.17:3000/api/accounts');
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching accounts:', errorData.message);
        return;
      }
      const data = await response.json();
      // Find the account that matches the bankName
      const found = data.accounts.find((acc: any) => acc.name === bankName);
      if (found) {
        setAccount(found);
      }
    } catch (error) {
      console.error('Error fetching account data:', error);
    }
  };

  useEffect(() => {
    fetchAccountData();
  }, [bankName]);

  // Handler for view transactions option
  const handleOptionPress = (optionKey: string) => {
    if (optionKey === 'transactions') {
      router.push(`/TransactionsScreen?bankName=${bankName}`);
    }
  };

  // When Credit or Debit is pressed, open the modal with the correct transaction type
  const handleTransactionPress = (type: string) => {
    setTransactionType(type);
    setShowTransactionForm(true);
  };

  const handleCancelTransaction = () => {
    setShowTransactionForm(false);
    setAmount('');
    setDescription('');
    setTransactionType(null);
  };

  // Submit a transaction and refresh account data afterward
  const handleSubmitTransaction = async () => {
    if (!amount || isNaN(parseFloat(amount))) {
      window.alert('Please enter a valid amount');
      return;
    }
    setIsSubmitting(true);

    const payload = {
      bankName,
      transactionType,
      amount: parseFloat(amount),
      description,
    };

    try {
      const response = await fetch('http://72.61.245.17:3000/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        window.alert(errorData.message || 'Something went wrong');
        setIsSubmitting(false);
        return;
      }

      const data = await response.json();
      // console.log('Transaction successful:', data);
      window.alert('Transaction processed successfully');

      // Reset form and close modal
      setShowTransactionForm(false);
      setAmount('');
      setDescription('');
      setTransactionType(null);
      // Refresh account details to display updated current balance
      fetchAccountData();
    } catch (error) {
      console.error('API Error:', error);
      window.alert('Unable to process transaction at this time.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="headerContainer">
        <Image 
          className="usrimg"
          src="/images/usericon.png" 
          alt="User Icon" 
          width={50} 
          height={50} 
        />
        <div className="userInfo">
          <p className="helloname">Hello,</p>
          <p className="username">{UserName}</p>
        </div>
        <button className="logoutButton" onClick={() => console.log('Logout pressed')}>
          <Image 
            className="logoutimg"
            src="/images/Logout.png" 
            alt="Logout" 
            width={25} 
            height={25} 
          />
        </button>
      </div>
      <div className="separator" />

      {/* Selected Bank/Cash Title and Balance */}
      <div className="selectedBankContainer">
        <p className="selectedBankText">{bankName} Account Details</p>
        {account && (
          <p className="balanceText">Current Balance: Rs. {account.current_balance}</p>
        )}
      </div>

      {/* Options List */}
      <div className="optionsContainer">
        {options.map((option) => (
          <button key={option.key} className="optionButton" onClick={() => handleOptionPress(option.key)}>
            {option.title}
          </button>
        ))}
      </div>

      {/* Credit and Debit Buttons */}
      <div className="transactionRow">
        <button className="transactionButton" onClick={() => handleTransactionPress('credit')}>
          Credit
        </button>
        <button className="transactionButton" onClick={() => handleTransactionPress('debit')}>
          Debit
        </button>
      </div>

      {/* Transaction Form Modal */}
      <Modal 
        isOpen={showTransactionForm} 
        onRequestClose={handleCancelTransaction} 
        className="modalContainer"
        overlayClassName="modalOverlay"
      >
        <div className="modalContent">
          <p className="modalTitle">
            {transactionType === 'credit' ? 'Credit Transaction' : 'Debit Transaction'}
          </p>
          <input
            className="input"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder={transactionType === 'credit' ? 'Description of credit:' : 'Reason for debit?'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="modalButtonRow">
            <button className="modalButton" onClick={handleCancelTransaction} disabled={isSubmitting}>
              Cancel
            </button>
            <button className="modalButton" onClick={handleSubmitTransaction} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        .container {
          padding: 20px;
          background-color: #fff;
          font-family: sans-serif;
        }
        .headerContainer {
          display: flex;
          align-items: center;
          padding: 20px;
        }
        .usrimg {
          border-radius: 25px;
        }
        .userInfo {
          margin-left: 10px;
          flex: 1;
        }
        .helloname {
          font-size: 14px;
          color: #333;
          margin: 0;
        }
        .username {
          font-size: 16px;
          font-weight: bold;
          color: darkslategrey;
          margin: 0;
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
        .separator {
          border-bottom: 1px solid rgb(0,0,0);
          margin: 0 20px 10px;
        }
        .selectedBankContainer {
          margin: 0 20px;
          margin-top: 10px;
          padding: 15px;
          border-radius: 5px;
          background-color: #f0f0f0;
          text-align: center;
        }
        .selectedBankText {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          margin: 0;
        }
        .balanceText {
          font-size: 16px;
          margin-top: 5px;
          color: green;
        }
        .optionsContainer {
          margin: 20px;
        }
        .optionButton {
          background-color: #841584;
          color: #fff;
          padding: 15px 20px;
          border: none;
          border-radius: 5px;
          margin-bottom: 15px;
          width: 100%;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
        .transactionRow {
          display: flex;
          justify-content: space-around;
          margin: 20px;
        }
        .transactionButton {
          background-color: #841584;
          color: #fff;
          padding: 15px 20px;
          border: none;
          border-radius: 5px;
          flex: 0.45;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
        /* Modal Styles */
        .modalOverlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modalContainer {
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          width: 80%;
          max-width: 400px;
          margin: auto;
          position: relative;
        }
        .modalContent {
          display: flex;
          flex-direction: column;
        }
        .modalTitle {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          text-align: center;
        }
        .input {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .modalButtonRow {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
        .modalButton {
          background-color: #841584;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .headerContainer, .separator, .selectedBankContainer, .optionsContainer, .transactionRow {
            margin: 10px;
          }
          .optionButton, .transactionButton {
            font-size: 14px;
            padding: 12px 15px;
          }
          .input {
            font-size: 14px;
            padding: 8px;
          }
          .modalButton {
            font-size: 14px;
            padding: 8px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default BankAccountDetails;
