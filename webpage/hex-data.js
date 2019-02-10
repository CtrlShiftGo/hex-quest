// Implementation of hex data structure
// Provides an interface to the underlying tree

var axialDir = [
    Hex(+1, 0), Hex(+1, -1), Hex(0, -1), 
    Hex(-1, 0), Hex(-1, +1), Hex(0, +1), 
]

function Point(x,y){
    this.x = x;
    this.y = y;
    return this;
}

// From a layer generates an axial map for next layer
function getNextLayer(layer, height, width) {
    // Iterate through all nodes in the layer
    // Push children with coordinates

}

// Constructor for root layer
// Height and width are size in number of hexgons
function HexRootLayer(height, width) {
    this.height = height
    this.width = width
    this.getHexLayer = getHexLayer
    // Root layer is stored in axial coordinates
    // See [this post](https://www.redblobgames.com/grids/hexagons/) for more information
    this.hexes = []
    for (let q = 0; q < height; q++) {
        for(let r = 0; r < width; r++) {
            this.hexes.push(hexes(colour, q, r))
        }
    }
}

class Hex {
    constructor(colour, q, y) {
        // Coordinates are axial
        this.q = q;
        this.y = y;
        
        this.parent = null
        this.colour = colour;
        this.children= [];
        this.layer = 0;
        this.childrenCount = 0
        return this;
    }
    setColour(colour){
        this.colour = colour;
    }

    addChild(colour, q, r) {
        children.push(Hex(colour, q,r))
    }

    getCoords() {
        var x = size * (sqrt(3) * this.q  +  sqrt(3)/2 * this.r);
        var y = size * (3/2 * this.r);
        return Point(x,y);
    }
}

class HexTree {
    // Constructor for root layer
    // Height and width are size in number of hexgons
    constructor(height, width) {
        this.rootLayer = []
        this.height = height
        this.width = width
        // Root layer is stored in axial coordinates
        // See [this post](https://www.redblobgames.com/grids/hexagons/) for more information
        for (let q = 0; q < height; q++) {
            for(let r = 0; r < width; r++) {
                this.rootLayer.push(hexes(colour, q, r))
            }
        }
    }

}


class Layer {
    // Updates a hex at q,r with a colour
    updateHex(colour, q,r) {

    }
    // From a layer generates an axial map for next layer
    getNextLayer(layer, height, width) {
    // Iterate through all nodes in the layer
    
    // Push children with coordinates

    }
}

// Returns an array of hexes which correspond to a given layer
function getHexLayer(tgtLayer, rootLayer) {
    // Doing BFS until layer is reached
    var queue = rootLayer;
    var idx = 0;
    resultLayer = []
    while (idx < length(queue)){
        // Adding all children into the queue
        queue[idx].children.forEach(function(item, index, array) {
            if(item.layer == tgtLayer) {
                tgtLayer.push(item)
            }
            else {
                queue.push(item);
            }
        });
    };
}