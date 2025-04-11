import {Link} from "react-router-dom";

function Coin({coin, toggleFavorite, isFavorite}) {

    return (
        <>
            <div className={`grid grid-cols-[1.8fr_0.2fr] justify-between gap-12`}>
                <Link
                    className={`w-full flex flex-row items-center justify-between border rounded-xl p-2 hover:border-blue-500 ${isFavorite ? "bg-yellow-400 text-white hover:border-black" : ""}`}
                    to={{ pathname: '/coin',
                        search: '?id=' + coin.ID,
                    }}>
                    <div className="flex flex-row gap-4 items-center">
                        <img src={coin.LOGO_URL} alt={coin.NAME} className="max-h-8"/>
                        <h2>{coin.NAME} ({coin.SYMBOL})</h2>
                    </div>
                    <div className={"flex flex-row items-center gap-2"}>
                        <h1>${parseFloat(coin.PRICE_USD).toFixed(2)}</h1>
                    </div>
                </Link>
                <button className={"bg-black text-white rounded-xl p-2 cursor-pointer hover:bg-yellow-500"}
                        onClick={() => toggleFavorite(coin.ID)}>{isFavorite ? "Favorite" : "not favorite"}</button>
            </div>
        </>
    )
}
export default Coin;