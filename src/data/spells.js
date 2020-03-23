export const spells = [{
  name: 'protection from evil and good',
  cost: 1,
  description: '',
  range: '',
  damage: ''
}, {
  name: 'sanctuary',
  cost: 1,
  description: '',
  range: '',
  damage: ''
}, {
  name: 'lesser restoration',
  cost: 1,
  description: '',
  range: '',
  damage: ''
}, {
  name: 'zone of truth',
  cost: 3,
  description: [
    'You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range.  ',
    'Until the spell ends, a creature that enters the spell’s area for the first time on a turn or starts its turn there must make a Charisma saving throw.  ',
    'On a failed save, a creature can’t speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.  ',
    'An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such creatures can be evasive in its answers as long as it remains within the boundaries of the truth.  ',
  ].join('\n'),
  castTime: '1 action',
  duration: '10 min',
  range: '60 ft'
}];