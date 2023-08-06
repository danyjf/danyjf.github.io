import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

import Game from "../Game";

export default class SkateDisplay {
    constructor(skills) {
        this.game = new Game();
        this.cssScene = this.game.cssScene;
        this.camera = this.game.camera;
        this.inputHandler = this.game.inputHandler;
        
        this.skills = skills;
        this.onFocus = false;
    }

    createDisplay(skate) {
        const containerDiv = this.createContainer();
        this.addHeader(containerDiv, "Programming Languages");
        this.addSkills(containerDiv, this.skills.programmingLanguages);
        this.addHeader(containerDiv, "Tools");
        this.addSkills(containerDiv, this.skills.tools);
        this.addHeader(containerDiv, "Frameworks");
        this.addSkills(containerDiv, this.skills.frameworks);
        this.addHeader(containerDiv, "Engines");
        this.addSkills(containerDiv, this.skills.engines);

        const containerObject = this.createContainerObject(skate, containerDiv);
        this.cssScene.add(containerObject);
    }

    createContainer() {
        const containerDiv = document.createElement("div");
        containerDiv.className = "skills-container";
        return containerDiv;
    }

    addHeader(containerDiv, text) {
        const headerDiv = document.createElement("div");
        headerDiv.className = "skills-header";
        headerDiv.textContent = text;
        containerDiv.appendChild(headerDiv);
    }

    addSkills(containerDiv, skills) {
        for (const skill of skills) {
            const skillDiv = document.createElement("div");
            skillDiv.className = "skill-bar";
            skillDiv.style.width = skill.percentage + "%";

            const skillName = document.createElement("span");
            skillName.className = "skill-name"; 
            skillName.textContent = skill.name;
            skillDiv.appendChild(skillName);

            const skillPercentage = document.createElement("div");
            skillPercentage.className = "skill-percentage";
            skillPercentage.textContent = skill.percentage;
            skillDiv.appendChild(skillPercentage);

            containerDiv.appendChild(skillDiv);
        }
    }

    createContainerObject(skate, containerDiv) {
        const containerObject = new CSS3DObject(containerDiv);
        containerObject.position.x = skate.position.x;
        containerObject.position.y = skate.position.y;
        containerObject.position.z = skate.position.z;
        containerObject.rotation.x = skate.rotation.x;
        containerObject.rotation.y = skate.rotation.y;
        containerObject.rotation.z = skate.rotation.z;
        containerObject.scale.x = 0.00015;
        containerObject.scale.y = 0.00015;
        return containerObject;
    }

    pressExit() {
        this.onFocus = false;
        this.camera.moveToDefault();
        this.game.world.player.isBlocked = false;
    }

    update() {
        if (!this.onFocus) 
            return;

        if (!this.camera.isAnimating && this.inputHandler.keys.escape) {
            this.pressExit();
        }
    }
}
