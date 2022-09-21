const drinks =
[
    {
        "name": "Coke",
        "prize": "2$",
        "id": 1,
        "imageUrl": "https://farm1.staticflickr.com/71/203324363_b448827eb0.jpg",
        "volume": "50cl"
    },
    {
        "name": "Fanta",
        "prize": "2$",
        "id": 2,
        "imageUrl": "https://farm1.staticflickr.com/684/32876893826_130576f75a.jpg",
        "volume": "50cl"
    },
    {
        "name": "Pepsi",
        "prize": "2$",
        "id": 3,
        "imageUrl": "https://farm4.staticflickr.com/3344/3593103557_bf47c0a3a2.jpg",
        "volume": "50cl"
    },
    {
        "name": "Red bull",
        "prize": "3$",
        "id": 4,
        "imageUrl": "https://farm3.staticflickr.com/2391/2507916617_254348d40c.jpg",
        "volume": "50cl"
    }
]
let drinkContainer = document.querySelector("#drinkContainer");
console.log("drinkContainer", drinkContainer);
for(let i = 0; i < drinks.length;i++){
    let drink = drinks[i];
    console.log("Drink", drink);
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div>
        <p>
            <img class="sdrink" src="${drink.imageUrl}"/>
            <p class="sdrink_t">${drink.name}</p> <!--t for titel-->
            <div class="price_sdr">
                <div>
                    <select>
                        <option value="50cl">50cl</option>
                        <option value="33cl">33cl</option>
                    </select>
                </div>
                <div>
                    ${drink.prize}
                    <img class="buy_sdr" src="warenkorb.png" />
                </div>
            </div>
        </p>
    </div>
    `;
    drinkContainer.appendChild(newDiv);
}