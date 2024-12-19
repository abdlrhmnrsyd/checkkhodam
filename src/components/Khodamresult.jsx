const KhodamResult = ({ result }) => {
    if (!result) return null;
  
    return (
      <div className="">
        <h2 className="text-lg">Hasil:</h2>
        <p className="">{result}</p>
      </div>
    );
  };
  
  export default KhodamResult;
  