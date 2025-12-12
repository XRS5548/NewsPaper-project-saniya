import React, { useState } from "react";

export default function AgentSignup() {
    const [form, setForm] = useState({
        fullName: "",
        number: "",
        email: "",
        address: "",
        agencyName: "",
        state: "",
        district: "",
        village: "",
        pincode: "",
        age: "",
        gender: "",
        password: "",
        confirmPassword: "",
        bankName: "",
        accountNumber: "",
        ifsc: "",
        branch: "",
        agencyPhoto: null,
        agentPhoto: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Password does not match");
            return;
        }
        alert("Signup successful");
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl">

             
            <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
                Agent Signup
            </h2>

            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>

                <input name="fullName" placeholder="Full Name" className="input" onChange={handleChange} />
                <input name="number" placeholder="Mobile Number" className="input" onChange={handleChange} />
                <input name="email" placeholder="Email" className="input" onChange={handleChange} />
                <textarea name="address" placeholder="Full Address" className="input" onChange={handleChange}></textarea>

                <input name="state" placeholder="State" className="input" onChange={handleChange} />
                <input name="district" placeholder="District" className="input" onChange={handleChange} />
                <input name="village" placeholder="Village" className="input" onChange={handleChange} />
                <input name="pincode" placeholder="Pincode" className="input" onChange={handleChange} />

                <input name="age" placeholder="Age" className="input" onChange={handleChange} />

                <select name="gender" className="input" onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <input name="agencyName" placeholder="Agency Name" className="input" onChange={handleChange} />

                <label>Agency Photo</label>
                <input type="file" name="agencyPhoto" className="input" onChange={handleChange} />

                <label>Agent Photo</label>
                <input type="file" name="agentPhoto" className="input" onChange={handleChange} />

                <h3 className="text-lg font-semibold mt-4">Bank Details</h3>

                <input name="bankName" placeholder="Bank Name" className="input" onChange={handleChange} />
                <input name="accountNumber" placeholder="Account Number" className="input" onChange={handleChange} />
                <input name="ifsc" placeholder="IFSC Code" className="input" onChange={handleChange} />
                <input name="branch" placeholder="Branch Name" className="input" onChange={handleChange} />

                <input type="password" name="password" placeholder="Password" className="input" onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input" onChange={handleChange} />

                <button className="bg-orange-600 text-white py-2 rounded mt-3">
                    Submit
                </button>

            </form>
        </div>
    );
}
