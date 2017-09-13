
import { byIds, byEventDate } from '../reducers/selectors';
const entities = {
  "8": {"id": 8},
  "2": {"id": 2},
  "4": {"id": 4}
};
const ids = [8, 4];

test('returns the values for an array of keys',() => {
  expect(byIds(entities, ids)).toEqual([{"id": 8},{"id": 4}])
});

const orders = {
  "8": {"event_date": "2017-05-01T18:39:29.113Z"},
  "7": {"event_date": "2017-04-30T18:39:29.113Z"},
  "1": {"event_date": "2017-04-24T18:39:29.113Z"},
  "5": {"event_date": "2017-04-28T18:39:29.113Z"},
  "3": {"event_date": "2017-04-26T18:39:29.113Z"},
  "2": {"event_date": "2017-04-25T18:39:29.113Z"},
  "6": {"event_date": "2017-04-29T18:39:29.113Z"},
  "4": {"event_date": "2017-04-27T18:39:29.113Z"},
}

const sorted = [
  {"event_date": "2017-04-24T18:39:29.113Z"},
  {"event_date": "2017-04-25T18:39:29.113Z"},
  {"event_date": "2017-04-26T18:39:29.113Z"},
  {"event_date": "2017-04-27T18:39:29.113Z"},
  {"event_date": "2017-04-28T18:39:29.113Z"},
  {"event_date": "2017-04-29T18:39:29.113Z"},
  {"event_date": "2017-04-30T18:39:29.113Z"},
  {"event_date": "2017-05-01T18:39:29.113Z"},
]

test('sorts orders by event_date prop', () => {
  expect(byEventDate(orders)).toEqual(sorted)
})
