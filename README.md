# Gantt
 gantt
        title Gantt Diagram
        dateFormat DD-MM-YYYY
        section Architecture
        Environment setup : done, 11-03-2024, 1d
        GitFlow : done, 12-03-2024, 1d
        "Gantt" : done, 12-03-2024, 1d
        Schéma d'architecture : done, 13-03-2024, 4d
        Maquette : active, 14-03-2024, 7d
        Livrable Analyse du cahier des charges : crit, 11-03-2024, 10d
        section Configuration
        Configuration d'un serveur : active, 20-03-2024, 3d
        Configuration des bases de données : 23-03-2024, 1d
        Configuration de l'environnement de développement : 23-03-2024, 1d
        Configuration de l'environnement CI/CD : 23-03-2024, 1d
        section Développement
        Gestion de l'autentification : 22-03-2024, 4d
        Rectification Maquette : 25-03-2024, 17d
        CRUD utilisateurs : 25-03-2024, 4d
        CRUD restaurants : 25-03-2024, 4d
        CRUD commandes : 25-03-2024, 4d
        CRUD d'un menu : 27-03-2024, 4d
        Accepter une commande : 30-03-2024, 3d
        Gestion des API : 31-03-2024, 5d
        Monitoring : 31-03-2024, 5d
        Système de notifications : 04-04-2024, 4d
        Gestion des logs : 04-04-2024, 4d
        Gestion des statistiques du service commercial : 07-04-2024, 4d 
        section Soutenance
        Préparation du Powerpoint : 11-04-2024, 1d
        Soutenance : crit, 12-04-2024, 1d

# GitFlow
  %%{init: { 'gitGraph':{'mainBranchName': 'release'},'livreurLevel': 'debug', 'theme': 'default', 'themeVariables': {
              'tagLabelColor': '#ff0000',
              'tagLabelBackground': '#00ff00',
              'tagLabelBorder': '#0000ff'
       } } }%%
gitGraph
        commit id:"Create Git"
        commit id:"Create branch develop"
        branch develop
        commit id:"Create branch client"
        branch client
        commit id:"Create profil"
        commit id:"Create parrainage"
        checkout develop
        merge client id:"Create profil + Create parrainage"
        commit id:"Create branch livreur"
        branch livreur
        checkout develop
        commit id:"Create branch restaurant"
        branch restaurant
        checkout livreur
        commit id:"Create profil livreur"
        commit id:"Add json stringlify"
        checkout develop
        merge livreur id:"Create livreur"
        checkout restaurant
        commit id:"Create profil restaurant"
        checkout develop
        merge restaurant id:"Create restaurant"
        checkout release
        merge develop id:"v0.1.dev"
        checkout livreur
        commit id:"Delete json stringlify"
        checkout client
        commit id:"Create favori"
        checkout restaurant
        commit id:"Add catégorie"
        commit id:"Add best sellers"
        checkout develop
        merge client id:"Create favori "
        merge livreur id:"Delete json stringlify "
        checkout release
        merge develop id:"v.0.2.dev"      
