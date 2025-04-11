import {PieChart} from "@mui/x-charts";
import {useEffect, useState} from "react";

export default function Diagram() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(`https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=10`)
            .then(response => response.json())
            .then((json) => setCoins(json.Data.LIST))  // Corrected: Use json.data
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    console.log(coins);
    return (
        <>
            <div className="flex flex-col p-4 bg-white rounded-xl max-h-50 max-w-min self-center">
                <h2 className="font-semibold">Market cap</h2>
                <PieChart
                    series={[
                        {
                            data: coins.map((coin) => ({
                                id: coin.ID,
                                value: parseFloat(coin.CIRCULATING_MKT_CAP_USD),
                                label: coin.URI,
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