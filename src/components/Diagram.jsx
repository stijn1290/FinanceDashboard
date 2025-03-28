export default function Coins(props) {
    return (
        <>
            <div className="flex justify-center p-4 bg-white rounded-xl ">
                <h1 className={"font-semibold text-black"}>{props.text}</h1>
            </div>
        </>
    )
}