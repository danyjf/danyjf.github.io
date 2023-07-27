import Experience from "../Experience";

import Environment from "./Environment";
import Room from "./Room";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.room = new Room();
        });
    }

    resize() {}

    update() {}
}
