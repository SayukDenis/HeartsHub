import { LocalityData, localityData } from "../../../../assets/Data/locality";

export const getLocationData = (input: string): LocalityData[] => {

    if (input == "") {
        return [];
    }
    let result: LocalityData[] = [];
  
    for (let locality of localityData) {

        if (locality.nameUa.toLowerCase().startsWith(input)) {

            result.push(locality)
        }
        if (result.length == 4) {
            break;
        }
    }

    return result;
}

export const getCitiesByLocation = (lat: number | undefined, lng: number | undefined) => {
    if (!lat || !lng) {
        return null
    }
    const tolerance = 0.01;
    let result = null;
    for (let locality of localityData) {
        if (locality.lat && locality.lng) {
            if (Math.abs(Number(locality.lat) - lat) <= tolerance && Math.abs(Number(locality.lng) - lng) <= tolerance) {
                result = locality;
            }
        }
    }

    return result;
}

export const stringBuilder = (item: LocalityData|null): string => {
    if(!item){
        return "";
    }
    let result = item.type + " " + item.nameUa;
    if (item.district != null) {
        result += ", " + item.district + " р-н";
    }
    if (item.state != null) {
        result += ", " + item.state + " обл";
    }

    return result;
};
