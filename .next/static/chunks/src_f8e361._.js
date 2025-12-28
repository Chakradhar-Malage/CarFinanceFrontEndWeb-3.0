(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f8e361._.js", {

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
"[project]/src/app/ViewCarDetails/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globalState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/globalState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
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
const ViewCarDetails = ()=>{
    _s();
    const [vehicleDetails, setVehicleDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const UserName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globalState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalState"].UserName;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const vehicleId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globalState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalState"].TempforViewing;
    const [received_amount, setReceivedAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [agreed_amount, setAgreedAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [issued_to, setIssuedTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fuel_expense, setFuelExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [maintenance, setMaintenance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [driver_expense, setDriverExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // New state to toggle the display of clear options
    const [showClearOptions, setShowClearOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewCarDetails.useEffect": ()=>{
            if (!vehicleId) {
                window.alert('No vehicle ID found');
                setLoading(false);
                return;
            }
            const fetchVehicleDetails = {
                "ViewCarDetails.useEffect.fetchVehicleDetails": async ()=>{
                    try {
                        const response = await fetch(`http://15.207.48.53:3000/searchById?id=${encodeURIComponent(vehicleId)}`);
                        const data = await response.json();
                        if (data.length === 0) {
                            window.alert('No details found for this vehicle');
                        } else {
                            setVehicleDetails(data[0]);
                            setAgreedAmount(data[0].agreed_amount.toString());
                            setIssuedTo(data[0].issued_to);
                            setAddress(data[0].address || '');
                            setReceivedAmount(data[0].received_amount.toString());
                            setDate(data[0].date);
                            setDriverExpense(data[0].driver_expense.toString());
                            setFuelExpense(data[0].fuel_expense.toString());
                            setMaintenance(data[0].maintenance.toString());
                        }
                    } catch (error) {
                        console.error('Error fetching data:', error);
                        window.alert('Error fetching data: ' + error.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ViewCarDetails.useEffect.fetchVehicleDetails"];
            fetchVehicleDetails();
        }
    }["ViewCarDetails.useEffect"], []);
    const saveCarDetails = async ()=>{
        try {
            const updatedCarDetails = {};
            if (agreed_amount !== undefined) updatedCarDetails.agreed_amount = parseInt(agreed_amount);
            if (received_amount !== undefined) updatedCarDetails.received_amount = parseInt(received_amount);
            if (fuel_expense !== undefined) updatedCarDetails.fuel_expense = parseInt(fuel_expense);
            if (maintenance !== undefined) updatedCarDetails.maintenance = parseInt(maintenance);
            if (driver_expense !== undefined) updatedCarDetails.driver_expense = parseInt(driver_expense);
            if (issued_to !== undefined) updatedCarDetails.issued_to = issued_to;
            if (address !== undefined) updatedCarDetails.address = address;
            if (date !== undefined) updatedCarDetails.date = date;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`http://15.207.48.53:3000/updateCarDetails/${vehicleId}`, updatedCarDetails);
            if (response.status === 200) {
                window.alert('Car details updated successfully.');
                router.back();
            } else {
                window.alert('Failed to update car details.');
            }
        } catch (error) {
            console.error('Error updating car details:', error.response?.data || error.message);
            window.alert('An error occurred while updating car details.');
        }
    };
    const formattedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const clearAndSaveDetails = async ()=>{
        try {
            const totalExpenses = (fuel_expense ? parseInt(fuel_expense) : 0) + (driver_expense ? parseInt(driver_expense) : 0) + (maintenance ? parseInt(maintenance) : 0);
            const dataToSave = {
                vehicle_number: vehicleId,
                agreed_amount: parseInt(agreed_amount) || 0,
                issued_to: issued_to || 'N/A',
                address: address || 'N/A',
                total_expenses: totalExpenses,
                cleared_date: formattedDate
            };
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://15.207.48.53:3000/saveClearedDetails', dataToSave);
            if (response.status === 200) {
                window.alert('Details saved successfully.');
                setIssuedTo('N/A');
                setAddress('N/A');
                setAgreedAmount('0');
                setReceivedAmount('0');
                setFuelExpense('0');
                setMaintenance('0');
                setDriverExpense('0');
            } else {
                window.alert('Failed to save details.');
            }
        } catch (error) {
            console.error('Error saving cleared details:', error.response?.data || error.message);
            window.alert('Vehicle is already cleared.');
        }
    };
    const calculatePendingAmount = ()=>{
        const agreed = agreed_amount || (vehicleDetails ? vehicleDetails.agreed_amount.toString() : '0');
        const received = received_amount || (vehicleDetails ? vehicleDetails.received_amount.toString() : '0');
        return parseInt(agreed, 10) - parseInt(received, 10);
    };
    const handlePendingAmount = async ()=>{
        const pendingAmount = calculatePendingAmount();
        if (pendingAmount > 0) {
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://15.207.48.53:3000/processPendingAmount', {
                    vehicleId: vehicleId,
                    pending_amount: pendingAmount,
                    customer_name: issued_to,
                    address: address || 'N/A'
                });
                if (response.status === 200 || response.status === 201) {
                    window.alert('Pending amount processed successfully.');
                    await clearAndSaveDetails();
                    setIssuedTo('N/A');
                    setAddress('N/A');
                    setAgreedAmount('0');
                    setReceivedAmount('0');
                    setFuelExpense('0');
                    setMaintenance('0');
                    setDriverExpense('0');
                } else {
                    const errorMessage = response.data.message;
                    window.alert('Failed to process pending amount: ' + errorMessage);
                }
            } catch (error) {
                console.error('Error processing pending amount:', error.response?.data || error.message);
                window.alert('An error occurred while processing pending amount: ' + (error.response?.data.message || error.message));
            }
        } else {
            window.alert('Pending amount must be greater than zero.');
        }
    };
    // These functions are called when the user selects one of the clear options
    const handleClearFullPayment = async ()=>{
        await clearAndSaveDetails();
        setShowClearOptions(false);
    };
    const handleClearPendingPayment = async ()=>{
        await handlePendingAmount();
        setShowClearOptions(false);
    };
    const handleCancelClear = ()=>{
        setShowClearOptions(false);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/ViewCarDetails/page.tsx",
            lineNumber: 407,
            columnNumber: 12
        }, this);
    }
    if (!vehicleDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "error-message",
                children: "No details available for this vehicle."
            }, void 0, false, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 418,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ViewCarDetails/page.tsx",
            lineNumber: 416,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-aed0477b377e7380" + " " + "main-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-aed0477b377e7380" + " " + "user-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/webbuild/images/usericon.png",
                                alt: "User Icon",
                                width: 50,
                                height: 50,
                                className: "usrimg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                                lineNumber: 437,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-aed0477b377e7380" + " " + "header-text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-aed0477b377e7380" + " " + "helloname",
                                        children: "Hello,"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-aed0477b377e7380" + " " + "username",
                                        children: UserName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/webbuild/images/Logout.png",
                        alt: "logout",
                        width: 25,
                        height: 25,
                        className: "logoutimg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "jsx-aed0477b377e7380" + " " + "separator"
            }, void 0, false, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "section-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/webbuild/images/Car.png",
                        alt: "Car",
                        width: 25,
                        height: 25,
                        className: "icon"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-aed0477b377e7380" + " " + "section-title",
                        children: "Vehicle Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Name of Vehicle:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: vehicleDetails.name_of_vehicle,
                        readOnly: true,
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Vehicle Number:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: vehicleId || '',
                        readOnly: true,
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Issued To:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: issued_to,
                        onChange: (e)=>setIssuedTo(e.target.value),
                        placeholder: "Event/Person Name",
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Address:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: address,
                        onChange: (e)=>setAddress(e.target.value),
                        placeholder: "Enter address",
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Agreed Amount:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: agreed_amount,
                        onChange: (e)=>setAgreedAmount(e.target.value),
                        type: "number",
                        placeholder: vehicleDetails.agreed_amount.toString(),
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Received Amount:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: received_amount,
                        onChange: (e)=>setReceivedAmount(e.target.value),
                        type: "number",
                        placeholder: vehicleDetails.received_amount.toString(),
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "date-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Date:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: date,
                        onChange: (e)=>setDate(e.target.value),
                        placeholder: vehicleDetails.date,
                        className: "jsx-aed0477b377e7380" + " " + "date-input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Driver Expense:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: driver_expense,
                        onChange: (e)=>setDriverExpense(e.target.value),
                        type: "number",
                        placeholder: vehicleDetails.driver_expense.toString(),
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Fuel Expense:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: fuel_expense,
                        onChange: (e)=>setFuelExpense(e.target.value),
                        type: "number",
                        placeholder: vehicleDetails.fuel_expense.toString(),
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-aed0477b377e7380" + " " + "label",
                        children: "Maintenance:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: maintenance,
                        onChange: (e)=>setMaintenance(e.target.value),
                        type: "number",
                        placeholder: vehicleDetails.maintenance.toString(),
                        className: "jsx-aed0477b377e7380" + " " + "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 555,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "jsx-aed0477b377e7380" + " " + "pending-amount",
                children: [
                    "Pending Amount: Rs.",
                    calculatePendingAmount()
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 564,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "button-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (window.confirm('Do you want to save the details?')) saveCarDetails();
                        },
                        className: "jsx-aed0477b377e7380" + " " + "save-button",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowClearOptions(true),
                        className: "jsx-aed0477b377e7380" + " " + "clear-button",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            showClearOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aed0477b377e7380" + " " + "clear-options",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-aed0477b377e7380",
                        children: "Please select payment status:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 602,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-aed0477b377e7380" + " " + "option-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClearFullPayment,
                                className: "jsx-aed0477b377e7380" + " " + "option-button",
                                children: "Full Payment"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClearPendingPayment,
                                className: "jsx-aed0477b377e7380" + " " + "option-button",
                                children: "Pending Payment"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                                lineNumber: 612,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancelClear,
                                className: "jsx-aed0477b377e7380" + " " + "option-button cancel-button",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                        lineNumber: 604,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ViewCarDetails/page.tsx",
                lineNumber: 600,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "aed0477b377e7380",
                children: ".main-container.jsx-aed0477b377e7380{max-width:800px;margin:0 auto;padding:20px}.header.jsx-aed0477b377e7380{justify-content:space-between;align-items:center;padding:10px 0;display:flex}.user-container.jsx-aed0477b377e7380{align-items:center;display:flex}.usrimg.jsx-aed0477b377e7380{border-radius:50%;width:50px;height:50px}.header-text.jsx-aed0477b377e7380{margin-left:10px}.helloname.jsx-aed0477b377e7380{margin:0;font-size:14px}.username.jsx-aed0477b377e7380{color:#2f4f4f;margin:0;font-size:16px;font-weight:700}.logoutimg.jsx-aed0477b377e7380{width:25px;height:25px}.separator.jsx-aed0477b377e7380{border-bottom:1px solid #000;margin:25px 0}.section-header.jsx-aed0477b377e7380{align-items:center;margin-bottom:20px;display:flex}.icon.jsx-aed0477b377e7380{width:25px;height:25px}.section-title.jsx-aed0477b377e7380{margin-left:10px;font-size:20px;font-weight:500}.form-group.jsx-aed0477b377e7380{margin-bottom:15px}.label.jsx-aed0477b377e7380{margin-bottom:5px;font-size:15px;display:block}.input.jsx-aed0477b377e7380{background-color:#d3d3d3;border:1px solid gray;border-radius:5px;width:100%;padding:10px;font-size:15px}.date-group.jsx-aed0477b377e7380{justify-content:space-between;align-items:center;margin-bottom:15px;display:flex}.date-input.jsx-aed0477b377e7380{background-color:#d3d3d3;border:1px solid gray;border-radius:5px;width:30%;padding:10px;font-size:15px}.pending-amount.jsx-aed0477b377e7380{margin-top:20px;font-size:18px}.button-group.jsx-aed0477b377e7380{justify-content:center;gap:20px;margin-top:20px;display:flex}.save-button.jsx-aed0477b377e7380,.clear-button.jsx-aed0477b377e7380{color:#fff;cursor:pointer;background-color:#841584;border:none;border-radius:5px;padding:10px 20px}.clear-options.jsx-aed0477b377e7380{text-align:center;background-color:#f9f9f9;border:1px solid #ccc;border-radius:5px;margin-top:20px;padding:15px}.option-buttons.jsx-aed0477b377e7380{justify-content:center;gap:10px;margin-top:10px;display:flex}.option-button.jsx-aed0477b377e7380{color:#fff;cursor:pointer;background-color:#841584;border:none;border-radius:5px;padding:8px 16px}.cancel-button.jsx-aed0477b377e7380{background-color:#555}.error-container.jsx-aed0477b377e7380{text-align:center;margin-top:50px}.error-message.jsx-aed0477b377e7380{color:red;font-size:18px}@media (width<=600px){.usrimg.jsx-aed0477b377e7380{width:40px;height:40px}.helloname.jsx-aed0477b377e7380{font-size:12px}.username.jsx-aed0477b377e7380{font-size:14px}.logoutimg.jsx-aed0477b377e7380{width:20px;height:20px}.section-title.jsx-aed0477b377e7380{font-size:18px}.label.jsx-aed0477b377e7380{font-size:14px}.input.jsx-aed0477b377e7380{padding:8px;font-size:14px}.date-group.jsx-aed0477b377e7380{flex-direction:column;align-items:flex-start}.date-input.jsx-aed0477b377e7380{width:100%;margin-top:5px}.pending-amount.jsx-aed0477b377e7380{font-size:16px}.button-group.jsx-aed0477b377e7380{flex-direction:column;gap:10px}.save-button.jsx-aed0477b377e7380,.clear-button.jsx-aed0477b377e7380{width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ViewCarDetails/page.tsx",
        lineNumber: 429,
        columnNumber: 5
    }, this);
};
_s(ViewCarDetails, "9sQsRB3kdq0f0cdgbpt3Dr6pJSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ViewCarDetails;
const __TURBOPACK__default__export__ = ViewCarDetails;
var _c;
__turbopack_refresh__.register(_c, "ViewCarDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/ViewCarDetails/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_f8e361._.js.map