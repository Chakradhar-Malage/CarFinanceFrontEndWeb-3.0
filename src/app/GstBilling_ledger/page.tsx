
// /* eslint-disable @typescript-eslint/no-explicit-any */

// 'use client';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const GSTBillingLedger = () => {
//   const [ledgerData, setLedgerData] = useState<any[]>([]);
//   const [customerName, setCustomerName] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [customerList, setCustomerList] = useState<{ label: string; value: string }[]>([]);
//   const [actionValue, setActionValue] = useState('');
//   const [paymentStatusFilter, setPaymentStatusFilter] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const router = useRouter();

//   // Export data to PDF by opening a new window with HTML and triggering print
//   const exportToPDF = (data: any[]) => {
//     const htmlContent = `
//       <html>
//         <head>
//           <title>GST Billing Ledger</title>
//           <style>
//             table, th, td { border: 1px solid black; border-collapse: collapse; }
//             th, td { padding: 8px; text-align: center; }
//           </style>
//         </head>
//         <body>
//           <h1>GST Billing Ledger</h1>
//           <table>
//             <tr>
//               <th>Date</th>
//               <th>Invoice No</th>
//               <th>Customer Name</th>
//               <th>Contact No</th>
//               <th>Company</th>
//               <th>Payment Status</th>
//               <th>Payment Method</th>
//               <th>Total Amount</th>
//               <th>Total Paid</th>
//               <th>Due</th>
//             </tr>
//             ${data
//               .map(
//                 (item) => `
//               <tr>
//                 <td>${item.Date || '-'}</td>
//                 <td>${item.InvoiceNo || '-'}</td>
//                 <td>${item.CustomerName || '-'}</td>
//                 <td>${item.ContactNumber || '-'}</td>
//                 <td>${item.Company || 'Om Sai Enterprises'}</td>
//                 <td>${item.PaymentStatus || 'Due'}</td>
//                 <td>${item.PaymentMethod || 'None'}</td>
//                 <td>${item.TotalAmount || 0}</td>
//                 <td>${item.TotalPaid || 0}</td>
//                 <td>${item.Due || 0}</td>
//               </tr>
//             `
//               )
//               .join('')}
//           </table>
//         </body>
//       </html>
//     `;
//     const printWindow = window.open('', '_blank');
//     if (printWindow) {
//       printWindow.document.open();
//       printWindow.document.write(htmlContent);
//       printWindow.document.close();
//       printWindow.focus();
//       printWindow.print();
//       window.alert("PDF Exported. Your PDF file has been exported successfully.");
//     } else {
//       console.error("Failed to open print window");
//     }
//   };

//   // Fetch customer names (runs only once on mount)
//   const fetchCustomerNames = () => {
//     axios
//       .get('http://72.61.245.17:3000/customers')
//       .then((response) => {
//         const customers = (response.data as any[]).map((customer: any) => ({
//           label: customer.name,
//           value: customer.name,
//         }));
//         setCustomerList(customers);
//       })
//       .catch((error) => console.error('Error fetching customer names:', error));
//   };

//   // Fetch ledger data using the provided filters
//   const fetchLedgerData = () => {
//     let query = `http://72.61.245.17:3000/gstbillingledger?`;
//     if (customerName) query += `customer_name=${customerName}&`;
//     if (startDate) query += `start_date=${startDate}&`;
//     if (endDate) query += `end_date=${endDate}&`;
//     if (paymentStatusFilter) query += `payment_status=${paymentStatusFilter}&`;
//     axios
//       .get(query)
//       .then((response) => {
//         if (JSON.stringify(response.data) !== JSON.stringify(ledgerData)) {
//           setLedgerData(response.data as any[]);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching ledger data:', error);
//       });
//   };

//   // Handle the payment status selection
//   const handleActionSelect = (action: string) => {
//     let newFilter = '';
//     if (action === 'Due payments') {
//       newFilter = 'Due';
//     } else if (action === 'Partial payments') {
//       newFilter = 'Partial';
//     } else if (action === 'Paid') {
//       newFilter = 'Paid';
//     }
//     if (paymentStatusFilter !== newFilter) {
//       setPaymentStatusFilter(newFilter);
//     }
//   };

//   useEffect(() => {
//     fetchCustomerNames();
//   }, []);

