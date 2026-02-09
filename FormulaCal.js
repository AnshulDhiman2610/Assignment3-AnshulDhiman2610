let currentType = "";// shows current select type
let currentShape = "";// shows current shape type
//handle dropdown category
function handleCategory(type) {

    // Show all first (reset visibility)
    document.getElementById("areaDiv").style.display = "block";
    document.getElementById("volumeDiv").style.display = "block";
    document.getElementById("surfaceDiv").style.display = "block";
    document.getElementById("csaDiv").style.display = "block";
// if nothing seleced the show the inputs only 
    if (document.getElementById(type).value === "") {
        document.getElementById("inputs").innerHTML = "";
        return;
    }
//hide dropdowns when choosen one
    if (type !== "area")
        document.getElementById("areaDiv").style.display = "none";

    if (type !== "volume")
        document.getElementById("volumeDiv").style.display = "none";

    if (type !== "surface")
        document.getElementById("surfaceDiv").style.display = "none";

    if (type !== "csa")
        document.getElementById("csaDiv").style.display = "none";
//load inputs
    showInputs(type);
}

//shows input field 
function showInputs(type) {

    currentType = type;
    currentShape = document.getElementById(type).value;

    const div = document.getElementById("inputs");
    div.innerHTML = "";

    const input = (id, text) =>
        `<input type="number" id="${id}" placeholder="${text}">`;


    //area types and input types
    if (type === "area") {

        if (currentShape === "square")
            div.innerHTML = input("side", "Square – Side");

        else if (currentShape === "rectangle")
            div.innerHTML =
                input("length", "Rectangle – Length") +
                input("breadth", "Rectangle – Breadth");

        else if (currentShape === "triangle")
            div.innerHTML =
                input("base", "Triangle – Base") +
                input("height", "Triangle – Height");

        else if (currentShape === "circle")
            div.innerHTML =
                input("radius", "Circle – Radius");

        else if (currentShape === "parallelogram")
            div.innerHTML =
                input("base", "Parallelogram – Base") +
                input("height", "Parallelogram – Height");

        else if (currentShape === "trapezoid")
            div.innerHTML =
                input("a", "Trapezoid – Side A") +
                input("b", "Trapezoid – Side B") +
                input("height", "Trapezoid – Height");
    }

//volume types and input types
    if (type === "volume") {

        if (currentShape === "cube")
            div.innerHTML = input("side", "Cube – Side");

        else if (currentShape === "cuboid")
            div.innerHTML =
                input("length", "Cuboid – Length") +
                input("breadth", "Cuboid – Breadth") +
                input("height", "Cuboid – Height");

        else if (currentShape === "cylinder")
            div.innerHTML =
                input("radius", "Cylinder – Radius") +
                input("height", "Cylinder – Height");

        else if (currentShape === "cone")
            div.innerHTML =
                input("radius", "Cone – Radius") +
                input("height", "Cone – Height");

        else if (currentShape === "sphere")
            div.innerHTML =
                input("radius", "Sphere – Radius");

        else if (currentShape === "hemisphere")
            div.innerHTML =
                input("radius", "Hemisphere – Radius");
    }

//surface area types and input types 
    if (type === "surface") {

        if (currentShape === "cube")
            div.innerHTML = input("side", "Cube – Side");

        else if (currentShape === "cuboid")
            div.innerHTML =
                input("length", "Cuboid – Length") +
                input("breadth", "Cuboid – Breadth") +
                input("height", "Cuboid – Height");

        else if (currentShape === "cylinder")
            div.innerHTML =
                input("radius", "Cylinder – Radius") +
                input("height", "Cylinder – Height");

        else if (currentShape === "cone")
            div.innerHTML =
                input("radius", "Cone – Radius") +
                input("slant", "Cone – Slant Height");

        else if (currentShape === "sphere")
            div.innerHTML =
                input("radius", "Sphere – Radius");

        else if (currentShape === "hemisphere")
            div.innerHTML =
                input("radius", "Hemisphere – Radius");
    }


    // curved surface area types and input types
    if (type === "csa") {

        if (currentShape === "cylinder")
            div.innerHTML =
                input("radius", "Cylinder – Radius") +
                input("height", "Cylinder – Height");

        else if (currentShape === "cone")
            div.innerHTML =
                input("radius", "Cone – Radius") +
                input("slant", "Cone – Slant Height");

        else if (currentShape === "hemisphere")
            div.innerHTML =
                input("radius", "Hemisphere – Radius");
    }
}


