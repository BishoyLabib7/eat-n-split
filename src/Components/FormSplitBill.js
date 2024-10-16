import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, payingBill }) {
  const [billValue, setbillValue] = useState(null);
  const [myExpense, setMyExpense] = useState(null);
  const friendExpense = billValue ? billValue - myExpense : null;
  const [whoPays, setwhoPays] = useState("user");
  function handelSubmit(e) {
    e.preventDefault();
    payingBill(whoPays === "user" ? friendExpense : -friendExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>SPIT A BILL WITH {selectedFriend.name}</h2>

      <label for="value">💰 Bill value</label>
      <input
        type="text"
        required
        onChange={(e) => setbillValue(Number(e.target.value))}
      />

      <label for="expense">🧍‍♀️ Your expense</label>
      <input
        type="text"
        onChange={(e) => setMyExpense(Number(e.target.value))}
      />

      <label for="value">👭{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label for="paying">🤑 Who is paying the bill</label>
      <select onChange={(e) => setwhoPays(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
