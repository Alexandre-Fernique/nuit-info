
import CardImg from "../components/card-img";
import DrawerCard from "../components/drawer-card";
import GenericCard from "../components/generic-card";
import Card from "../models/card";
import ChestCard from "../components/chest-card";
import IllenessTokenList from "../assets/liste_maladies_tokens.png"
import ComputerOnCard from "../components/computer-on-card";
import chestImg from "../assets/chest.png";
import chargeurImg from "../assets/chargeur.jpeg";
import drawer from "../assets/drawer_img.jpeg";
import key from "../assets/key.png";
import post_it from "../assets/post_it_img.png";
import memo from "../assets/memo_img.png";
import eiffel_tower from "../assets/eiffel_tower_img.png";
import computer from "../assets/computer.jpg";
import affiche from "../assets/affiche_img.png";
import GameContext from "../context/game-context";
import React from "react";
import definitionImg from "../assets/definition.png"
import CableMachine from "../components/CableMachine";


//Simple cards
const eiffelTowerCard = new Card(2, "Tour Eiffel", "Quel bel objet de décoration", "Indice 1", <div></div>, eiffel_tower);
const eiffelTowerComponent = (<GenericCard card={eiffelTowerCard}/>)

const postItCard = new Card(3, "Post-it", "Faire des listes aide à la productivité", "Ce post-it vous sera utile à l'étape n°-", <div></div>, post_it);
const postItComponent = (<GenericCard card={postItCard}/>)

const posterCard = new Card(4, "Affiche Informative", "Cette affiche nous donne pas mal d'information", "Mais quel mot forment ces lettres de couleurs", <div></div>, affiche);
const posterComponent = (<GenericCard card={posterCard}/>)

const memoCard = new Card(8, "Mémo", "https://www.sida-info-service.org/, \n https://www.sexualites-info-sante.fr/", "Fouillez les liens pour trouver des infos", <div></div>, memo);
const memoComponent = (<GenericCard card={memoCard}/>)

const keyCard = new Card(9, "Une clé", "", "Elle ouvre un tiroir...", <div></div>, key);
const keyComponent = (<GenericCard card={keyCard}/>)


const computerWithoutPowerCard = new Card(10, "Ordinateur sans batterie", "Decsription ?", "Il ne sert à rien sans batterie...", <div></div>, computer);
const computerComponent = (<GenericCard card={computerWithoutPowerCard}/>) 

const drawerCard = (<DrawerCard list_card={9} text="Ouvrir"/>)
const drawerCardEntier = new Card(5, "Tiroir", "Un tiroir fermé à clef...", "La serrure est fermée, seul une clef peut l'ouvrir", drawerCard, drawer);
const drawerComponent = (<GenericCard card={drawerCardEntier}/>)

const chargerCard = new Card(14, "Chargeur", "Un chargeur qu'il faut débloquer", "Penser aux couleurs du mémo", <CableMachine/>, chargeurImg);
const chargerComponent = (<GenericCard card={drawerCardEntier}/>)

const chestCard = new Card( 1, "Coffre", "Un coffre fermé avec un code", "Avez-vous bien regardé l'affiche ?",  <ChestCard/>, chestImg)

const computerOnCard = new Card( 11, "Ordinateur verrouillé", "Indice pour le code", "Vous ne trouvez pas la maladie correspondant à cette définition Chercher bien sur les sites que nous vous avons fournis",  <ComputerOnCard/>, chestImg)

const definitionCard = new Card( 12, "Mémo", "Un nouveau mémo", "Faite attention aux couleurs", definitionImg, definitionImg)

const IllenessTokenListImg = (<CardImg img_link='../assets/images/liste_maladies_tokens.png'></CardImg>)
const IllenessTokenListCard = new Card(13, "Une liste d'IST", "Très insctructif ! Peut être est il possible d'en tirer davantage..", "Indice 1", IllenessTokenListImg, '../assets/images/liste_maladies_tokens.png');
const IllenessTokenListComponent = (<GenericCard card={IllenessTokenListCard} />)

export {IllenessTokenListCard, drawerCardEntier, chargerCard ,computerWithoutPowerCard, drawerCard, keyCard, memoCard, posterCard, postItCard, eiffelTowerCard, chestCard, computerOnCard, definitionCard}
