// PROMISES PROMISES PROMISES

const parent = document.querySelector("#parent");
const button = document.createElement("button");
const name = prompt("What is your name?");


const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = {name: "Shoes", price: 1000};
        if (data) {
            resolve(data);
        } else {
            reject("No Data");      
        }
    }, 2000); 
    });
}

fetchData()
    .then((data) => {
    console.log("Buy the shoes!"); 
    })
    .catch((error) => {
        console.log("No shoes for you!");
    });


fetchData()
    .then((data) => {
        button.innerText = "Buy the Shoes!";
        button.addEventListener("click", () => {
            console.log("Buy Button clicked!")
        });
        parent.appendChild(button);
    })
    .catch((error) => {
        button.innerText = "Exit the Store";
        button.addEventListener("click", () => {
            console.log("Exit Button clicked!")
        });
        parent.appendChild(button);
    });

// End of PROMSISES

// ASYNC AWAIT

const showPicture = async () => {
    const response = await fetch(`https://cataas.com/cat`);
    const img = document.createElement("img");
    img.src = response.url
    document.body.appendChild(img);
    return img;
};

const initialize = async () => {
    const data = await fetchData();
    const img = await showPicture(data);
};

initialize();

// End of ASYNC AWAIT

// Callback Heaven 

function sayThanks(name, callback) {
    button.addEventListener("click", () => {
        const thanks = alert('Thank you for your purchase ' + name + '! We appreciate your business.');
        callback(thanks);
    });
  }

function logThanks(thanks) {
    console.log(name);
}

sayThanks(name, logThanks);

