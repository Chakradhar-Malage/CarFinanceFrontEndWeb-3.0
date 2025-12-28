(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_39364b._.js", {

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
"[project]/src/app/exportData/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-modal/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globalState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/globalState.js [app-client] (ecmascript)"); // Adjust the path as needed
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const ExportData = ()=>{
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // List of cars for the selected month
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCarRecords, setSelectedCarRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalAgreedAmount, setTotalAgreedAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalExpenses, setTotalExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [profit, setProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isModalVisible, setModalVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [carDetails, setCarDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Add new state for year
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const UserName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globalState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalState"].UserName;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Set the app element on the client side (in useEffect)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExportData.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAppElement(document.body);
        }
    }["ExportData.useEffect"], []);
    // Generate years from 2025 to next year
    const currentYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().year();
    const years = [];
    for(let y = 2025; y <= currentYear + 1; y++){
        years.push(y);
    }
    // Fetch the list of cars for the selected month
    // const exportLastMonthData = async () => {
    //   if (!month) {
    //     alert("Please select a month");
    //     return;
    //   }
    //   setLoading(true);
    //   try {
    //     const response = await fetch(
    //       `http://15.207.48.53:3000/export-month?month=${month}`
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
    const exportLastMonthData = async ()=>{
        if (!month || !year) {
            alert("Please select both month and year");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`http://15.207.48.53:3000/export-month?month=${month}&year=${year}`);
            // Old api call; revert back to this api call if anything goes wrong
            // const response = await fetch(
            //   `http://15.207.48.53:3000/export-month?month=${month}`
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
        } catch (error) {
            console.error("Error fetching export data:", error.message);
            alert("Failed to fetch data");
        } finally{
            setLoading(false);
        }
    };
    const handleCarSelection = (vehicle_number)=>{
        const selectedCar = data.filter((item)=>item.vehicle_number === vehicle_number);
        setSelectedCarRecords(selectedCar);
        // Calculate the totals for the selected car
        let carAgreedAmount = 0;
        let carExpenses = 0;
        selectedCar.forEach((item)=>{
            carAgreedAmount += parseFloat(item.agreed_amount);
            carExpenses += parseFloat(item.total_expenses);
        });
        const carProfit = carAgreedAmount - carExpenses;
        setCarDetails({
            vehicle_number: vehicle_number,
            totalAgreedAmount: carAgreedAmount,
            totalExpenses: carExpenses,
            profit: carProfit
        });
        setModalVisible(true);
    };
    // Filter the list of cars to show unique vehicle numbers
    const uniqueCarList = Array.from(new Set(data.map((item)=>item.vehicle_number))).map((vehicle_number)=>{
        return data.find((item)=>item.vehicle_number === vehicle_number);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-678c117ca811c271" + " " + "safeArea",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-678c117ca811c271" + " " + "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/webbuild/images/usericon.png",
                        alt: "User Icon",
                        width: 55,
                        height: 55,
                        className: "rounded-full margin-right-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-678c117ca811c271" + " " + "user-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-678c117ca811c271" + " " + "helloname",
                                children: "Hello,"
                            }, void 0, false, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-678c117ca811c271" + " " + "username",
                                children: UserName
                            }, void 0, false, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>console.log("Logout"),
                        className: "jsx-678c117ca811c271" + " " + "logout-button",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/webbuild/images/Logout.png",
                            alt: "User Icon",
                            width: 25,
                            height: 25,
                            className: "rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/exportData/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exportData/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-678c117ca811c271" + " " + "separator"
            }, void 0, false, {
                fileName: "[project]/src/app/exportData/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-678c117ca811c271" + " " + "buttonRow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/customer_ledger"),
                        className: "jsx-678c117ca811c271" + " " + "buttonledger",
                        children: "Pending Ledger"
                    }, void 0, false, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            width: "250px"
                        },
                        onClick: ()=>router.push("/CustomerWiseVehicleRecord"),
                        className: "jsx-678c117ca811c271" + " " + "buttonledger",
                        children: "CustomerWise Vehicle Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exportData/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-678c117ca811c271" + " " + "container",
                children: [
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-678c117ca811c271" + " " + "loadingText",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 220,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-678c117ca811c271" + " " + "exportTitle",
                        children: "Export Last Month Data"
                    }, void 0, false, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-678c117ca811c271" + " " + "monthPickerContainer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: year,
                                onChange: (e)=>setYear(e.target.value),
                                className: "jsx-678c117ca811c271" + " " + "picker",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "jsx-678c117ca811c271",
                                        children: "Select Year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    years.map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: y,
                                            className: "jsx-678c117ca811c271",
                                            children: y
                                        }, y, false, {
                                            fileName: "[project]/src/app/exportData/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: month,
                                onChange: (e)=>setMonth(e.target.value),
                                className: "jsx-678c117ca811c271" + " " + "picker",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "jsx-678c117ca811c271",
                                        children: "Select Month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "01",
                                        className: "jsx-678c117ca811c271",
                                        children: "January"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "02",
                                        className: "jsx-678c117ca811c271",
                                        children: "February"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "03",
                                        className: "jsx-678c117ca811c271",
                                        children: "March"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "04",
                                        className: "jsx-678c117ca811c271",
                                        children: "April"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "05",
                                        className: "jsx-678c117ca811c271",
                                        children: "May"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "06",
                                        className: "jsx-678c117ca811c271",
                                        children: "June"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "07",
                                        className: "jsx-678c117ca811c271",
                                        children: "July"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "08",
                                        className: "jsx-678c117ca811c271",
                                        children: "August"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "09",
                                        className: "jsx-678c117ca811c271",
                                        children: "September"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "10",
                                        className: "jsx-678c117ca811c271",
                                        children: "October"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "11",
                                        className: "jsx-678c117ca811c271",
                                        children: "November"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "12",
                                        className: "jsx-678c117ca811c271",
                                        children: "December"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportLastMonthData,
                                className: "jsx-678c117ca811c271" + " " + "button",
                                children: "Export"
                            }, void 0, false, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-678c117ca811c271" + " " + "totalContainer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-678c117ca811c271" + " " + "totalText",
                                children: [
                                    "Net Amount: Rs.",
                                    totalAgreedAmount.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-678c117ca811c271" + " " + "totalText",
                                children: [
                                    "Total Expenses: Rs.",
                                    totalExpenses.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-678c117ca811c271" + " " + "totalText",
                                children: [
                                    "Profit: Rs.",
                                    profit.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    uniqueCarList.length > 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-678c117ca811c271",
                        children: uniqueCarList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCarSelection(item.vehicle_number),
                                className: "jsx-678c117ca811c271" + " " + "carCard",
                                children: [
                                    "Car: ",
                                    item.vehicle_number
                                ]
                            }, item.vehicle_number, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isModalVisible,
                        onRequestClose: ()=>setModalVisible(false),
                        contentLabel: "Car Records Modal",
                        className: "modalContent",
                        overlayClassName: "modalOverlay",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-678c117ca811c271" + " " + "modalTitle",
                                children: [
                                    "Monthly Record for ",
                                    carDetails.vehicle_number
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-678c117ca811c271" + " " + "totalsContainer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-678c117ca811c271" + " " + "totalsText",
                                        children: [
                                            "Total Agreed Amount: Rs.",
                                            " ",
                                            carDetails.totalAgreedAmount?.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-678c117ca811c271" + " " + "totalsText",
                                        children: [
                                            "Total Expenses: Rs. ",
                                            carDetails.totalExpenses?.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-678c117ca811c271" + " " + "totalsText",
                                        children: [
                                            "Total Profit: Rs. ",
                                            carDetails.profit?.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-678c117ca811c271" + " " + "tableContainer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        overflowX: "auto",
                                        WebkitOverflowScrolling: "touch"
                                    },
                                    className: "jsx-678c117ca811c271",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-678c117ca811c271" + " " + "recordsTable",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-678c117ca811c271",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-678c117ca811c271",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-678c117ca811c271",
                                                            children: "ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/exportData/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                minWidth: 120
                                                            },
                                                            className: "jsx-678c117ca811c271",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/exportData/page.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                textAlign: "left"
                                                            },
                                                            className: "jsx-678c117ca811c271",
                                                            children: "Customer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/exportData/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                textAlign: "left"
                                                            },
                                                            className: "jsx-678c117ca811c271",
                                                            children: "Agreed Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/exportData/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                textAlign: "left"
                                                            },
                                                            className: "jsx-678c117ca811c271",
                                                            children: "Expenses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/exportData/page.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                textAlign: "left"
                                                            },
                                                            className: "jsx-678c117ca811c271",
                                                            children: "Profit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/exportData/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/exportData/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-678c117ca811c271",
                                                children: selectedCarRecords.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-678c117ca811c271" + " " + "tableRow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-678c117ca811c271",
                                                                children: item.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    minWidth: 120
                                                                },
                                                                className: "jsx-678c117ca811c271",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(item.cleared_at).format("DD-MM-YYYY")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    textAlign: "left"
                                                                },
                                                                className: "jsx-678c117ca811c271",
                                                                children: item.issued_to
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    textAlign: "left"
                                                                },
                                                                className: "jsx-678c117ca811c271",
                                                                children: [
                                                                    "Rs.",
                                                                    item.agreed_amount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    textAlign: "left"
                                                                },
                                                                className: "jsx-678c117ca811c271",
                                                                children: [
                                                                    "Rs.",
                                                                    item.total_expenses
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    textAlign: "left"
                                                                },
                                                                className: "jsx-678c117ca811c271",
                                                                children: [
                                                                    "Rs.",
                                                                    (item.agreed_amount - item.total_expenses).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/exportData/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/exportData/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/exportData/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/exportData/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModalVisible(false),
                                className: "jsx-678c117ca811c271" + " " + "closeModalButton",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/exportData/page.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/exportData/page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/exportData/page.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "678c117ca811c271",
                children: ".safeArea.jsx-678c117ca811c271{background-color:#f8f8f8;min-height:100vh}.header.jsx-678c117ca811c271{justify-content:space-between;align-items:center;margin:20px;display:flex}.usernameContainer.jsx-678c117ca811c271{text-align:left;margin-left:20px}.usrimg.jsx-678c117ca811c271{object-fit:cover;border-radius:50%;width:50px;height:50px;margin-top:20px;margin-left:20px}.user-text.jsx-678c117ca811c271{margin-right:1350px;padding-left:10px}.helloname.jsx-678c117ca811c271{margin:0;font-size:14px}.username.jsx-678c117ca811c271{color:#2f4f4f;margin:0;font-size:16px;font-weight:700}.logout-button.jsx-678c117ca811c271{cursor:pointer;background:0 0;border:none;position:absolute;top:20px;right:20px}.logoutimg.jsx-678c117ca811c271{width:25px;height:25px}.separator.jsx-678c117ca811c271{border-bottom:1px solid #000;margin:25px 20px 10px}.buttonRow.jsx-678c117ca811c271{justify-content:left;gap:10px;display:flex}.buttonledger.jsx-678c117ca811c271{color:#fff;cursor:pointer;background-color:#841584;border:none;border-radius:15px;width:150px;height:42px;margin:10px;padding:12px}.container.jsx-678c117ca811c271{text-align:center;padding:10px}.loadingText.jsx-678c117ca811c271{color:#4caf50;margin-top:20px;font-size:18px;font-weight:700}.exportTitle.jsx-678c117ca811c271{margin:10px 0 30px;font-size:16px;font-weight:700}.monthPickerContainer.jsx-678c117ca811c271{border:2px solid #000;border-radius:5px;flex-direction:column;align-items:center;width:90%;margin:0 auto 20px;padding:5px;display:flex}.picker.jsx-678c117ca811c271{border:1px solid #ccc;border-radius:25px;width:95%;height:56px;margin-bottom:10px;padding:5px;font-size:16px}.button.jsx-678c117ca811c271{color:#fff;cursor:pointer;background-color:#841584;border:none;border-radius:15px;width:200px;margin-bottom:10px;padding:12px;font-weight:700}.totalContainer.jsx-678c117ca811c271{text-align:center;background-color:#fff;border-radius:8px;width:100%;margin:10px auto 20px;padding:15px;box-shadow:0 1px 3px #0000001a}.totalText.jsx-678c117ca811c271{color:#333;margin-bottom:10px;font-size:16px;font-weight:700}.carCard.jsx-678c117ca811c271{cursor:pointer;background-color:#fff;border:1px solid #ccc;border-radius:10px;width:300px;margin:5px auto;padding:15px;display:block}.carRecord.jsx-678c117ca811c271{text-align:left;background-color:#fff;border:1px solid #ccc;border-radius:5px;width:275px;margin:5px auto;padding:15px}.detailsText.jsx-678c117ca811c271{color:#333;margin-bottom:5px;font-size:15px}.modalContent.jsx-678c117ca811c271{background-color:#fff;border-radius:10px;width:90%;max-width:900px;max-height:80vh;margin:auto;padding:25px;overflow-y:auto}.modalOverlay.jsx-678c117ca811c271{background-color:#00000080;justify-content:center;align-items:center;display:flex}.modalTitle.jsx-678c117ca811c271{text-align:center;color:#841584;margin-bottom:15px;font-size:20px;font-weight:700}.totalsContainer.jsx-678c117ca811c271{text-align:center;background:#f8f8f8;border-radius:8px;margin-bottom:15px;padding:15px}.totalsText.jsx-678c117ca811c271{margin-bottom:8px;font-size:16px;font-weight:500}.closeModalButton.jsx-678c117ca811c271{color:#fff;cursor:pointer;background-color:#841584;border:none;border-radius:8px;margin-top:15px;padding:12px 25px;font-size:14px;transition:opacity .3s}.closeModalButton.jsx-678c117ca811c271:hover{opacity:.9}.tableContainer.jsx-678c117ca811c271{border:1px solid #e0e0e0;border-radius:8px;margin:20px 0;overflow:hidden;box-shadow:0 2px 4px #0000000d}.recordsTable.jsx-678c117ca811c271{border-collapse:collapse;background:#fff;width:100%;font-size:15px}.recordsTable.jsx-678c117ca811c271 th.jsx-678c117ca811c271{color:#fff;text-align:left;background-color:#841584;padding:12px 15px;font-size:15px;font-weight:700;position:sticky;top:0}.recordsTable.jsx-678c117ca811c271 td.jsx-678c117ca811c271{color:#333;border-bottom:1px solid #f0f0f0;padding:12px 15px;font-size:14px}.recordsTable.jsx-678c117ca811c271 tr.jsx-678c117ca811c271:nth-child(2n){background-color:#f9f9f9}.recordsTable.jsx-678c117ca811c271 tr.jsx-678c117ca811c271:hover{background-color:#f5f5f5}.recordsTable.jsx-678c117ca811c271 td.jsx-678c117ca811c271:last-child,.recordsTable.jsx-678c117ca811c271 td.jsx-678c117ca811c271:nth-child(3),.recordsTable.jsx-678c117ca811c271 td.jsx-678c117ca811c271:nth-child(5),.recordsTable.jsx-678c117ca811c271 td.jsx-678c117ca811c271:nth-child(7),.recordsTable.jsx-678c117ca811c271 th.jsx-678c117ca811c271:nth-child(3),.recordsTable.jsx-678c117ca811c271 th.jsx-678c117ca811c271:nth-child(5),.recordsTable.jsx-678c117ca811c271 th.jsx-678c117ca811c271:nth-child(7){text-align:right}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/exportData/page.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
};
_s(ExportData, "ON8V78zblURGXjHy4qWT8O4yB/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ExportData;
const __TURBOPACK__default__export__ = ExportData;
var _c;
__turbopack_refresh__.register(_c, "ExportData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/exportData/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_39364b._.js.map