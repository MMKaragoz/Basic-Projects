// The dog links were taken from https://dog.ceo/dog-api/documentation/ and used.

const HUSKY_URL = "https://dog.ceo/api/breed/husky/images/random";
const DINGO_URL = "https://dog.ceo/api/breed/dingo/images/random";
const AKITA_URL = "https://dog.ceo/api/breed/akita/images/random";
const RETRIEVER_URL = "https://dog.ceo/api/breed/retriever/images/random";
const HOUND_URL = "https://dog.ceo/api/breed/hound/images/random";
const CORGI_URL = "https://dog.ceo/api/breed/corgi/images/random";


function showTheDog(dogBreed){
    
    if (dogBreed == "husky") {
        addNewDog(HUSKY_URL, dogBreed);
    } else if (dogBreed == "dingo") {
        addNewDog(DINGO_URL, dogBreed);
    } else if (dogBreed == "akita") {
        addNewDog(AKITA_URL, dogBreed);
    } else if (dogBreed == "retriever") {
        addNewDog(RETRIEVER_URL, dogBreed);
    } else if (dogBreed == "hound") {
        addNewDog(HOUND_URL, dogBreed);
    } else {
        addNewDog(CORGI_URL, dogBreed);
    }

}

function addNewDog(DOG_URL, alt_dog) {
    const promise = fetch(DOG_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            // promise chaining
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = alt_dog;
            DOGS.appendChild(img);
            console.log(`${alt_dog} added.`);
        });       

}


function deleteLastDog() {
    deleteLast = document.getElementsByTagName("img");
    if (deleteLast.length === 0){
        alert("You can not delete more! Firstly, you have to add a dog");
    }
    deleteLast[deleteLast.length - 1].remove();
    console.log("deleted");

}

function whichOneTook() {
    token = document.querySelector("#dogs");
    showTheDog(token.value);

}

const DOGS = document.querySelector(".dogs-list");

document.querySelector(".btn-add").addEventListener("click", whichOneTook);
document.querySelector(".btn-del").addEventListener("click", deleteLastDog);