import {useEffect, useState} from "react";
import Coin from "./Coin.jsx";

export default function Coins(props) {
    const [coins, setCoins] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        fetch("https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=100")
            .then(response => response.json())
            .then((json) => setCoins(json.Data.LIST))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const toggleFavorite = (coinId) => {
        setFavorites((prevState) => ({
            ...prevState,
            [coinId]: !prevState[coinId],
        }))
    }
    const filteredCoins = coins.filter(coin =>
        coin.NAME.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div className="flex flex-col justify-center p-4 bg-white rounded-xl gap-4">
            <h1 className="font-semibold text-black">Coins</h1>
            <input type="text" className={"bg-gray-300 rounded p-3 min-w-1/2"} placeholder="Search..." value={input}
                   onChange={e => setInput(e.target.value)}/>
            {filteredCoins.map((coin) => (
                <Coin
                    key={coin.URI}
                    coin={coin}
                    isFavorite={!!favorites[coin.ID]}
                    toggleFavorite={toggleFavorite}
                ></Coin>
            ))}

        </div>
    );
}
