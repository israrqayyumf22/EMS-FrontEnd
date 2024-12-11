import React from "react";
import { NavLink } from "react-router-dom";
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers } from 'react-icons/fa';

const AdminSideBar = () => {
    // Optional: You can display user info or customize the sidebar based on the role or name
    return (
        <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-o space-y-2 w-64">
            <div className="bg-teal-600 h-12 flex items-center justify-center">
                <h3 className="text-2xl text-center font-pacific">Employee MS</h3>
            </div>
            <div>
                <NavLink to="/admin-dashboard" className={({isActive}) => `${isActive ? "bg-teal-500 ":" "}flex items-center space-x-4 block py-2.5 px-4 rounded`}end>
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </NavLink>

                {/* Example of routing to another page */}
                <NavLink to="/admin-dashboard/employees"  className={({isActive}) => `${isActive ? "bg-teal-500 ":" "}flex items-center space-x-4 block py-2.5 px-4 rounded`}end>
                    <FaUsers />
                    <span>Employees</span>
                </NavLink>

                <NavLink to="/admin-dashboard/departments" className={({isActive}) => `${isActive ? "bg-teal-500 ":" "}flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                   <FaBuilding />
                    <span>Department</span>
                </NavLink>

                <NavLink to="/admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                    <FaCalendarAlt />
                    <span>Leave</span>
                </NavLink>
                
                <NavLink to="/admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                    <FaMoneyBillWave />
                    <span>Salary</span>
                </NavLink>

                <NavLink to="/admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                    <FaCogs />
                    <span>Settings</span>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminSideBar;
