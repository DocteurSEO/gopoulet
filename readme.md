# DOC-START-TIRIEL-ALYPTUS

## Comment faire tourner le projet ?

- *Côté Frontend* :
  Le frontend utilise vite.js, qui permet de lancer l'interface plus rapidement, il est donc nécessaire de lire la documentation du module avant de démarrer.
La partie Frontend utilise le port 5173:5173

- *Côté Backend* :
Le backend utilide le port 3000, mais si vous etes soucieux de la sécurité vous pouvez utiliser un autre port en modifiant les entrypoints API dans les pages front et le port de démarrage dans server.js

Un script "CreateAdmin.js" permet de créer un utilisateur admin dans une table de votre database si vous avez bien configuré un fichier *.env* ( Dans ce fichier vous devez renseigner votre terminaison API fe MongoDB). 
