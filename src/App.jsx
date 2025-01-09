import { useState } from "react";
import Header from "./components/Header.jsx";
import KhodamForm from "./components/KhodamForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [result, setResult] = useState("");

  const checkKhodam = (name) => {
    const possibleResults = [
      'Ular berbiji dua',
      'Macan kumbang',
      'Burung rajawali',
      'Harimau putih',
      'Elang hitam',
      'Naga hijau',
      'Serigala abu-abu',
      'Kuda emas',
      'Singa merah',
      'Pagar besi',
      'Perpus Smekda',
      'Beat karbu',
      'Javascript',
      'Jet darat',
      'Lele Bakar',
      'Pesawat Ngawi',
      'laba laba ngawi',
      'cicak khayang',
      'cairan ngawi',
      'anti wibu',
      'Ubur-ubur sigma',
      'Kalajengking berhati dua',
      'Badak Ngawi',
      'Laba-laba Jawa',
      'Hantu handphone',
      'Printer rusak',
      'Kulkas dua pintu',
      'Aqua gelas',
      'Roger Sumatra',
      'Ikan Patin',
      'Kunti Bogel',
      'Ayam Geprek',
      'Harimau Pink',
      'Janda Bolong',
      'Anak Ayam',
      'Kasur Rusak',
      'Anak Anjing',
      'Mimi Peri',
      'Keong Racun',
      
    ];
    const randomResult = possibleResults[Math.floor(Math.random() * possibleResults.length)];
    setResult(`${randomResult}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Cek Khodam By XII RPL 1</h1>
        <KhodamForm onCheck={checkKhodam} result={result} />
      </main>
    </div>
  );
};

export default App;
