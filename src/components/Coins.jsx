import {useEffect, useState} from "react";
import Coin from "./Coin.jsx";

export default function Coins(props) {
    const [coins, setCoins] = useState([]);
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets")
            .then(response => response.json())
            .then((json) => setCoins(json.data.slice(0, 100)))  // Corrected: Use json.data
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const toggleFavorite = (coinId) => {
        setFavorites((prevState) => ({
            ...prevState,
            [coinId]: !prevState[coinId],
        }))
    }

    return (
        <div className="flex flex-col justify-center p-4 bg-white rounded-xl gap-4">
            <h1 className="font-semibold text-black">{props.text}</h1>
            {coins.map((coin) => (
                <Coin
                    key={coin.key}
                    coin={coin}
                    isFavorite={!!favorites[coin.id]}
                    toggleFavorite={toggleFavorite}
                ></Coin>
            ))}
        </div>
    );
}
