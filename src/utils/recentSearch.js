export function addRecentSearch(search){
   let searchArr = JSON.parse(window.localStorage.getItem('recent-searches'))
   searchArr.push(search)
   let temp = JSON.stringify(searchArr)
    window.localStorage.setItem('recent-searches',temp)
}



export function getRecentSearch(){
    let searchArr = JSON.parse(window.localStorage.getItem('recent-searches'))
    return searchArr
}