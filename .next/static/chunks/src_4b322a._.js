(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_4b322a._.js", {

"[project]/src/globalState.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Default values for the global state
__turbopack_esm__({
    "globalState": (()=>globalState),
    "loadGlobalState": (()=>loadGlobalState),
    "saveGlobalState": (()=>saveGlobalState)
});
const globalState = {
    TempforViewing: null,
    totalPendingAmount: 0,
    UserName: 'OmSai',
    totalCount: 0
};
const loadGlobalState = ()=>{
    try {
        const totalPendingAmount = localStorage.getItem('totalPendingAmount');
        const totalCount = localStorage.getItem('totalCount');
        // Update globalState with persisted values
        if (totalPendingAmount !== null) globalState.totalPendingAmount = Number(totalPendingAmount);
        if (totalCount !== null) globalState.totalCount = Number(totalCount);
    } catch (error) {
        console.error('Error loading global state:', error);
    }
};
const saveGlobalState = ()=>{
    try {
        localStorage.setItem('totalPendingAmount', String(globalState.totalPendingAmount));
        localStorage.setItem('totalCount', String(globalState.totalCount));
    } catch (error) {
        console.error('Error saving global state:', error);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/CustomerWiseVehicleRecord/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
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
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globalState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/globalState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
const CustomerWiseVehicleDetails = ()=>{
    _s();
    // Now just a list of names
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalAgreedAmount, setTotalAgreedAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalExpenses, setTotalExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [profit, setProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const UserName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globalState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalState"].UserName;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Fetch simple string list of customer names
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerWiseVehicleDetails.useEffect": ()=>{
            fetch('http://15.207.48.53:3000/unique-customers').then({
                "CustomerWiseVehicleDetails.useEffect": (res)=>{
                    if (!res.ok) throw new Error('Failed to fetch customers');
                    return res.json();
                }
            }["CustomerWiseVehicleDetails.useEffect"]).then({
                "CustomerWiseVehicleDetails.useEffect": (json)=>setCustomers(json.customers || [])
            }["CustomerWiseVehicleDetails.useEffect"]).catch({
                "CustomerWiseVehicleDetails.useEffect": (err)=>console.error('Error fetching customers:', err)
            }["CustomerWiseVehicleDetails.useEffect"]);
        }
    }["CustomerWiseVehicleDetails.useEffect"], []);
    // Fetch all cleared details for the selected customer (all addresses)
    const handleFetchData = ()=>{
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
        fetch(url.toString()).then((res)=>{
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        }).then((json)=>{
            const rows = json.data || [];
            setData(rows);
            // recompute totals
            const agg = rows.reduce((sum, r)=>sum + parseFloat(r.agreed_amount || '0'), 0);
            const exp = rows.reduce((sum, r)=>sum + parseFloat(r.total_expenses || '0'), 0);
            setTotalAgreedAmount(agg);
            setTotalExpenses(exp);
            setProfit(agg - exp);
        }).catch((err)=>console.error('Error fetching data:', err)).finally(()=>setLoading(false));
    };
    // PDF now includes Address column
    const generatePDF = ()=>{
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('landscape');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
            head: [
                [
                    'ID',
                    'Vehicle Number',
                    'Agreed Amount',
                    'Issued To',
                    'Address',
                    'Cleared At'
                ]
            ],
            body: data.map((r)=>[
                    r.id,
                    r.vehicle_number,
                    `Rs.${parseFloat(r.agreed_amount || '0').toFixed(2)}`,
                    r.issued_to,
                    r.address || 'N/A',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r.cleared_at).format('DD-MM-YYYY')
                ])
        });
        doc.save('CustomerWiseVehicleDetails.pdf');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-dbbf375f92118222" + " " + "safeArea",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-dbbf375f92118222" + " " + "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/webbuild/images/usericon.png",
                        alt: "User Icon",
                        width: 55,
                        height: 55
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 990,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dbbf375f92118222" + " " + "user-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-dbbf375f92118222" + " " + "helloname",
                                children: "Hello,"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1004,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-dbbf375f92118222" + " " + "username",
                                children: UserName
                            }, void 0, false, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1006,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1002,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>console.log('Logout'),
                        className: "jsx-dbbf375f92118222",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/webbuild/images/Logout.png",
                            alt: "Logout",
                            width: 25,
                            height: 25
                        }, void 0, false, {
                            fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                            lineNumber: 1012,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1010,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                lineNumber: 988,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-dbbf375f92118222" + " " + "separator"
            }, void 0, false, {
                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                lineNumber: 1028,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-dbbf375f92118222" + " " + "buttonRow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/customer_ledger'),
                        className: "jsx-dbbf375f92118222" + " " + "buttonledger",
                        children: "Pending Ledger"
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1035,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/CustomerWiseVehicleRecord'),
                        className: "jsx-dbbf375f92118222" + " " + "buttonledger",
                        children: "CustomerWise Vehicle Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1047,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                lineNumber: 1033,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-dbbf375f92118222" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-dbbf375f92118222" + " " + "pageTitle",
                        children: "Customerwise Vehicle Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1066,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dbbf375f92118222" + " " + "selectionContainer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCustomer,
                                onChange: (e)=>setSelectedCustomer(e.target.value),
                                className: "jsx-dbbf375f92118222" + " " + "picker",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "jsx-dbbf375f92118222",
                                        children: "-- Select Customer --"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 13
                                    }, this),
                                    customers.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: name,
                                            className: "jsx-dbbf375f92118222",
                                            children: name
                                        }, name, false, {
                                            fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1070,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: startDate,
                                onChange: (e)=>setStartDate(e.target.value),
                                className: "jsx-dbbf375f92118222" + " " + "datePicker"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1095,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: endDate,
                                onChange: (e)=>setEndDate(e.target.value),
                                className: "jsx-dbbf375f92118222" + " " + "datePicker"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleFetchData,
                                className: "jsx-dbbf375f92118222" + " " + "button",
                                children: "Fetch Data"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1068,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-dbbf375f92118222" + " " + "loadingText",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1129,
                        columnNumber: 21
                    }, this),
                    data.length > 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dbbf375f92118222" + " " + "totalContainer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-dbbf375f92118222" + " " + "totalText",
                                children: [
                                    "Net Amount: Rs.",
                                    totalAgreedAmount.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-dbbf375f92118222" + " " + "totalText",
                                children: [
                                    "Total Expenses: Rs.",
                                    totalExpenses.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-dbbf375f92118222" + " " + "totalText",
                                children: [
                                    "Profit: Rs.",
                                    profit.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                lineNumber: 1150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1136,
                        columnNumber: 11
                    }, this),
                    data.length > 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: generatePDF,
                        className: "jsx-dbbf375f92118222" + " " + "button",
                        children: "Print PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1161,
                        columnNumber: 11
                    }, this),
                    data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dbbf375f92118222" + " " + "tableContainer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "jsx-dbbf375f92118222" + " " + "recordsTable",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "jsx-dbbf375f92118222",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "jsx-dbbf375f92118222",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-dbbf375f92118222",
                                                children: "ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                lineNumber: 1182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-dbbf375f92118222",
                                                children: "Vehicle No."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                lineNumber: 1184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-dbbf375f92118222",
                                                children: "Agreed Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                lineNumber: 1186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-dbbf375f92118222",
                                                children: "Issued To"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-dbbf375f92118222",
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-dbbf375f92118222",
                                                children: "Cleared At"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                lineNumber: 1192,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                        lineNumber: 1180,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                    lineNumber: 1178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "jsx-dbbf375f92118222",
                                    children: data.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "jsx-dbbf375f92118222",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-dbbf375f92118222",
                                                    children: r.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-dbbf375f92118222",
                                                    children: r.vehicle_number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-dbbf375f92118222",
                                                    children: [
                                                        "Rs.",
                                                        parseFloat(r.agreed_amount || '0').toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                    lineNumber: 1208,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-dbbf375f92118222",
                                                    children: r.issued_to
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-dbbf375f92118222",
                                                    children: r.address || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-dbbf375f92118222",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r.cleared_at).format('DD-MM-YYYY')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${r.id}-${r.address || 'N/A'}`, true, {
                                            fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                            lineNumber: 1202,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                                    lineNumber: 1198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                            lineNumber: 1176,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1174,
                        columnNumber: 11
                    }, this) : !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-dbbf375f92118222",
                        children: "No data available"
                    }, void 0, false, {
                        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                        lineNumber: 1238,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
                lineNumber: 1064,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "dbbf375f92118222",
                children: ".safeArea.jsx-dbbf375f92118222{background-color:#f8f8f8;min-height:100vh}.header.jsx-dbbf375f92118222{justify-content:space-between;align-items:center;margin:20px;display:flex}.user-text.jsx-dbbf375f92118222{margin-right:auto;padding-left:10px}.helloname.jsx-dbbf375f92118222{margin:0;font-size:14px}.username.jsx-dbbf375f92118222{color:#2f4f4f;margin:0;font-size:16px;font-weight:700}.logout-button.jsx-dbbf375f92118222{cursor:pointer;background:0 0;border:none}.separator.jsx-dbbf375f92118222{border-bottom:1px solid #000;margin:25px 20px 10px}.buttonRow.jsx-dbbf375f92118222{justify-content:left;gap:10px;margin:10px 20px;display:flex}.buttonledger.jsx-dbbf375f92118222{color:#fff;cursor:pointer;background-color:#841584;border:none;border-radius:15px;width:150px;height:42px;padding:12px}.container.jsx-dbbf375f92118222{text-align:center;padding:20px}.pageTitle.jsx-dbbf375f92118222{margin:10px 0 30px;font-size:16px;font-weight:700}.selectionContainer.jsx-dbbf375f92118222{border:2px solid #000;border-radius:5px;flex-wrap:wrap;justify-content:center;gap:10px;width:90%;margin:0 auto 20px;padding:5px;display:flex}.picker.jsx-dbbf375f92118222,.datePicker.jsx-dbbf375f92118222{border:1px solid #ccc;border-radius:25px;width:200px;height:56px;padding:5px;font-size:16px}.button.jsx-dbbf375f92118222{color:#fff;cursor:pointer;background-color:#841584;border:none;border-radius:15px;width:200px;padding:12px;font-weight:700}.loadingText.jsx-dbbf375f92118222{color:#4caf50;margin-top:20px;font-size:18px;font-weight:700}.totalContainer.jsx-dbbf375f92118222{text-align:center;background-color:#fff;border-radius:8px;width:100%;margin:20px auto;padding:15px;box-shadow:0 1px 3px #0000001a}.totalText.jsx-dbbf375f92118222{color:#333;margin-bottom:10px;font-size:16px;font-weight:700}.actionContainer.jsx-dbbf375f92118222{text-align:center;margin:10px 0}.tableContainer.jsx-dbbf375f92118222{border:1px solid #e0e0e0;border-radius:8px;margin:20px 0;overflow:hidden;box-shadow:0 2px 4px #0000000d}.recordsTable.jsx-dbbf375f92118222{border-collapse:collapse;background:#fff;width:100%;font-size:15px}.recordsTable.jsx-dbbf375f92118222 th.jsx-dbbf375f92118222{color:#fff;text-align:center;background-color:#841584;padding:12px 15px;font-size:15px;font-weight:700;position:sticky;top:0}.recordsTable.jsx-dbbf375f92118222 th.jsx-dbbf375f92118222:nth-child(2),.recordsTable.jsx-dbbf375f92118222 td.jsx-dbbf375f92118222:nth-child(2),.recordsTable.jsx-dbbf375f92118222 th.jsx-dbbf375f92118222:nth-child(3),.recordsTable.jsx-dbbf375f92118222 td.jsx-dbbf375f92118222:nth-child(3){padding-left:5px;padding-right:5px}.recordsTable.jsx-dbbf375f92118222 td.jsx-dbbf375f92118222{color:#333;border-bottom:1px solid #f0f0f0;padding:12px 15px;font-size:14px}.recordsTable.jsx-dbbf375f92118222 tr.jsx-dbbf375f92118222:nth-child(2n){background-color:#f9f9f9}.recordsTable.jsx-dbbf375f92118222 tr.jsx-dbbf375f92118222:hover{background-color:#f5f5f5}.recordsTable.jsx-dbbf375f92118222 td.jsx-dbbf375f92118222:first-child,.recordsTable.jsx-dbbf375f92118222 td.jsx-dbbf375f92118222:nth-child(3),.recordsTable.jsx-dbbf375f92118222 td.jsx-dbbf375f92118222:nth-child(5),.recordsTable.jsx-dbbf375f92118222 th.jsx-dbbf375f92118222:first-child,.recordsTable.jsx-dbbf375f92118222 th.jsx-dbbf375f92118222:nth-child(3),.recordsTable.jsx-dbbf375f92118222 th.jsx-dbbf375f92118222:nth-child(5){text-align:right}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/CustomerWiseVehicleRecord/page.tsx",
        lineNumber: 984,
        columnNumber: 5
    }, this);
};
_s(CustomerWiseVehicleDetails, "uI0brlQgI30Lbj57hlBWLAxMUi4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CustomerWiseVehicleDetails;
const __TURBOPACK__default__export__ = CustomerWiseVehicleDetails;
var _c;
__turbopack_refresh__.register(_c, "CustomerWiseVehicleDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/CustomerWiseVehicleRecord/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_4b322a._.js.map