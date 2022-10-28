import './App.css';
function selected () {
  let selectedValueLength = document.getElementById("convert").value;
  let number = document.getElementById("introducedValue").value;
  let inputLength = document.getElementById("inputLength");
  let answerText = document.getElementById("outcomeAnswer");
  let answerLength = document.getElementById("outcome");
  let answer = 0;
  switch (selectedValueLength) {
    case "1":
      answer = number * 0.625 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "miles";
      inputLength.innerHTML = "km";
      break;
    case "2":
      answer = number * 1.609344 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "km"
      inputLength.innerHTML = "miles";
      break;
    case "3":
      answer = number * 0.3048 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "meter"
      inputLength.innerHTML = "foot";
      break;
    case "4":
      answer = number / 0.3048 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "foot"
      inputLength.innerHTML = "meter";
      break;
    case "5":
      answer = number / 2.54 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "inch"
      inputLength.innerHTML = "cm";
      break;
    case "6":
      answer = number * 2.54 ;
      answerText.innerHTML= answer.toFixed(2);
      answerLength.innerHTML = "cm"
      inputLength.innerHTML = "inch";
      break;
    default:
      number.innerHTML = 0;
      answerText.innerHTML= 0;
      answerLength.innerHTML = "miles"
      inputLength.innerHTML = "km";
       break;
  }
}
function buttonClicked() {
  document.getElementById("convert").value= "1";
  document.getElementById("introducedValue").value = 100;
  document.getElementById("outcomeAnswer").innerHTML = 62.12;
  document.getElementById("outcome").innerHTML = "miles";
  document.getElementById("inputLength").innerHTML = "km";
}

function App() {
  return (
    <div className="App">
      <nav>
        <h1>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.04046 1.70711C5.43098 1.31658 5.43098 0.683417 5.04046 0.292893C4.64994 -0.0976311 4.01677 -0.0976311 3.62625 0.292893L0.95958 2.95956C0.569056 3.35008 0.569056 3.98325 0.95958 4.37377L3.62625 7.04044C4.01677 7.43097 4.64994 7.43097 5.04046 7.04044C5.43098 6.64992 5.43098 6.01675 5.04046 5.62623L4.0809 4.66667H17.6667C18.219 4.66667 18.6667 4.21895 18.6667 3.66667C18.6667 3.11438 18.219 2.66667 17.6667 2.66667H4.0809L5.04046 1.70711Z" fill="#2E0039"/>
            <path d="M16.9596 10.9596C16.5691 11.3501 16.5691 11.9833 16.9596 12.3738L17.9191 13.3333H4.33335C3.78107 13.3333 3.33335 13.781 3.33335 14.3333C3.33335 14.8856 3.78107 15.3333 4.33335 15.3333H17.9191L16.9596 16.2929C16.5691 16.6834 16.5691 17.3166 16.9596 17.7071C17.3501 18.0976 17.9833 18.0976 18.3738 17.7071L21.0405 15.0404C21.431 14.6499 21.431 14.0168 21.0405 13.6262L18.3738 10.9596C17.9833 10.569 17.3501 10.569 16.9596 10.9596Z" fill="#2E0039"/>
          </svg>
          unit converter
        </h1>
      </nav>
      <div className="card">
        <h3>convert</h3>
        <div className="container" id='converter'>
          <div id='firstLine'>
            <select id="convert" onChange={selected}>
              <option value="1">km &#8594; miles</option>
              <option value="2">miles &#8594; km</option>
              <option value="3">foot &#8594; meter</option>
              <option value="4">meter &#8594; foot</option>
              <option value="5">cm &#8594; inch</option>
              <option value="6">inch &#8594; cm</option>
            </select>
            <button onClick={buttonClicked}> &#8644;</button>
          </div>
          <div className="container" id='inputConverter'>
            <input type="number" id="introducedValue" min="0"  defaultValue="100" onChange={selected}></input>
            <p id='inputLength'>km</p>
          </div>
        </div>
        <div className="container" id="secondLine">
          <button id="heartBtn"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 5.0298C0.25 2.3293 2.61914 0.25 5.4 0.25C6.83347 0.25 8.09484 0.922139 9 1.79183C9.90516 
                                  0.922139 11.1665 0.25 12.6 0.25C15.3809 0.25 17.75 2.3293 17.75 5.0298C17.75 6.87967 16.9611 8.50644 15.8682 9.88154C14.7771 11.2543 13.35 12.4193 
                                  11.9835 13.366C11.4615 13.7276 10.9335 14.0611 10.4503 14.3072C9.99651 14.5383 9.47474 14.75 9 14.75C8.52526 14.75 8.00349 14.5383 7.54973 
                                  14.3072C7.06648 14.0611 6.53846 13.7276 6.01653 13.366C4.65005 12.4193 3.22287 11.2543 2.13182 9.88154C1.03888 8.50644 0.25 6.87967 0.25 5.0298ZM5.4 
                                  1.75C3.32075 1.75 1.75 3.2791 1.75 5.0298C1.75 6.43329 2.34579 7.74 3.30609 8.94822C4.26828 10.1588 5.56292 11.2269 6.87074 12.133C7.36562 12.4758
                                   7.83174 12.7675 8.23045 12.9706C8.65865 13.1886 8.90666 13.25 9 13.25C9.09334 13.25 9.34135 13.1886 9.76955 12.9706C10.1683 12.7675 10.6344 
                                   12.4758 11.1293 12.133C12.4371 11.2269 13.7317 10.1588 14.6939 8.94822C15.6542 7.74 16.25 6.43329 16.25 5.0298C16.25 3.2791 14.6792 1.75 12.6
                                    1.75C11.4058 1.75 10.2908 2.46342 9.59457 3.36892C9.4526 3.55356 9.23291 3.66176 9 3.66176C8.76709 3.66176 8.5474 3.55356 8.40544 3.36892C7.7092 
                                    2.46342 6.59415 1.75 5.4 1.75Z" fill="white"/>
                                </svg>
            </button>
          <div className="container" id ="answerBox">
            <p id="outcomeAnswer">62.12</p>
            <p id="outcome">miles</p>
          </div>
        </div>       
      </div>
      <div>
        <h2>saved</h2>
        <div className="images">
          <img class="a" src={require('.//images/Group 10.png')} alt="Group10"/>
          <img class="b" src={require('.//images/Group 11.png')} alt="Group11"/>
          <img class="c" src={require('.//images/Group 12.png')} alt="Group12"/>
          <img class="d" src={require('.//images/Group 13.png')} alt="Group13"/>
          <img class="e" src={require('.//images/Group 14.png')} alt="Group14"/>
          <img class="f" src={require('.//images/Group 15.png')} alt="Group15"/>
          <img class="g" src={require('.//images/Group 16.png')} alt="Group16"/>
          <img class="h" src={require('.//images/Group 17.png')} alt="Group17"/>
        </div>
      </div>
      <footer>
        <p className='pFooter'>Terms of service</p>
        <p className='pFooter'>Privacy policy</p>
      </footer>
    </div>
  );
}

export default App;