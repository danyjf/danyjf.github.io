import SquareCollider from "../Utils/SquareCollider";

import Game from "../Game";
import BachelorsDisplay from './Displays/BachelorsDisplay';
import MastersDisplay from './Displays/MastersDisplay';

export default class Outside {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
        this.cssScene = this.game.cssScene;
        this.camera = this.game.camera;
    }

    start() {
        this.outlineEffect = this.game.world.outlineEffect;
        this.outsideObject = this.resources.items.Outside.scene;
        this.bachelorsDisplay = new BachelorsDisplay();
        this.mastersDisplay = new MastersDisplay();

        this.colliders = [
            new SquareCollider(this, -13.36, -21.12, -5, -0.5),     // top wall collider
            new SquareCollider(this, -13.36, -17.62, 0.5, 5),       // bottom wall collider
            new SquareCollider(this, -17.62, -18.612, 2.938, 5),    // end of road wall collider
            new SquareCollider(this, -18.612, -25, -0.5, 5),        // right wall collider
            new SquareCollider(this, -10, -12.9, -0.5, 0.5, true)  // door trigger
        ];
        this.setModel();
    }

    setModel() {
        this.outsideObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }

            if (child.name === "LaptopBody") {
                this.bachelorsDisplay.createDisplay(child);
            }

            if (child.name === "Controller") {
                this.mastersDisplay.createDisplay(child);
            }
        });

        this.scene.add(this.outsideObject);
    }

    update() {
        this.bachelorsDisplay.update();
        this.mastersDisplay.update();
    }
}
