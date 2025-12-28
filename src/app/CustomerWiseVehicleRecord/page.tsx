// /* eslint-disable @typescript-eslint/no-explicit-any */

// 'use client';


// import React, { useState, useEffect } from 'react';

// import moment from 'moment';

// import Image from 'next/image';

// import { useRouter } from 'next/navigation';

// import { globalState } from '../../globalState'; // Adjust path as needed

// import jsPDF from 'jspdf';

// import autoTable from 'jspdf-autotable';


// const CustomerWiseVehicleDetails = () => {

//   const [customers, setCustomers] = useState<string[]>([]);

//   const [selectedCustomer, setSelectedCustomer] = useState<string>('');

//   const [startDate, setStartDate] = useState<string>('');

//   const [endDate, setEndDate] = useState<string>('');

//   interface VehicleRecord {

//     id: number;

//     vehicle_number: string;

//     agreed_amount: string;

//     issued_to: string;

//     total_expenses: string;

//     cleared_at: string;

//     [key: string]: any;

//   }

//   const [data, setData] = useState<VehicleRecord[]>([]);

//   const [loading, setLoading] = useState<boolean>(false);

//   const [totalAgreedAmount, setTotalAgreedAmount] = useState<number>(0);

//   const [totalExpenses, setTotalExpenses] = useState<number>(0);

//   const [profit, setProfit] = useState<number>(0);

//   const UserName = globalState.UserName;

//   const router = useRouter();


//   useEffect(() => {

//     fetch('http://15.207.48.53:3000/unique-customers')

//       .then(response => {

//         if (!response.ok) {

//           throw new Error('Failed to fetch customers');

//         }

//         return response.json();

//       })

//       .then(data => {

//         console.log('Customers:', data);

//         setCustomers(data.customers || []);

//       })

//       .catch(error => console.error('Error fetching customers:', error));

//   }, []);


//   const handleFetchData = () => {

//     if (!selectedCustomer) {

//       alert('Please select a customer');

//       return;

//     }

//     setLoading(true);

//     // Adjust the endpoint and parameter based on your backend

//     let url = `http://15.207.48.53:3000/cleared-details?customer_name=${encodeURIComponent(selectedCustomer)}`;

//     if (startDate && endDate) {

//       url += `&start_date=${startDate}&end_date=${endDate}`;

//     }

//     fetch(url)

//       .then(response => {

//         if (!response.ok) {

//           throw new Error(`HTTP error! status: ${response.status}`);

//         }

//         return response.json();

//       })

//       .then(result => {

//         console.log('API Response:', result);

//         const fetchedData: VehicleRecord[] = result.data || result || [];

//         setData(fetchedData);

//         const agreed = fetchedData.reduce((sum: number, record: VehicleRecord) => sum + parseFloat(record.agreed_amount || "0"), 0);

//         const expenses = fetchedData.reduce((sum: number, record: VehicleRecord) => sum + parseFloat(record.total_expenses || "0"), 0);

//         setTotalAgreedAmount(agreed);

//         setTotalExpenses(expenses);

//         setProfit(agreed - expenses);

//         setLoading(false);

//       })

//       .catch(error => {

//         console.error('Error fetching data:', error);

//         setLoading(false);

//       });

//   };


//   const generatePDF = () => {

//     const doc = new jsPDF('landscape');

//     autoTable(doc, {

//       head: [['ID', 'Vehicle Number', 'Agreed Amount', 'Issued To', 'Cleared At']],

//       body: data.map((record: VehicleRecord) => [

//         record.id,

//         record.vehicle_number,

//         `Rs.${parseFloat(record.agreed_amount || "0").toFixed(2)}`,

//         record.issued_to,

//         //`Rs.${parseFloat(record.total_expenses || "0").toFixed(2)}`,

//         moment(record.cleared_at).format('DD-MM-YYYY')

//       ]),

//     });

//     doc.save('CustomerWiseVehicleDetails.pdf');

//   };


//   // The rest of your JSX remains unchanged

//   return (

//     <div className="safeArea">

//       <div className="header">

//         <Image

//           src="/webbuild/images/usericon.png"

//           alt="User Icon"

//           width={55}

//           height={55}

//           className="rounded-full"

//         />

//         <div className="user-text">

//           <p className="helloname">Hello,</p>

