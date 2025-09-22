import { useState } from "react"

const Colors = () => {
    const [typeOfColor, setTypeOfColor] = useState("rgb");
    const [color, setColor] = useState("rgb(0,0,0)");

    const handleCreateRandomColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        if (typeOfColor === "rgb") {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            setColor(`rgb(${r}, ${g}, ${b})`);
        } else {
            let color = "#";

            for (let i = 0; i < 6; i++) {
                const index = Math.floor(Math.random() * 16);
                color += hex[index];
            }
            setColor(color);
        }
    }

    return (
        <main style={{
            backgroundColor: color,
        }}>
            <div>
                <button className="btn" style={{ backgroundColor: typeOfColor === "hex" ? "red" : "black" }} onClick={() => setTypeOfColor("hex")}>HEX</button>
                <button className="btn" style={{ backgroundColor: typeOfColor === "rgb" ? "red" : "black" }} onClick={() => setTypeOfColor("rgb")}>RGB</button>
                <button className="btn" onClick={handleCreateRandomColor}>Generate</button>
            </div>
            <p className="color">{color}</p>
        </main>
    )
}

export default Colors