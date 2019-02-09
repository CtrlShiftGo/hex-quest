function Hex(colour, q, y) {
    // Coordinates are axial
    this.q = q;
    this.y = y;
    
    this.parent = null
    this.colour = colour;
    this.children= [];
    this.layer = 0;
    this.childrenCount = 0

    this.setColour = function setColour(colour){
        this.colour = colour;
    }

    this.addChild = function addChild(colour, q, r) {
        children.push(Hex(colour, q,r))
    }
    return this;
}

// Returns an array of hexes which correspond to a given layer
function getHexLayer(tgtLayer, rootLayer) {
    // Doing BFS until layer is reached
    var queue = rootLayer;
    var idx = 0;
    resultLayer = []
    while (idx < length(queue)){
        // Adding all children into the queue
        queue[idx].subHexes.forEach(function(item, index, array) {
            if(item.layer == tgtLayer) {
                tgtLayer.push(item)
            }
            else {
                queue.push(item);
            }
        });
    };
}