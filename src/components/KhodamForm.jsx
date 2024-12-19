import { useState } from "react";
import khodamImage from '../assets/master-limbad.png';
import '../index.css';

const KhodamForm = ({ onCheck, result }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onCheck(name);
  };

  return (
    <div className=" d-flex items-center justify-content-center   ">
      {/* <div class="wrapper">
        <div class="news">
          <figure class="article">
            <img src={khodamImage} />
            <figcaption>
              <h3>New Item</h3>
              <p>
                In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
              </p>
            </figcaption>
          </figure>
          <figure class="article">
            <img src="https://i.ibb.co/d42tNBK/news2.png" />
            <figcaption>
              <h3>Update</h3>
              <p>
                Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
              </p>
            </figcaption>
          </figure>
        </div>
      </div> */}
      <div className="card col-md-6 shadow-lg">
        <div className="card-body text-center">
          {/* Jika gambar ingin digunakan, buka komentar di bawah */}
          {/* <div className="mb-4">
            <img
              src={khodamImage}
              alt="Khodam"
              className="mx-auto"
              width={350}
              height={200}
            />
          </div> */}
          <form onSubmit={handleSubmit} className="p-4">
            <label
              htmlFor="name"
              className="block mb-3 text-lg font-semibold text-white"
            >
              Masukkan Nama Anda
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mb-4 shadow-lg"
              placeholder="Nama Anda"
            />
            <div className="mt-4 p-3 bg-white rounded shadow-lg">
              <p className="text-lg">Khodam kamu akan tampil di sini:</p>
              {result && (
                <p className="text-lg text-danger"> <b>{result}</b></p>
              )}
            </div>
            <button type="submit" className="btn text-primary shadow-lg mt-3">
              <b>Cek Khodam</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KhodamForm;
