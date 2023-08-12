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
            new SquareCollider(this, 1.64, -6.12, 35, 39.5),        // top wall collider
            new SquareCollider(this, 1.64, -2.62, 40.5, 45),        // bottom wall collider
            new SquareCollider(this, -2.62, -3.612, 42.938, 45),    // end of road wall collider
            new SquareCollider(this, -3.612, -10, 39.5, 45),        // right wall collider
            new SquareCollider(this, 5, 2.1, 39.5, 40.5, true)   // door trigger
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
