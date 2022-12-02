
import CardImg from "../components/card-img";
import DrawerCard from "../components/drawer-card";
import GenericCard from "../components/generic-card";
import Card from "../models/card";
import ChestCard from "../components/chest-card";
import IllenessTokenList from "../assets/liste_maladies_tokens.png"
import ComputerOnCard from "../components/computer-on-card";
import chestImg from "../assets/chest.webp";
import chargeurImg from "../assets/chargeur.jpeg";
import drawer from "../assets/drawer_img.jpeg";
import key from "../assets/key.png";
import post_it from "../assets/post_it_img.png";
import memo from "../assets/memo_img.png";
import eiffel_tower from "../assets/eiffel_tower_img.png";
import computer_without_power from "../assets/laptop_without_power.png";
import computer_locked from "../assets/laptop_locked.png";
import affiche from "../assets/affiche_img.png";
import livre from "../assets/book_closed.jpg";
import fichierVerouille from "../assets/liste_maladies_tokens.png";
import GameContext from "../context/game-context";
import React from "react";
import definitionImg from "../assets/definition.png"
import CableMachine from "../components/CableMachine";
import FileLockCard from "../components/file-lock-card";
import Quiz from "../components/Quiz";
import lockImg from "../assets/lock.jpeg"
import phoneImg from "../assets/phone_img.jpg"

import BookCard from "../components/book-card";

//Simple cards
const eiffelTowerCard = new Card(2, "Tour Eiffel", "Quel bel objet de décoration", "Indice 1", <div></div>, eiffel_tower);
const eiffelTowerComponent = (<GenericCard card={eiffelTowerCard}/>)

const postItCard = new Card(3, "Post-it", "Faire des listes aide à la productivité", "Ce post-it vous sera utile à l'étape n°-", <div></div>, post_it);
const postItComponent = (<GenericCard card={postItCard}/>)

const posterCard = new Card(4, "Affiche Informative", "Cette affiche nous donne pas mal d'information", "Mais quel mot forment ces lettres de couleurs", <div></div>, affiche);
const posterComponent = (<GenericCard card={posterCard}/>)

const memoCard = new Card(8, "Mémo", "Voici des liens utiles : https://www.sida-info-service.org/, \n https://www.sexualites-info-sante.fr/", "Fouillez les liens pour trouver des infos", <div></div>, memo);
const memoComponent = (<GenericCard card={memoCard}/>)

const keyCard = new Card(9, "Une clé", "", "Elle ouvre un tiroir...", <div></div>, key);
const keyComponent = (<GenericCard card={keyCard}/>)


const computerWithoutPowerCard = new Card(10, "Ordinateur sans batterie", "L'ordinateur ne veut pas s'allumer, il faut le brancher...", "Il ne sert à rien sans batterie...", <div></div>, computer_without_power);
const computerComponent = (<GenericCard card={computerWithoutPowerCard}/>) 

const drawerCard = (<DrawerCard list_card={9} text="Ouvrir"/>)
const drawerCardEntier = new Card(5, "Tiroir", "Un tiroir fermé à clef...", "La serrure est fermée, seul une clef peut l'ouvrir...", drawerCard, drawer);
const drawerComponent = (<GenericCard card={drawerCardEntier}/>)

const chargerCard = new Card(14, "Chargeur", "Un chargeur qu'il faut débloquer, trouvez les couleurs dans le bon ordre", "Penser aux couleurs du mémo", <CableMachine/>, chargeurImg);
const chargerComponent = (<GenericCard card={drawerCardEntier}/>)

const chestCard = new Card( 1, "Coffre", "Un coffre fermé avec un code", "Avez-vous bien regardé l'affiche ?",  <ChestCard/>, chestImg)

const computerOnCard = new Card( 11, "Ordinateur verrouillé", "IST bactérienne connue sous les surnoms de « chaude-pisse» ou « chtouille ». (Tout contact sexuel peut mener à sa transmission)", "Vous ne trouvez pas la maladie correspondant à cette définition Chercher bien sur les sites que nous vous avons fournis",  <ComputerOnCard/>, computer_locked)

const definitionCard = new Card( 12, "Mémo", "Un nouveau mémo", "Faite attention aux couleurs", definitionImg, definitionImg)

const illenessTokenListCard = new Card(13, "Une liste d'IST", "Très insctructif ! Peut être est il possible d'en tirer davantage..", "Indice 1", <div></div>, fichierVerouille);
const IllenessTokenListComponent = (<GenericCard card={illenessTokenListCard} />)

const bookCard = new Card(7, "Un livre fermé", "Un vieux livre fermé...", "Que renferme t'il ?", <div></div>, livre);
const bookComponent = (<BookCard card={bookCard}/>)

const lockFileCard = new Card( 15, "Fichier vérouillé", "Vous avez enfin trouvé le fichier mais il est vérrouillé par un mot de passe. Trouvez la maladie associée aux symptômes suivants : \n Avant poussée : apparition de brûlures, d’irritations ou de picotements. Pendant poussée : apparition de vésicules (boutons) ou ulcères inflammés au niveau génital, anal, ou autour de ces zones, qui cicatrisent et disparaissent en 8 à 15 jours.", "Avez-vous bien regardé le fichier 'Liste MST' ?",  <FileLockCard/>, lockImg)

const endCard = new Card( 15, "Téléphone", "Vous avez trouvez toutes les informations, vous pouvez maintenant répondre à votre copine.", "Pas d'indice",  <Quiz/>, phoneImg)


export {bookCard, illenessTokenListCard, lockFileCard,drawerCardEntier, endCard, chargerCard, computerWithoutPowerCard, drawerCard, keyCard, memoCard, posterCard, postItCard, eiffelTowerCard, chestCard, computerOnCard, definitionCard}
