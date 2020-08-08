let data = [
    { country: "Italy", confirmed: "3474", Deaths: "472", Recovered: "2812", Active: "190" },
    { country: "Brazil", confirmed: "21376", Deaths: "556", Recovered: "14806", Active: "6014" },
    { country: "Russia", confirmed: "2930", Deaths: "21", Recovered: "2254", Active: "655" },
    { country: "Mexico", confirmed: "4382", Deaths: "279", Recovered: "3731", Active: "372" },
    { country: "Japan", confirmed: "2831", Deaths: "36", Recovered: "917", Active: "1878" },
    { country: "Canada", confirmed: "11430", Deaths: "208", Recovered: "10097", Active: "1125" },
    { country: "Colombia", confirmed: "2565", Deaths: "104", Recovered: "2365", Active: "96" },
    { country: "Peru", confirmed: "6831", Deaths: "125", Recovered: "0", Active: "6706" },
    { country: "Spain", confirmed: "16618", Deaths: "1438", Recovered: "1438", Active: "4509" },
    { country: "India", confirmed: "1222", Deaths: "19", Recovered: "425", Active: "778" },

];

function TableRow(props) {
    return (
        <tr>
            <td> {props.index}</td>
            <td>{props.data.country}</td>
            <td>{props.data.confirmed}</td>
            <td>{props.data.Deaths}</td>
            <td>{props.data.Recovered}</td>
            <td>{props.data.Active}</td>
        </tr>
    );
}  

function TableBody(props){
    return data.map(function(row, index){
        return <TableRow key={++index} index={index} data={row}></TableRow>
    })
}

ReactDOM.render(<TableBody></TableBody>, document.getElementById("main"));
