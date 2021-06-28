export function cleanData(dataRows) {
    console.log("dataRows", dataRows)
    const result = dataRows.map(d => {
        if (d.Genre === "0" || d.Genre === "") d.Genre = "N/A"
        if (d.Province === "0" || d.Province === "") d.Genre = "Other"
        else if (d.Province === "Newfoundland/Labrad." || d.Province === "Newfoundland/Labrador") d.Province = "Newfoundland & Labrador"
        else if (d.Province === "North West Territories" || d.Province === "North W. Territories") d.Province = "Northwest Territories"
        else if (d.Province === "Yukon") d.Province = "Yukon Territory"
        // Purpose
        if (d.Purpose.startsWith("COVID")) d.Purpose2 = "COVID-19 Program"
        else if (d.Purpose.startsWith("Development")) d.Purpose2 = "Development Program"
        else if (d.Purpose.startsWith("Marketing Program")) d.Purpose2 = "Marketing Program"
        else if (d.Purpose.startsWith("Production Program")) d.Purpose2 = "Production Program"
        else if (d.Purpose.startsWith("Promotion Program")) d.Purpose2 = "Promotion Program"
        else if (d.Purpose.startsWith("Theatrical")) d.Purpose2 = "Theatrical Program"
        else d.Purpose2 = d.Purpose
        return d;
    })
    console.log("result", result)
    return result
}