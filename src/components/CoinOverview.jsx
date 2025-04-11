import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {ChartContainer, lineElementClasses, LinePlot, markElementClasses, MarkPlot} from "@mui/x-charts";

function CoinOverview() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || '';
    const [coin, setCoin] = useState([]);

    console.log(id);
    useEffect(() => {
        fetch(`https://data-api.coindesk.com/asset/v2/metadata?assets=${id}`)
            .then(response => response.json())
            .then((json) => setCoin(json.Data[id]))  // Corrected: Use json.data
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);
    return (
        <>
            <div className="grid grid-cols-[0.5fr_1.5fr] gap-6">
                <img src={coin.LOGO_URL} alt={coin.NAME}/>
                <div className={"bg-white p-4 rounded-xl"}>
                    <h2 className={"font-bold text-xl"}>{coin.NAME} Details:</h2>
                    <h4><b>Name:</b> {coin.NAME} ({coin.SYMBOL})</h4>
                    <div className={"flex flex-row items-center gap-2"}>
                        <h4><b>Price:</b> ${parseFloat(coin.PRICE_USD).toFixed(2)}</h4>
                    </div>
                    <h4><b>Supplied:</b> {parseFloat(coin.SUPPLY_TOTAL).toFixed(0)}</h4>
                    <p><b>Description:</b> {coin.ASSET_DESCRIPTION_SNIPPET}</p>
                </div>
            </div>
        </>
    )
}

export default CoinOverview;