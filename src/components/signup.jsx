import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        sname: "",
        mobile: "",
        email: "",
        address: "",
        location: "",
        state: "",
        district: "",
        tehsil: "",
        village: "",
        pincode: "",
        document: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
    });

    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = () => {

        for (let key in form) {
            if (form[key] === "") {
                setError("Please fill all required fields.");
                return;
            }
        }

        if (!photo) {
            setError("Please upload your photo.");
            return;
        }

        if (form.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }


        setError("");


        localStorage.setItem("signedUp", "true");

        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8 border border-pink-400">

                <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
                    Customer Signup
                </h2>

                {error && (
                    <p className="text-red-600 text-center mb-4 font-medium">
                        {error}
                    </p>
                )}

                <form className="space-y-8">


                    <div>
                        <h3 className="text-xl font-semibold text-pink-600 mb-3">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input name="name" onChange={handleChange} className="input border-pink-300" type="text" placeholder="Name (Full Name)" />
                            <input name="sname" onChange={handleChange} className="input border-pink-300" type="text" placeholder="S. Name" />
                            <input name="mobile" onChange={handleChange} className="input border-pink-300" type="number" placeholder="Mobile Number" />
                            <input name="email" onChange={handleChange} className="input border-pink-300" type="email" placeholder="Email ID" />
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold text-pink-600 mb-3">Address Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input name="address" onChange={handleChange} className="input border-pink-300" type="text" placeholder="Address" />
                            <input name="location" onChange={handleChange} className="input border-pink-300" type="text" placeholder="Live Location" />
                            <input name="state" onChange={handleChange} className="input border-pink-300" type="text" placeholder="State" />
                            <input name="district" onChange={handleChange} className="input border-pink-300" type="text" placeholder="District" />
                            <input name="tehsil" onChange={handleChange} className="input border-pink-300" type="text" placeholder="Tehsil" />
                            <input name="village" onChange={handleChange} className="input border-pink-300" type="text" placeholder="Village" />
                            <input name="pincode" onChange={handleChange} className="input border-pink-300" type="number" placeholder="Pincode" />
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold text-pink-600 mb-3">Account Security</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select name="document" onChange={handleChange} className="input border-pink-300 text-gray-600">
                                <option value="">Select Document</option>
                                <option>Aadhar Card</option>
                                <option>PAN Card</option>
                                <option>Voter ID</option>
                                <option>Driving License</option>
                            </select>

                            <input name="password" onChange={handleChange} className="input border-pink-300" type="password" placeholder="New Password" />
                            <input name="confirmPassword" onChange={handleChange} className="input border-pink-300" type="password" placeholder="Repeat Password" />
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold text-pink-600 mb-3">Additional Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input name="age" onChange={handleChange} className="input border-pink-300" type="number" placeholder="Age" />

                            <select name="gender" onChange={handleChange} className="input border-pink-300 text-gray-600">
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <label className="block text-pink-600 mb-2 font-medium">Photo Upload</label>
                            <input
                                type="file"
                                className="w-full border border-pink-300 rounded-lg p-3 bg-white"
                                onChange={(e) => setPhoto(e.target.files[0])}
                            />
                        </div>
                    </div>


                    <button
                        type="button"
                        onClick={handleSignup}
                        className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}
