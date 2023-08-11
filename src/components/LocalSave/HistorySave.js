
export function getHistoryList() {
    const historyList = JSON.parse(localStorage.getItem('historyList')) || [];
    return historyList;
}

export function addToHistory(item) {
    const historyList = getHistoryList();

    // Check if the item is already in the history list
    if (!historyList.includes(item)) {
        const updatedList = [item, ...historyList];
        localStorage.setItem('historyList', JSON.stringify(updatedList));
    }
}
