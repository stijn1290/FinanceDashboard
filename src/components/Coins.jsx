import { useEffect, useState } from "react";
import Coin from "./Coin.jsx";

export default function Coins(props) {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets")
            .then(response => response.json())
            .then((json) => setCoins(json.data))  // Corrected: Use json.data
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex flex-col justify-center p-4 bg-white rounded-xl gap-4">
            <h1 className="font-semibold text-black">{props.text}</h1>
            {coins.map((coin) => (
                <Coin key={coin.key} coin={coin}></Coin>  // Corrected JSX syntax
            ))}
        </div>
    );
}
