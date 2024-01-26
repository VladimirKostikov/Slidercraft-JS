export default function(element) {
    if(document.querySelector(element) != null)
        return true;
    else
        return false;
}