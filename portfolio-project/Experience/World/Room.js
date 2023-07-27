import Experience from "../Experience";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.Room.scene;
        
        this.setModel();
    }

    setModel() {
        this.scene.add(this.room);
    }

    resize() {}

    update() {}
}
