import API from "../services/api";

export default function Dashboard() {
  const handleCheckIn = async () => {
    try {
      const res = await API.post("/attendance/check-in");
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleCheckOut = async () => {
    try {
      const res = await API.post("/attendance/check-out");
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-blue-400">
          Attendance
        </h2>

        <div className="space-y-4">
          <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-700 hover:bg-blue-500 transition">
            🏠 Dashboard
          </button>

          <button
            onClick={() => (window.location.href = "/timesheet")}
            className="w-full text-left px-4 py-2 rounded-lg bg-gray-700 hover:bg-blue-500 transition"
          >
            📊 Timesheet
          </button>

          <button
            onClick={() => (window.location.href = "/leave")}
            className="w-full text-left px-4 py-2 rounded-lg bg-gray-700 hover:bg-blue-500 transition"
          >
            📝 Leave
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">Welcome 👋</h1>
            <p className="text-gray-400 mt-1">
              Manage your attendance smoothly
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Check In */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-3 text-green-400">
              Start Your Day
            </h2>
            <p className="text-gray-400 mb-6">
              Mark your attendance at the beginning
            </p>

            <button
              onClick={handleCheckIn}
              className="w-full bg-green-500 hover:bg-green-600 p-3 rounded-lg text-lg font-semibold"
            >
              ✅ Check In
            </button>
          </div>

          {/* Check Out */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">
              End Your Day
            </h2>
            <p className="text-gray-400 mb-6">
              Complete your workday attendance
            </p>

            <button
              onClick={handleCheckOut}
              className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg text-lg font-semibold"
            >
              ⏱ Check Out
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-10 bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-purple-400">
            Quick Info
          </h2>
          <p className="text-gray-400">
            Track attendance, view history, and manage leaves easily.
          </p>
        </div>
      </div>
    </div>
  );
}