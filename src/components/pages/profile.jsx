 
import React from "react";

export default function Profile() {
     const user = {
        photo: "https://via.placeholder.com/150",
        name: "Rahul Swami",
        age: 25,
        gender: "Male",
        mobile: "7733908848",
        email: "rahul@gmail.com",
        address: {
            main: "Katputli",
            location: "Current Location",
            state: "Rajasthan",
            district: "Katputli",
            tehsil: "Navapura",
            village: "Katputli",
            pincode: "303108",
        },
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-pink-600">Customer Profile</h2>

            
            <div className="flex items-center gap-6">
                <img
                    // src={user.photo}
                    alt="User"
                    className="w-32 h-32 rounded-full border-2 border-pink-300"
                />
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p className="text-gray-600">Age: {user.age}</p>
                    <p className="text-gray-600">Gender: {user.gender}</p>
                </div>
            </div>

             
            <div>
                <h3 className="text-lg font-semibold text-pink-600 mb-2">Contact Info</h3>
                <p className="text-gray-700">Mobile: {user.mobile}</p>
                <p className="text-gray-700">Email: {user.email}</p>
            </div>

            
            <div>
                <h3 className="text-lg font-semibold text-pink-600 mb-2">Address Details</h3>
                <p className="text-gray-700">Address: {user.address.main}</p>
                <p className="text-gray-700">Live Location: {user.address.location}</p>
                <p className="text-gray-700">State: {user.address.state}</p>
                <p className="text-gray-700">District: {user.address.district}</p>
                <p className="text-gray-700">Tehsil: {user.address.tehsil}</p>
                <p className="text-gray-700">Village: {user.address.village}</p>
                <p className="text-gray-700">Pincode: {user.address.pincode}</p>
            </div>
        </div>
    );
}
