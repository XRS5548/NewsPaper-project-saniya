 
import React, { useState } from "react";

const newspapers = ["Patrika", "Bhaskar", "PB", "HT", "Times", "Hindu", "EX", "ET"];
const booklets = ["Vanika", "Bal Bhaskar", "Grah Sabha", "Others"];

const prices = {
    Patrika: 50,
    Bhaskar: 40,
    PB: 30,
    HT: 35,
    Times: 45,
    Hindu: 40,
    EX: 20,
    ET: 25,
    Vanika: 15,
    "Bal Bhaskar": 20,
    "Grah Sabha": 10,
    Others: 10,
};

export default function Newspaper() {
    const [selectedNewspapers, setSelectedNewspapers] = useState([]);
    const [selectedBooklets, setSelectedBooklets] = useState([]);
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState("");

    const handleSelect = (item, type) => {
        if (type === "newspaper") {
            setSelectedNewspapers(prev =>
                prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
            );
        } else {
            setSelectedBooklets(prev =>
                prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
            );
        }
    };

    const handleSubmit = () => {
        let sum = 0;
        selectedNewspapers.forEach(n => (sum += prices[n] || 0));
        selectedBooklets.forEach(b => (sum += prices[b] || 0));
        setTotal(sum);

        const msg = `Customer ने ${selectedNewspapers.join(
            " + "
        )} + ${selectedBooklets.join(
            " + "
        )} select किया है. कृपया service update करें.`;
        setMessage(msg);

        alert("Auto-message sent to Agent:\n" + msg);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl text-pink-600 font-semibold mb-4">Newspaper / Booklet Selection</h2>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Newspapers</h3>
                <div className="flex flex-wrap gap-2">
                    {newspapers.map(n => (
                        <button
                            key={n}
                            onClick={() => handleSelect(n, "newspaper")}
                            className={`px-3 py-1 border rounded ${selectedNewspapers.includes(n) ? "bg-pink-600 text-white" : "bg-gray-200"
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Booklets</h3>
                <div className="flex flex-wrap gap-2">
                    {booklets.map(b => (
                        <button
                            key={b}
                            onClick={() => handleSelect(b, "booklet")}
                            className={`px-3 py-1 border rounded ${selectedBooklets.includes(b) ? "bg-pink-600 text-white" : "bg-gray-200"
                                }`}
                        >
                            {b}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Selected Items:</h3>
                <p>Newspapers: {selectedNewspapers.join(", ") || "None"}</p>
                <p>Booklets: {selectedBooklets.join(", ") || "None"}</p>
            </div>

            <button
                onClick={handleSubmit}
                className="bg-pink-600 text-white px-4 py-2 rounded mb-4"
            >
                Submit
            </button>

            {total > 0 && (
                <div className="mt-2">
                    <h3 className="font-semibold">Total Monthly Payment: ₹{total}</h3>
                    <p className="text-gray-500">{message}</p>
                </div>
            )}
        </div>
    );
}
