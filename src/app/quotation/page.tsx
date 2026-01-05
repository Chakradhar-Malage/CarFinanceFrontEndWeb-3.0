/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";


import { useEffect, useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

import Image from "next/image";

import moment from "moment-timezone";


interface Quotation {

  customer_name: string;

  created_at: string;

}


export default function ViewQuotations() {

  const [quotations, setQuotations] = useState<Quotation[]>([]);

  const [searchName, setSearchName] = useState("");

  const [filteredQuotations, setFilteredQuotations] = useState<Quotation[]>([]);

  const router = useRouter();


  // Fetch all quotations on mount

  useEffect(() => {

    const fetchQuotations = async () => {

      try {

        const response = await axios.get(

          "http://72.61.245.17:3000/allquotations"

        );

        setQuotations(response.data as Quotation[]);

        setFilteredQuotations(response.data as Quotation[]);

      } catch (error) {

        console.error("Error fetching quotations:", error);

      }

    };


    fetchQuotations();

  }, []);


  // Search by customer name

  const searchByCustomer = async () => {

    if (!searchName) {

      alert("Please enter a customer name.");

      return;

    }

    try {

      const response = await axios.get(

        `http://72.61.245.17:3000/quotations/customer/${encodeURIComponent(

          searchName.trim()

        )}`

      );

      setFilteredQuotations(response.data as Quotation[]);

    } catch (error) {

      console.error("Error searching quotations:", error);

      alert("No quotations found for this customer.");

    }

  };


  // Format date to "YYYY-MM-DD HH:mm:ss" in Asia/Kolkata timezone

  const formatDateForUrl = (dateString: string) =>

    moment(dateString).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");


  // Open PDF download URL in new tab

  const openInBrowser = (customerName: string, createdAt: string) => {

    const formattedDate = encodeURIComponent(formatDateForUrl(createdAt));

    const encodedCustomerName = encodeURIComponent(customerName.trim());

    const url =

      `http://72.61.245.17:3000/quotations/${encodedCustomerName}/${formattedDate}/download`;


    console.log("í ½í» ï¸ Download URL:", url);

    window.open(url, "_blank");

  };


  return (

    <div className="p-6">

      {/* Header */}

      <div className="flex items-center space-x-4 mb-6">

        <Image

          src="/webbuild/images/usericon.png"

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


      {/* New Quotation Button */}

      <button

        onClick={() => router.push("/generateQuotation")}

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


      {/* List of Quotations */}

      <div>

        {filteredQuotations.map((quotation, index) => (

          <div

            key={index}

            className="p-4 border rounded-lg bg-gray-100 mb-4"

          >

            <p className="text-lg font-semibold">

              Customer: {quotation.customer_name}

            </p>

            <p className="text-gray-600">

              {moment(quotation.created_at)

                .tz("Asia/Kolkata")

                .format("DD/MM/YYYY, hh:mm:ss A")}

            </p>

            <button

              onClick={() =>

                openInBrowser(quotation.customer_name, quotation.created_at)

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

}

