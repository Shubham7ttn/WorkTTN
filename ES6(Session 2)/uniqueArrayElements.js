export default function filterArray(list){
    let uniqueElements = new Set();
    for(let i = 0; i < list.length; i++){
        uniqueElements.add(list[i]);
    }
    
    return uniqueElements;
}