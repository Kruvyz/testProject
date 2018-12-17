function getData(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return null;
    }    
}

function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}