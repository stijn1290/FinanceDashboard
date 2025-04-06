import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import CoinOverview from "./components/CoinOverview.jsx";

export default function App() {
    return (
        <>
            <div className={"bg-gray-300"}>
                <Header/>
                <div className={"flex flex-col gap-5 p-2 mt-2"}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="coin" element={<CoinOverview/>}></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}