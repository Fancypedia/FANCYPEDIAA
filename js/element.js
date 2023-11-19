export function setInner(id,content){
    document.getElementById(id).innerHTML = content;
}

export function getValue(id){
    return document.getElementById(id).value;
}