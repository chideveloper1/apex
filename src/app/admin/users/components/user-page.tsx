"use client";

import { useState, useEffect } from "react";
import UserModal from "./modal";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white p-4 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-5">Users</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-left">
              <thead className="bg-slate-700 text-sm">
                <tr>
                  <th className="p-3">Email</th>
                  <th className="p-3">Username</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Country</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr
                    key={u.id}
                    className="border-t border-slate-700 hover:bg-slate-600 transition"
                  >
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">{u.username || "-"}</td>
                    <td className="p-3">{u.phone || "-"}</td>
                    <td className="p-3">{u.country || "-"}</td>
                    <td className="p-3">{u.role}</td>
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedUser(u)}
                        className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {users.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-slate-400">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {users.map((u) => (
              <div
                key={u.id}
                className="bg-slate-700 p-4 rounded-lg border border-slate-600"
              >
                <p>
                  <span className="font-semibold">Email:</span> {u.email}
                </p>
                <p>
                  <span className="font-semibold">Username:</span>{" "}
                  {u.username || "-"}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {u.phone || "-"}
                </p>
                <p>
                  <span className="font-semibold">Country:</span>{" "}
                  {u.country || "-"}
                </p>
                <p>
                  <span className="font-semibold">Role:</span> {u.role}
                </p>

                <button
                  onClick={() => setSelectedUser(u)}
                  className="mt-3 w-full py-2 bg-blue-600 rounded hover:bg-blue-500"
                >
                  View Details
                </button>
              </div>
            ))}

            {users.length === 0 && (
              <p className="text-center text-slate-400">No users found</p>
            )}
          </div>
        </>
      )}

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
