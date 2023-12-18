// MÉTODO ANTIGO
document.getElementById("teste") //pega o elemento através do ID
document.getElementsByTagName("h1") // pega o elmento através da TAG
document.getElementsByTagName("titulo") // pega o elmento através da classe css
// ----------------------
// MÉTODO NOVO

document.querySelector() // pega apenas um elemento
document.querySelectorAll() // pega todos os elementos

document.querySelector("#teste") // pega o elemento com id teste
document.querySelectorAll(".teste") //pega todos os elementos com a classe teste
document.querySelectorAll(p) // pega todos os elemetos com a tag p
document.querySelectorAll("a[href='www.google.com']") // pega todos os elementos a que tenham o atributo href="www.google.com"