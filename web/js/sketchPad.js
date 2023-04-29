class SketchPad {
    constructor(container, size = 400) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
            background-color: white;
            box-shadow: 0px 0px 10px 2px black; 
        `;
        container.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");
        this.paths = [];
        this.isDrawing = false;

        this._addEventListeners();
    }

    _addEventListeners() {
        this.canvas.onmousedown = event => {
            this.paths.push([this._getMousePosition(event)]);
            this.isDrawing = true;
        }
        this.canvas.onmouseup = event => {
            this.isDrawing = false;
        }
        this.canvas.onmousemove = event => {
            if (!this.isDrawing) return; 
            const lastPath = this.paths[this.paths.length - 1];
            lastPath.push(this._getMousePosition(event));
            this._redraw();
        }

        this.canvas.ontouchstart = event => {
            const loc = event.touches[0];
            this.canvas.onmousedown(loc);
        }
        this.canvas.ontouchmove = event => {
            const loc = event.touches[0];
            this.canvas.onmousemove(loc);
        }
        this.canvas.ontouchend = () => {
            this.canvas.onmouseup();
        }
    }
    _getMousePosition(event) {
        const rect  = this.canvas.getBoundingClientRect();
        return [
            Math.round(event.clientX - rect.left),
            Math.round(event.clientY - rect.top)
        ]
    }
    _redraw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        draw.paths(this.ctx, this.paths);
    }
}