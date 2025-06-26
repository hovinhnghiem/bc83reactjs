
export default function RenderingElements() {
    let message = "Hello World";
    let username = "Ho Vinh Nghiem";
    let age = 18;

    const news = () => {
        return(
            <div>
                <h1>Tin moi 23.6</h1>
                <p>Iran tan cong tra dua isreal</p>
            </div>
        )
    };

    return (
        <div>
            <h1>RenderingElement</h1>
            <div>{message}</div>
            <div>Username: {username}</div>
            <p>Tuoi: {age}</p>
            {news()}
        </div>
    )
}
