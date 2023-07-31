export default class SquareCollider {
    constructor(left, right, top, bottom) {
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
}
