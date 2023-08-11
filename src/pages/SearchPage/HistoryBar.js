
import { v4 as uuidv4 } from 'uuid';
import { getHistoryList } from "../../components/LocalSave/HistorySave";

function HistoryBar(){

    const historyLog = getHistoryList();

    if (historyLog.length <= 0){
        return (
            <div className="history--container">
                <h1 className="history--title">📝 History</h1>
                <h1 className={"nodata history-error"}>No Data Found!</h1>
            </div>
        )
    }

    const historyItems = historyLog.map((item) => {
        return <li className="history--items" key={uuidv4()}>{item}</li>
    })
    return (
        <div className="history--container">
            <h1 className="history--title">📝 History</h1>
            <ul className="history--lists">
                {historyItems}
            </ul>
        </div>
    )

}


export default HistoryBar;