//   return (
//     <div className="container">
//       {/* Header */}
//       <div className="header-container">
//         <div className="user-section">
//           <Image
//             className="usrimg"
//             src="/images/usericon.png"
//             alt="User Icon"
//             width={50}
//             height={50}
//           />
//           <div className="user-info">
//             <p className="helloname">Hello,</p>
//             <p className="username">OmSai</p>
//           </div>
//         </div>
//       </div>
//       <hr />

//       {/* Button Section */}
//       <div className="button-container">
//         <button
//           className="payment-export-button"
//           onClick={() => router.push('/Addpaymentpopup')}
//         >
//           Add Payment
//         </button>
//         <button
//           className="payment-export-button"
//           onClick={() => {
//             const exportChoice = window.prompt(
//               'Type "pdf" to export to PDF or "excel" to export to Excel'
//             );
//             if (exportChoice?.toLowerCase() === 'excel') {
//               window.alert('Excel export is not supported.');
//             } else if (exportChoice?.toLowerCase() === 'pdf') {
//               exportToPDF(ledgerData);
//             }
//           }}
//         >
//           Export
//         </button>
//       </div>

//       {/* Actions Dropdown */}
//       <div className="actions-container">
//         <select
//           className="dropdown"
//           value={actionValue}
//           onChange={(e) => {
//             setActionValue(e.target.value);
//             handleActionSelect(e.target.value);
//           }}
//         >
//           <option value="">Payment Status</option>
//           <option value="Due payments">Due Payments</option>
//           <option value="Partial payments">Partial Payments</option>
//           <option value="Paid">Paid</option>
//         </select>
//       </div>

//       {/* Filter Inputs */}
//       <div className="filter-container">
//         {/* Customer Dropdown with Search */}
//         <div className="dropdown-container">
//           <select
//             className="dropdown"
//             value={customerName}
//             onChange={(e) => setCustomerName(e.target.value)}
//           >
//             <option value="">Select Customer</option>
//             {customerList
//               .filter((item) =>
//                 item.label.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((item, idx) => (
//                 <option key={idx} value={item.value}>
//                   {item.label}
//                 </option>
//               ))}
//           </select>
//           <input
//             type="text"
//             placeholder="Search Customer"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {/* Date Pickers */}
//         <div className="date-picker-container">
//           <div>
//             <label>Start Date: </label>
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>End Date: </label>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>
//         </div>
//         <button
//           style={{
//             backgroundColor: '#841584',
//             color: 'white',
//             padding: '12px 30px',
//             border: 'none',
//             borderRadius: '10px',
//             cursor: 'pointer'
//           }}
//           onClick={fetchLedgerData}
//         >
//           Search
//         </button>
//       </div>

