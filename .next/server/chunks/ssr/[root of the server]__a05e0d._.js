module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/customer_ledger/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CustomerLedger = ()=>{
    const [ledgerData, setLedgerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [transactionType, setTransactionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("credit");
    const [modifyAmounts, setModifyAmounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCustomerIndex, setSelectedCustomerIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchLedgerData = async ()=>{
            try {
                const response = await fetch("http://15.207.48.53:3000/getLedgerData");
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
            } finally{
                setLoading(false);
            }
        };
        fetchLedgerData();
    }, []);
    const handleModifyPayment = ()=>{
        if (selectedCustomerIndex === null) return;
        const modifyAmount = parseFloat(modifyAmounts[selectedCustomerIndex]);
        if (isNaN(modifyAmount)) {
            window.alert("Please enter a valid numeric value for the amount.");
            return;
        }
        const updatedData = [
            ...ledgerData
        ];
        const currentBalance = Number(updatedData[selectedCustomerIndex].balance) || 0;
        if (transactionType === "credit") {
            updatedData[selectedCustomerIndex].balance = currentBalance + modifyAmount;
        } else {
            updatedData[selectedCustomerIndex].balance = currentBalance - modifyAmount;
        }
        const requestBody = {
            customer_name: updatedData[selectedCustomerIndex].customer_name,
            address: updatedData[selectedCustomerIndex].address || "N/A",
            modifyAmount: modifyAmount,
            transactionType: transactionType
        };
        fetch("http://15.207.48.53:3000/saveCustomerLedger", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        }).then((res)=>res.json()).then((data)=>{
            if (data.message) {
                window.alert(data.message);
                setLedgerData(updatedData);
                setModifyAmounts((prev)=>{
                    const newAmounts = [
                        ...prev
                    ];
                    newAmounts[selectedCustomerIndex] = "";
                    return newAmounts;
                });
                setSelectedCustomerIndex(null);
            } else {
                window.alert(data.error || "Failed to update ledger");
            }
        }).catch((err)=>{
            console.error(err);
            window.alert("An error occurred while saving the ledger");
        });
    };
    const renderLedgerItem = (item, index)=>{
        const balance = Number(item.balance) || 0;
        const isNegative = balance < 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cardHeader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "customerInfo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "customerName",
                                children: item.customer_name
                            }, void 0, false, {
                                fileName: "[project]/src/app/customer_ledger/page.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "customerAddress",
                                children: [
                                    "Address: ",
                                    item.address || "N/A"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/customer_ledger/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "metaInfo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "transactionDate",
                                        children: new Date(item.transaction_date).toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `balance ${isNegative ? "negative" : ""}`,
                                        children: [
                                            "Rs.",
                                            Math.abs(balance).toFixed(2),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "balanceLabel",
                                                children: isNegative ? " owed" : " credit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/customer_ledger/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/customer_ledger/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/customer_ledger/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inputSection",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "amountInput",
                            type: "number",
                            placeholder: "Enter amount",
                            value: modifyAmounts[index],
                            onChange: (e)=>{
                                const updatedAmounts = [
                                    ...modifyAmounts
                                ];
                                updatedAmounts[index] = e.target.value;
                                setModifyAmounts(updatedAmounts);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "buttonGroup",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "transactionButtons",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `transButton credit ${selectedCustomerIndex === index && transactionType === "credit" ? "active" : ""}`,
                                            onClick: ()=>{
                                                setTransactionType("credit");
                                                setSelectedCustomerIndex(index);
                                            },
                                            children: "Add Credit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `transButton debit ${selectedCustomerIndex === index && transactionType === "debit" ? "active" : ""}`,
                                            onClick: ()=>{
                                                setTransactionType("debit");
                                                setSelectedCustomerIndex(index);
                                            },
                                            children: "Add Debit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/customer_ledger/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "saveButton",
                                    onClick: handleModifyPayment,
                                    disabled: selectedCustomerIndex !== index,
                                    children: "Confirm Transaction"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/customer_ledger/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/customer_ledger/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/src/app/customer_ledger/page.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "safeArea",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loadingContainer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner"
                    }, void 0, false, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "loadingText",
                        children: "Loading ledger data..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/customer_ledger/page.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/customer_ledger/page.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "safeArea",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "errorContainer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "errorIcon",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "errorText",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "retryButton",
                        onClick: ()=>window.location.reload(),
                        children: "Try Again"
                    }, void 0, false, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/customer_ledger/page.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/customer_ledger/page.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this);
    }
    // Client-side filtering of ledgerData based on searchQuery
    const filteredLedgerData = ledgerData.filter((item)=>item.customer_name.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-37fb9cefe2058290" + " " + "safeArea",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-37fb9cefe2058290" + " " + "appHeader",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-37fb9cefe2058290" + " " + "headerContent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-37fb9cefe2058290" + " " + "userInfo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-37fb9cefe2058290" + " " + "userAvatar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "jsx-37fb9cefe2058290",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                                            clipRule: "evenodd",
                                            className: "jsx-37fb9cefe2058290"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/customer_ledger/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-37fb9cefe2058290" + " " + "userDetails",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-37fb9cefe2058290" + " " + "greeting",
                                            children: "Good Day,"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "jsx-37fb9cefe2058290" + " " + "userName",
                                            children: "OmSai"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/customer_ledger/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "jsx-37fb9cefe2058290" + " " + "logoutButton",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "logoutIcon",
                                src: "/webbuild/images/Logout.png",
                                alt: "Logout",
                                width: 28,
                                height: 28
                            }, void 0, false, {
                                fileName: "[project]/src/app/customer_ledger/page.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/customer_ledger/page.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/customer_ledger/page.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "jsx-37fb9cefe2058290" + " " + "mainContent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-37fb9cefe2058290" + " " + "searchContainer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search by customer name...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "jsx-37fb9cefe2058290" + " " + "searchInput"
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-37fb9cefe2058290" + " " + "listContainer",
                        children: filteredLedgerData.length > 0 ? filteredLedgerData.map((item, index)=>renderLedgerItem(item, index)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-37fb9cefe2058290",
                            children: "No matching customer found."
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer_ledger/page.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/customer_ledger/page.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/customer_ledger/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "37fb9cefe2058290",
                children: "*{box-sizing:border-box;margin:0;padding:0}:root{--primary-color:#6d28d9;--secondary-color:#8b5cf6;--success-color:#10b981;--error-color:#ef4444;--text-dark:#1f2937;--text-light:#6b7280;--background:#f8fafc}.safeArea{background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%);min-height:100vh;padding:1rem;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.appHeader{background:#fff;border-radius:1rem;margin-bottom:2rem;padding:1rem;box-shadow:0 2px 8px #0000000d}.headerContent{justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;display:flex}.userInfo{align-items:center;gap:1rem;display:flex}.userAvatar{background:#e9d5ff;border-radius:50%;justify-content:center;align-items:center;width:48px;height:48px;display:flex}.userAvatar svg{width:28px;height:28px;color:var(--primary-color)}.userDetails .greeting{color:var(--text-light);font-size:.875rem}.userName{color:var(--text-dark);font-size:1.25rem;font-weight:600}.logoutButton{background:0 0;border:none;border-radius:50%;padding:.5rem;transition:background .2s}.logoutButton:hover{background:#f1f5f9}.mainContent{max-width:1200px;margin:0 auto}.listContainer{gap:1.5rem;display:grid}.card{background:#fff;border-radius:1rem;padding:1.5rem;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 6px #0000000d}.card:hover{transform:translateY(-2px);box-shadow:0 6px 12px #0000001a}.cardHeader{margin-bottom:1.5rem}.customerName{color:var(--text-dark);margin-bottom:.25rem;font-size:1.125rem;font-weight:600}.metaInfo{justify-content:space-between;align-items:center;display:flex}.transactionDate{color:var(--text-light);font-size:.875rem}.balance{color:var(--success-color);align-items:baseline;gap:.5rem;font-size:1.25rem;font-weight:600;display:flex}.balance.negative{color:var(--error-color)}.balanceLabel{color:currentColor;opacity:.8;font-size:.75rem;font-weight:400}.inputSection{gap:1rem;display:grid}.amountInput{border:2px solid #e2e8f0;border-radius:.75rem;width:100%;padding:.875rem;font-size:1rem;transition:border-color .2s}.amountInput:focus{border-color:var(--primary-color);outline:none;box-shadow:0 0 0 3px #6d28d91a}.buttonGroup{gap:1rem;display:grid}.transactionButtons{grid-template-columns:1fr 1fr;gap:.75rem;display:grid}.transButton{cursor:pointer;border:none;border-radius:.75rem;padding:.75rem;font-weight:600;transition:all .2s}.transButton.credit{color:var(--primary-color);background:#e9d5ff}.transButton.credit.active,.transButton.credit:hover{background:var(--primary-color);color:#fff}.transButton.debit{color:var(--error-color);background:#fee2e2}.transButton.debit.active,.transButton.debit:hover{background:var(--error-color);color:#fff}.saveButton{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:#fff;cursor:pointer;border:none;border-radius:.75rem;width:100%;padding:1rem;font-weight:600;transition:opacity .2s}.saveButton:disabled{opacity:.6;cursor:not-allowed}.loadingContainer{flex-direction:column;justify-content:center;align-items:center;gap:1.5rem;min-height:50vh;display:flex}.spinner{border:4px solid #e2e8f0;border-top-color:var(--primary-color);border-radius:50%;width:3rem;height:3rem;animation:1s linear infinite spin}.loadingText{color:var(--text-light);font-size:1.125rem}.errorContainer{text-align:center;max-width:400px;margin:2rem auto;padding:2rem}.errorIcon{margin-bottom:1rem;font-size:3rem}.errorText{color:var(--error-color);margin-bottom:1.5rem;line-height:1.5}.retryButton{background:var(--error-color);color:#fff;cursor:pointer;border:none;border-radius:.75rem;padding:.75rem 1.5rem;font-weight:600;transition:opacity .2s}.retryButton:hover{opacity:.9}@keyframes spin{to{transform:rotate(360deg)}}@media (width<=640px){.safeArea{padding:.75rem}.customerName{font-size:1rem}.transactionDate{font-size:.75rem}.balance{font-size:1rem}.amountInput{padding:.75rem}.transButton{padding:.625rem;font-size:.875rem}.saveButton{padding:.875rem;font-size:.875rem}.searchContainer{text-align:center;margin-bottom:1rem}.searchInput{border:1px solid #ccc;border-radius:4px;width:100%;max-width:400px;padding:.5rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/customer_ledger/page.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CustomerLedger;
}}),
"[project]/src/app/customer_ledger/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a05e0d._.js.map