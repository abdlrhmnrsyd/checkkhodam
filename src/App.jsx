import { useState } from "react";
import Header from "./components/Header";
import KhodamForm from "./components/KhodamForm";
import KhodamResult from './components/KhodamResult';

const App = () => {
  const [result, setResult] = useState("");

  const checkKhodam = (name) => {
    // Simulasi hasil cek khodam
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
      'pagar besi',
      'perpus smekda',
      'beat karbu',
      'javascript',
      'jet darat',
      'ubur ubur sigma',
      'kalajengking berhati dua',
      'badak ngawi',
      'laba laba jawa',
      'hantu handphone',
      'printer rusak',
      'kulkas dua pintu',
      'aqua gelas',
      'roger sumatra',
    ];
    const randomResult = possibleResults[Math.floor(Math.random() * possibleResults.length)];
    setResult(`${name}, ${randomResult}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <KhodamForm onCheck={checkKhodam} />
        <KhodamResult result={result} />
      </main>
    </div>
  );
};

export default App;
