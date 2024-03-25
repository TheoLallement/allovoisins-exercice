# allovoisins-exercice

Exercice entretien, disponible sur une GithubPage [ici](https://theolallement.github.io/allovoisins-exercice/)

## Choix de la stack

Utilisation de [create-vue](https://github.com/vuejs/create-vue) et de la dernière stack officielle proposé par vue : Vue3 / Typescript / Vite / Vitest / Eslint / Prettier

Pas de router ou de store car jugés non nécessaires dans cet exercice.

## Déroulé de l'exercice

| Etape                          | Temps passé | Description                                                                                                                                                        |
| ------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Analyse de l'exercice          | 1.5h        | Analyse de la maquette et des différentes contraintes et besoins que l'exercice allait présenter + comment aborder les différents problèmes                        |
| Setup de l'environnement       | 0.5h        | Setup d'un repo et d'une chaine de CICD avec des githubs actions simples pour : - déployer sur une github page - vérifier la confirmité du code sur chaque branche |
| Ajout d'un article             | 1h          | Affichage d'une liste et d'un formulaire qui permet d'ajouter un article de manière réactive à la liste (aucun css)                                                |
| Modification d'un article      | 2h          | Au click sur un article, le formulaire l'affiche et permet sa mofication (aucun css)                                                                               |
| Ajout DesignSystem allovoisins | 1h          | Ajout de différentes variables css correspondants au DesignSystem fourni                                                                                           |
| Création de composants UI      | 1h          | Création de composants correspondant au rendu de la maquette (stylisation du formulaire et de la liste)                                                            |
| Gestion de la réactivité       | 1h          | Ajout d'une fonction js gérant différents breakpoints et d'un affichage différent du formulaire pour des petits écrans                                             |
| Ecriture de la doc             | 0.5h        | Ecriture de la documentation du repo + quelques commentaires dans le code                                                                                          |

### Choix d'implémentation

- **gitmoji :** alternative au conventionnal commit avec des emojis
- **Déploiement :** github page car permet de montrer un exemple de Github Actions
- **Accessibilité :** Travail basique au niveau de l'accessibilité (tabulation, role, aria-label, etc.), surement possibilité d'améliorer mais étant précisé que l'UI était peu important, pas de travail supplémentaire
- **Utilisation de composants HTML natifs :** form, button (submit et reset),
  dialog; Choix de rester sur de l'HTML classique pour simplifier la gestion des évènements et erreurs, dans un projet plus conséquent chaque élément aurait été repris pour etre 100% customisé

### Difficultés rencontrées

- **gestion de l'édition/addition d'un article sur le meme article :**
  Difficulté sur la gestion de la réactivité et du data flow afin de conserver la réactivité sans trop alourdir le code

### Améliorations possibles

- **CSS :** différents points possible pour améliorer le code et l'interface
  - retravail des variables css pour séparer fonctionnellement les variables (couleurs et fonction par exemple)
  - création d'utilitaire pour gérer et uniformiser espacements / largeur d'éléments (façon grille bootstrap par exemple)
- **CICD :** ajout de la gestion d'une release et release note ([gitmoji-changelog](https://github.com/frinyvonnick/gitmoji-changelog) par exemple)
- **UX :** ajout d'une "vraie" validation de formulaire avec des messages d'erreurs au niveau des inputs (avec [aync-validator](https://github.com/yiminghe/async-validator) par exemple)

## Lancement du projet en local

```sh
npm install
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
