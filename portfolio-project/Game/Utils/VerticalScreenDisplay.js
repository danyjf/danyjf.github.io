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
        this.currentProject = 0;
    }

    createDisplay(verticalScreen) {
        this.backgroundDiv = this.createBackground();
        this.leftArrowDiv = this.addLeftArrow(this.backgroundDiv);
        this.rightArrowDiv = this.addRightArrow(this.backgroundDiv);
        
        for (const project of this.projects) {
            let imageBannerDiv = this.addImageBanner(this.backgroundDiv, project.imageBannerPath);
            let descriptionDiv = this.addDescription(this.backgroundDiv, project.description);
            let visitDiv = this.addVisitButton(this.backgroundDiv, project.visitLink);
            let codeDiv = this.addCodeButton(this.backgroundDiv, project.codeLink);
            this.projectPages.push(new ProjectPage(imageBannerDiv, descriptionDiv, visitDiv, codeDiv));
        }
        
        this.projectPages[this.currentProject].show();
        this.leftArrowDiv.style.visibility = "hidden";

        const backgroundObject = this.createBackgroundObject(this.backgroundDiv, verticalScreen);
        this.cssScene.add(backgroundObject);
    }

    createBackground() {
        const backgroundDiv = document.createElement("div");
        backgroundDiv.className = "project-background";
        return backgroundDiv;
    }

    addImageBanner(backgroundDiv, path) {
        const imageDiv = document.createElement("div");
        imageDiv.className = "project-img-banner";
        backgroundDiv.appendChild(imageDiv);

        const image = document.createElement("img");
        image.className = "project-img-banner";
        image.src = path;
        imageDiv.appendChild(image);

        return imageDiv;
    }

    addDescription(backgroundDiv, description) {
        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "project-description"
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
        const visitHereA = document.createElement("a");
        visitHereA.href = visitLink;
        visitHereA.target = "_blank";

        const visitHereDiv = document.createElement("div");
        visitHereDiv.className = "project-visit-here";
        visitHereDiv.textContent = "Visit Here";
        visitHereA.appendChild(visitHereDiv);
        backgroundDiv.appendChild(visitHereA);

        return visitHereDiv;
    }

    addCodeButton(backgroundDiv, codeLink) {
        const viewCodeA = document.createElement("a");
        viewCodeA.href = codeLink;
        viewCodeA.target = "_blank";
        
        const viewCodeDiv = document.createElement("div");
        viewCodeDiv.className = "project-view-code";
        viewCodeDiv.textContent = "View Code";
        viewCodeA.append(viewCodeDiv);
        backgroundDiv.appendChild(viewCodeA);

        return viewCodeDiv;
    }

    addLeftArrow(backgroundDiv) {
        const leftArrowDiv = document.createElement("div");
        leftArrowDiv.className = "project-left-arrow";
        backgroundDiv.appendChild(leftArrowDiv);

        const leftArrowImg = document.createElement("img");
        leftArrowImg.className = "project-left-arrow";
        leftArrowImg.src = "textures/Arrow.png";
        leftArrowDiv.appendChild(leftArrowImg);

        leftArrowDiv.addEventListener("click", this.pressLeftArrow.bind(this));

        return leftArrowDiv;
    }

    pressLeftArrow() {
        this.projectPages[this.currentProject].hide();
        this.currentProject--;
        this.projectPages[this.currentProject].show();

        if (this.currentProject == 0) {
            this.leftArrowDiv.style.visibility = "hidden";
        }

        this.rightArrowDiv.style.visibility = "visible";
    }

    addRightArrow(backgroundDiv) {
        const rightArrowDiv = document.createElement("div");
        rightArrowDiv.className = "project-right-arrow";
        backgroundDiv.appendChild(rightArrowDiv);

        const rightArrowImg = document.createElement("img");
        rightArrowImg.className = "project-right-arrow";
        rightArrowImg.src = "textures/Arrow.png";
        rightArrowDiv.appendChild(rightArrowImg);

        rightArrowDiv.addEventListener("click", this.pressRightArrow.bind(this));

        return rightArrowDiv;
    }

    pressRightArrow() {
        this.projectPages[this.currentProject].hide();
        this.currentProject++;
        this.projectPages[this.currentProject].show();

        if (this.currentProject == this.projectPages.length - 1) {
            this.rightArrowDiv.style.visibility = "hidden";
        }

        this.leftArrowDiv.style.visibility = "visible";
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
