function Hex(colour) {
    this.colour = colour;
    this.subHexes= [];
    this.layer = 0;
    this.subHexesCount = 0
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