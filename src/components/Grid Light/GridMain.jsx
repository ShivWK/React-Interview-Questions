import GridBox from "./GridBox"

// turns back in same order as clicked, not in reverse.

const GridMain = () => {
    const grid = [
        [1, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
    ]

    return (
        <main>
            <h1>Grid LIght</h1>

            <section className="gridBoxes">
                {
                    grid.map((row, index) => <div key={index} className="grid-row">{
                        row.map((value, index) => <GridBox key={index} value={value} />)
                    }</div>)
                }
            </section>
        </main>
    )
}

export default GridMain