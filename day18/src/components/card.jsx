
const card = ({ row, col }) => {
    console.log({ row, col });
    return (
        // <div className="card">
        <div className="card" style={{ backgroundColor: ((row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)) ? "black" : "white" }}></div>

        // </div >
    )
};

export default card;