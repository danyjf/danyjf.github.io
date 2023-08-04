export default class ProjectPage {
    constructor(nameDiv, imageBannerDiv, descriptionDiv, visitDiv, codeDiv) {
        this.nameDiv = nameDiv;
        this.imageBannerDiv = imageBannerDiv;
        this.descriptionDiv = descriptionDiv;
        this.visitDiv = visitDiv;
        this.codeDiv = codeDiv;
    }

    hide() {
        this.nameDiv.style.visibility = "hidden";
        this.imageBannerDiv.style.visibility = "hidden";
        this.descriptionDiv.style.visibility = "hidden";
        this.visitDiv.style.visibility = "hidden";
        this.codeDiv.style.visibility = "hidden";
    }

    show() {
        this.nameDiv.style.visibility = "visible";
        this.imageBannerDiv.style.visibility = "visible";
        this.descriptionDiv.style.visibility = "visible";
        this.visitDiv.style.visibility = "visible";
        this.codeDiv.style.visibility = "visible";
    }
}