// calculate formula
function calculate() {

    const val = id =>
        parseFloat(document.getElementById(id)?.value || 0);

    const pi = 3.1416;
    let r = 0;

//area 
    if (currentType === "area") {

        if (currentShape === "square")
            r = val("side") ** 2;

        if (currentShape === "rectangle")
            r = val("length") * val("breadth");

        if (currentShape === "triangle")
            r = 0.5 * val("base") * val("height");

        if (currentShape === "circle")
            r = pi * val("radius") ** 2;

        if (currentShape === "parallelogram")
            r = val("base") * val("height");

        if (currentShape === "trapezoid")
            r = 0.5 * (val("a") + val("b")) * val("height");
    }
//volume
    if (currentType === "volume") {

        if (currentShape === "cube")
            r = val("side") ** 3;

        if (currentShape === "cuboid")
            r = val("length") * val("breadth") * val("height");

        if (currentShape === "cylinder")
            r = pi * val("radius") ** 2 * val("height");

        if (currentShape === "cone")
            r = (1/3) * pi * val("radius") ** 2 * val("height");

        if (currentShape === "sphere")
            r = (4/3) * pi * val("radius") ** 3;

        if (currentShape === "hemisphere")
            r = (2/3) * pi * val("radius") ** 3;
    }

//surface area
    if (currentType === "surface") {

        if (currentShape === "cube")
            r = 6 * val("side") ** 2;

        if (currentShape === "cuboid")
            r = 2 * (
                val("length") * val("breadth") +
                val("length") * val("height") +
                val("breadth") * val("height")
            );

        if (currentShape === "cylinder")
            r = 2 * pi * val("radius") *
                (val("radius") + val("height"));

        if (currentShape === "cone")
            r = pi * val("radius") *
                (val("radius") + val("slant"));

        if (currentShape === "sphere")
            r = 4 * pi * val("radius") ** 2;

        if (currentShape === "hemisphere")
            r = 3 * pi * val("radius") ** 2;
    }
//curved surface area
    if (currentType === "csa") {

        if (currentShape === "cylinder")
            r = 2 * pi * val("radius") * val("height");

        if (currentShape === "cone")
            r = pi * val("radius") * val("slant");

        if (currentShape === "hemisphere")
            r = 2 * pi * val("radius") ** 2;
    }


    document.getElementById("result").value =
        r ? r.toFixed(2) : "Enter values";
}
// reset all when i type is choosen
function resetAll() {

    document.getElementById("area").value = "";
    document.getElementById("volume").value = "";
    document.getElementById("surface").value = "";
    document.getElementById("csa").value = "";

    document.getElementById("inputs").innerHTML = "";
    document.getElementById("result").value = "";

    document.getElementById("areaDiv").style.display = "block";
    document.getElementById("volumeDiv").style.display = "block";
    document.getElementById("surfaceDiv").style.display = "block";
    document.getElementById("csaDiv").style.display = "block";
}
//reset button for all shown values again after getting one's result
function resetCalculator() {
// clear dropdown selections
    document.getElementById("area").value = "";
    document.getElementById("volume").value = "";
    document.getElementById("surface").value = "";
    document.getElementById("csa").value = "";
// clear input and result
    document.getElementById("inputs").innerHTML = "";
    document.getElementById("result").value = "";
// show dropdown again 
    document.getElementById("areaDiv").style.display = "block";
    document.getElementById("volumeDiv").style.display = "block";
    document.getElementById("surfaceDiv").style.display = "block";
    document.getElementById("csaDiv").style.display = "block";
// reset the tracking variables
    currentType = "";
    currentShape = "";
}
