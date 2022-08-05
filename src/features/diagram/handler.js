export default function handler(spendingMain, dateFilter, categoryFilter) {

    let spendings = spendingMain.reduce((acc, spend) => {
        if (categoryFilter === 'всё' || categoryFilter === spend.category) {
            if (spend.timestamp >= dateFilter[0] && spend.timestamp <= dateFilter[1]) {
                let date = `${String(spend.date[0]).length===1?"0"+spend.date[0]
                 :spend.date[0]}:${String(spend.date[1]).length===1?"0"+(spend.date[1]+1)
                 :spend.date[1]+1}:${spend.date[2]}`;

                let output = {
                    date: date,
                    cost: spend.cost,
                };
                acc.push(output);
            }
        };
        return acc;
    }, [])

    let unicDate = new Set(spendings.map(spend => spend.date));

    let resData = [];

    for (let date of unicDate) {
        resData.push({
            date: date,
            totalCost: 0,
        })
    }

    spendings.forEach(item => {
        resData.forEach(date => {
            if (item.date === date.date) {
                date.totalCost = +date.totalCost + +item.cost;
            }
        })
    })


    return resData;

}