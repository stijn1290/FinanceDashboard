import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
// import {ChartContainer, LineChart, lineElementClasses, LinePlot, markElementClasses, MarkPlot} from "@mui/x-charts";

function CoinOverview() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || '';
    const [coin, setCoins] = useState([]);

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/` + id)
            .then(response => response.json())
            .then((json) => setCoins(json.data))  // Corrected: Use json.data
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
            <div className="grid grid-cols-2">
                <div className={"bg-white p-4 rounded-xl"}>
                    <h2 className={"font-bold text-xl"}>Details:</h2>
                    <h4>Name: {coin.name} ({coin.symbol})</h4>
                    <h4>Rank: {coin.rank}</h4>
                    <div className={"flex flex-row items-center gap-2"}>
                        <h4>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</h4>
                    </div>
                    <h4>Supplied: {parseFloat(coin.supply).toFixed(0)}</h4>
                </div>
                {/*<ChartContainer width={500} height={200} series={[{type: 'line', data: coin}]}*/}
                {/*    xAxis={[{ scaleType: 'point', data: coin.marketCapUsd }]}*/}
                {/*    sx={{*/}
                {/*    [`& .${lineElementClasses.root}`]: {*/}
                {/*        stroke: '#8884d8',*/}
                {/*        strokeWidth: 2,*/}
                {/*    },*/}
                {/*    [`& .${markElementClasses.root}`]: {*/}
                {/*        stroke: '#8884d8',*/}
                {/*        scale: '0.6',*/}
                {/*        fill: '#fff',*/}
                {/*        strokeWidth: 2,*/}
                {/*    },*/}
                {/*}}*/}
                {/*    disableAxisListener*/}
                {/*    >*/}
                {/*    <LinePlot />*/}
                {/*    <MarkPlot />*/}
                {/*</ChartContainer>*/}

            </div>
        </>
    )
}

export default CoinOverview;