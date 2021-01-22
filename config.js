
const config = {
    style: "mapbox://styles/staciesheldon/ckhbhgzys0n5d19p62i91e03u", 
    accessToken: "pk.eyJ1Ijoic3RhY2llc2hlbGRvbiIsImEiOiJja2d6dmwwajYwOXZ5MnhzaWZwdzhpZ3hrIn0.20fQRir-1YxbYtiy4yLzZw",
    CSV: "https://docs.google.com/spreadsheets/d/1SbtQ2_BaUH6HrzNP8WhRYAmoEG0l31LBM7pDf5L2liE/gviz/tq?tqx=out:csv&sheet=Nations",
    center: [-85.002462, 45.246623], //Lng, Lat
    zoom: 4, //Default zoom
    title: "Anishinaabewakiing  -  Anishinaabe Territory",
    description: "This is a representation of all Anishinaabe Nations and their position in relation to the Great Lakes Watershed in the year 2021.",
    sideBarInfo: ["Nation", "AnishinaabeName", "Translation"],
    popupInfo: ["Nation", "Logo", "StreetAddress", "WebAddress"],
    filters: [
        {
            type: "dropdown",
            title: "In the Watershed?",
            columnHeader: "Watershed",
            listItems: [
                'Yes',
                'No',
            ]
        },
        {
            type: "dropdown",
            title: "On Lake Coast?",
            columnHeader: "Coast",
            listItems: [
                'Yes',
                'No',
            ]
        },
        {
            type: "checkbox",
            title: "Fire(s): ",
            columnHeader: "Fire(s)",
            listItems: ["Ojibwe", "Odawa", "Potatowatomi"]
        },
    ]
};
