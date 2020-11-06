
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1Ijoic3RhY2llc2hlbGRvbiIsImEiOiJja2d6dmwwajYwOXZ5MnhzaWZwdzhpZ3hrIn0.20fQRir-1YxbYtiy4yLzZw",
    CSV: "https://docs.google.com/spreadsheets/d/1SbtQ2_BaUH6HrzNP8WhRYAmoEG0l31LBM7pDf5L2liE/gviz/tq?tqx=out:csv&sheet=Nations",
    center: [-85.002462, 45.246623], //Lng, Lat
    zoom: 5, //Default zoom
    title: "Replace with your title",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["Header", "Info 1", "Info 2"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
    ]

};
