export const asArray = obj => Object.keys(obj).map(key => obj[key]);

export const byIds = (entities, ids) => ids.map(id => entities[id]);
