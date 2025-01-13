document.addEventListener('DOMContentLoaded', function() {
    function getQueryVariable(variable) {
        const query = window.location.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return false;
    }

    const productData = {
        '1': { img: 'product1.jpg', name: 'Organic Tomatoes', price: '$3.49', description: 'Our organic tomatoes are a healthy and delicious choice, perfect for salads and sauces.' },
        '2': { img: 'product2.jpg', name: 'Organic Cauliflower', price: '$3.86', description: 'Explore the taste of fresh, organic cauliflower. Ideal for stews and roasts.' },
        '3': { img: 'product3.jpg', name: 'Organic Onion', price: '$1.56', description: 'Staple for any kitchen, our organic onions are full of flavor, perfect for any dish.' },
        '4': { img: 'product4.jpg', name: 'Organic Spinach', price: '$2.99', description: 'Rich in nutrients and flavor, our organic spinach is a great addition to any meal.' },
        '5': { img: 'product5.jpg', name: 'Organic Jalapeño', price: '$1.79', description: 'Add a spicy kick to your meals with our fresh, organic jalapeños.' },
        '6': { img: 'product6.jpg', name: 'Organic Pumpkin', price: '$2.79', description: 'Our organic pumpkins are perfect for pies, soups, or carving during the festive season.' },
        '7': { img: 'product7.png', name: 'Organic Broccoli', price: '$0.99', description: 'Enjoy our fresh organic broccoli, great for both raw and cooked dishes.' },
        '8': { img: 'product8.png', name: 'Organic Cucumber', price: '$1.00', description: 'Crisp and refreshing, our organic cucumbers are perfect for salads or as a healthy snack.' },
        '9': { img: 'product9.png', name: 'Organic Carrot', price: '$1.00', description: 'Sweet and crunchy, our organic carrots are ideal for snacking, juicing, or adding to your favorite dishes.' },
        '10': { img: 'product10.png', name: 'Organic Eggplant', price: '$1.00', description: 'Our organic eggplants are rich in flavor and incredibly versatile, perfect for grilling, roasting, or making hearty stews.' }
    };

    if (window.location.pathname.includes('single_item.html')) {
        const productId = getQueryVariable('product');
        if (productData[productId]) {
            document.getElementById('productImage').src = productData[productId].img;
            document.getElementById('productImage').alt = productData[productId].name;
            document.getElementById('productName').textContent = productData[productId].name;
            document.getElementById('productPrice').textContent = productData[productId].price;
            document.getElementById('productDescription').textContent = productData[productId].description;
            const buyButton = document.querySelector('.purchase-btn');
            buyButton.addEventListener('click', function(event) {
                event.preventDefault();
                listItem(productId);
            });
        }
    }
});

function listItem(productId) {
    console.log("Listing product ID: " + productId);
    alert("Product ID " + productId + " is now listed.");
}












