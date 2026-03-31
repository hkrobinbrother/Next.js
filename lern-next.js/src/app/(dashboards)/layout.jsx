import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-3">
          <ul className="bg-gray-800 min-h-screen p-4">
            <Link href="/about"><li>Link 1</li></Link>
            <Link href="/dashboard/settings"><li>Link 2</li></Link>
            <Link href="/dashboard/profile"><li>Link 3</li></Link>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="col-span-9 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}