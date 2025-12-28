
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
} from "@mui/material";

interface Customer {
  name: string;
  mobile: string;
  address: string;
  gstin: string;
}

interface Product {
  name: string;
  quantity: string;
  rate: string;
  gst: string;
  hsn: string;
}

const GenerateInvoice = () => {
  const [isNewCustomer, setIsNewCustomer] = useState(true);
  const [customerDetails, setCustomerDetails] = useState<Customer>({
    name: "",
    mobile: "",
    address: "",
    gstin: "",
  });
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([
    { name: "", quantity: "", rate: "", gst: "18", hsn: "998717" },
  ]);

  useEffect(() => {
    axios
      .get("http://15.207.48.53:3000/customers")
      .then((response) => {
        setCustomersList(response.data as Customer[]);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  const handleCustomerChange = (key: keyof Customer, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [key]: value }));
  };

  const handleExistingCustomerSearch = () => {
    const matchedCustomer = customersList.find(
      (customer) =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.mobile.includes(searchQuery)
    );
    
    if (matchedCustomer) {
      setSelectedCustomer(matchedCustomer);
      setCustomerDetails(matchedCustomer);
    } else {
      alert("No customer matches your search.");
    }
  };

  const addProduct = () => {
    setProducts(prev => [
      ...prev,
      { name: "", quantity: "", rate: "", gst: "18", hsn: "998717" },
    ]);
  };

  const deleteProduct = (index: number) => {
    setProducts(prev => prev.filter((_, i) => i !== index));
  };

  const generateInvoice = async () => {
    try {
      const response = await axios.post("http://15.207.48.53:3000/generate-bill", {
        customerName: customerDetails.name,
        customerMobile: customerDetails.mobile,
        customerAddress: customerDetails.address,
        customerGstin: customerDetails.gstin,
        products: products.map((product) => ({
          name: product.name,
          quantity: parseFloat(product.quantity),
          rate: parseFloat(product.rate),
          gst: parseFloat(product.gst),
          hsn: product.hsn,
        })),
      });

      if (response.status === 200) {
        alert("Invoice generated successfully!");
      }
    } catch (error) {
      console.error("Error generating invoice:", error);
      alert("Failed to generate invoice.");
    }
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <Button
          variant={isNewCustomer ? "contained" : "outlined"}
          onClick={() => setIsNewCustomer(true)}
          sx={{ backgroundColor: "#841584", color: "#fff" }}
        >
          New Customer
        </Button>
        <Button
          variant={!isNewCustomer ? "contained" : "outlined"}
          onClick={() => setIsNewCustomer(false)}
          sx={{ backgroundColor: "#841584", color: "#fff" }}
        >
          Existing Customer
        </Button>
      </div>

      {isNewCustomer ? (
        <Card className="mb-6">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              New Customer Details
            </Typography>
            {(["name", "mobile", "address", "gstin"] as (keyof Customer)[]).map((field) => (
              <TextField
                key={field}
                label={`Customer ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={customerDetails[field]}
                onChange={(e) => handleCustomerChange(field, e.target.value)}
                fullWidth
                margin="normal"
                type={field === "mobile" ? "number" : "text"}
                inputProps={field === "gstin" ? { style: { textTransform: "uppercase" } } : {}}
              />
            ))}
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="mb-6">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Search Existing Customer
              </Typography>
              <TextField
                label="Search by name or mobile"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                onClick={handleExistingCustomerSearch}
                className="mt-4"
              >
                Search
              </Button>
            </CardContent>
          </Card>

          {selectedCustomer && (
            <Card className="mb-6">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Customer Details
                </Typography>
                {(["name", "mobile", "address", "gstin"] as (keyof Customer)[]).map((field) => (
                  <TextField
                    key={field}
                    label={`Customer ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={customerDetails[field]}
                    onChange={(e) => handleCustomerChange(field, e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                ))}
              </CardContent>
            </Card>
          )}
        </>
      )}

      <Card className="mb-6">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Products
          </Typography>
          {products.map((product, index) => (
            <Card key={index} className="mb-4">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Product {index + 1}
                </Typography>
                <TextField
                  label="Product Name"
                  value={product.name}
                  onChange={(e) => {
                    const updatedProducts = [...products];
                    updatedProducts[index].name = e.target.value;
                    setProducts(updatedProducts);
                  }}
                  fullWidth
                  margin="normal"
                />
                <div className="grid grid-cols-2 gap-4">
                  <TextField
                    label="Quantity"
                    type="number"
                    value={product.quantity}
                    onChange={(e) => {
                      const updatedProducts = [...products];
                      updatedProducts[index].quantity = e.target.value;
                      setProducts(updatedProducts);
                    }}
                    margin="normal"
                  />
                  <TextField
                    label="Rate"
                    type="number"
                    value={product.rate}
                    onChange={(e) => {
                      const updatedProducts = [...products];
                      updatedProducts[index].rate = e.target.value;
                      setProducts(updatedProducts);
                    }}
                    margin="normal"
                  />
                  <TextField
                    label="GST (%)"
                    type="number"
                    value={product.gst}
                    onChange={(e) => {
                      const updatedProducts = [...products];
                      updatedProducts[index].gst = e.target.value;
                      setProducts(updatedProducts);
                    }}
                    margin="normal"
                  />
                  <TextField
                    label="HSN Code"
                    type="number"
                    value={product.hsn}
                    onChange={(e) => {
                      const updatedProducts = [...products];
                      updatedProducts[index].hsn = e.target.value;
                      setProducts(updatedProducts);
                    }}
                    margin="normal"
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  color="error"
                  onClick={() => deleteProduct(index)}
                >
                  Delete Product
                </Button>
              </CardActions>
            </Card>
          ))}
          <Button
            variant="outlined"
            onClick={addProduct}
            className="mt-4"
          >
            Add Product
          </Button>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#841584" }}
        onClick={generateInvoice}
        fullWidth
        size="large"
      >
        Generate Invoice
      </Button>
    </div>
  );
};

export default GenerateInvoice;