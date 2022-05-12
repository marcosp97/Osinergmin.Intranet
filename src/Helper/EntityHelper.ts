export const sectorEsPublico = (value: number) => {
    const map: any = {
        [100000001]: "No",
        [100000000]: "Si"
    }
    return map.hasOwnProperty(value) ? map[value]: "";
}

export const certificoVariasSedes = (value: boolean) => value || value === false? (value ? "Si" : "No") : "";