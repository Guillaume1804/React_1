<!-- pourquoi il n'y a pas de connexion direct avec le index.html a part oot dans index.js ? OK

pourquoi l'incrémentation ne fonctionne pas correctement alors qu'en faisant +1 ça marche ? OK



Pourquoi les paramétre de la fonction s'écrivent ainsi : 
    function UserCard({name, age, profession})  {}





Exercice React

Objectif de l'exercice :
Créer une application React qui affiche une liste de cartes pour différents utilisateurs. Chaque carte affichera le nom, l'âge et la profession de l'utilisateur.

Création du composant `UserCard` 
   Créez un nouveau composant fonctionnel nommé `UserCard`. Ce composant acceptera des props pour `name` (nom), `age` (âge), et `profession` (profession) et les affichera dans le rendu. Utilisez des balises appropriées pour chaque information (par exemple, `<h2>` pour le nom, `<p>` pour l'âge et la profession).

Passage de props :
   Dans le composant principal `App`, définissez un tableau d'objets utilisateur, chaque objet contenant des clés pour `name`, `age`, et `profession`. Utilisez la méthode `.map()` pour parcourir ce tableau et renvoyer un élément `<UserCard />` pour chaque utilisateur, en passant les données de chaque utilisateur comme props au composant `UserCard`.

Affichage des cartes utilisateurs :
   Assurez-vous que le composant `App` affiche la liste des cartes utilisateurs à l'écran. Chaque carte doit montrer les informations fournies via props de manière claire et organisée. -->