//           <p className="username">{UserName}</p>

//         </div>

//         <button className="logout-button" onClick={() => console.log("Logout")}>

//           <Image

//             src="/webbuild/images/Logout.png"

//             alt="Logout"

//             width={25}

//             height={25}

//           />

//         </button>

//       </div>

//       <div className="separator"></div>


//       <div className="buttonRow">

//         <button className="buttonledger" onClick={() => router.push('/customer_ledger')}>

//           Pending Ledger

//         </button>

//         <button className="buttonledger" style={{ width: '250px' }} onClick={() => router.push('/CustomerWiseVehicleRecord')}>

//           CustomerWise Vehicle Details

//         </button>

//       </div>


//       <div className="container">

//         <h2 className="pageTitle">Customerwise Vehicle Details</h2>

//         <div className="selectionContainer">

//           <select

//             className="picker"

//             value={selectedCustomer}

//             onChange={e => setSelectedCustomer(e.target.value)}

//           >

//             <option value="">-- Select Customer --</option>

//             {customers.map(customer => (

//               <option key={customer} value={customer}>{customer}</option>

//             ))}

//           </select>

//           <input

//             type="date"

//             className="datePicker"

//             value={startDate}

//             onChange={e => setStartDate(e.target.value)}

//           />

//           <input

//             type="date"

//             className="datePicker"

//             value={endDate}

//             onChange={e => setEndDate(e.target.value)}

//           />

//           <button className="button" onClick={handleFetchData}>

//             Fetch Data

//           </button>

//         </div>

//         {loading && <p className="loadingText">Loading...</p>}

        

//         {data.length > 0 && !loading && (

//           <div className="totalContainer">

//             <p className="totalText">Net Amount: Rs.{totalAgreedAmount.toFixed(2)}</p>

//             <p className="totalText">Total Expenses: Rs.{totalExpenses.toFixed(2)}</p>

//             <p className="totalText">Profit: Rs.{profit.toFixed(2)}</p>

//           </div>

//         )}


//         {data.length > 0 && !loading && (

//           <div className="actionContainer">

//             <button className="button" onClick={generatePDF}>

//               Print PDF

//             </button>

//           </div>

//         )}


//         {data.length > 0 ? (

//           <div className="tableContainer">

//             <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>

//               <table className="recordsTable">

//                 <thead>

//                   <tr>

//                     <th>ID</th>

//                     <th>Vehicle Number</th>

//                     <th>Agreed Amount</th>

//                     <th>Issued To</th>

                    

//                     <th>Cleared At</th>

//                   </tr>

//                 </thead>

//                 <tbody>

//                   {data.map(record => (

//                     <tr key={record.id}>

//                       <td>{record.id}</td>

//                       <td>{record.vehicle_number}</td>

//                       <td>Rs.{parseFloat(record.agreed_amount || "0").toFixed(2)}</td>

//                       <td>{record.issued_to}</td>

                      

//                       <td>{moment(record.cleared_at).format('DD-MM-YYYY')}</td>

//                     </tr>

//                   ))}

//                 </tbody>

//               </table>

//             </div>

//           </div>

//         ) : (

//           !loading && <p>No data available</p>

//         )}

//       </div>

//       <style jsx>{`

//         .safeArea {

//           min-height: 100vh;

//           background-color: #f8f8f8;

//         }

//         .header {

//           display: flex;

//           align-items: center;

//           justify-content: space-between;

//           margin: 20px;

//         }

//         .user-text {

//           margin-right: auto;

//           padding-left: 10px;

//         }

//         .helloname {

//           margin: 0;

//           font-size: 14px;

//         }

//         .username {

//           margin: 0;

//           font-size: 16px;

//           font-weight: bold;

//           color: darkslategrey;

//         }

//         .logout-button {

//           background: none;

//           border: none;

//           cursor: pointer;

//         }

//         .separator {

//           margin: 25px 20px 10px 20px;

//           border-bottom: 1px solid #000;

//         }

//         .buttonRow {

//           display: flex;

//           justify-content: left;

//           gap: 10px;

//           margin: 10px 20px;

//         }

//         .buttonledger {

//           background-color: #841584;

//           color: white;

//           padding: 12px;

//           border: none;

//           border-radius: 15px;

//           width: 150px;

//           height: 42px;

