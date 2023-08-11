import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

import SquareCollider from "../Utils/SquareCollider";

import Game from "../Game";

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
        this.colliders = [
            new SquareCollider(this, -13.36, -21.12, -5, -0.5),     // top wall collider
            new SquareCollider(this, -13.36, -17.62, 0.5, 5),       // bottom wall collider
            new SquareCollider(this, -17.62, -18.612, 2.938, 5),    // end of road wall collider
            new SquareCollider(this, -18.612, -25, -0.5, 5),        // right wall collider
            new SquareCollider(this, -10, -13.36, -0.5, 0.5, true)  // door trigger
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
                const position = child.position.clone();
                position.y += 0.7;
                position.x -= 0.5;
                const className = "laptop-container";
                const text = "Graduated from the University of Aveiro in 2022 with a bachelor's degree in Computer Science";
                this.createText(position, className, text);
            }

            if (child.name === "Controller") {
                const position = child.position.clone();
                position.y += 0.6;
                position.x -= 0.2;
                const className = "controller-container";
                const text = "Currently studying to obtain a master's degree in video game development from the University of Aveiro";
                this.createText(position, className, text);
            }
        });

        this.scene.add(this.outsideObject);
    }

    createText(position, className, text) {
        const containerDiv = document.createElement("div");
        containerDiv.className = className;
        containerDiv.textContent = text;

        const containerObject = this.createContainerObject(containerDiv, position);

        this.cssScene.add(containerObject);
    }

    createContainerObject(containerDiv, position) {
        const containerObject = new CSS3DObject(containerDiv);
        containerObject.position.x = position.x;
        containerObject.position.y = position.y;
        containerObject.position.z = position.z;
        containerObject.rotation.order = "ZYX";
        containerObject.rotation.set(
            0,
            Math.PI / 2,
            this.camera.gameCamera.rotation.y
        );

        containerObject.scale.x = 0.0009;
        containerObject.scale.y = 0.0009;

        return containerObject;
    }
}
