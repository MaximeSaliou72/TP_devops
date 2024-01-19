# TP_DevOps

## Exécution des Tests

Pour exécuter les tests, assurez-vous d'avoir Node.js installé sur votre machine. Ensuite, suivez ces étapes :

1. Ouvrez un terminal.
2. Naviguez jusqu'au répertoire racine du projet.
3. Exécutez la commande suivante :

```bash
npm install  # Pour installer les dépendances
npm test     # Pour exécuter les tests
```

## Dockerisation

L'application peut également être dockerisée pour faciliter le déploiement. Assurez-vous d'avoir Docker installé sur votre machine, puis suivez ces étapes :

1. Ouvrez un terminal.
2. Naviguez jusqu'au répertoire racine du projet.
3. Exécutez la commande suivante :


```bash
docker build -t tp_devops .
docker compose up
```
## GitHub Actions

Ce projet utilise GitHub Actions pour automatiser les tests. Les workflows GitHub Actions sont configurés dans le répertoire .github/workflows. Chaque fois que des modifications sont poussées vers la branche principale, qu'une pull request ou bien qu'un label sera ajouté, les tests seront automatiquement exécutés.

