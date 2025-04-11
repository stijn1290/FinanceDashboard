import Diagram from "./Diagram.jsx";
import Coins from "./Coins.jsx";

function Home() {
    return (
        <>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col p-4 bg-white rounded-xl">
                    <h2 className="font-bold">Information:</h2>
                    <p>Finance & co is an open source project developed by Stijn Janssen. He created the project during
                        school. Finance & co provides an overview of the most popular coins and also an in depth
                        information off crypto coins the project used the api of coindesk. The full project is available
                        on my github.</p>
                    <div className="flex flex-row items-center gap-8 mt-4">
                        <a href="https://developers.coindesk.com"><img src="https://www.coindesk.com/_next/image?url=https%3A%2F%2Fcoindesk-next-ouqvz1im2-coindesk.vercel.app%2F_next%2Fstatic%2Fmedia%2Fcoindesk-logo.68661da3.png&w=256&q=75"/></a>
                        <a href="https://github.com/stijn1290/FinanceDashboard"><img className="max-h-10 max-w-10" src="https://avatars1.githubusercontent.com/u/9919?v=4"/></a>
                    </div>
                </div>
                <Diagram text={"Cirkeldiagram"}></Diagram>
            </div>
            <Coins text={"Coins"}></Coins>
        </>
    )
}

export default Home;