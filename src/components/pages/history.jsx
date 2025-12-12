import React, { useEffect, useState } from "react";

export default function History() {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [newspaperHistory, setNewspaperHistory] = useState([]);

  
  useEffect(() => {
    const payments = JSON.parse(localStorage.getItem("paymentHistory")) || [];
    const newspapers = JSON.parse(localStorage.getItem("newspaperHistory")) || [];
    setPaymentHistory(payments);
    setNewspaperHistory(newspapers);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl text-pink-600 font-semibold mb-4">History</h2>

       
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Payment History</h3>
        {paymentHistory.length === 0 ? (
          <p className="text-gray-500">No payment records found.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {paymentHistory.map((payment, index) => (
              <li key={index}>
                <span className="font-medium">Date:</span> {payment.date} |
                <span className="font-medium"> Amount:</span> ₹{payment.amount} |
                <span className="font-medium"> Method:</span> {payment.method}
              </li>
            ))}
          </ul>
        )}
      </div>

       
      <div>
        <h3 className="text-lg font-semibold mb-2">Newspaper / Booklet History</h3>
        {newspaperHistory.length === 0 ? (
          <p className="text-gray-500">No selections found.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {newspaperHistory.map((item, index) => (
              <li key={index}>
                <span className="font-medium">Date:</span> {item.date} |
                <span className="font-medium"> Selected:</span> {item.selection.join(", ")}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
