// Codigo proprietario para dinamizar like react

window.addEventListener('hashchange', hashHandler);
window.addEventListener('load', onLoad);


function onLoad(){
    dataSet(window.location.hash.replace('#', ''));
}

function hashHandler({currentTarget}) {
    let hash = currentTarget.location.hash;
    hash = hash.replace('#', '')
    dataSet(hash);
}

function dataSet(hash){
    let element = document.getElementById('root');

    getData(`${hash}.html`).then(r => {
        element.innerHTML = r;
    })
}

async function getData(url) {
    const res = await fetch(url);
    if (res.status < 200 && res.status > 299)
        return Promise.reject();

    return await res.text();
}