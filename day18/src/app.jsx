import Card from "./components/card";
import "./styles.css";



// console.log(box);

function app() {

    const box = [];

    for (let i = 0; i < 8; i++) {

        for (let j = 0; j < 8; j++)
            box.push({ i, j });
    }
    // console.log(box);

    return (

        <div className="App">
            {/* <div className="col"> */}
            {

                // <script>
                //     console.log(box);
                // </script>
                box.map((item) => {
                    return (<Card row={item.i} col={item.j} />)
                    console.log(item);
                    // <Card row={item.i} col={item.j} />
                    // <Card />
                })
            }
            {/* </div> */}

        </div>
    );
}

export default app;