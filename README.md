#GETFLUENCE-TEST
---

GETFLUENCE-TEST est une application qui permet de programmer des appels.
Pour cela nous devons nous s'inscire et s'identifier  pour accèder à celle ci.
Demo : https://getfluence-test.cleverapps.io/auth/signup

---
L'application regroupe 3 themes principaux : 
* L'authentification
* L'édition de données
* La création d'un composant DatePicker
---

###Techno

* Express.js (serveur).
* React(client).
* Firebase pour la gestion de l'auhtentification.
* PostgreSQL pour la persitance des données
---
###Installation


* Dans un premier temps verifier les version de node. il nous faudra node@16
* Ouvrez votre terminal préféré 
* cloner le projet: `git@github.com:billywild87/getfluence-test.git`
* Dans le root project `/` lancer ` npm install `
* Ensuite faite `cd/client` et lancer de nouveau ` npm install `

* Installez une base de donnée **POSTGRESQL**
* Creer vous une application web Firebase avec authentification par email/password via  https://firebase.google.com/

---
###Configuration de vos variables d'environnement

* Dans le root project `/`  créer un fichier `.env`
* Dans le `cd/client` faite créer un ficher `.env.local`

Maintenant allez Dans le fichier `.env` dans votre root project  `/`

* Dans firebase, `paramètres du projet` > `Comptes de services` veuillez générer une clef privée.

* Recuperer le nom,host,password,uri(si vous avez une) de votre base de donnée PostgreSql 

* Veuillez remplir le fichier `.env` de la sorte et remplacez les ******** par vos donnée récupérées:
  
```
# files .env
POSTGRESQL_ADDON_DB= ******** 
POSTGRESQL_ADDON_HOST= ******** 
POSTGRESQL_ADDON_PASSWORD= ********
POSTGRESQL_ADDON_PORT= ********
POSTGRESQL_ADDON_URI=********
FIREBASE_CLIENT_ID=********
FIREBASE_AUTH_URI=********
FIREBASE_TOKEN_URI=********
FIREBASE_AUTH_CERT_URL=********
FIREBASE_CLIENT_CERT_URL=********
```
*ADDON_DB équivalent au nom de la DB*


Ensuite allez dans votre fichier `.env.local` dans  `cd/client` 
* Dans firebase, `paramètres du projet` > `Général` veuillez récupérer: apikey,authDomain,projectID,storageBucket,messagingSenderId,appID,measurementID

* Veuillez remplir le fichier  `.env.local` de la sorte et remplacez les ******** par vos données récupérées:
```
# files .env.local
REACT_APP_FIREBASE_API_KEY=********
REACT_APP_FIREBASE_AUTH_DOMAIN=********
REACT_APP_FIREBASE_PROJECT_ID=********
REACT_APP_FIREBASE_STORAGE_BUCKET=********
REACT_APP_FIREBASE_MESSENGER_SEND_ID=********
REACT_APP_FIREBASE_APP_ID=********
REACT_APP_FIREBASE_MEASUREMENT_ID=********
REACT_APP_BASE_API='/api/'
```
---
###Configuration de la base de donnée

Créer deux tables : USERS ET PROGRAM

Script création de table **USERS** :
```
CREATE TABLE IF NOT EXISTS public.users
(
    id_user uuid NOT NULL DEFAULT uuid_generate_v4(),
    id_firebase text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    pseudo text COLLATE pg_catalog."default",
    fonction text COLLATE pg_catalog."default",
    country text COLLATE pg_catalog."default",
    avatar text COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id_user)
)

```

Script création de table **PROGRAM** :
```
CREATE TABLE IF NOT EXISTS public.program
(
    id_user_program uuid NOT NULL,
    date_program timestamp with time zone NOT NULL,
    id_program uuid NOT NULL DEFAULT uuid_generate_v4(),
    CONSTRAINT program_pkey PRIMARY KEY (id_program),
    CONSTRAINT id_user_program_foreign FOREIGN KEY (id_user_program)
        REFERENCES public.users (id_user) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

```
---
###Démarrer l'application

Vous avez deux choix soit lancez l'application

* Lancer l'application en mode développement
* Lancer l'application en mode production

1. Mode développement
    * Lancez votre serveur express en fond à root `/` via `npm run start`
    * Lancez l'application front `cd/client` et  lancez via react-script `npm run start`
    * Ouvrez une fenêtre de votre navigateur à `localhost:3000`
2. Mode production
    * Lancez l'application à root `/` via `npm run build`
    * Ouvrez une fenêtre de votre navigateur à `localhost:8080`


Sinon utilisez le lien démonstration ici : https://getfluence-test.cleverapps.io/

---
###Composition du server express

* Point d'entrée : `index.js`
* config db dans db.js
* un dossier `utils` ou je stocke certaine fonction réutilisable
* un dossier `services` qui représente les fonction qui peuvent travailler pour different controllers
* un dossier `controllers` qui seront le point d'entrer des mes differentes requêtes 
* un dossier `middleware` qui sera composé principalement d'un fichier `authenticate`
* un dossier `media/avatars` qui sera composé de plusieurs fichier avatar en svg
* un dossier `config-firebase` qui sera composé de fichiers de config firebase-admin


Le fichier `index.js` et le point de départ de l'application qui servira l'application React de cette façons :

```javascript
app.get('*', (req, res) => {
  //res.send('hello world');
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
```

Le middleware authenticate va pouvoir gérer toute les requêtes ou il sera attribué pour vérifié de la véracité du token envoyé de cette façons:

