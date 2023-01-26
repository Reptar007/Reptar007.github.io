
const fetchFact = async () => {
    try {
        const data = await fetch(
          "https://uselessfacts.jsph.pl/random.json?language=en"
        );
        
        const response = await data.json()
        const fact = response.text

        
        const container = document.querySelector('.fact')
        container.innerHTML = fact

    } catch (e){
        console.log("Failed to fetch image", e);
    }
}

const createNewFactBtn = () => {
  const newKittenBtn = document.createElement("button");
  newKittenBtn.id = "new-fact";
  newKittenBtn.innerText = "New Fact";
  newKittenBtn.addEventListener("click", fetchFact);
  return newKittenBtn;
};

const createFactButton = () => {
    const container = document.querySelector(".fact-container");
    const button = createNewFactBtn()
    
    container.appendChild(button)

}


window.onload = () => {
    createFactButton()
    fetchFact()
}