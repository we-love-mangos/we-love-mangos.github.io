

const URL_BASE = "https://api.predic8.de:443";
const URL_API = URL_BASE + "/shop/products/?limit=40";

const loadfruits = () => fetch(URL_API).then(response => response.json());
const loadDetalle = (element) => fetch(URL_BASE + element.product_url).then(response => response.json());

const getMainhtml = () => {
    return doc = document.getElementById("informacionFrutas");
}

const pintarfrutas = (data) => {
    let elementohtml = getMainhtml();

    elementohtml.innerHTML = "<div>";

    data.products.forEach(element => {
        loadDetalle(element).then(response => {
            console.log(response);
            elementohtml.innerHTML += 
            "<div class='product'>" 
            + "<img src='" + URL_BASE + response.photo_url + "' class='product' alt='Imagen no encontrada...'/>"
            + "<p>Nombre: "+ response.name + "</p>"
            + "<p>Precio: "+ response.price + "</p>"
            + "</div>";
        });
    });
    elementohtml.innerHTML += "</div>";
    console.log(data);
}



loadfruits().then(data => pintarfrutas(data));