import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userInput: "",
        password: "",
    });

    const [screen, setScreen] = useState("login");  
    const [email, setEmail] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

     
    const handleLogin = (e) => {
        e.preventDefault();
        if (!form.userInput || !form.password) {
            setError("Please fill all fields.");
            return;
        }
        setError("");

        
        localStorage.setItem("loggedIn", "true");

         
        navigate("/app");
    };

     
    const handleForgot = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Enter your email.");
            return;
        }
        setError("");
        setScreen("reset");
    };

    
    const handleReset = (e) => {
        e.preventDefault();
        if (!newPass || !confirmPass) {
            setError("Please fill all fields.");
            return;
        }
        if (newPass !== confirmPass) {
            setError("Passwords do not match.");
            return;
        }
        setError("");
        alert("Password reset successfully!");
        setScreen("login");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 border border-pink-400">

                 
                <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
                    {screen === "login" && "Customer Login"}
                    {screen === "forgot" && "Forgot Password"}
                    {screen === "reset" && "Reset Password"}
                </h2>

                
                {error && (
                    <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
                )}

                {/* LOGIN FORM */}
                {screen === "login" && (
                    <form className="space-y-6">
                        <div>
                            <label className="block text-pink-600 font-medium mb-2">
                                Username / Mobile Number / Email
                            </label>
                            <input
                                type="text"
                                name="userInput"
                                placeholder="Enter Name / Number / Email"
                                value={form.userInput}
                                onChange={handleChange}
                                className="input border-pink-300 w-full rounded-lg p-3 focus:ring-pink-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-pink-600 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                value={form.password}
                                onChange={handleChange}
                                className="input border-pink-300 w-full rounded-lg p-3 focus:ring-pink-400 focus:outline-none"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all"
                        >
                            Login
                        </button>

                        <p
                            onClick={() => { setError(""); setScreen("forgot"); }}
                            className="text-center text-pink-600 hover:underline cursor-pointer mt-3"
                        >
                            Forget Password?
                        </p>
                    </form>
                )}

               {screen === "forgot" && (
                    <form className="space-y-6">
                        <div>
                            <label className="block text-pink-600 font-medium mb-2">
                                Enter Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input border-pink-300 w-full rounded-lg p-3 focus:ring-pink-400 focus:outline-none"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleForgot}
                            className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all"
                        >
                            Send Reset Link
                        </button>

                        <p
                            onClick={() => { setError(""); setScreen("login"); }}
                            className="text-center text-pink-600 hover:underline cursor-pointer mt-3"
                        >
                            Back to Login
                        </p>
                    </form>
                )}

                
                {screen === "reset" && (
                    <form className="space-y-6">
                        <div>
                            <label className="block text-pink-600 mb-2 font-medium">
                                New Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter New Password"
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
                                className="input border-pink-300 w-full rounded-lg p-3 focus:ring-pink-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-pink-600 mb-2 font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                className="input border-pink-300 w-full rounded-lg p-3 focus:ring-pink-400 focus:outline-none"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleReset}
                            className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all"
                        >
                            Reset Password
                        </button>

                        <p
                            onClick={() => { setError(""); setScreen("login"); }}
                            className="text-center text-pink-600 hover:underline cursor-pointer mt-3"
                        >
                            Back to Login
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
