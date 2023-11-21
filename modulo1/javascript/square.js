/* export */ function squareArea(l){
    return l * l;
}

/* export */ function squarePerimeter(l) {
    return 4 * l;
}

//// or ---- 

const square = {
    squareArea,
    squarePerimeter
}

export default square;