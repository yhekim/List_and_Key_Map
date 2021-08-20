import "./styles.css";
import React, { useState } from "react";

const data = [
  { name: "Ahmet" },
  { name: "Mehmet" },
  { name: "Ali" },
  { name: "Veli" }
];

export default function App() {
  const [users, setUsers] = useState(data);
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <input placeholder="Arama" />
      {/* {users.map((user) => {
        return (
          <p style={{ border: "1 px solid #ccc" }} key={user.name}>
            {user.name}
          </p>
        );
      })}  */}
      {/* buradaki uniq key sorununu şu şekilde çözebiliriz */}

      {users.map((user, index) => {
        return <User key={index} user={user}></User>;
      })}
    </div>
  );
}

function User(props) {
  return (
    <p style={{ border: "1 px solid #ccc" }}>
      {/* ayrıca key değeri en üstteki attribütte olmalıdır */}
      {props.user.name}
    </p>
  );
}
