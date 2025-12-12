import React, { useState } from "react";

export default function Payment() {
    const [thisMonthPayment, setThisMonthPayment] = useState(1000);
    const [remainingPayment, setRemainingPayment] = useState(500);
    const [totalPayment, setTotalPayment] = useState(1500);
    const [upiLink, setUpiLink] = useState("upi://pay?pa=example@upi");
    const [qrLink, setQrLink] = useState("https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=example@upi&size=150x150");

    const handleUpiPayment = () => {
        window.open(upiLink, "_blank");  
    };

    const handlePaymentLink = () => {
        alert("Payment link sent to customer via message/WhatsApp!");
    };

    const handleGenerateBill = () => {
        alert(`Bill Generated!\nTotal: ${totalPayment}\nRemaining: ${remainingPayment}`);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl text-pink-600 font-semibold mb-4">Payment / Billing</h2>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded">
                    <h3 className="font-semibold text-gray-700">This Month Payment</h3>
                    <p>₹{thisMonthPayment}</p>
                </div>
                <div className="p-4 border rounded">
                    <h3 className="font-semibold text-gray-700">Remaining Payment/Bill</h3>
                    <p>₹{remainingPayment}</p>
                </div>
                <div className="p-4 border rounded">
                    <h3 className="font-semibold text-gray-700">Total Payment</h3>
                    <p>₹{totalPayment}</p>
                </div>
            </div>

            
            <div className="space-y-2">
                <button
                    onClick={handleUpiPayment}
                    className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
                >
                    Pay via UPI
                </button>

                <button
                    onClick={handlePaymentLink}
                    className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                >
                    Send Payment Link
                </button>
            </div>

            
            <div className="text-center">
                <h3 className="font-semibold text-gray-700 mb-2">QR Code Payment</h3>
                <img src={qrLink} alt="QR Code" className="mx-auto" />
                <p className="text-gray-500 text-sm mt-1">Scan to pay</p>
            </div>

            
            <div className="text-center">
                <button
                    onClick={handleGenerateBill}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Generate Bill
                </button>
            </div>
        </div>
    );
}
