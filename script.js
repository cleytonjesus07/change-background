const bgColor = document.querySelector("#bg-color");
const boxColor = document.querySelector("#box-color");
const btnAddColor = document.querySelector("#add-color");
const boxControl = document.querySelector(".box-control");
const warning = document.querySelector("#warning");

let colorHex = null;
let colorHistory = [];
document.body.onload = () => setEventBtn();

boxColor.addEventListener("input", (e) => {
    /* Desabilitar o botão só quando tiver algum valor no input type color */
    colorHex = e.target.value;
    if (colorHex || colorHex !== "") {
        btnAddColor.removeAttribute("disabled");
    }
})

btnAddColor.addEventListener("click", () => {
    /* Adicionar um botão na caixa de cores */
    if (colorHistory.findIndex(colorH => colorH === colorHex) === -1) {
        if (colorHex && colorHistory.filter(colorH => colorH === colorHex).length <= 0) {
            warning.innerText = "";
            boxControl.insertAdjacentHTML("beforeend", `
            <button style="background-color:${colorHex}" class="btn"></button>
            `);
            setEventBtn();
            colorHistory.push(colorHex);
            console.log({warning:"FOI dentro do if"})
            return;
        }
    }else{
        warning.innerText = "Cor já escolhida, experimente outra cor! :("
    }

})

function setEventBtn() {
    /* Adicionar eventos aos botões na caixa de cores */
    const btns = document.querySelectorAll(".btn");

    btns.forEach(btn => {
        btn.onclick = (e) => {
            const color = e.currentTarget.classList[1] || e.currentTarget.style.backgroundColor;
            document.body.style.backgroundColor = color;

            (document.body.style.backgroundColor === "rgb(0, 0, 0)") ? document.body.style.color = "#fff" : document.body.style.color = "initial";
        }
    })

}