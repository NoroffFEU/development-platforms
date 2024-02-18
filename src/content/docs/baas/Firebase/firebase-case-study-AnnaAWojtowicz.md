# Case: How to use Firebase when creating a website with auctions.

Firebase is an example of a platform that provides back-end solutions for both front- and back-end developers (in other words a BaaS - Backend as a Service). This platform is especially convenient for front-end developers without back-end skills to build and develop applications.

## Building a web app with the help of Firebase.

One of Noroff's CA focuses on creating a website that allows users to participate and create auctions (Noroff, 2024). This case study will allow the creators of the app to take it further and implement it as a product ready to use without being dependent on the API and DataBase created by Noroff.

Therefore this article will cover how to:

- start the project using Firebase website;
- add a web app to the project;
- install Firebase NPM Package using Terminal;
- connect the node project with Cloud Firestore;
- understand how Cloud Firestore is organized;
- create, update and delete databases in Cloud Firestore;
- fetch documents and collections from Cloud Firestore.

## Starting the project using Firebase website

### Creating a project on Firebase

This initial phase starts with creating a project on Firebase website (https://console.firebase.google.com/) and giving it a name. In this case, it will be called “Auctions”. While naming the project, a unique ID will be assigned to the developer's project.

<img width="1440" alt="Skjermbilde 2024-02-08 kl  21 45 40" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/a1b1ea98-c22c-4de3-a431-fee8974da008">

Following, the developer will be sent to the project’s dashboard.

<img width="1440" alt="Skjermbilde 2024-02-08 kl  21 57 11" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/6a3a4e2a-173d-4681-b84c-b1c7cdfcd087">

<img width="1440" alt="Skjermbilde 2024-02-08 kl  22 00 30" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/cc36baf3-2d37-46f0-b76a-6116f009123e">


### Registering an app for web

Under the name of the project, the developer is supposed to choose a Web-button and on the next page give the project a nickname (in this case *My web app auctions*).

<img width="1440" alt="Skjermbilde 2024-02-12 kl  14 06 37" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/fa33c848-b609-4004-b1a7-f72cb4581f63">


The next step involves adding the Firebase SDK code to your JS-code. While not mandatory, integrating the Firebase SDK is the recommended and convenient way to connect your project to Firebase services. The developer can access the SDK code during the initial setup of Firebase in the web app or later through the Firebase console site (Firebase Project -> Wins! auctions -> My web app auctions -> gear icon -> project settings -> Your apps).

It's crucial to note the importance of iterating with Firebase via the REST API, especially in cases involving programming languages and tools that lack official SDK support from Google. This flexibility allows developers to use Firebase seamlessly, regardless of the development stack they are using.

<img width="1440" alt="Skjermbilde 2024-02-09 kl  12 57 42" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/c672e7a0-9ea6-4cd6-a92a-ec16847bda9e">

<img width="1440" alt="Skjermbilde 2024-02-09 kl  13 08 44" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/8e01385b-4055-455d-9401-d669c76ae8ee">

As seen in the last picture, there are various options for configuring the SDK setup. In this particular case, the SDK setup will be configured with NPM, necessitating the installation of Node.js beforehand.

### Installing Firebase NPM package

Installing the Firebase NPM package involves applying the first snippet of code displayed during the addition of Firebase to the web app. In the terminal, the developer will write the following command:
**npm i firebase** or **npm install firebase**.
As a result, a folder (**node_modules**) and two files (**package-lock.json** and **package.json**) should be created in the project.

<img width="1440" alt="Skjermbilde 2024-02-12 kl  12 45 39" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/0c85a303-30ec-4ac7-add3-1de8eec2d4c6">


### Connecting Firebase project from the Firebase dashboard and the node project

Connecting the Firebase project involves creating a JavaScript file in the program editor and pasting the code provided by Firebase during the app registration for the web. As mentioned earlier, this code can also be found in the project's settings.

<img width="1440" alt="Skjermbilde 2024-02-12 kl  13 11 13" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/6d8de2ad-6d11-414a-8494-cddda497bf34">

### Running the app

As mentioned before, JS SDK is modular, so there is a need to add the following code to the **package.json**:

```json
"type": "module",
```

to be able to import this code `import { initializeApp } from "firebase/app";`
in **index.js**.

<img width="1440" alt="Skjermbilde 2024-02-12 kl  13 33 07" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/e5c21472-719b-4405-8eac-44d01446386f">


To check if the app is running, the developer should add

```js
console.log(app);
```

in **index.js** and then run

```
node index.js
```

in the terminal.

<img width="1440" alt="Skjermbilde 2024-02-12 kl  14 08 02" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/89040bda-9be2-4f55-8c92-c8597e284585">


### JS SDK and modular bundlers

The JS SDK functions optimally with modular bundlers. Consequently, when using the Firebase SDK, a process occurs, namely the elimination of unused code (or even modules) through tree-shaking. This minimizes the size of the app (Mdn Web Docs, u.a.).
While Firebase documentation primarily focuses on the Rollup bundler (Firebase, u.a.), it's worth noting that this configuration will also work with the **Vite bundler**. However, detailed instructions for Vite won't be covered in this article.

### Firebase and Google Cloud

Every Firebase Project is essentially a Google Cloud Project, although not every Google Cloud Project is initially a Firebase Project (though it can be converted into one if necessary). Therefore, when creating a new Firebase Project, developers can leverage various functions and products provided by Google Cloud, such as the Google Cloud Console, Google API Console, project ID, project number, as well as functionalities like deleting, billing, and permissions (Firebase a, u.a.).

## Understanding and adding different services to the web app

With the introduction of Firebase 9, a modular approach has been implemented. This means that developers can now import only the modules (resources and services) they need for their app. As a result, the app will run faster since it avoids including unnecessary elements.

![chart over services provided by Firebase](https://firebase.google.com/static/docs/projects/images/firebase-projects-hierarchy_projects-apps-resources.png?authuser=0)

(Firebase a, u.a.).

### Cloud Firestore

One of the most crucial services provided by Firebase is **Cloud Firestore**. This NoSQL database allows for storing data in the cloud, synchronizing data among users and/or devices, and scaling the app as necessary. Notably, this database is designed to be real-time synchronized. Moreover, it supports the web app even when the user is offline, updating the data in Cloud Firestore upon regaining internet access (Firebase b, u.a.).

It's essential to note the cost associated with using Cloud Firestore. Firebase offers some free-of-charge usage of Cloud Firestore, making it a useful solution for developers testing their Auctions projects. However, as the project scales, there may be a need to purchase additional quota to ensure its smooth operation. Further details regarding limitations and pricing can be found in the documentation (Firebase c, u.a.), with usage monitoring available in the **Usage tab** of the project.

<img width="1440" alt="Skjermbilde 2024-02-14 kl  15 20 23" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/74730f53-e110-445b-88e4-a1d5c3bc643d">


### Adding Cloud Firestore to the project

Cloud Firestore is one of the products provided by Google Cloud. To add it to the project it is necessary to add the following code:

```js
import { getFirestore } from "firebase/firestore";
```

and

```js
const db = getFirestore(app);
```

(Firebase d, u.a.) to **index.js** in the project.


<img width="1440" alt="Skjermbilde 2024-02-14 kl  12 25 47" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/8daf67ed-cdee-4c9f-8189-573df1dce052">

<img width="1440" alt="Skjermbilde 2024-02-14 kl  12 56 27" src="https://github.com/AnnaAWojtowicz/development-platforms/assets/87201797/119d4792-043a-40ac-abc8-5cd8c8bdfcbc">


### Organising data

The smallest unit used to store data in Firebase Database is document. One or more documents are organized in collections. To store the data the developer creates collections in the Firestore Database and then document(s) in the chosen collection(s).
Firestore Database supports various data types (FireBase e, u.a.), organized as key-value pairs.

### Creating database and collections

To create a collection, the developer needs to navigate to the Firestore Database in the **Build** section of the Firebase project. This is where they can organize and manage collections, each containing individual documents to store data.

BILDE

After clicking on **Create Database**, the developer will need to choose the location of the database and set security rules. In this case, the security rules can be initially set to **Start in test mode** and can be later adjusted to production mode as needed. Once the configuration is complete, clicking on **Create** will initialize the database creation process.

BILDE
BILDE
BILDE

Creating a new collection is intuitive and straightforward. In the **Data** tab, after clicking on **Start collection**, the developer names the collection and can begin adding key-value pairs while specifying the data type. Clicking on **Auto-ID** generates a unique **document ID**, facilitating easy access to the chosen document.

BILDE
BILDE
BILDE
BILDE
BILDE
BILDE

Additionally, as seen in the last screenshot, there is the option to create new collections and add documents or sub-collections by clicking on **Start collection** in the right column. Furthermore, developers can edit existing collections. It's crucial to note that databases can be designed and organized in various ways, depending on the project's needs and optimal data usage. While the process may seem straightforward initially, effective planning and strategies are necessary to minimize unnecessary data and enhance data retrieval speed. More information on this issue can be found in Firebase Documentation (Firebase f, u.a.).

## Useful methods to work with data

### Adding data to Cloud Firestore

Data can be added to Cloud Firestore two ways: by using **addDoc() method** and **setDoc() method**. In the following examples, only two types of data will be presented (string and number). Nevertheless, the Firebase Documentation provides examples of different types of data that can be processed (Firebase g, u.a.).

#### AddDoc() method

The first step is to import Cloud Firestore to the project. To do so, the developer need to enter the following code:

```js
import { getFirestore, collection, addDoc } from "firebase/firestore";
```

at the top of the **index.js** file.

Since the initialization of the Firestore Database has already been done (by adding

```js
const db = getFirestore(app);
```

), the developer can proceed to the next step—creating and running the **addDoc()** query.

The **addDoc() method** takes two arguments: **collection()** and **data{}**:

```js
addDoc(collection(), data{});
```

The **collection()** also takes two arguments: the **database** the developer wants to add the data to (db) and the **collection name** (e.g., "Users"). The query could look like this:

```js
addDoc(collection(db, "Users"), data);
```

The data stored in this collections is a JS object:

```js
addDoc(collection(db, "Users"), {
  name: "KariNordmann@gmail.com",
  email: "Karipassword1234",
  credits: 1000,
});
```

To add this data to the Cloud Firestore database, the developer needs to change permissions in the **Rules** tab to **true**, then run **index.js** in the terminal, and finally, refresh the collection.

BILDE
BILDE
BILDE

If the developer wants to add data to an existing collection in Firestore Database, such as the **Users** collection, the added data will be appended to it. However, if the developer wishes to create a new collection with data, Firestore Database will dynamically create the collection and place the data into it. In this case, a new collection named **Auctions** will be created, and the specified data will be added to it:

```js
addDoc(collection(db, “Auctions”), {
  title: “Bicycle”,
  user: “Kari Nordmann”
});
```

BILDE
BILDE

n both cases, after adding the data to the collection, an ID will be created. It is possible to get this auto-generated ID in the terminal by adding the following code:

```js
.then(docRef => {
   console.log(docRef.id);
})
.catch(error => {
   console.log(error);
});
```

(Tamil 2024).

BILDE

#### setDoc() method

The key difference between the first and second methods for adding data to the database is the ability for the developer to create a document ID when using the **setDoc() method**. It's important to note that although it's possible to auto-generate a document ID with the **setDoc() method**, this won't be covered in this article.
To use the **setDoc() method**, it is necessary to add the following code at the beginning of the **index.js** file:

```js
import { getFirestore, doc, setDoc } from "firebase/firestore";
```

The **setDoc() method** takes two arguments: doc() and data{}, like this:

```js
setDoc(doc(), data{});
```

The **doc()** takes three arguments: the **database** the developer wants to add the data to (db), the **collection** name (e.g., "Auctions"), and the chosen **document ID** selected by the developer, like this:

```js
setDoc(doc(db, "Auctions", "RunarNordmannAuctions"), {
  title: "Scooter",
  user: "Runar Nordmann",
});
```

To check if the chosen document ID was successfully added to the database, the developer can use the following code:

```js
.then(() => {
   console.log("Yes, it worked!");
})
.catch(error => {
   console.log(error);
});
```

and run **index.js** in the terminal or or check the project on Firebase desktop to verify the results:

BILDE
BILDE

The table below summarize these two methods:

<table>
<tr>
<th></th>
<th>addDoc() method</th>
<th>setDoc() method</th>
</tr>
<tr>
<td>import</td>
<td>
<pre lang="js">
import { getFirestore, collection, addDoc} from "firebase/firestore";
</pre>
</td>
<td>
<pre lang="js">import { getFirestore, doc, setDoc } from "firebase/firestore";</pre>
</td>
</tr>
<tr>
<td>syntax</td>
<td><pre lang="js">addDoc(collection(database, “collectionName”), data{
key: “value”,
key: “value”,
key: “value”,
…})
</pre></td>
<td><pre lang="js">setDoc(collection(database, “collectionName”, “documentIdName”), data{
key: “value”,
key: “value”,
key: “value”,
…})
</pre></td>
</tr>
<tr>
<td>example</td>
<td><pre lang="js">addDoc(collection(db, “Auctions”), {
title: “Bicycle”,
user: “Kari Nordmann”
})
</pre></td>
<td><pre lang="js">setDoc(doc(db, “Auctions”, ”RunarNordmannAuctions” ), {
title: “Scooter”, 
user: “Runar Nordmann”
})
</pre></td>
</tr>
<tr>
<td>features</td>
<td><pre lang="js">user get auto-generated document ID</pre></td>
<td><pre lang="js">user get auto-generated document ID or self decides the name of it (e.i.”RunarNordmannAuctions”)</pre></td>
</tr>
</table>

### Updating data in Cloud Firestore

#### setDoc() method

To update a document entirely or partially using the setDoc() method, it's crucial to first initialize Firebase, documents, and the correct method by entering the code:

```js
import { getFirestore, doc, setDoc } from "firebase/firestore";
```

Then, initialize the Firestore Database by adding:

```js
const db = getFirestore(app);
```

Finally, the query to Cloud Firestore can be executed. Depending on the type of replacement, the syntax will vary. If the document is to be replaced entirely, the **setDoc() method** will take two arguments: **doc()** and **data{}**. **doc()** will take three arguments: the **database** (db), the name of the **collection** the developer wants to update (e.g., Users), and the **document ID**, which can be found in the developer's Cloud Firestore on the Firebase website:

BILDE

The code should have this structure:

```js
setDoc(doc(db, "Users", "B5NLkVBxPG6iNpnFlNT8"), {
  credits: 1000,
  email: "KariNordmannSvensson@gmail.com",
  name: "Kari Nordmann Svensson",
  password: "Karipassord789",
  avatar: "",
});
```

After running this code using **node index.js** in the terminal, the changes should be reflected in the developer's Cloud Firestore on the Firebase website.

BILDE
BILDE

In the case when the document will be replaced only partially, **setDoc()** will take three arguments: **doc()**, **data{}**, and **{merge: true}**. The **doc()** arguments will be the same as above—representing the **database** (db), the name of the **collection** the developer wants to update (e.g., Users), and the **document ID** that can be found in the developer's Cloud Firestore on the Firebase website. Additionally, the developer can add a new key-value pair if they wish (e.g., NumberOfAuctions: 3). The code should have this structure:

```js
setDoc(
  doc(db, "Users", "B5NLkVBxPG6iNpnFlNT8"),
  {
    credits: 800,
    avatar:
      "https://commons.wikimedia.org/wiki/File:770._Petrine_Olsen,_Selfors_-_NB_bldsa_OTO0586_A.jpg",
    numberOfAuctions: 3,
  },
  { merge: true }
);
```

After running this code using **node index.js** in the terminal and updating the developer's Cloud Firestore on the Firebase website, the changes will be implemented.

BILDE
BILDE

It is crucial to mention here that this method allows the developer to replace old key-value pairs with new ones, but it will not permit the changing of the key once it is first created—only the value can be modified.

#### updateDoc() method

The **updateDoc() method** is the second approach to updating data in Cloud Firestore. Unlike the **setDoc() method**, **updateDoc()** only allows partial updates to documents. Moreover, this method enables the modification of values within key-value pairs but does not permit changes to the key itself.

The first step in using this method to update data is to import and initialize Firebase, documents, and the **updateDoc() method**. This method takes two arguments: **doc()** and **data{}**. The **doc()**, in turn, requires three arguments: the **database** (db), the name of the **collection** the developer wants to update (e.g., Users), and the **document ID** that can be found in the developer's Cloud Firestore on the Firebase website.

BILDE

In this example, the developer will update the document w9Tr1IjYoXeaTHqdKv9X from **Users** collections. The registered user, Ola Nordmann will have his credits reduced and added new key-value pairs, namely, avatar with the link to the image and the number of auctions he participated in. Hence the code will look like this:

BILDE

And the updated database will look like this:

BILDE

The table below summarize these two methods:

<table>
<tr>
<th></th>
<th>setDoc() method</th>
<th>updateDoc() method</th>
</tr>
<tr>
<td>import</td>
<td>
<pre lang="js">import { getFirestore, doc, setDoc } from "firebase/firestore";</pre>
</td>
<td>
<pre lang="js">import { getFirestore, doc, updateDoc } from "firebase/firestore";</pre>
</td>
</tr>
<tr>
<td>syntax</td>
<td><pre lang="js">The document is to be replaced entirely: </br>
setDoc(doc(database, “collectionName”, “documentIdName”), data{
key: “value”,
key: “value”,
key: “value”,
…})
</pre>
<pre lang="js">
The document is to be replaced partially: </br>
setDoc(doc(database, “collectionName”, “documentIdName”), data{
key: “value”,
key: “value”,
key: “value”,
…}, {merge: true})
</pre></td>
<td><pre lang="js">The document is to be replaced partially:</br> 
updateDoc(doc(database, “collectionName”, “documentIdName”), data{
key: “value”,
key: “value”,
key: “value”,
…})
</pre></td>
</tr>
<tr>
<td>example</td>
<td><pre lang="js">Before update:</br>
credits: 1000,
email: “KariNordmann@gmail.com”,
name: “Kari Nordmann”
password: “Karipassword123”
</pre>
<pre lang="js">
The document is to be replaced entirely:</br>
setDoc(doc(db, “Users”, “B5NLkVBxPG6iNpnFlNT8”), {
avatar: “”,
credits: 1000,
email: “KariNordmannSvensson@gmail.com”,
name: “Kari Nordmann Svensson”
password: “Karipassword789”
})
</pre>
<pre lang="js">The document is to be replaced partially:</br>
setDoc(doc(db, “Users”, “B5NLkVBxPG6iNpnFlNT8”), {
avatar: “Kari.jpg”,
credits: 800,
numberOfAuctions: 3
}, {merge: true})
</pre></td>
<td><pre lang="js">Before update:</br>
credits: 2000,
email: “OlaNordmann@gmail.com”,
name: “Ola”
password: “12345678”
</pre>
<pre lang="js">The document is to be replaced partially:</br>
updateDoc(doc(db, “Users”, “B5NLkVBxPG6iNpnFlNT8”), {
avatar: “Ola.jpg”,
credits: 200,
numberOfAuctions: 6
})
</pre>
</td>
</tr>
<tr>
<td>features</td>
<td><pre lang="js">updates the document entirely or partially</br>
can replace old key-value pairs with the new ones or create the new ones</br>
can replace a value, but not the key of existing key-value pair
</pre></td>
<td><pre lang="js">
updates the document partially</br>
can’t replace old key-value pairs, but can create the new ones</br>
can replace a value, but not the key of existing key-value pair
</pre></td>
</tr>
</table>

### Deleting data in Cloud Firestore

#### updateDoc() method

As in previous cases, it is necessary to import Firebase, documents, and the correct method by entering the code:

```js
import { getFirestore, doc, updateDoc, deleteField } from "firebase/firestore";
```

Then, initialize the Firestore Database by adding:

```js
const db = getFirestore();
```

This method, **updateDoc()**, will take two arguments: **doc()** and **data{}**. The **doc()**, in turn, will require three arguments: the **database** (db), the name of the **collection** (e.g., Users), and finally, the **document ID** that can be found in the developer's Cloud Firestore on the Firebase website.

BILDE

Concerning the **data{}**, the syntax for deleting a field will be as follows:

```js
key: deleteField();
```

In a practical example, if the developer wanted to delete the _avatar_ key and its value from the database, the code would look like this:

BILDE

The updated database without _avatar_ key and its value:

BILDE

#### deleteDoc() method

This method allows the developer to delete entire documents with all their key-value pairs. As always, it is crucial to start with the import of Firebase, documents, and the correct method by entering the code:

```js
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
```

Then, initialize the Firestore Database by adding:

```js
const db = getFirestore();
```

This method, **deleteDoc()**, will take only one argument: **doc()**. The **doc()** will require three arguments: the **database** (db), the name of the **collection** (e.g., Users), and finally, the **document ID** that can be found in the developer's Cloud Firestore on the Firebase website.

BILDE

In a practical example, if the developer wanted to delete the entire document marked with ID _w9Tr1IjYoXeaTHqdKv9X_ from the database, the code would look like this:

BILDE

After running **node index.js** in the terminal, the updated database would look as follows:

BILDE

The table below summarize these two methods:

<table>
<tr>
<th></th>
<th>updateDoc() method</th>
<th>deleteDoc() method</th>
</tr>
<tr>
<td>import</td>
<td>
<pre lang="js">
import { getFirestore, doc, updateDoc, deleteField } from "firebase/firestore";
</pre>
</td>
<td>
<pre lang="js">import { getFirestore, doc, deleteDoc } from "firebase/firestore";</pre>
</td>
</tr>
<tr>
<td>syntax</td>
<td><pre lang="js">updateDoc(doc(database, “collectionName”, “documentIdName”), data{
key: deleteField(),
key: deleteField(),
key: deleteField(),
…})
</pre></td>
<td><pre lang="js">deleteDoc(doc(database, “collectionName”, “documentIdName”))
</pre></td>
</tr>
<tr>
<td>example</td>
<td><pre lang="js">Before update:</br>
avatar: “Kari.jpg”,
credits: 800,
email: “KariNordmannSvensson@gmail.com”,
name: “Kari Nordmann Svensson”,
numberOfAuctions: 3,
password: “Karipassword789”
</pre>
<pre lang="js">update(doc(db, “Users”, “B5NLkVBxPG6iNpnFlNT8”), {
avatar: deleteField()
})
</pre>
<pre lang="js">After update:</br>
credits: 800,
email: “KariNordmannSvensson@gmail.com”,
name: “Kari Nordmann Svensson”,
numberOfAuctions: 3,
password: “Karipassword789”
</pre>
</td>
<td><pre lang="js">Before update:</br>
avatar: “Ola.jpg”,
credits: 200,
email: “OlaNordmann@gmail.com”,
name: “Ola”
numberOfAuctions: 6
password: “12345678”
</pre>
<pre lang="js">deleteDoc(doc(db, “Users”, “w9Tr1IjYoXeaTHqdKv9X“))
</pre></td>
</tr>
<tr>
<td>features</td>
<td><pre lang="js">deletes part of the document (specific key-value pair)</pre></td>
<td><pre lang="js">deletes the entire document with all key-value pairs</pre></td>
</tr>
</table>

### Getting the data from Cloud Firestore

#### getDoc() method

This method enables getting a specific document and returns it as an object from the Firestore database. As always, it is crucial to start with the import of Firebase, documents, and the correct method by entering the code:

```js
import { getFirestore, doc, getDoc } from "firebase/firestore";
```

Then, initialize the Firestore Database by adding:

```js
const db = getFirestore();
```

This method, **getDoc()**, will take only one argument: **doc()**. The **doc()**, will require three arguments: the **database** (db), the name of the **collection** (e.g., Users), and finally, the **document ID** that can be found in the developer's Cloud Firestore on the Firebase website.

BILDE

In a practical example, this method has been awaited and assigned to _kariData_ and then returned as object and shown in the terminal after running **node index.js**:

BILDE

#### getDocs() method

This method enables getting all the documents from an existing collection. The code for import looks as follows:

```js
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";
```

and it is crucial to initialize the database with

```js
const db = getFirestore();
```

Next step is to use the method itself. **getDocs()** takes one argument - **collection()**, and **collection()** takes two arguments: the **database** and the name of the **collection** that the developer wants to fetch. In a practical example it will be the _Auctions_ collection:

BILDE

BILDE

```js
const auctionsData = await getDocs(collection(db, "Auctions"));
```

This code snippet succinctly conveys the process of fetching the entire _Auctions_ collection.
The last step is to print the whole collection. This can be done by entering:

```js
auctionsData.forEach((doc) => {
  console.log(doc.data());
});
```

Running **node index.js** in the terminal should provide the developer with the data from the _Auctions_ collection:

BILDE

The table below summarize these two methods:

<table>
<tr>
<th></th>
<th>getDoc() method</th>
<th>getDocs() method</th>
</tr>
<tr>
<td>import</td>
<td>
<pre lang="js">import { getFirestore, doc, getDoc } from "firebase/firestore";
</pre>
</td>
<td>
<pre lang="js">import { getFirestore, doc, getDocs} from "firebase/firestore";</pre>
</td>
</tr>
<tr>
<td>syntax</td>
<td><pre lang="js">await getDoc(doc(database, “collectionName”,  “documentIdName”))
</pre></td>
<td><pre lang="js">await getDocs(collection(database, “collectionName”))
</pre></td>
</tr>
<tr>
<td>example</td>
<td><pre lang="js">await getDoc(doc(db, “Users”))
</pre></td>
<td><pre lang="js">await getDocs(collection(db, “Auctions”))
</pre></td>
</tr>
<tr>
<td>features</td>
<td><pre lang="js">fetches certain document</pre></td>
<td><pre lang="js">fetches the whole collection</pre></td>
</tr>
</table>

## Sources:

Firebase (u.a.). _Using module bundlers with Firebase_. Retrieved 18.02.2024 from: [https://firebase.google.com/docs/web/module-bundling?authuser=0&hl=en](https://firebase.google.com/docs/web/module-bundling?authuser=0&hl=en);

Firebase a (u.a.). _Understand Firebase projects_ .Retrieved 18.02.2024 from: [https://firebase.google.com/docs/projects/learn-more?hl=en&authuser=0](https://firebase.google.com/docs/projects/learn-more?hl=en&authuser=0);

Firebase b (u.a.). _Cloud Firestore_ .Retrieved 18.02.2024 from: [https://firebase.google.com/docs/firestore?hl=en&authuser=0](https://firebase.google.com/docs/firestore?hl=en&authuser=0);

Firebase c (u.a.). _Usage and limits_ .Retrieved 18.02.2024 from: [https://firebase.google.com/docs/firestore/quotas](https://firebase.google.com/docs/firestore/quotas);

Firebase d (u.a.). _Get started with Cloud Firestore_ .Retrieved 18.02.2024 from: [https://firebase.google.com/docs/firestore/quickstart#web-modular-api](https://firebase.google.com/docs/firestore/quickstart#web-modular-api);

Firebase e (u.a.). _Supported data types_ .Retrieved 18.02.2024 from: [https://firebase.google.com/docs/firestore/manage-data/data-types?hl=en&authuser=0](https://firebase.google.com/docs/firestore/manage-data/data-types?hl=en&authuser=0);

Firebase f (u.a.). _Choose a data structure_ .Retrieved 18.02.2024 from: [https://docs.google.com/document/d/1uDfa0lSvHz-nmnBJP_BJtH4eoiwGZRi9hkmMzWMKKwQ/edit](https://docs.google.com/document/d/1uDfa0lSvHz-nmnBJP_BJtH4eoiwGZRi9hkmMzWMKKwQ/edit);

Firebase g (u.a.). _Add data to Cloud Firestore_ .Retrieved 18.02.2024 from: [https://firebase.google.com/docs/firestore/manage-data/add-data](https://firebase.google.com/docs/firestore/manage-data/add-data);

Mdn Web Docs (u.a.). _Tree-shaking_. Retrieved 18.02.2024 from: [https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking);

Noroff (u.a.) _Semester Project 2 brief_. Retrieved 18.02.2024 from: [​​https://content.noroff.dev/semester-project-2/brief.html](​​https://content.noroff.dev/semester-project-2/brief.html);

Tamil.R (01.2024) _The Complete Firebase & JavaScript Beginner's Friendly Guide_.Retrieved 18.02.2024 from: [https://www.udemy.com/course/javascript-firebase-build-full-stack-web-apps-faster/learn/lecture/32562582#reviews](https://www.udemy.com/course/javascript-firebase-build-full-stack-web-apps-faster/learn/lecture/32562582#reviews);

Retrieved 18.02.2024 from: []();

Retrieved 18.02.2024 from: []();

Retrieved 18.02.2024 from: []();

Retrieved 18.02.2024 from: []();

.
