import React, { useEffect, useState } from "react";

function App() {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/donations")
      .then((r) => r.json())
      .then((donations) => setDonations(donations));
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
