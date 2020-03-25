export const spells = [{
  name: 'protection from evil and good',
  cost: 2,
  castTime: '1 action',
  duration: 'Concentration, 10 min',
  description: [
    'Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.\n',
    'The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can’t be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.'
  ].join('\n'),
  range: 'Touch',
}, {
  name: 'sanctuary',
  cost: 2,
  castTime: '1 minor action',
  duration: '1 min',
  range: '30ft',
  description: [
    'You ward a creature within range against attack.',
    'Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from area effects, such as the explosion of a fireball.\n',
    'If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.'
  ].join('\n'),
}, {
  name: 'lesser restoration',
  cost: 3,
  castTime: '1 action',
  duration: 'Instant',
  range: 'Touch',
  description: 'You touch a creature and can end either one disease or one condition afflicting it. The condition can be **blinded, deafened, paralyzed, or poisoned.**',
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
},{
  name: 'bless',
  cost: 2,
  castTime: '1 action',
  range: '30 ft',
  duration: 'Concentration, 1 min',
  description: [
    'You bless up to three creatures of your choice within range.',
    'Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.'
  ].join('\n')
},{
  name: 'purify food and drink',
  cost: 2,
  castTime: '1 action',
  range: '10 ft',
  duration: 'Instant',
  description: [
    'All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.'
  ].join('\n')
},{
  name: 'shield of faith',
  cost: 2,
  castTime: '1 minor action',
  range: '60 ft',
  duration: 'Concentration, 10 min',
  description: [
    'A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.'
  ].join('\n')
},{
  name: 'goodberry',
  cost: 2,
  castTime: '1 action',
  range: 'Touch',
  duration: 'Instant',
  description: [
    'Up to ten berries appear in your hand and are infused with magic for the duration.',
    'A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day'
  ].join('\n')
},{
  name: 'hunters mark',
  cost: 2,
  castTime: '1 minor action',
  range: '90 ft',
  duration: 'Concentration, 1 hour',
  description: [
    'You choose a creature you can see within range and mystically mark it as your quarry.',
    'Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it.',
    'If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.'
  ].join('\n')
},{
  name: 'speak with animals',
  cost: 2,
  castTime: '1 action',
  range: 'Self',
  duration: '10 min',
  description: [
    'You gain the ability to comprehend and verbally communicate with beasts for the duration.',
    'The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day.',
    'You might be able to persuade a beast to perform a small favor for you, at the DM’s discretion.'
  ].join('\n')
},{
  name: 'pass without trace',
  cost: 3,
  castTime: '1 action',
  range: 'Self',
  duration: 'Concentration, 1 hour',
  description: [
    'A veil of shadows and silence radiates from you, masking you and your companions from detection.',
    'For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can’t be tracked except by magical means.',
    'A creature that receives this bonus leaves behind no tracks or other traces of its passage.'
  ].join('\n')
},{
  name: 'mage hand',
  cost: 0,
  castTime: '1 action',
  range: '30 ft',
  duration: '1 min',
  description: [
    'A spectral, floating hand appears at a point you choose within range.',
    'The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\n',
    'You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.',
    'The hand can’t attack, activate magical items, or carry more than 10 pounds.'
  ].join('\n')
},{
  name: 'friends',
  cost: 0,
  castTime: '1 action',
  range: 'Self',
  duration: 'Concentration, 1 min',
  description: [
    'For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn’t hostile toward you.',
    'When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you.',
    'A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM’s discretion), depending on the nature of your interaction with it.'
  ].join('\n')
},{
  name: 'vicious mockery',
  cost: 0,
  castTime: '1 action',
  range: '60 ft',
  duration: 'Instant',
  description: [
    'You unleash a string of insults laced with subtle enchantments at a creature you can see within range.',
    'If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.'
  ].join('\n')
},{
  name: 'hideous laughter',
  cost: 2,
  castTime: '1 action',
  range: '30 ft',
  duration: 'Concentration, 1 min',
  description: [
    'A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it.',
    'The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected.\n',
    'At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw ifit’s triggered by damage. On a success, the spell ends.'
  ].join('\n')
},{
  name: 'comprehend languages',
  cost: 2,
  castTime: '1 action',
  range: 'Self',
  duration: '1 hour',
  description: [
    'For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any spoken language that you hear.',
    'You also understand any written language that you see, but you must be touching the surface of which the words are written. It takes about 1 minute to read one page of text.',
    'This spell doesn’t decode secret messages in a text or glyph, such as an arcane sigil, that isn’t part of a written language.'
  ].join('\n')
},{
  name: 'charm person',
  cost: 2,
  castTime: '1 action',
  range: '30 ft',
  duration: '1 hour',
  description: [
    'You attempt to charm a humanoid you can see within range.',
    'It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it.The charmed creature regards you as a friendly acquaintance.',
    'When the spell ends, the creature knows it was charmed by you.'
  ].join('\n')
},{
  name: 'magic missile',
  cost: 2,
  castTime: '1 action',
  range: '120 ft',
  duration: 'Instant',
  description: [
    'You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range.',
    'A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.'
  ].join('\n')
},{
  name: 'cloud of daggers',
  cost: 3,
  castTime: '1 action',
  range: '60 ft',
  duration: 'Concentration, 1 min',
  description: [
    'You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range.',
    'A creature takes 4d4 slashing damage when it enters the spell’s area for the first time on a turn or starts its turn there. '
  ].join('\n')
},{
  name: 'heat metal',
  cost: 3,
  castTime: '1 action',
  range: '60 ft',
  duration: 'Concentration, 1 min',
  description: [
    'Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot.',
    'Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.',
    '',
    'If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can.',
    'If it doesn’t drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.'
  ].join('\n')
},{
  name: 'pyrotechnics',
  cost: 3,
  castTime: '1 action',
  range: '60 ft',
  duration: 'Instant',
  description: [
    'Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.',
    '* **Fireworks**: The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.',
    '* **Smoke**: Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it'
  ].join('\n')
},{
  name: 'speak with dead',
  cost: 5,
  castTime: '1 action',
  range: '10 ft',
  duration: '10 min',
  description: [
    'You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can’t be undead. The spell fails if the corpse was the target of this spell within the last 10 days.',
    '',
    'Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew.',
    'Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn’t return the creature’s soul to its body, only its animating spirit. Thus, the corpse can’t learn new information, doesn’t comprehend anything that has happened since it died, and can’t speculate about future events.'
  ].join('\n')
},{
  name: 'blade ward',
  cost: 0,
  castTime: '1 action',
  range: 'Self',
  duration: '1 round',
  description: [
    'You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.'
  ].join('\n')
},{
  name: 'fire bolt',
  cost: 0,
  castTime: '1 action',
  range: '120 ft',
  duration: 'Instant',
  description: [
    'You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target.',
    'On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.'
  ].join('\n')
},{
  name: 'fireball',
  cost: 5,
  castTime: '1 action',
  range: '150 ft',
  duration: 'Instant',
  description: [
    'A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame.',
    'Each creature in a 20-foot radius must make a **Dexterity saving throw**. A target takes **8d6 fire damage** on a failed save, or **half as much damage on a successful one**.',
    'The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried.'
  ].join('\n')
},{
  name: 'light',
  cost: 0,
  castTime: '1 action',
  range: 'Touch',
  duration: '1 hour',
  description: [
    'You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet.',
    'The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.',
    'If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.'
  ].join('\n')
},{
  name: 'prestidigitation',
  cost: 0,
  castTime: '1 action',
  range: '10 ft',
  duration: '1 hour',
  description: [
    'This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:',
    '* You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.',
    '* You instantaneously light or snuff out a candle, a torch, or a small campfire.',
    '* You instantaneously clean or soil an object no larger than 1 cubic foot.',
    '* You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.',
    '* You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.',
    '* You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.',
    'If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.'
  ].join('\n')
},{
  name: 'shocking grasp',
  cost: 0,
  castTime: '1 action',
  range: 'Touch',
  duration: 'Instant',
  description: [
    'Lightning springs from your hand to deliver a shock to a creature you try to touch.',
    'Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal.',
    'On a hit, the target takes 1d8 lightning damage, and it can’t take reactions until the start of its next turn.'
  ].join('\n')
},{
  name: 'burning hands',
  cost: 2,
  castTime: '1 action',
  range: 'Self (15ft cone)',
  duration: 'Instant',
  description: [
    'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips.',
    'Each creature in a 15-foot cone must make a **Dexterity saving throw**. A creature takes **3d6 fire damage** on a failed save, or **half as much damage** on a successful one.',
    'The fire ignites any flammable objects in the area that aren’t being worn or carried.'
  ].join('\n')
},{
  name: 'mage armor',
  cost: 2,
  castTime: '1 action',
  range: 'Touch',
  duration: '8 hours',
  description: [
    'You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends.',
    'The target’s base AC becomes 13 + its Dexterity modifier. The spell ends it if the target dons armor or if you dismiss the spell as an action.'
  ].join('\n')
},{
  name: '',
  cost: 2,
  castTime: '1 action',
  range: '30 ft',
  duration: 'Concentration, 1 min',
  description: [
    ''
  ].join('\n')
},{
  name: 'aganazzars scorcher',
  cost: 3,
  castTime: '1 action',
  range: '30 ft',
  duration: 'Instant',
  description: [
    'A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose.',
    'Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.'
  ].join('\n')
},{
  name: 'blur',
  cost: 3,
  castTime: '1 action',
  range: 'Self',
  duration: 'Concentration, 1 min',
  description: [
    'Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you.',
    'An attacker is immune to this effect if it doesnt rely on sight, as with blindsight, or can see through illusions, as with truesight.'
  ].join('\n')
}];

// ,{
//   name: '',
//   cost: 2,
//   castTime: '1 action',
//   range: '30 ft',
//   duration: 'Concentration, 1 min',
//   description: [
//     ''
//   ].join('\n')
// }