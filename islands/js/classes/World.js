// import Island class
import Island from "../classes/Island.js";

const island = new Island();

export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
      document.querySelector("#btnAddIsland").addEventListener("click", (e) => {
        this.add();
    });
      document.querySelector("#btnSave").addEventListener("click", (e) => {
        this.save();
        
      });
      document.querySelector("#btnLoad").addEventListener("click", (e) => {
        this.load();
      });
  }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
      localStorage.setItem("islands", JSON.stringify(this.islands));
      console.log(localStorage.getItem("islands"));
    }

    load() {
      // load islands from localstorage into array
      // loop over the array and add()
      let storedString = localStorage.getItem("islands");
      let stored = JSON.parse(storedString);
      // console.log(storedArray);
      stored.forEach(stored => {
        let div = document.createElement("div");
        div.classList.add("island");
        div.style.backgroundColor = stored.color;
        div.innerHTML = stored.name; 
        //append to body
        document.body.appendChild(div);
        this.move(div);        
      });
    }
    
    getCoords() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }

    add() {
      // add the islands to the DOM
      let name = island.getRandomName();
      let color = island.getRandomColor();
      let element = document.createElement("div");
    
      element.classList.add("island");
      element.style.backgroundColor = color;
      element.innerHTML = name;
    
      document.body.appendChild(element);
      this.move(element);
      
      this.islands.push({ color, name });
    }
  
    move(element) {
      let coords = this.getCoords();
      //use js web animations api to animate island to coords
         element.animate([
             {transform: 'translate(0px, 0px)'},
             {transform: `translate(${coords.x}px, ${coords.y}px)`}
         ], {
             duration: 500,
             iterations:1,
             fill: 'forwards'
         });

    }
  }


