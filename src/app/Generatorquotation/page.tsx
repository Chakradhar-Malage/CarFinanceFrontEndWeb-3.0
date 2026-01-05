/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";


import { useEffect, useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

import Image from "next/image";

import moment from "moment-timezone"; // ensure this is installed


const ViewGeneratorQuotationInvoices = () => {

  const [searchName, setSearchName] = useState("");

  const [filteredInvoices, setFilteredInvoices] = useState<any[]>([]);

  const router = useRouter();


  useEffect(() => {

    const fetchInvoices = async () => {

      try {

        const response = await axios.get(

          "http://72.61.245.17:3000/allgeneratorquotations"

        );

        setFilteredInvoices(response.data as any[]);

      } catch (error) {

        console.error("Error fetching generator quotations:", error);

      }

    };


    fetchInvoices();

  }, []);


  const searchByCustomer = async () => {

    if (!searchName) {

      alert("Please enter a customer name.");

      return;

    }

    try {

      const response = await axios.get(

        `http://72.61.245.17:3000/generator-quotations/customer/${encodeURIComponent(

          searchName.trim()

        )}`

      );

      setFilteredInvoices(response.data as any[]);

    } catch (error) {

      console.error("Error searching generator quotations:", error);

      alert("No generator quotations found for this customer.");

    }

  };


  // === FIXED: convert ISO -> IST -> "YYYY-MM-DD HH:mm:ss" ===

  const formatDateForUrl = (dateString: string) =>

    moment(dateString)

      .tz("Asia/Kolkata")

      .format("YYYY-MM-DD HH:mm:ss");


  const openInBrowser = (customerName: string, createdAt: string) => {

    const encodedCustomerName = encodeURIComponent(customerName.trim());

    const formattedDate = encodeURIComponent(formatDateForUrl(createdAt));

    const url = `http://72.61.245.17:3000/generator-quotations/${encodedCustomerName}/${formattedDate}/download`;


    console.log("Download URL:", url);

    window.open(url, "_blank");

  };


  return (

    <div className="p-6">

      {/* Header */}

      <div className="flex items-center space-x-4 mb-6">

        <Image

          src="/images/usericon.png"

          alt="User Icon"

          width={50}

          height={50}

          className="rounded-full"

        />

        <div>

          <p className="text-gray-500 text-sm">Hello,</p>

          <p className="text-lg font-bold text-gray-700">OmSai</p>

        </div>

      </div>


      <p className="font-bold mb-4">Generator Quotations</p>


      {/* New Generator Quotation */}

      <button

        onClick={() => router.push("/generateGeneratorQuotation")}

        className="bg-purple-700 text-white px-4 py-2 rounded-lg mb-6"

      >

        New Quotation

      </button>


      {/* Search Bar */}

      <div className="flex space-x-2 mb-4">

        <input

          type="text"

          placeholder="Search by customer name"

          value={searchName}

          onChange={(e) => setSearchName(e.target.value)}

          className="border p-2 rounded w-full"

        />

        <button

          onClick={searchByCustomer}

          className="bg-purple-700 text-white px-4 py-2 rounded-lg"

        >

          Search

        </button>

      </div>


      {/* Generator Quotations List */}

      <div>

        {filteredInvoices.map((invoice, index) => (

          <div key={index} className="p-4 border rounded-lg bg-gray-100 mb-4">

            <p className="text-lg font-semibold">

              Customer: {invoice.customer_name}

            </p>

            <p className="text-gray-600">

              {moment(invoice.created_at)

                .tz("Asia/Kolkata")

                .format("DD/MM/YYYY, hh:mm:ss A")}

            </p>

            <button

              onClick={() =>

                openInBrowser(invoice.customer_name, invoice.created_at)

              }

              className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-3"

            >

              Download

            </button>

          </div>

        ))}

      </div>

    </div>

  );

};


export default ViewGeneratorQuotationInvoices;

