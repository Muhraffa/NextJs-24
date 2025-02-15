"use client";

import React, { ChangeEvent, useState } from "react";

interface UserProfile {
    name: string;
    age: string;
    email: string;
}

const StateTest: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: "",
        age: "",
        email: ""
    });

    const [task, setTask] = useState<string[]>([]);
    const [taskInput, setTaskInput] = useState<string>("");

    const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const addTask = () => {
        if (taskInput.trim() !== "") {
            setTask([...task, taskInput]);
            setTaskInput("");
        }
    };

    const removeTask = (index: number) => {
        setTask(task.filter((_, i) => i !== index));
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-black">User Profile</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Name</label>
                <input type="text" name="name" value={userProfile.name} onChange={handleProfileChange} placeholder="tulis nama" className="mt-1 py-2 block w-full border border-black rounded-md text-black text-center " />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Age</label>
                <input type="number" name="age" value={userProfile.age} onChange={handleProfileChange} placeholder="tulis umur" className="mt-1 py-2 block w-full border border-black rounded-md text-black text-center" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Email</label>
                <input type="email" name="email" value={userProfile.email} onChange={handleProfileChange} placeholder="tulis email" className="mt-1 py-2 block w-full border border-black rounded-md text-black text-center" />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-blue-700">Current Profile</h3>
                <p className="text-blue-800">Name: {userProfile.name || "N/A"}</p>
                <p className="text-blue-800">Age: {userProfile.age || "N/A"}</p>
                <p className="text-blue-800">Email: {userProfile.email || "N/A"}</p>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-black">Task List</h2>
            <div className="flex items-center mb-4">
                <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Add a new task" className="flex-1 p-2 border border-gray-300 rounded-md text-black" />
                <button onClick={addTask} className="px-2 py-2 bg-green-500 text-white rounded-md hover:bg-green-300">
                    Add Task
                </button>
            </div>
            <div className="bg-gray-400 p-4 rounded-lg w-full">
                <span className="text-white">{task.length===0 ? "no task added" : null }</span>
            <ul>
                {task.map((t, index) => (
                    <li key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-md">
                        <span className="text-black">{t}</span>
                        <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">Remove</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

const Page: React.FC = () => {
    return <StateTest />;
};

export default Page;


// INSERT INTO customer (customer_id, customer_name, city) VALUES (1, 'alice', 'jakarta'), (2, 'Bob', 'Bandung'), (3, 'charlie', 'surabaya'), (4, 'diana', 'jakarta'), (5, 'Evan', 'medan');INSERT INTO customer (customer_id, customer_name, city) VALUES (1, 'alice', 'jakarta'), (2, 'Bob', 'Bandung'), (3, 'charlie', 'surabaya'), (4, 'diana', 'jakarta'), (5, 'Evan', 'medan');
// INSERT INTO pesenan (pesenan_id, customer_id, amount, payment_status)
// VALUES 
// ('INVOOO1', 1, 15000, 'paid'),
// ('INVOOO2', 2, 8000, 'unpaid'),
// ('INVOOO3', 3, 500, 'paid'),
// ('INVOOO4', 4, 1200, 'paid'),
// ('INVOOO5', 5, 3000, 'unpaid');