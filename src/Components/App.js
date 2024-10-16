import { useState } from "react";
import { FriendsList } from "./FriendsList";
import { FormSplitBill } from "./FormSplitBill";
import { FormAddFriend } from "./FormAddFriend";
import { Button } from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selected, setSelect] = useState(null);

  function handleAddFriend() {
    setAddFriend(!addFriend);
  }

  function handleFriendS(friend) {
    setFriends([...friends, friend]);
    setAddFriend(false);
    console.log(friends);
  }

  function handleisSelected(friend) {
    setSelect((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  function handelPaying(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelect(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selected={selected}
          setSelect={handleisSelected}
        />

        {addFriend && <FormAddFriend onClick={handleFriendS} />}

        <Button onClick={handleAddFriend}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selected && (
        <FormSplitBill selectedFriend={selected} payingBill={handelPaying} />
      )}
    </div>
  );
}
