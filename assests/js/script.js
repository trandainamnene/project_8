function load(id , url)
{
    const tagHTML =  document.getElementById(id)
    const cache = localStorage.getItem(url);
    if (cache) {
        tagHTML.innerHTML = cache;
    }
    fetch(url)
    .then((data) => data.text())
    .then((result) => {
        if (result !== cache) {
            tagHTML.innerHTML = result;
        }
        localStorage.setItem(url , tagHTML.innerHTML);
    })
}