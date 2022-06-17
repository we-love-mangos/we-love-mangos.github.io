
//const URL_API = "https://www.fruityvice.com/api/fruit/all";
const URL_API = "https://api.predic8.de:443/shop/products/"

//const CORS = {  mode: 'cors',  headers: {    'Access-Control-Allow-Origin':'*'  }};

const loadfruits = () => fetch(URL_API).then(response => response.json());

const getMainhtml = () => {
    return doc = document.getElementById("informacionFrutas");
}

const pintarfrutas = (data) => {
    let elementohtml = getMainhtml();

    elementohtml.innerHTML = "<div></div>";

    console.log(data);
}



loadfruits().then(data => console.log(data));