function show(c1, c2) {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [c1, c2],
            zoom: 7
        });
    }
}

let la = document.querySelector('.LA');
let ny = document.querySelector('.NY');
la.onclick = show(34.05683077, -118.22393977);
ny.onclick = show(40.72120488, -74.07795241);
