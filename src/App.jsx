import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import CoinOverview from "./components/CoinOverview.jsx";

export default function App() {
    return (
        <>
            <div className={"bg-gray-300 h-full"}>
                <Header/>
                <div className={"grid grid-cols-[200px_minmax(900px,_1fr)] gap-5 p-2 mt-2"}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="coin/:id" element={<CoinOverview/>}></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}