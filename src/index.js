function generatePoem(event) {
    event.preventDefault();



    let instructionsInput = document.querySelector("#user-instructions")
    let apiKey = "aofa346fccet13abb06d833e45790bfc";
    let context =
      "you are a professional poet who can write a poem based on any prompt in basic HTMl. Do not include a title for the poem. Make sure to follow the instructions"
       let prompt = `write a four line long poem about ${instructionsInput.value}`;
    let poemProgress = document.querySelector("#poem");
    poemProgress.innerHTML = `Your poem about ${instructionsInput.value} is being generated`;

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(typePoem);
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");

    function typePoem(response) {
      new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);

