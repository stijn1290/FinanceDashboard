import {Link} from "react-router-dom";
export default function Header() {
    return (
        <>
            <header className="bg-white flex items-center p-4 gap-4 max-w-max self-center rounded-3xl">
                <Link className={"flex flex-row items-center"} to={"/"}>
                    <img src={"/logo.png"} alt="logo" className={"w-20 h-20"}/>
                    <h1 className={"font-bold text-2xl text-gray-800"}>Finance & co</h1>
                </Link>
            </header>
        </>
    )
}