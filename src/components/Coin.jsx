import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Coin({coin}) {
    const [favorite, setFavorite] = useState(false);

    function toggleFavorite() {
        if (favorite === true) {
            setFavorite(false);
        } else {
            setFavorite(true);
        }
        console.log(favorite);
    }

    return (
        <>
            <div className={"grid grid-cols-[1.8fr_0.2fr] justify-between gap-12"}>
                <Link
                    className={"w-full flex flex-row items-center justify-between border rounded-xl p-2 hover:border-blue-500"}
                    to={"coin/" + coin.name}>
                    <h1>{coin.name} ({coin.symbol})</h1>
                    <div className={"flex flex-row items-center gap-2"}>
                        <h1>${parseFloat(coin.priceUsd).toFixed(2)}</h1>
                    </div>
                </Link>
                <button className={"bg-black text-white rounded-xl p-2 cursor-pointer hover:bg-yellow-500"}
                        onClick={toggleFavorite}>{favorite ? "Favorite" : "not favorite"}</button>
            </div>
        </>
    )
}