export const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr != null && arr.length > 0){
        return false;
    } 
    return true;
}

export const upperCase = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
}