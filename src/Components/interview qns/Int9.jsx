import { useState } from "react";

const Int9 = () => {
    const [newfriend, setNewFriend] = useState("");
    const [friend, setFriend] = useState([]);
    const [isAssigned, setIsAssigned] = useState(false);

    const gifts = ["firebreaker", "chocolate", "watch", "phone"];

    const handleSubmit = (event) => {
        event.preventDefault();
        setFriend((arr) => [...arr, { name: newfriend, gift: "no gift assigned" }]);
        setNewFriend("");
    };

    const handleNewFriend = (event) => {
        setNewFriend(event.target.value);
    };

    const handleAssign = () => {
        if (!isAssigned) {
            setFriend((arr) =>
                arr.map((el) => ({
                    ...el,
                    gift: gifts[Math.floor(Math.random() * gifts.length)],
                }))
            );
            setIsAssigned(true);
        }
    };

    const handleShuffle = () => {
        setFriend((arr) =>
            arr.map((el) => ({
                ...el,
                gift: gifts[Math.floor(Math.random() * gifts.length)],
            }))
        );
        setIsAssigned(false);
        setNewFriend("");
    };

    const handleReset = () => {
        setFriend([]);
        setNewFriend("");
        setIsAssigned(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your friend name"
                    value={newfriend}
                    onChange={handleNewFriend}
                />
                <button type="submit">Add Friend</button>
            </form>
            <div>
                {friend.map((el, index) => (
                    <li key={index}>
                        {el.name} - {el.gift}
                    </li>
                ))}
            </div>
            <div>
                <button onClick={handleAssign}>Assign Gifts</button>
                <button onClick={handleShuffle}>Shuffle Gifts</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Int9;
