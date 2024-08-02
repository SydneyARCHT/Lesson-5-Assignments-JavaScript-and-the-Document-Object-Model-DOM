let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const container = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');

        const nameElement = document.createElement('h3');
        const priceElement = document.createElement('p');
        const descriptionElement = document.createElement('p');

        nameElement.textContent = product.name;
        priceElement.textContent = `$${product.price.toFixed(2)}`;
        descriptionElement.textContent = product.description;

        productDiv.appendChild(nameElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(descriptionElement);

        container.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

function handleSubmit(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const eMail = document.getElementById("eMail").value;
    const message = document.getElementById("message").value;

    alert(fullName + " has been added to the page");

    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = `
        <strong>Full Name:</strong> ${fullName} <br>
        <strong>Email:</strong> ${eMail} <br>
        <strong>Message:</strong> ${message} <br>`;

    document.getElementById("container").appendChild(newParagraph);

    document.getElementById("nameForm").reset();
}

function changeColor() {
    const box = document.getElementById('box');
    const colors = ['lightgray', 'lightgreen', 'lightpink', 'lightyellow', 'lightblue'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    box.style.backgroundColor = newColor;
}

function changeText() {
    const button = document.getElementById('clickButton');
    button.textContent = 'Clicked!';
}