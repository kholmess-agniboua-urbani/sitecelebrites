# StarPulse

Trois portraits pour une présentation de Daft Punk, Zinédine Zidane et Beyoncé.

## Ouvrir la présentation

**[Télécharger la présentation au format ZIP](https://github.com/kholmess-agniboua-urbani/sitecelebrites/archive/refs/heads/main.zip)**

1. Dans l’Explorateur Windows, faites un clic droit sur le ZIP et choisissez **Extraire tout**.
2. Dans le dossier extrait, ouvrez **fansite.html** avec Chrome. Windows peut l’afficher simplement sous le nom **fansite**.
3. Sur l’accueil, cliquez sur **Daft Punk**, **Zidane** ou **Beyoncé**. Sur la page Daft Punk, cliquez sur **Lecture** pour lancer la vidéo.

**fansite.html** contient le design, les photos et la vidéo. Vous pouvez aussi copier ce fichier seul sur une clé USB et l’ouvrir hors ligne. Les liens vers les sites externes nécessitent une connexion.

## Modifier les pages

- `sources/accueil.html` et `fansite.css` contiennent les fichiers modifiables de l’accueil.
- `daft-punk.html` et `daft-punk.css` contiennent le portrait de Daft Punk.
- `Fansite1/Zidane.html` et `Fansite1/style.css` contiennent le portrait de Zidane. L’envoi du formulaire de démonstration est désactivé.

Après avoir modifié une page, un style ou un média, exécutez `node build-presentation.mjs` pour régénérer le fichier autonome `fansite.html`.
