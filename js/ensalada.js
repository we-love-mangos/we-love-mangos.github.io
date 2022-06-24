
const PATH_IMAGES = "/public/images/";
let arrayImg = [
    "apple-min.png", 
    "Apricot-min.png", 
    "Avocado-min.png", 
    "banana-min.png", 
    "Blackberry-min.png", 
    "Blueberry-min.png", 
    "Cherry-min.png", 
    "Coconut-min.png", 
    "Custard-Apple-min.png", 
    "dragon.png", 
    "Fig-min.png", 
    "Gooseberry-min.png", 
    "grapes-min.png", 
    "Guava-min.png", 
    "jackfruit-min.png", 
    "Java-Plum-min.png", 
    "Kiwifruit-min.png", 
    "Lime-min.png", 
    "lista.json", 
    "mango-min.png", 
    "MuskMelon-min.png", 
    "Olives-min.png", 
    "orange-min.png", 
    "papaya-min.png", 
    "Peach-min.png", 
    "Pear-min.png", 
    "Pineapple-min.png", 
    "Pomegranate-min.png", 
    "Strawberry-min.png", 
    "Tamarind-min.png", 
    "Watermelon-min.png"
];

const randomImg = () => {
    let posicion = Math.floor(Math.random() * (arrayImg.length));
    console.log(posicion);
    return PATH_IMAGES + arrayImg[posicion];
}

document.getElementById("ensaladaFrutas").innerHTML = "<img src='" + randomImg() + "' alt='Sin imagen' /> ";

/**
 * El objetivo de esta pagina seria que imagenes de forma aleatoria fuesen
 * desplanzaso de forma vertical hasta caer en un recipiente que contendria todas
 * frutas
 */