import { useState } from "react";

const KhodamForm = ({ onCheck }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onCheck(name);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-lg shadow-lg">
      <label htmlFor="name" className="block mb-3 text-lg font-semibold text-white">
        Masukkan Nama Anda
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Nama Anda"
      />
      <button
        type="submit"
        className="mt-5 w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition duration-300">
        Cek Khodam
      </button>
    </form>
  );
};

export default KhodamForm;