```javascript
export default async function (req, res, next) {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];

    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {
      // Le auth_token n'est pas bon
      return res.sendStatus(401);
    }

    const idUserQuery = {
      text: 'SELECT id_user FROM USERS WHERE id_firebase = $1',
      values: [firebaseUser.user_id],
    
    }
    const user = await pool.query(idUserQuery);

    if (!user.rows[0]) {
      // Unauthorized
      return res.sendStatus(401);
    }
    req.id_user = user.rows[0].id_user;

    next();
  } catch (err) {
    //Erreur
    res.sendStatus(401);
  }
}
```

Son utilisation :

```javascript
ProgramControllers.post("/create",authenticate , async (req, res) => {
    
    try{
        const newProgram = await addNewProgram(req.id_user,new Date(req.body.date))
        if(newProgram){
            return res.json({
                response:'succes'
            })
        }
    }catch(error){
        res.status(400).json({
            error:
            `Une erreur est survenue`
      });
}
})
```
---
###Composition de l'application React

Pour ce qui est de l'application React j'ai utilisé `create-react-app` pour la développer avec le template de `--typescript`

#####Authentification
J'utilise ici pour la partie authentification ***firebase***

* Très facile pour générer un jwt pour une utilisation lié à un serveur custom
* Possède differentes fonctions qui permettent de savoir rapidement l'état de l'authentification
* Une gestion de la persistence de la connection

#####Global state
Pour la gestion du state global j'utilise ici ***redux/toolkit*** couplé avec ***RTK QUERY***, une bombe! ceci dit en passant

* ***redux/toolkit*** propose un nouveau système de gestion de réducer via la création de slices et embarque la plupart des middlewares phares de l'époque "redux vanille"
* Permet d'élaborer un système d'architecture par features bien plus lisible et fonctionnel a mon sens que le fameux **/components*  **/pages*
* Avec ***RTK QUERY*** sous le capot on utilise redux autrement, il crée lui même les slices adaptés à ses services.
* ***RTK QUERY*** permet aussi au sein du composant d'avoir son propre hook qui embarque le cycle de vie des requests.Très plaisant à l'utilisation et ainsi permet de réduire l'écriture de code drastiquement ou les slice ou les actions devenez des monstres de gestion d'état de request via redux-thunk(create async thunk)
* ***RTK QUERY*** permet surtout la mise en cache de request et d'une durée de vie du cache si le composant n'est pas rendu.

exemple d'un service rtk :

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../services/firebase';
export const programApi = createApi({
    reducerPath: 'program',
    tagTypes: ["programs"],
    baseQuery: fetchBaseQuery({
       baseUrl: process.env.REACT_APP_BASE_API,
       prepareHeaders: async (headers) => {
        // Gestion du token on le refresh via getToken(true) directement ici
        // On pourrait développer ici un interceptor qui permettrait de renouveler l'access_token 
        const token = await getToken(true);
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers
      },
    
    }),
    endpoints: (builder) => ({
      createProgram: builder.mutation<any,{date:string}>({
        query: (body) =>{ 
        return{
        url:'/program/create',
        method:'POST',
        body
    }
        },
        invalidatesTags: ['programs']   
        }),
        getPrograms: builder.query<[],void>({
          query: () =>{ 
          return{
          url:'/program/all',
          method:'GET',
        
      }
          },
          providesTags:['programs']  
          }),
    }),
  })

  
export const {useCreateProgramMutation,useGetProgramsQuery} = programApi;

```

#####Route

Pour la gestion des routes ici j'utilise ***react-router-dom v6***

* Facile à prendre en main
* Possède un systeme de contexte natif pour la gestion d'un layout nested.
* Possède des hooks

#####Css/Sass

Pour le css j'utilise le préprocesseur sass que je couple avec le système de module css
Ce qui permet d'avoir un fichier styles avec sa gestion des classes propre au composant.

De plus vous me verrez très souvent utiliser les variables globales inherantes au composant ce qui permet de redistribué au sein de mon fichier scss des propriétés qui peuvent être gérer par le javascript.

En soit on retrouve le même principe de certaines bibliotèques cssinjs.

exemple : 
```javascript
    //Component.tsx
    import styles from './component.module.scss';
    import {useState} from 'react';

    export default function Component(){
    
    const [isShow,setISHow] = useState<boolean>(false)


    var styled = {
        container:{
            '--background-container':isShow ? '#000' : '#FFF'
            '--variable-color' : isShow ? '#FFF' : '#000'
        } as CssProperties
    }

    return(
        <button 
            onClick={()=>{setIsShow(!isShow)}}  
            style={styled.container} 
            className={style["container"]}
            >
            <div className={styles['content']}>Hello World!</div>
        </button>
    )
}
   
```
Utilisation dans le module scss
```scss
    //Component.module.scss
    .container{
        background-color:var(--background-container)
        .content{
            color:var(--variable-color)
        }
    }
    
```

#####Animation

J'utilise principalement ***React-spring*** pour gérer les animations css

* Facile d'utilisation
* Très puissant
* Ce marie bien avec la gestion de variables css inherante au sein d'un composant vu précédemment.

#####Gestion des dates

J'utilise ***dayjs*** dans ce projet

* Tres facile d'utilisation
* Propose une multitude de fonctions liées au dates


Une librairie très légère qui permet d'aidé sur la gestion des dates au sein d'un datepicker


#####DatePicker

Le Date Picker est composé de 5 composants principalement;

* Un composant qui affiche la date sélectionné
* Un composant qui permet de choisir les mois avec un système de back/next
* Un calendar qui affiche des cellules de jours du mois selectionner qui permettre d'editer l'afficheur de date
* Un composant qui permet de selectionner l'heure et ainsi d'ajouter l'heure au jours selectionner
* Un bouton qui permet de programmer la date selectionner


Auteur :