import { useState, useEffect } from "react";
import API from "../services/api";

export default function Leave() {
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    reason: "",
    type: "casual",
  });

  const [leaves, setLeaves] = useState([]);

  // Fetch leaves
  const fetchLeaves = async () => {
    try {
      const res = await API.get("/leaves");
      setLeaves(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/leaves", form);
      alert("Leave Applied ✅");
      setForm({ startDate: "", endDate: "", reason: "", type: "casual" });
      fetchLeaves();
    } catch (err) {
      alert("Error applying leave ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">Apply Leave</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md mb-6 space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            className="border p-2 rounded"
            required
          />
        </div>

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 rounded w-full"
        >
          <option value="casual">Casual</option>
          <option value="sick">Sick</option>
        </select>

        <textarea
          placeholder="Reason"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full">
          Apply Leave
        </button>
      </form>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">My Leaves</h2>

        <table className="w-full text-left border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Start</th>
              <th className="p-2">End</th>
              <th className="p-2">Type</th>
              <th className="p-2">Reason</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((l) => (
              <tr key={l.id} className="border-t">
                <td className="p-2">{l.startDate.slice(0, 10)}</td>
                <td className="p-2">{l.endDate.slice(0, 10)}</td>
                <td className="p-2">{l.type}</td>
                <td className="p-2">{l.reason}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      l.status === "pending"
                        ? "bg-yellow-500"
                        : l.status === "approved"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {l.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}