//       {/* Table Section */}
//       <div className="table-container">
//         <div className="table-header">
//           <div className="cell" style={{ width: '143px' }}>Date</div>
//           <div className="cell" style={{ width: '70px' }}>Invoice No</div>
//           <div className="cell" style={{ width: '180px' }}>Customer Name</div>
//           <div className="cell" style={{ width: '120px' }}>Contact No</div>
//           <div className="cell" style={{ width: '151px' }}>Company</div>
//           <div className="cell" style={{ width: '151px' }}>Payment Status</div>
//           <div className="cell" style={{ width: '151px' }}>Payment Method</div>
//           <div className="cell" style={{ width: '151px' }}>Total Amount</div>
//           <div className="cell" style={{ width: '151px' }}>Total Paid</div>
//           <div className="cell" style={{ width: '151px' }}>Due</div>
//         </div>
//         <div className="table-body">
//           {ledgerData.map((item, index) => (
//             <div key={index} className="row">
//               <div className="cell" style={{ width: '143px' }}>{item.Date || '-'}</div>
//               <div className="cell" style={{ width: '70px' }}>{item.InvoiceNo || '-'}</div>
//               <div className="cell" style={{ width: '180px' }}>{item.CustomerName || '-'}</div>
//               <div className="cell" style={{ width: '120px' }}>{item.ContactNumber || '-'}</div>
//               <div className="cell" style={{ width: '151px' }}>{item.Company || 'Om Sai Enterprises'}</div>
//               <div className="cell" style={{ width: '151px' }}>{item.PaymentStatus || 'Due'}</div>
//               <div className="cell" style={{ width: '151px' }}>{item.PaymentMethod || 'None'}</div>
//               <div className="cell" style={{ width: '151px' }}>{item.TotalAmount || 0}</div>
//               <div className="cell" style={{ width: '151px' }}>{item.TotalPaid || 0}</div>
//               <div className="cell" style={{ width: '151px' }}>{item.Due || 0}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Styled JSX */}
//       <style jsx>{`
//         .container {
//           padding: 15px;
//           font-family: Arial, sans-serif;
//         }
//         .header-container {
//           display: flex;
//           align-items: center;
//           justify-content: flex-start;
//           margin-bottom: 20px;
//         }
//         .user-section {
//           display: flex;
//           align-items: center;
//         }
//         .usrimg {
//           width: 50px;
//           height: 50px;
//           border-radius: 20px;
//           object-fit: cover;
//         }
//         .user-info {
//           margin-left: 10px;
//         }
//         .helloname {
//           font-size: 14px;
//           color: gray;
//           margin: 0;
//         }
//         .username {
//           font-size: 18px;
//           font-weight: bold;
//           color: darkslategrey;
//           margin: 0;
//         }
//         .button-container {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 10px;
//         }
//         .payment-export-button {
//           background-color: #841584;
//           color: white;
//           padding: 12px 20px;
//           border: none;
//           border-radius: 10px;
//           cursor: pointer;
//           flex: 1;
//           margin: 0 5px;
//         }
//         .actions-container {
//           margin-bottom: 10px;
//         }
//         .dropdown {
//           height: 40px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           padding-left: 10px;
//           width: 100%;
//           margin-bottom: 10px;
//         }
//         .filter-container {
//           background-color: white;
//           padding: 5px;
//           border-radius: 5px;
//           margin-bottom: 20px;
//         }
//         .dropdown-container {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 10px;
//         }
//         .dropdown-container input {
//           font-size: 14px;
//           padding: 5px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           margin-top: 5px;
//         }
//         .date-picker-container {
//           display: flex;
//           gap: 10px;
//           margin-bottom: 10px;
//         }
//         .date-picker-container input {
//           font-size: 14px;
//           padding: 5px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }
//         .table-container {
//           overflow-x: auto;
//         }
//         .table-header,
//         .row {
//           display: flex;
//         }
//         .cell {
//           padding: 10px;
//           text-align: center;
//           border: 1px solid #ccc;
//           flex-shrink: 0;
//           word-wrap: break-word;
//         }
//         .table-header {
//           background-color: #d3d3d3;
//         }
//         .table-header .cell {
//           font-weight: bold;
//         }

//         /* Responsive Styles */
//         @media (max-width: 768px) {
//           .container {
//             padding: 10px;
//           }
//           .header-container {
//             justify-content: flex-start;
//           }
//           .user-section {
//             flex-direction: row;
//             align-items: center;
//           }
//           .usrimg {
//             width: 40px;
//             height: 40px;
//           }
//           .user-info {
//             margin-left: 8px;
//           }
//           .username {
//             font-size: 16px;
//           }
//           .button-container {
//             flex-direction: row;
//           }
//           .payment-export-button {
//             padding: 10px;
//           }
//           .dropdown-container,
//           .date-picker-container {
//             flex-direction: column;
//             gap: 10px;
//           }
//           select,
//           input[type="text"],
//           input[type="date"] {
//             width: 100%;
//             box-sizing: border-box;
//           }
//           .filter-container {
//             padding: 8px;
//           }
//           .cell {
//             padding: 5px;
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GSTBillingLedger;



