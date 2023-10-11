import Island from "../classes/Island.js";

const island = new Island();

export default class World {
    constructor() {
      this.islands = []; 
      this.hookEvents(); 
    }
  
    hookEvents() {
      document.querySelector("#btnAddIsland").addEventListener("click", (e) => {
        console.log("hihi");
        this.add();
    });
      document.querySelector("#btnSave").addEventListener("click", (e) => {
        console.log("lala");
        this.save();
        
      });
      document.querySelector("#btnLoad").addEventListener("click", (e) => {
        console.log("haha");
        this.load();
      });
  }
  
    save() {
      localStorage.setItem("islands", JSON.stringify(this.islands));
      console.log(localStorage.getItem("islands"));
    }

    load() {
      let storedString = localStorage.getItem("islands");
      let stored = JSON.parse(storedString);
      stored.forEach(stored => {
        let div = document.createElement("div");
        div.classList.add("island");
        div.style.backgroundColor = stored.color;
        div.innerHTML = stored.name; 
        document.body.appendChild(div);
        this.move(div);        
      });
    }
    
    getCoords() {
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }

    add() {
      let name = island.getRandomName();
      let color = island.getRandomColor();
      let element = document.createElement("div");
    
      element.classList.add("island");
      element.style.backgroundColor = color;
      element.innerHTML = name;
    
      document.body.appendChild(element);
      this.move(element);
      this.islands.push({color, name});
    }
  
    move(element) {
      let coords = this.getCoords();
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


