import { useState } from "react";
import "./styles.css";

const emojisObject = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "❤": "heart"
};
const emojisList = Object.keys(emojisObject);

export default function App() {
  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  const emojisArray = emojisList.map((emoji) => (
    <span
      key={emoji}
      onClick={() => setOutputs(emoji)}
      style={{ margin: "5em 0.5em", cursor: "pointer" }}
    >
      {emoji}
    </span>
  ));
  function setOutputs(key) {
    if (key in emojisObject) {
      setEmoji(key);
      setMeaning(emojisObject[key]);
    } else {
      setMeaning("Nothing to display");
      setEmoji("");
    }
  }
  function changeHandler(event) {
    const key = event.target.value;
    setValue(key);
    setOutputs(key);
  }

  return (
    <div className="App">
      <h1>Translate Your emoji</h1>
      <input
        style={{ display: "block", padding: "0.5em", fontSize: "2rem" }}
        value={value}
        onChange={changeHandler}
      />
      <div
        style={{
          backgroundColor: "lightgrey",
          display: "grid",
          placeItems: "center",
          marginBlock: "1em",
          width: "50%",
          minHeight: "100px",
          padding: "1em"
        }}
      >
        <div style={{ marginTop: "1em" }}>{emoji}</div>
        <div style={{ marginTop: "1em" }}>{meaning}</div>
      </div>
      <h5>Click on the emoji's to know their meaning</h5>
      <div style={{ marginBlock: "1em" }}>{emojisArray}</div>
    </div>
  );
}