/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const GSTBillingLedger = () => {
  const [ledgerData, setLedgerData] = useState<any[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customerList, setCustomerList] = useState<{ label: string; value: string }[]>([]);
  const [actionValue, setActionValue] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();

  // Export data to PDF
  const exportToPDF = (data: any[]) => {
    const htmlContent = `
      <html>
        <head>
          <title>GST Billing Ledger</title>
          <style>
            table, th, td { border: 1px solid black; border-collapse: collapse; }
            th, td { padding: 8px; text-align: center; }
          </style>
        </head>
        <body>
          <h1>GST Billing Ledger</h1>
          <table>
            <tr>
              <th>Date</th>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Contact No</th>
              <th>Company</th>
              <th>Payment Status</th>
              <th>Payment Method</th>
              <th>Total Amount</th>
              <th>Total Paid</th>
              <th>Due</th>
            </tr>
            ${data
              .map(
                (item) => `
              <tr>
                <td>${item.Date || '-'}</td>
                <td>${item.InvoiceNo || '-'}</td>
                <td>${item.CustomerName || '-'}</td>
                <td>${item.ContactNumber || '-'}</td>
                <td>${item.Company || 'Om Sai Enterprises'}</td>
                <td>${item.PaymentStatus || 'Due'}</td>
                <td>${item.PaymentMethod || 'None'}</td>
                <td>${item.TotalAmount || 0}</td>
                <td>${item.TotalPaid || 0}</td>
                <td>${item.Due || 0}</td>
              </tr>
            `
              )
              .join('')}
          </table>
        </body>
      </html>
    `;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      window.alert("PDF Exported. Your PDF file has been exported successfully.");
    } else {
      console.error("Failed to open print window");
    }
  };

  // Fetch customer names
  const fetchCustomerNames = () => {
    axios
      .get('http://72.61.245.17:3000/customers')
      .then((response) => {
        const customers = (response.data as any[]).map((customer: any) => ({
          label: customer.name,
          value: customer.name,
        }));
        setCustomerList(customers);
      })
      .catch((error) => console.error('Error fetching customer names:', error));
  };

  // Fetch ledger data with filters
  const fetchLedgerData = () => {
    let query = 'http://72.61.245.17:3000/gstbillingledger?';
    if (customerName) query += `customer_name=${customerName}&`;
    if (startDate) query += `start_date=${startDate}&`;
    if (endDate) query += `end_date=${endDate}&`;
    if (paymentStatusFilter) query += `payment_status=${paymentStatusFilter}&`;

    axios
      .get(query)
      .then((response) => {
        if (JSON.stringify(response.data) !== JSON.stringify(ledgerData)) {
          setLedgerData(response.data as any[]);
        }
      })
      .catch((error) => {
        console.error('Error fetching ledger data:', error);
      });
  };

  // Calculate totals for the summary card
  const calculateTotals = () => {
    if (!customerName) return null;
    const totals = ledgerData.reduce(
      (acc, item) => {
        acc.totalAmount += parseFloat(item.TotalAmount) || 0;
        acc.totalPaid += parseFloat(item.TotalPaid) || 0;
        acc.due += parseFloat(item.Due) || 0;
        return acc;
      },
      { totalAmount: 0, totalPaid: 0, due: 0 }
    );
    return totals;
  };

  // Handle payment status selection
  const handleActionSelect = (action: string) => {
    let newFilter = '';
    if (action === 'Due payments') newFilter = 'Due';
    else if (action === 'Partial payments') newFilter = 'Partial';
    else if (action === 'Paid') newFilter = 'Paid';
    if (paymentStatusFilter !== newFilter) {
      setPaymentStatusFilter(newFilter);
    }
  };

  useEffect(() => {
    fetchCustomerNames();
    // Removed fetchLedgerData from here to avoid loading data on mount
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div className="header-container">
        <div className="user-section">
          <Image
            className="usrimg"
            src="/webbuild/images/usericon.png"
            alt="User Icon"
            width={50}
            height={50}
          />
          <div className="user-info">
            <p className="helloname">Hello,</p>
            <p className="username">OmSai</p>
          </div>
        </div>
      </div>
      <hr />

      {/* Button Section */}
      <div className="button-container">
        <button
          className="payment-export-button"
          onClick={() => router.push('/Addpaymentpopup')}
        >
          Add Payment
        </button>
        <button
          className="payment-export-button"
          onClick={() => {
            const exportChoice = window.prompt(
              'Type "pdf" to export to PDF or "excel" to export to Excel'
            );
            if (exportChoice?.toLowerCase() === 'excel') {
              window.alert('Excel export is not supported.');
            } else if (exportChoice?.toLowerCase() === 'pdf') {
              exportToPDF(ledgerData);
            }
          }}
        >
          Export
        </button>
      </div>

      {/* Actions Dropdown */}
      <div className="actions-container">
        <select
          className="dropdown"
          value={actionValue}
          onChange={(e) => {
            setActionValue(e.target.value);
            handleActionSelect(e.target.value);
          }}
        >
          <option value="">Payment Status</option>
          <option value="Due payments">Due Payments</option>
          <option value="Partial payments">Partial Payments</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      {/* Filter Inputs */}
      <div className="filter-container">
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          >
            <option value="">Select Customer</option>
            {customerList
              .filter((item) =>
                item.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, idx) => (
                <option key={idx} value={item.value}>
                  {item.label}
                </option>
              ))}
          </select>
          <input
            type="text"
            placeholder="Search Customer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="date-picker-container">
          <div>
            <label>Start Date: </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>End Date: </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <button
          style={{
            backgroundColor: '#841584',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
          onClick={fetchLedgerData}
        >
          Search
        </button>
      </div>

      {/* Summary Card (only when customer is selected) */}
      {customerName && (
        <div className="summary-card">
          <h3>Ledger for {customerName}</h3>
          <p>Total Amount: {calculateTotals()?.totalAmount.toFixed(2) || 0}</p>
          <p>Total Paid: {calculateTotals()?.totalPaid.toFixed(2) || 0}</p>
          <p>Due: {calculateTotals()?.due.toFixed(2) || 0}</p>
        </div>
      )}

      {/* Table Section */}
      <div className="table-container">
        <div className="table-header">
          <div className="cell" style={{ width: '143px' }}>Date</div>
          <div className="cell" style={{ width: '70px' }}>Invoice No</div>
          <div className="cell" style={{ width: '180px' }}>Customer Name</div>
          <div className="cell" style={{ width: '120px' }}>Contact No</div>
          <div className="cell" style={{ width: '151px' }}>Company</div>
          <div className="cell" style={{ width: '151px' }}>Payment Status</div>
          <div className="cell" style={{ width: '151px' }}>Payment Method</div>
          <div className="cell" style={{ width: '151px' }}>Total Amount</div>
          <div className="cell" style={{ width: '151px' }}>Total Paid</div>
          <div className="cell" style={{ width: '151px' }}>Due</div>
        </div>
        <div className="table-body">
          {ledgerData.map((item, index) => (
            <div key={index} className="row">
              <div className="cell" style={{ width: '143px' }}>{item.Date || '-'}</div>
              <div className="cell" style={{ width: '70px' }}>{item.InvoiceNo || '-'}</div>
              <div className="cell" style={{ width: '180px' }}>{item.CustomerName || '-'}</div>
              <div className="cell" style={{ width: '120px' }}>{item.ContactNumber || '-'}</div>
              <div className="cell" style={{ width: '151px' }}>{item.Company || 'Om Sai Enterprises'}</div>
              <div className="cell" style={{ width: '151px' }}>{item.PaymentStatus || 'Due'}</div>
              <div className="cell" style={{ width: '151px' }}>{item.PaymentMethod || 'None'}</div>
              <div className="cell" style={{ width: '151px' }}>{item.TotalAmount || 0}</div>
              <div className="cell" style={{ width: '151px' }}>{item.TotalPaid || 0}</div>
              <div className="cell" style={{ width: '151px' }}>{item.Due || 0}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        .container {
          padding: 15px;
          font-family: Arial, sans-serif;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 20px;
        }
        .user-section {
          display: flex;
          align-items: center;
        }
        .usrimg {
          width: 50px;
          height: 50px;
          border-radius: 20px;
          object-fit: cover;
        }
        .user-info {
          margin-left: 10px;
        }
        .helloname {
          font-size: 14px;
          color: gray;
          margin: 0;
        }
        .username {
          font-size: 18px;
          font-weight: bold;
          color: darkslategrey;
          margin: 0;
        }
        .button-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .payment-export-button {
          background-color: #841584;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          flex: 1;
          margin: 0 5px;
        }
        .actions-container {
          margin-bottom: 10px;
        }
        .dropdown {
          height: 40px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding-left: 10px;
          width: 100%;
          margin-bottom: 10px;
        }
        .filter-container {
          background-color: white;
          padding: 5px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .dropdown-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
        }
        .dropdown-container input {
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-top: 5px;
        }
        .date-picker-container {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .date-picker-container input {
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .summary-card {
          background-color: #f9f9f9;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
        }
        .table-container {
          overflow-x: auto;
        }
        .table-header,
        .row {
          display: flex;
        }
        .cell {
          padding: 10px;
          text-align: center;
          border: 1px solid #ccc;
          flex-shrink: 0;
          word-wrap: break-word;
        }
        .table-header {
          background-color: #d3d3d3;
        }
        .table-header .cell {
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .header-container {
            justify-content: flex-start;
          }
          .user-section {
            flex-direction: row;
            align-items: center;
          }
          .usrimg {
            width: 40px;
            height: 40px;
          }
          .user-info {
            margin-left: 8px;
          }
          .username {
            font-size: 16px;
          }
          .button-container {
            flex-direction: row;
          }
          .payment-export-button {
            padding: 10px;
          }
          .dropdown-container,
          .date-picker-container {
            flex-direction: column;
            gap: 10px;
          }
          select,
          input[type="text"],
          input[type="date"] {
            width: 100%;
            box-sizing: border-box;
          }
          .filter-container {
            padding: 8px;
          }
          .cell {
            padding: 5px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default GSTBillingLedger;