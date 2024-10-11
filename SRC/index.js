function handleSearchSubmit(event){
    event.preventDefault();
    let searchlnput = document.querySelector("#search-form-input");
    let cityElement= document.querySelector( "#city");
    cityElement.innerHTML = searchlnput.value;
}
let searcFormElement = document.querySelector("#search-form");
searcFormElement.addEventListener("submit,handleSearchSubmit");