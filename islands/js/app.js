// kickstart your world here
import '../style.css';

// Dynamisch importeren van de class App
import('./classes/World.js')
  .then(({ default: World }) => {
    const world = new World();
  })
  .catch(error => {
    // Behandel eventuele importfouten
    console.error(error);
  });
