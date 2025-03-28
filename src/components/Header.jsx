import Filter from "./Filter.jsx";

const date = new Date();
const month = date.getMonth() + 1;
const datum = date.getDate() + '-' + month + '-' + date.getFullYear();
export default function Header() {
    return (
        <>
            <header className="bg-white flex items-center justify-between p-4">
                <a className={"flex flex-row items-center"} href={"/"}>
                    <img src={"/logo.png"} alt="logo" className={"w-20 h-20"}/>
                    <h1 className={"font-bold text-2xl"}>Finance & co</h1>
                </a>
                <Filter></Filter>
                <div>
                    {datum}
                </div>
            </header>
        </>
    )
}