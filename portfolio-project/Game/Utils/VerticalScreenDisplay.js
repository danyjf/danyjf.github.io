import * as THREE from "three";
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

import Game from "../Game";

export default class VerticalScreenDisplay {
    constructor() {
        this.game = new Game();
        this.cssScene = this.game.cssScene;
    }

    setDisplay(verticalScreen) {
        const backgroundDiv = this.createBackground();
        this.addBannerImage(backgroundDiv, "textures/TorusForest.png");
        this.addDescription(backgroundDiv);
        this.addVisitButton(backgroundDiv);
        this.addCodeButton(backgroundDiv);
        this.addLeftArrow(backgroundDiv);
        this.addRightArrow(backgroundDiv);

        const backgroundObject = this.createBackgroundObject(backgroundDiv, verticalScreen);
        this.cssScene.add(backgroundObject);
    }

    createBackground() {
        const backgroundDiv = document.createElement("div");
        backgroundDiv.style.width = '720px';
        backgroundDiv.style.height = '1280px';
        backgroundDiv.style.background = new THREE.Color(0xFEF2B8).getStyle();
        return backgroundDiv;
    }

    addBannerImage(backgroundDiv, path) {
        const imageDiv = document.createElement("div");
        imageDiv.style.position = "absolute";
        imageDiv.style.marginLeft = "auto";
        imageDiv.style.marginRight = "auto";
        imageDiv.style.left = "0px";
        imageDiv.style.right = "0px";
        imageDiv.style.top = "5%"
        imageDiv.style.width = "540px";
        imageDiv.style.height = "304px";
        backgroundDiv.appendChild(imageDiv);

        const image = document.createElement("img");
        image.src = path;
        image.style.maxHeight = "100%";
        image.style.maxWidth = "100%";
        image.style.marginLeft = "auto";
        image.style.marginRight = "auto";
        image.style.display = "block";
        imageDiv.appendChild(image);
    }

    addDescription(backgroundDiv) {
        const descriptionDiv = document.createElement("div");
        descriptionDiv.style.position = "absolute";
        descriptionDiv.style.marginLeft = "auto";
        descriptionDiv.style.marginRight = "auto";
        descriptionDiv.style.left = "0px";
        descriptionDiv.style.right = "0px";
        descriptionDiv.style.top = "33%"
        descriptionDiv.style.width = "75%";
        descriptionDiv.style.height = "40%";
        descriptionDiv.style.color = new THREE.Color(0x3C5B66).getStyle();
        descriptionDiv.style.fontSize = "32px";
        backgroundDiv.appendChild(descriptionDiv);

        const descriptionP1 = document.createElement("p");
        descriptionP1.textContent = `Torus Forest was a project developed for the 
        class of Introduction to Computer Graphics, 
        obtaining a grade of 95%.`
        descriptionDiv.appendChild(descriptionP1);

        descriptionDiv.appendChild(document.createElement("br"));

        const descriptionP2 = document.createElement("p");
        descriptionP2.textContent = `Torus Forest is a simulation where plants 
        grow when under the spotlight and die when 
        under unlighted areas.`
        descriptionDiv.appendChild(descriptionP2);

        descriptionDiv.appendChild(document.createElement("br"));

        const descriptionP3 = document.createElement("p");
        descriptionP3.textContent = `This project was developed using three.js, 
        making use of different illumination types, 
        loading 3D models, applying textures and 
        normal maps and by creating animations.`
        descriptionDiv.appendChild(descriptionP3);
    }

    addVisitButton(backgroundDiv) {
        const visitHereDiv = document.createElement("div");
        visitHereDiv.style.position = "absolute";
        visitHereDiv.style.width = "25%";
        visitHereDiv.style.height = "6%";
        visitHereDiv.style.background = new THREE.Color(0xD7A151).getStyle();
        visitHereDiv.style.bottom = "17%";
        visitHereDiv.style.left = "21%";
        visitHereDiv.style.display = "flex";
        visitHereDiv.style.justifyContent = "center";
        visitHereDiv.style.alignItems = "center";
        visitHereDiv.textContent = "Visit Here";
        visitHereDiv.style.fontSize = "30px";
        visitHereDiv.style.fontWeight = "bold";
        visitHereDiv.style.color = new THREE.Color(0x3C5B66).getStyle();
        backgroundDiv.appendChild(visitHereDiv);
    }

    addCodeButton(backgroundDiv) {
        const viewCodeDiv = document.createElement("div");
        viewCodeDiv.style.position = "absolute";
        viewCodeDiv.style.width = "25%";
        viewCodeDiv.style.height = "6%";
        viewCodeDiv.style.background = new THREE.Color(0xD7A151).getStyle();
        viewCodeDiv.style.bottom = "17%";
        viewCodeDiv.style.right = "21%";
        viewCodeDiv.style.display = "flex";
        viewCodeDiv.style.justifyContent = "center";
        viewCodeDiv.style.alignItems = "center";
        viewCodeDiv.textContent = "View Code";
        viewCodeDiv.style.fontSize = "30px";
        viewCodeDiv.style.fontWeight = "bold";
        viewCodeDiv.style.color = new THREE.Color(0x3C5B66).getStyle();
        backgroundDiv.appendChild(viewCodeDiv);
    }

    addLeftArrow(backgroundDiv) {
        const leftArrowDiv = document.createElement("div");
        leftArrowDiv.style.position = "absolute";
        leftArrowDiv.style.width = "140px";
        leftArrowDiv.style.height = "140px";
        leftArrowDiv.style.background = new THREE.Color(0xD7A151).getStyle();
        leftArrowDiv.style.bottom = "40px";
        leftArrowDiv.style.left = "80px";
        backgroundDiv.appendChild(leftArrowDiv);

        const leftArrowImg = document.createElement("img");
        leftArrowImg.src = "textures/Arrow.png";
        leftArrowImg.style.width = "100%";
        leftArrowImg.style.height = "100%";
        leftArrowImg.style.transform = "scaleX(-1)";
        leftArrowDiv.appendChild(leftArrowImg);
    }

    addRightArrow(backgroundDiv) {
        const rightArrowDiv = document.createElement("div");
        rightArrowDiv.style.position = "absolute";
        rightArrowDiv.style.width = "140px";
        rightArrowDiv.style.height = "140px";
        rightArrowDiv.style.background = new THREE.Color(0xD7A151).getStyle();
        rightArrowDiv.style.bottom = "40px";
        rightArrowDiv.style.right = "80px";
        backgroundDiv.appendChild(rightArrowDiv);

        const rightArrowImg = document.createElement("img");
        rightArrowImg.src = "textures/Arrow.png";
        rightArrowImg.style.width = "100%";
        rightArrowImg.style.height = "100%";
        rightArrowDiv.appendChild(rightArrowImg);
    }

    createBackgroundObject(backgroundDiv, verticalScreen) {
        const backgroundObject = new CSS3DObject(backgroundDiv);
        backgroundObject.position.x = verticalScreen.position.x;
        backgroundObject.position.y = verticalScreen.position.y;
        backgroundObject.position.z = verticalScreen.position.z;
        backgroundObject.rotation.x = verticalScreen.rotation.x;
        backgroundObject.rotation.y = (Math.PI / 2) + verticalScreen.rotation.y;
        backgroundObject.rotation.z = verticalScreen.rotation.z;
        backgroundObject.scale.x = 0.00025;
        backgroundObject.scale.y = 0.00025;
        return backgroundObject;
    }
}
