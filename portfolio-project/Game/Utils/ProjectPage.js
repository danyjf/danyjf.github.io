export default class ProjectPage {
    constructor(imageBannerDiv, descriptionDiv, visitDiv, codeDiv) {
        this.imageBannerDiv = imageBannerDiv;
        this.descriptionDiv = descriptionDiv;
        this.visitDiv = visitDiv;
        this.codeDiv = codeDiv;
    }

    hide() {
        this.imageBannerDiv.style.visibility = "hidden";
        this.descriptionDiv.style.visibility = "hidden";
        this.visitDiv.style.visibility = "hidden";
        this.codeDiv.style.visibility = "hidden";
    }

    show() {
        this.imageBannerDiv.style.visibility = "visible";
        this.descriptionDiv.style.visibility = "visible";
        this.visitDiv.style.visibility = "visible";
        this.codeDiv.style.visibility = "visible";
    }
}
