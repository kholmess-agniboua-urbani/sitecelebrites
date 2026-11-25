# StarPulse

Trois portraits pour une présentation de Daft Punk, Zinédine Zidane et Beyoncé.

## Ouvrir la présentation

**[Télécharger la présentation au format ZIP](https://github.com/kholmess-agniboua-urbani/sitecelebrites/archive/refs/heads/main.zip)**

1. Dans l’Explorateur Windows, faites un clic droit sur le ZIP et choisissez **Extraire tout**.
2. Dans le dossier extrait, ouvrez **fansite.html** avec Chrome. Windows peut l’afficher simplement sous le nom **fansite**.
3. Sur l’accueil, cliquez sur **Daft Punk**, **Zidane** ou **Beyoncé**. Sur la page Daft Punk, cliquez sur **Lecture** pour lancer la vidéo.

**fansite.html** contient le design, les photos et la vidéo. Vous pouvez aussi copier ce fichier seul sur une clé USB et l’ouvrir hors ligne. Les liens vers les sites externes nécessitent une connexion.

## Où trouver les fichiers

| Fichier ou dossier | Rôle |
| --- | --- |
| `fansite.html` | Présentation prête à ouvrir, même hors ligne |
| [sources/](sources/) | Pages HTML modifiables de l’accueil, de Daft Punk et de Zidane |
| [styles/](styles/) | Feuilles CSS de chaque page |
| [medias/images/](medias/images/) | Images de l’accueil et galerie de Zidane |
| [medias/videos/](medias/videos/) | Vidéo de Daft Punk |
| [scripts/](scripts/) | Génération du fichier de présentation |

Les anciennes adresses des pages redirigent vers les fichiers correspondants. L’envoi du formulaire de démonstration de Zidane est désactivé.

Après avoir modifié une page, un style ou un média, exécutez `node scripts/build-presentation.mjs` depuis la racine du dépôt pour régénérer la présentation.
