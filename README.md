# WIK-DPS-TP01-TS
Ce projet est une API TS simple qui retourne les headers d'une requête HTTP GET lorsqu'une requête est effectuée sur /ping.

## Installation et mise en place
1. **Clonez le dépôt:**

        git clone https://github.com/Affy657/wik-dps-tp01-ts.git

2. **Accédez au répertoire du projet:**

        cd wik-dps-tp01-ts

3. **Compilez le projet:**

        npx tsc && node build/index.js

## Exécution
**Exécutez le serveur avec la commande suivante:**


    export PING_LISTEN_PORT=<port> && node build/index.js

Remplacez `<port>` par le numéro de port sur lequel vous souhaitez que le serveur écoute. Si vous ne spécifiez pas PING_LISTEN_PORT, le serveur écoutera sur le port 3000 par défaut.

## Exemples d'utilisation
**Pour obtenir les headers de la requête:**


    curl http://localhost:3000/ping
    {"host":"localhost:3000","user-agent":"curl/7.78.0","accept":"*/*"}

**Pour une requête autre que GET sur /ping:**

    $ curl -X POST 127.0.0.1:3000/ping
    > (Réponse vide avec code 404)
