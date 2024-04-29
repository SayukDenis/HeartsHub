// Оголошення імпорту бібліотеки для роботи з файлами JSON

import * as data from "../JSON/ua_cities.json"
// Оголошення типу для масиву даних
export interface LocalityData {
    nameUa: string;
    nameEn: string;
    lng: string;
    lat: string;
    community: string;
    district: string;
    state: string;
    type: string;
}

function parseData(): LocalityData[] {
    const jsonFilePath = "../JSON/ua_cities.json";
    const jsonData = require(jsonFilePath);
    let dataArray: LocalityData[] = [];
    for (let i = 0; i < jsonData.length; i++) {

        let newData: LocalityData = {
            nameUa: jsonData[i].nameUa,
            nameEn: jsonData[i].nameEn,
            lng: jsonData[i].lng,
            lat: jsonData[i].lat,
            community: jsonData[i].community,
            district: jsonData[i].district,
            state: jsonData[i].state,
            type: jsonData[i].type
        };
        dataArray.push(newData);
    }

    return dataArray;
}

export const localityData: LocalityData[] = parseData()


