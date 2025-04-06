import {PieChart} from "@mui/x-charts";
import {useEffect, useState} from "react";
import coin from "./Coin.jsx";

export default function Diagram() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/`)
            .then(response => response.json())
            .then((json) => setCoins(json.data.slice(0, 10)))  // Corrected: Use json.data
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
            <div className="flex flex-col p-4 bg-white rounded-xl max-h-50 max-w-min self-center">
                <h2 className="font-semibold">Market cap</h2>
                <PieChart
                    series={[
                        {
                            data: coins.map((coin) => ({
                                id: coin.name,
                                value: parseFloat(coin.marketCapUsd),
                                label: coin.name,
                            })),
                        },
                    ]}
                    width={600}
                    height={200}
                />
            </div>
        </>
    )
}