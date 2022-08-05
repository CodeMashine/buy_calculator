export default function monthFunc(month , year){
    const firstDay = new Date(year, month, 0).getDay() ;
    const daysInMonth = new Date(year, month+1, 0).getDate(); // 32 - new Date(year, month, 32).getDate()
    
    let  monthArr= [];
        for(let day = 1 ;day<=daysInMonth ; day++ ){
                monthArr.push({
                    // timestamp: new Date(`${year}-${month}-${day}`).getTime() ,
                    year : year,
                    month:month,
                    day:day,
                    fullDate : `${day}:${month}:${year}`
                })
            }
            
            for(let day = new Date(year,month,0).getDate() ; day>new Date(year,month,0).getDate()-firstDay ; day--){
                monthArr.unshift({
                // timestamp: new Date(`${month===0?year-1:year}:${month===0?11:month-1}:${day}`).getTime() ,
                year:month===0?year-1:year,
                month:month===0?11:month-1,
                day : day,
                fullDate : `${day}:${month===0?11:month-1}:${month===0?year-1:year}`
                
            })
        }
        
        const totalMonthLength = 42 - monthArr.length ;
        
        for(let day = 1 ; day<=totalMonthLength ; day++){
            monthArr.push({
                // timestamp: new Date(`${month===11?year+1:year}-${month===11?0:month+1}-${day}`).getTime() ,
                year:month===11?year+1:year,
                month:month===11?0:month+1,
                day:day,
                fullDate : `${day}:${month===11?0:month+1}:${month===11?year+1:year}`
        })
        }
       return calForm(monthArr) ;
        
}

function calForm(arr){
    let res = [];
    let week =[] ;
    for(let i = 0 ; i<=arr.length ;i++){
        week.push(arr[i]) ;
        if(week.length === 7){
            res.push(week) ;
            week = [] ;
        }
    }
    return res ;
}




