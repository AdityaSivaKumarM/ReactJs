import { useState } from "react";

export default function APP() {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = {
    darkTheme: {
      backgroundColor: "grey",
      color: "white",
      padding: "20px",
    },
    lightTheme: {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
    },
  };
  return (
    <>
      Enable Dark Theme:
      <input type="checkbox" onChange={() => setDarkTheme((p) => !p)} />
      <div style={darkTheme ? theme.darkTheme : theme.lightTheme}>
        <h1>Hello React</h1>
        <p>useState Dark theme</p>
      </div>
    </>
  );
}
