import React, { useState } from 'react';

function App() {
  const [nilai1, setNilai1] = useState({});
  const [nilai2, setNilai2] = useState({});
  const [nilai3, setNilai3] = useState({});
  const [nilai4, setNilai4] = useState({});
  const [output, setOutput] = useState([]);

  const handleSimpan = () => {
    const output = {
      nilai1,
      nilai2,
      nilai3,
      nilai4,
    };

    console.log(output);
    setOutput(output);
  };

  const handleNilai1Change = (siswa, nilai) => {
    if (nilai <= 10) {
      setNilai1((prevNilai1) => ({
        ...prevNilai1,
        [siswa]: nilai,
      }));
    }
  };
  const handleNilai2Change = (siswa, nilai) => {
    if (nilai <= 10) {
      setNilai2((prevNilai2) => ({
        ...prevNilai2,
        [siswa]: nilai,
      }));
    }
  };
  const handleNilai3Change = (siswa, nilai) => {
    if (nilai <= 10) {
      setNilai3((prevNilai3) => ({
        ...prevNilai3,
        [siswa]: nilai,
      }));
    }
  };
  const handleNilai4Change = (siswa, nilai) => {
    if (nilai <= 10) {
      setNilai4((prevNilai4) => ({
        ...prevNilai4,
        [siswa]: nilai,
      }));
    }
  };

  const dataSiswa = [
    {
      name: 'mahasiswa_1',
    },
    {
      name: 'mahasiswa_2',
    },
    {
      name: 'mahasiswa_3',
    },
    {
      name: 'mahasiswa_4',
    },
    {
      name: 'mahasiswa_5',
    },
    {
      name: 'mahasiswa_6',
    },
    {
      name: 'mahasiswa_7',
    },
    {
      name: 'mahasiswa_8',
    },
    {
      name: 'mahasiswa_9',
    },
    {
      name: 'mahasiswa_10',
    },
  ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mahasiswa</th>
            <th>Aspek penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek penilaian 3</th>
            <th>Aspek penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((el) => {
            return (
              <tr key={el.name}>
                <td>{el.name}</td>
                <td>
                  <input type="number" value={nilai1[el.name] || ''} onChange={(e) => handleNilai1Change(el.name, e.target.value)} />
                </td>
                <td>
                  <input type="number" value={nilai2[el.name] || ''} onChange={(e) => handleNilai2Change(el.name, e.target.value)} />
                </td>
                <td>
                  <input type="number" value={nilai3[el.name] || ''} onChange={(e) => handleNilai3Change(el.name, e.target.value)} />
                </td>
                <td>
                  <input type="number" value={nilai4[el.name] || ''} onChange={(e) => handleNilai4Change(el.name, e.target.value)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={handleSimpan}>Simpan</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <text style={{ fontSize: 'larger', fontVariant: 'all-small-caps' }}>Output</text>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{`${JSON.stringify(output, null, 2)} \n`}</pre>
      </div>
    </div>
  );
}

export default App;
