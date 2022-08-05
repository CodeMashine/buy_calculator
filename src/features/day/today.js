const date = new Date() ;
let day = date.getDate() ;
let month = date.getMonth() ;
let year = date.getFullYear() ;


// if (String(day).length === 1) day = "0" + day ;
// if (String(month).length === 1) month = "0" + month ;

// export const today = `${day}:${month}:${year} ` ; 
const today = [day,month,year] ; 

// export { month ,year } 
export default today;

export { month ,year} ;