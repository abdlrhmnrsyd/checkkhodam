const KhodamResult = ({ result }) => {
    if (!result) return null;
  
    return (
      <div className="mt-4 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto transition-transform transform hover:scale-105">
        <h2 className="text-lg font-semibold text-green-800 mb-2">Hasil:</h2>
        <p className="text-gray-700 text-base">{result}</p>
      </div>
    );
  };
  
  export default KhodamResult;
  