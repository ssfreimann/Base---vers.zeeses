const salate =
[
    {
        "name": "Green salad with tomatoe",
        "prize": "4$",
        "id": 1,
        "ingredients": [
            "Iceberg lettuce",
            "Tomatoes"
        ],
        "imageUrl": "https://farm6.staticflickr.com/5087/5358599242_7251dc7de4.jpg"
    },
    {
        "name": "Tomato salad with mozzarella",
        "prize": "5$",
        "id": 2,
        "ingredients": [
            "Tomato",
            "Mozzarella"
        ],
        "imageUrl": "https://farm4.staticflickr.com/3130/5862973974_c107ed81ea.jpg"
    },
    {
        "name": "Field salad with egg",
        "prize": "4$",
        "id": 3,
        "ingredients": [
            "Field salad",
            "Egg"
        ],
        "imageUrl": "https://farm9.staticflickr.com/8223/8372222471_662acd24f6.jpg"
    },
    {
        "name": "Rocket with parmesan",
        "prize": "5$",
        "id": 4,
        "ingredients": [
            "Rocket",
            "Parmesan"
        ],
        "imageUrl": "https://farm8.staticflickr.com/7017/6818343859_bb69394ff2.jpg"
    }
]
let salatContainer = document.querySelector("#salatContainer");
console.log("salatContainer", salatContainer);
for(let i = 0; i < salate.length;i++){ 
    let salat = salate[i];
    console.log("salat", salat);

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div>
        <p>
            <img class="salat" src="${salat.imageUrl}"/>
            <p class="salat_t">${salat.name}</p>
            <p class="salad_ut">${salat.ingredients}</p>
            <div class="cost_sa">
                <div>
                    <select>
                        <option value="french">french</option>
                        <option value="italian">italian</option>
                    </select>
                </div>
                <div>
                    ${salat.prize}
                    <img class="buy_sa" src="warenkorb.png" />
                </div>
            </div>
        </p>
    </div>
    `;
    salatContainer.appendChild(newDiv);
}
let warenkorbButtons = document.querySelectorAll(".buy_sa");
console.log("buyButtons", warenkorbButtons);
for(let i = 0; i < warenkorbButtons.length;i++){
    let button = warenkorbButtons[i];
    console.log("Button", button);
    button.addEventListener("click", function (){
    let Zahl = document.getElementById("warenkorbZahl").innerText
    Zahl++

  document.getElementById("warenkorbZahl").innerText = Zahl;
});
} 