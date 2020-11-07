
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1Ijoic3RhY2llc2hlbGRvbiIsImEiOiJja2d6dmwwajYwOXZ5MnhzaWZwdzhpZ3hrIn0.20fQRir-1YxbYtiy4yLzZw",
    CSV: "https://docs.google.com/spreadsheets/d/1SbtQ2_BaUH6HrzNP8WhRYAmoEG0l31LBM7pDf5L2liE/gviz/tq?tqx=out:csv&sheet=Nations",
    center: [-85.002462, 45.246623], //Lng, Lat
    zoom: 4, //Default zoom
    title: "Nations of the Great Lakes Watershed",
    description: "View and filter tribal nations by their location in the Watershed.",
    sideBarInfo: ["Nation", "AnishinaabeName", "Translation"],
    popupInfo: ["Nation"],
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
            type: "checkbox",
            title: "Fire(s): ",
            columnHeader: "Fire(s)",
            listItems: ["Ojibwe", "Odawa", "Potatowatomi"]
        },
        {
            type: 'dropdown',
            title: 'Fire(s):',
            columnHeader: 'Fire(s):',
            listItems: [
                'Ojibwe',
                'Odawa',
                'Potawatomi',
            ]   
        }
    ]
};
