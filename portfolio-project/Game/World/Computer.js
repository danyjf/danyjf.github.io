﻿import * as THREE from "three";

import Projects from "../Utils/Projects";

import Game from "../Game";
import VerticalScreenDisplay from "./VerticalScreenDisplay";

export default class Computer {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }

    start() {
        this.computerObject = this.resources.items.Computer.scene;
        this.outlineEffect = this.game.world.outlineEffect;
        this.verticalScreenDisplay = new VerticalScreenDisplay(Projects);
        
        // interactable variables
        this.interactPosition = new THREE.Vector3(-0.83, 0, 0);
        this.interactRadius = 0.6;
        this.interactable = this.computerObject;
        this.interactableName = "Computer";
        this.outlineEffect.addSelectable(this);
        
        this.setModel();
    }

    setModel() {
        this.computerObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }

            if (child.name === "ComputerCaseGlass") {
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set(0xffffff);
                child.material.ior = 1;
                child.material.transmission = 1;
                child.material.opacity = 1;
            }

            if (child.name === "Screen") {
                // playing video causes a memory leak on firefox
                // child.material = new THREE.MeshBasicMaterial({
                //     map: this.resources.items.ScreenVideo
                // });
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.CodeScreen
                });
            }

            if (child.name === "VerticalScreen") {
                this.verticalScreenDisplay.createDisplay(child);
            }
        });

        this.scene.add(this.computerObject);
    }

    update() {
        this.verticalScreenDisplay.update();
    }
}
