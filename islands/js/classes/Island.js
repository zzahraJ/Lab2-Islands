export default class Island {
  constructor(name) {
    this.name = name || this.getRandomName();
    this.coordinates = this.getCoords();
    this.color = this.getRandomColor();
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  getCoords() {
    // return coordinates within the screen at random, feel free to change it up!
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2) * randomSign
    };
  }


  getRandomName() {
    // array with 10 random island names
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island"
    ];

    // return a random name from the array
    return names[Math.floor(Math.random() * names.length)];
  }

  render(){
    // create a new element
    let div = document.createElement("div");
    
    // add the island class to the element
    div.classList.add("island");
    
    // set the background color of the element
    div.style.backgroundColor = this.getRandomColor();

    let element = document.createElement("div");
    element.classList.add("island-name");
    element.innerHTML = this.name;
    div.appendChild(element);

    // set the coordinates of the element

    document.body.appendChild(div);
    let coords = this.getCoordinates();
    div.animate([
      { transform: `translate(0px, 0px)` },
      { transform: `translate(${coords.x}px, ${coords.y}px)` }
    ], {
      duration: 1000,
      iterations: 1,
      fill: "forwards"
    });
  }
  JSON() {
    return {
      name: this.name,
      coordinates: this.coordinates,
      color: this.color
    };
  }
}
