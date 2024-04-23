export const Banner = (props: { title: string }) => {
    return (
        <div className="w-full p-24 text-center bg-gray-100">
            <h1 className="text-2xl">{props.title}</h1>
        </div>
    )
}
