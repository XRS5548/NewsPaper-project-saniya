import React, { useState } from "react";

export default function Agent() {
  const [agent, setAgent] = useState({
    name: "",
    agency: "",
    mobile: "",
    email: "",
    photo: null,
    otherDetails: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setAgent({ ...agent, photo: files[0] });
    } else {
      setAgent({ ...agent, [name]: value });
    }
  };

  const handleSubmit = () => {
    alert("Agent details saved!");
    console.log(agent);
    // Placeholder for auto-message to agent
    console.log(`Auto-message to Agent: Customer updated newspapers/booklets`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl text-pink-600 font-semibold mb-4">Agent Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-pink-600 font-medium mb-1">Agent Name</label>
          <input
            type="text"
            name="name"
            value={agent.name}
            onChange={handleChange}
            className="input border-pink-300 w-full"
          />
        </div>

        <div>
          <label className="block text-pink-600 font-medium mb-1">Agency Name</label>
          <input
            type="text"
            name="agency"
            value={agent.agency}
            onChange={handleChange}
            className="input border-pink-300 w-full"
          />
        </div>

        <div>
          <label className="block text-pink-600 font-medium mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={agent.mobile}
            onChange={handleChange}
            className="input border-pink-300 w-full"
          />
        </div>

        <div>
          <label className="block text-pink-600 font-medium mb-1">Email ID</label>
          <input
            type="email"
            name="email"
            value={agent.email}
            onChange={handleChange}
            className="input border-pink-300 w-full"
          />
        </div>

        <div>
          <label className="block text-pink-600 font-medium mb-1">Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className="input w-full"
          />
        </div>

        <div>
          <label className="block text-pink-600 font-medium mb-1">Other Details</label>
          <textarea
            name="otherDetails"
            value={agent.otherDetails}
            onChange={handleChange}
            className="input border-pink-300 w-full"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all"
        >
          Save Agent Details
        </button>
      </div>
    </div>
  );
}
