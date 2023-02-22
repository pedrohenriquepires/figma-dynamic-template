export const getPropertiesFromList = (list: object[]) => [...new Set(list.map(obj => Object.keys(obj)).flat())]
