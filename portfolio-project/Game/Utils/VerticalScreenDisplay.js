import * as THREE from "three";
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

import Game from "../Game";
import ProjectPage from "./ProjectPage";

export default class VerticalScreenDisplay {
    constructor(projects) {
        this.game = new Game();
        this.cssScene = this.game.cssScene;
        this.projects = projects;
        this.projectPages = [];
    }

    createDisplay(verticalScreen) {
        const backgroundDiv = this.createBackground();
        this.addLeftArrow(backgroundDiv);
        this.addRightArrow(backgroundDiv);
        
        for (const project of this.projects) {
            let imageBannerDiv = this.addImageBanner(backgroundDiv, project.imageBannerPath);
            let descriptionDiv = this.addDescription(backgroundDiv, project.description);
            let visitDiv = this.addVisitButton(backgroundDiv, project.visitLink);
            let codeDiv = this.addCodeButton(backgroundDiv, project.codeLink);
            this.projectPages.push(new ProjectPage(imageBannerDiv, descriptionDiv, visitDiv, codeDiv));
        }

        this.projectPages[0].show();

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

    addImageBanner(backgroundDiv, path) {
        const imageDiv = document.createElement("div");
        imageDiv.style.position = "absolute";
        imageDiv.style.marginLeft = "auto";
        imageDiv.style.marginRight = "auto";
        imageDiv.style.left = "0px";
        imageDiv.style.right = "0px";
        imageDiv.style.top = "5%"
        imageDiv.style.width = "540px";
        imageDiv.style.height = "304px";
        imageDiv.style.visibility = "hidden";
        backgroundDiv.appendChild(imageDiv);

        const image = document.createElement("img");
        image.src = path;
        image.style.maxHeight = "100%";
        image.style.maxWidth = "100%";
        image.style.marginLeft = "auto";
        image.style.marginRight = "auto";
        image.style.display = "block";
        imageDiv.appendChild(image);

        return imageDiv;
    }

    addDescription(backgroundDiv, description) {
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
        descriptionDiv.style.fontSize = "27px";
        descriptionDiv.style.visibility = "hidden";
        backgroundDiv.appendChild(descriptionDiv);

        for (const paragraph of description) {
            const descriptionP = document.createElement("p");
            descriptionP.textContent = paragraph;
            descriptionDiv.appendChild(descriptionP);

            descriptionDiv.appendChild(document.createElement("br"));
        }

        return descriptionDiv;
    }

    addVisitButton(backgroundDiv, visitLink) {
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
        visitHereDiv.style.visibility = "hidden";
        backgroundDiv.appendChild(visitHereDiv);
        return visitHereDiv;
    }

    addCodeButton(backgroundDiv, codeLink) {
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
        viewCodeDiv.style.visibility = "hidden";
        backgroundDiv.appendChild(viewCodeDiv);
        return viewCodeDiv;
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
