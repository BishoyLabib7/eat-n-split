import { Button } from "./Button";

export function FriendsList({ friends, selected, setSelect }) {
  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          selected={selected}
          setSelect={setSelect}
        />
      ))}
    </ul>
  );
}
function Friends({ friend, selected, setSelect }) {
  const isSelected = selected?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} ownes you {friend.balance}€
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="red">
          You own {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      <Button onClick={() => setSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
