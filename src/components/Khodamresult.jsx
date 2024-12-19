const KhodamResult = ({ result }) => {
    if (!result) return null;
  
    return (
      <div className="mt-4 p-6 bg-green-100 rounded shadow-md">
        <h2 className="text-lg font-semibold text-green-800">Hasil:</h2>
        <p className="text-gray-700">{result}</p>
      </div>
    );
  };
  
  export default KhodamResult;
  