//           cursor: pointer;

//         }

//         .container {

//           padding: 20px;

//           text-align: center;

//         }

//         .pageTitle {

//           font-size: 16px;

//           font-weight: bold;

//           margin: 10px 0 30px;

//         }

//         .selectionContainer {

//           margin: 0 auto 20px;

//           width: 90%;

//           padding: 5px;

//           border: 2px solid black;

//           border-radius: 5px;

//           display: flex;

//           flex-wrap: wrap;

//           justify-content: center;

//           gap: 10px;

//         }

//         .picker, .datePicker {

//           height: 56px;

//           width: 200px;

//           border: 1px solid #ccc;

//           border-radius: 25px;

//           padding: 5px;

//           font-size: 16px;

//         }

//         .button {

//           background-color: #841584;

//           color: white;

//           padding: 12px;

//           border: none;

//           border-radius: 15px;

//           width: 200px;

//           font-weight: bold;

//           cursor: pointer;

//         }

//         .loadingText {

//           font-size: 18px;

//           font-weight: bold;

//           color: #4caf50;

//           margin-top: 20px;

//         }

//         .totalContainer {

//           background-color: #fff;

//           padding: 15px;

//           border-radius: 8px;

//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

//           width: 100%;

//           margin: 20px auto;

//           text-align: center;

//         }

//         .totalText {

//           font-size: 16px;

//           font-weight: bold;

//           margin-bottom: 10px;

//           color: #333;

//         }

//         .actionContainer {

//           margin: 10px 0;

//           text-align: center;

//         }

//         .tableContainer {

//           margin: 20px 0;

//           border: 1px solid #e0e0e0;

//           border-radius: 8px;

//           overflow: hidden;

//           box-shadow: 0 2px 4px rgba(0,0,0,0.05);

//         }

//         .recordsTable {

//           width: 100%;

//           border-collapse: collapse;

//           background: white;

//           font-size: 15px;

//         }

//         .recordsTable th {

//           background-color: #841584;

//           color: white;

//           font-weight: bold;

//           padding: 12px 15px;

//           text-align: center;

//           position: sticky;

//           top: 0;

//           font-size: 15px;

//         }

//           .recordsTable th:nth-child(2),

//           .recordsTable td:nth-child(2),

//           .recordsTable th:nth-child(3),         

//           .recordsTable td:nth-child(3) {

//            padding-left: 5px;

//            padding-right: 5px;

//            }


//         .recordsTable td {

//           padding: 12px 15px;

//           border-bottom: 1px solid #f0f0f0;

//           color: #333;

//           font-size: 14px;

//         }

//         .recordsTable tr:nth-child(even) {

//           background-color: #f9f9f9;

//         }

//         .recordsTable tr:hover {

//           background-color: #f5f5f5;

//         }

//         .recordsTable td:nth-child(1),

//         .recordsTable td:nth-child(3),

//         .recordsTable td:nth-child(5) {

//           text-align: right;

//         }

//         .recordsTable th:nth-child(1),

//         .recordsTable th:nth-child(3),

//         .recordsTable th:nth-child(5) {

//           text-align: right;

//         }

//       `}</style>

//     </div>

//   );

// };


// export default CustomerWiseVehicleDetails;


/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';


import React, { useState, useEffect } from 'react';

import moment from 'moment';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

import { globalState } from '../../globalState';

import jsPDF from 'jspdf';

