import { useState } from "react";
import "../../Styles/Reviews.css";

function Reviews() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Yorumunuz: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label >Yorumunuz
        <br></br>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br></br>
      <button>GÖNDER</button>
    </form>
  )
}
export default Reviews