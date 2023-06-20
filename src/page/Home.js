import React, { useState } from "react";
import QrReader from 'react-qr-scanner'

function Home() {
  const [data, setData] = useState('No result');

  return (
    <div>
      Home
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
}

export default Home;