import autoTable from 'jspdf-autotable';


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

  // Now just a list of names

  const [customers, setCustomers] = useState<string[]>([]);

  const [selectedCustomer, setSelectedCustomer] = useState('');


  const [startDate, setStartDate] = useState('');

  const [endDate, setEndDate] = useState('');


  const [data, setData] = useState<VehicleRecord[]>([]);

  const [loading, setLoading] = useState(false);


  const [totalAgreedAmount, setTotalAgreedAmount] = useState(0);

  const [totalExpenses, setTotalExpenses] = useState(0);

  const [profit, setProfit] = useState(0);


  const UserName = globalState.UserName;

  const router = useRouter();


  // Fetch simple string list of customer names

  useEffect(() => {

    fetch('http://15.207.48.53:3000/unique-customers')

      .then((res) => {

        if (!res.ok) throw new Error('Failed to fetch customers');

        return res.json();

      })

      .then((json) => setCustomers(json.customers || []))

      .catch((err) => console.error('Error fetching customers:', err));

  }, []);


  // Fetch all cleared details for the selected customer (all addresses)

  const handleFetchData = () => {

    if (!selectedCustomer) {

      alert('Please select a customer');

      return;

    }

    setLoading(true);


    const url = new URL('http://15.207.48.53:3000/cleared-details');

    url.searchParams.set('customer_name', selectedCustomer);

    if (startDate && endDate) {

      url.searchParams.set('start_date', startDate);

      url.searchParams.set('end_date', endDate);

    }


    fetch(url.toString())

      .then((res) => {

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        return res.json();

      })

      .then((json) => {

        const rows = (json.data || []) as VehicleRecord[];

        setData(rows);


        // recompute totals

        const agg = rows.reduce(

          (sum, r) => sum + parseFloat(r.agreed_amount || '0'),

          0

        );

        const exp = rows.reduce(

          (sum, r) => sum + parseFloat(r.total_expenses || '0'),

          0

        );

        setTotalAgreedAmount(agg);

        setTotalExpenses(exp);

        setProfit(agg - exp);

      })

      .catch((err) => console.error('Error fetching data:', err))

      .finally(() => setLoading(false));

  };


  // PDF now includes Address column

  const generatePDF = () => {

    const doc = new jsPDF('landscape');

    autoTable(doc, {

      head: [

        [

          'ID',

          'Vehicle Number',

          'Agreed Amount',

          'Issued To',

          'Address',

          'Cleared At',

        ],

      ],

      body: data.map((r) => [

        r.id,

        r.vehicle_number,

        `Rs.${parseFloat(r.agreed_amount || '0').toFixed(2)}`,

        r.issued_to,

        r.address || 'N/A',

        moment(r.cleared_at).format('DD-MM-YYYY'),

      ]),

    });

    doc.save('CustomerWiseVehicleDetails.pdf');

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

        <button onClick={() => console.log('Logout')}>

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

          onClick={() => router.push('/customer_ledger')}

        >

          Pending Ledger

        </button>

        <button

          className="buttonledger"

          onClick={() => router.push('/CustomerWiseVehicleRecord')}

        >

          CustomerWise Vehicle Details

        </button>

      </div>


      {/* Filter Panel */}

      <div className="container">

        <h2 className="pageTitle">Customerwise Vehicle Details</h2>

        <div className="selectionContainer">

          <select

            className="picker"

            value={selectedCustomer}

            onChange={(e) => setSelectedCustomer(e.target.value)}

          >

            <option value="">-- Select Customer --</option>

            {customers.map((name) => (

              <option key={name} value={name}>

                {name}

              </option>

            ))}

          </select>


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

                  <tr key={`${r.id}-${r.address || 'N/A'}`}>

                    <td>{r.id}</td>

                    <td>{r.vehicle_number}</td>

                    <td>

                      Rs.

                      {parseFloat(r.agreed_amount || '0').toFixed(2)}

                    </td>

                    <td>{r.issued_to}</td>

                    <td>{r.address || 'N/A'}</td>

                    <td>

                      {moment(r.cleared_at).format('DD-MM-YYYY')}

                    </td>

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

        .logout-button {

          background: none;

          border: none;

          cursor: pointer;

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

        }

        .picker, .datePicker {

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

        .actionContainer {

          margin: 10px 0;

          text-align: center;

        }

        .tableContainer {

          margin: 20px 0;

          border: 1px solid #e0e0e0;

          border-radius: 8px;

          overflow: hidden;

          box-shadow: 0 2px 4px rgba(0,0,0,0.05);

        }

        .recordsTable {

          width: 100%;

          border-collapse: collapse;

          background: white;

          font-size: 15px;

        }

        .recordsTable th {

          background-color: #841584;

          color: white;

          font-weight: bold;

          padding: 12px 15px;

          text-align: center;

          position: sticky;

          top: 0;

          font-size: 15px;

        }

          .recordsTable th:nth-child(2),

          .recordsTable td:nth-child(2),

          .recordsTable th:nth-child(3),         

          .recordsTable td:nth-child(3) {

           padding-left: 5px;

           padding-right: 5px;

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

      `}</style>

    </div>

  );

};


export default CustomerWiseVehicleDetails;	
