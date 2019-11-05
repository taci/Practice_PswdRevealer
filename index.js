//criou a classe PasswerdRevealer
class PasswordRevealer {
    element = " ";
    //posso acrescentar o strength e o eye, igual o element acima.

    //Constructor = Primeira coisa a ser executada quando a classe for instanciada, ele eh executado de forma sequencial.
    constructor(inputId) {
        if (!inputId) {
            throw new Error("You need an Id in the constructor");
        }
        this.getInput(inputId);
        this.style();
        this.build();
    }

    //metodo para pegar o valor do campo de Input pelo Id
    getInput(inputId) {
        this.element = document.getElementById(inputId);

        if (this.element === null) {
            throw new console.error("Element not found.");
        }
    }

    // metodo que:
    build() {
        const container = document.createElement("div");
        this.element.parentNode.insertBefore(container, this.element.nextSibling);
        container.appendChild(this.element);

        // const eye = document.createElement("div");
        // eye.innerHTML = "EYE";
        // container.appendChild(eye);

        const strength = document.createElement("div");
        strength.innerHTML = "";
        strength.id = "strength";
        container.appendChild(strength);
    }

    //metodo para definir o style da pagina, eu resolvi fazer funcoes fora da classe.
    style() {

    }
}

//instancia da classe passando o id do elemento, que no caso eh o id do textbox.
const password = new PasswordRevealer("password");

function myFunction() {
    const strenghtStyle = document.getElementById("strength");
    let length = password.element.value.length;
    let className = '';
    let styleColor = '';

    if (length <= 3) {
        strenghtStyle.className = "container-face far fa-frown is-frown";

    } else if (length >= 4 && length <= 6) {
        strenghtStyle.className = "container-face far fa-meh is-meh"

    } else {
        strenghtStyle.className = "container-face far fa-smile is-smile"
            //document.getElementById("strength").removeAttribute("class");
            //document.getElementById("strength").setAttribute("class", "container-face far fa-smile");
            //strenghtStyle.style.color = "green";
    }

}

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});