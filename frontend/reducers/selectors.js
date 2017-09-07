export const asArray = obj => Object.keys(obj).map(key => obj[key]);

export const byIds = (entities, ids) => ids.map(id => entities[id]);

export const byEventDate = (orders) => (
  asArray(orders).sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
)
