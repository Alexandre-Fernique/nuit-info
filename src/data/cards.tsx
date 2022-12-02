
import CardImg from "../components/card-img";
import GenericCard from "../components/generic-card";
import Card from "../models/card";

//Simple cards
const eiffelTowerImg = (<CardImg img_link='../assets/images/eiffel_tower.png'></CardImg>)
const eiffelTowerCard = new Card(2, "Tour Eiffel", "Quel bel objet de décoration", "Indice 1", eiffelTowerImg, '../assets/images/eiffel_tower.png');
const eiffelTowerComponent = (<GenericCard card={eiffelTowerCard}/>)

const postItImg = (<CardImg img_link='../assets/images/post_it_img.png'></CardImg>)
const postItCard = new Card(3, "Post-it", "Faire des listes aide à la productivité", "Ce post-it vous sera utile à l'étape n°-", postItImg, '../assets/images/post_it_img.png');
const postItComponent = (<GenericCard card={postItCard}/>)

const posterImg = (<CardImg img_link='../assets/images/affiche_img.png'></CardImg>)
const posterCard = new Card(4, "Affiche Informative", "Cette affiche nous donne pas mal d'information", "Mais quel mot forment ces lettres de couleurs", posterImg, '../assets/images/affiche_img.png');
const posterComponent = (<GenericCard card={posterCard}/>)

const memoImg = (<CardImg img_link='../assets/images/memo_img.png'></CardImg>)
const memoCard = new Card(8, "Mémo", "https://www.sida-info-service.org/, \n https://www.sexualites-info-sante.fr/", "Fouillez les liens pour trouver des infos", memoImg, '../assets/images/memo_img.png');
const memoComponent = (<GenericCard card={memoCard}/>)

const keyImg = (<CardImg img_link='../assets/images/key.png'></CardImg>)
const keyCard = new Card(9, "Une clé", "", "Elle ouvre un tiroir...", keyImg, '../assets/images/key.png');
const keyComponent = (<GenericCard card={keyCard}/>)

const computerImg = (<CardImg img_link='../assets/images/computer.png'></CardImg>)
const computerCard = new Card(10, "Ordinateur sans batterie", "Decsription ?", "Il ne sert à rien sans batterie...", keyImg, '../assets/images/computer.png');
const computerComponent = (<GenericCard card={computerCard}/>) 

