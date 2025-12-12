import React, { useState } from "react";

export default function CustomerList() {
    const [customers] = useState([
        {
            id: 1,
            name: "Rahul Sharma",
            phone: "9876543210",
            address: "Sector 12, Jaipur",
            pb: 1,
            bh: 0,
            ht: 1,
            times: 0,
            hindu: 1,
            ex: 0,
        },
        {
            id: 2,
            name: "Anjali Gupta",
            phone: "9992221100",
            address: "Gandhi Nagar, Ajmer",
            pb: 0,
            bh: 1,
            ht: 1,
            times: 1,
            hindu: 0,
            ex: 1,
        },
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Customer List
            </h2>

            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-pink-100 text-pink-700">
                            <th className="p-3 border">ID</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Phone</th>
                            <th className="p-3 border">Address</th>
                            <th className="p-3 border">PB</th>
                            <th className="p-3 border">BH</th>
                            <th className="p-3 border">HT</th>
                            <th className="p-3 border">Times</th>
                            <th className="p-3 border">Hindu</th>
                            <th className="p-3 border">EX</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers.map((c) => (
                            <tr key={c.id} className="text-center hover:bg-gray-100">
                                <td className="p-3 border">{c.id}</td>
                                <td className="p-3 border">{c.name}</td>
                                <td className="p-3 border">{c.phone}</td>
                                <td className="p-3 border">{c.address}</td>
                                <td className="p-3 border">{c.pb}</td>
                                <td className="p-3 border">{c.bh}</td>
                                <td className="p-3 border">{c.ht}</td>
                                <td className="p-3 border">{c.times}</td>
                                <td className="p-3 border">{c.hindu}</td>
                                <td className="p-3 border">{c.ex}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
