export default class SquareCollider {
    constructor(owner, left, right, top, bottom) {
        this.owner = owner;
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }

    intersect(other) {
        const left = Math.min(this.left, other.left);
        const right = Math.max(this.right, other.right);
        const top = Math.max(this.top, other.top);
        const bottom = Math.min(this.bottom, other.bottom);
        
        const width = left - right;
        const height = bottom - top;
        
        if (width > 0 && height > 0) {
            return {"width": width, "height": height};
        }

        return undefined;
    }

    handleCollision(other) {
        const intersection = this.intersect(other);
        if (!intersection)
            return;

        this.resolveCollision(intersection, other);
    }

    resolveCollision(intersection, other) {
        if (intersection.width < intersection.height) {
            if (this.left > other.right && this.left < other.left) {
                this.resolvePositions(-intersection.width, 0);
            }
            else {
                this.resolvePositions(intersection.width, 0);
            }
        }
        else {
            if (this.top > other.top && this.top < other.bottom) {
                this.resolvePositions(0, intersection.height);
            }
            else {
                this.resolvePositions(0, -intersection.height);
            }
        }
    }

    resolvePositions(w, h) {
        this.owner.playerObject.position.z += w;
        this.owner.playerObject.position.x += h;
        this.updateCollider(w, h);
    }

    updateCollider(w, h) {
        this.left += w;
        this.right += w;
        this.top += h;
        this.bottom += h;
    }
}
