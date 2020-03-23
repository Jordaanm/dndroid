export const UsageTypes = {
    SR: 'Short Rest',
    LR: 'Long Rest',
    EN: 'Encounter'
}

export const PrimaryResources = {
    MANA: 'Mana',
    KI: 'Ki'
}

export const fighter = {
    name: 'Fighter',
    password: 'champion',
    classes: ['Fighter'],
    ac: 15,
    maxHP: 54,
    maxResource: 0,
    primaryResource: null,
    attributes: {
        str: 18,
        dex: 14,
        con: 15,
        int: 11,
        wis: 13,
        cha: 9
    },
    skillProfs: ['athletics', 'intimidation', 'acrobatics'],
    features: [
        {
            name: 'Improved Critical',
            description: 'Your weapon attacks score a critical hit on an attack roll of 19 or 20'
        },
        {
            name: 'Second Wind',
            description: 'On your turn, you can use a minor action to regain hit points equal to 1d10 + 4',
            usageType: UsageTypes.SR,
            uses: 1
        },
        {
            name: 'Action Surge',
            description: 'While in combat, you may perform an extra action on your turn',
            usageType: UsageTypes.SR,
            uses: 1
        },
        {
            name: 'Fighting Style - Dual Wielding',
            description: 'You may attack with your secondary hand as a minor action'
        },
        {
            name: 'Extra Attack',
            description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn'
        }
    ]
};

export const paladin = {
    name: 'Paladin',
    password: 'believe',
    classes: ['Paladin'],
    ac: 18,
    maxHP: 48,
    maxResource: 14,
    primaryResource: PrimaryResources.MANA,
    attributes: {
        str: 14,
        dex: 9,
        con: 16,
        int: 10,
        wis: 12,
        cha: 18
    },
    skillProfs: ['religion', 'persuasion', 'medicine'],
    features: [
        {
            name: "Divine Sense",
            description: "You can open your awareness to sense Holy and Unholy entities. Until the end of your next turn, you know the location of any Celestial, Fiendish or Undead creature within 100 ft of you",
            usageType: UsageTypes.LR,
            uses: 4
        },
        {
            name: "Lay on Hands",
            description: "Your blessed touch can heal wounds. You have a pool of healing power. With that pool, you can restore a total of 30 points of damage",
            usageType: UsageTypes.LR,
            uses: 30
        },
        {
            name: "Spellcasting",
            description: "You can draw on divine magic through meditation to cast spells"
        },
        {
            name: "Divine Smite",
            description: `When you hit a creature with a melee weapon attack, you can spend mana to deal additional radiant damage on the attack. The bonus is based on mana spent:\n`+
            `* 2d8 for 2 mana`+
            `* 3d8 for 3 mana`+
            `* 4d8 for 5 mana`+
            `If the target is a fiend or undead, deal a further bonus of 1d8 damage`
        },
        {
            name: "Divine Health",
            description: "You are immune to disease and illness"
        },
        {
            name: 'Extra Attack',
            description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn'
        },
        {
            name: 'Sacred Weapon',
            description: 'As an action, you can imbue one weapon that you are holding with positive energy. For one minute, you add +3 to attack rolls made with that weapon. The weapon also emits bright light in a 20ft radius',
            usageType: UsageTypes.LR,
            uses: 5
        }
    ],
    spells: [
        'protection from evil and good',
        'sanctuary',
        'lesser restoration',
        'zone of truth'
    ]
};

export const ranger = {
    name: 'Ranger',
    password: 'focus',
    classes: ['Ranger'],
    ac: 14,
    maxHP: 54,
    maxResource: 14,
    primaryResource: PrimaryResources.MANA,
    attributes: {
        str: 12,
        dex: 18,
        con: 14,
        int: 10,
        wis: 16,
        cha: 9
    },
    skillProfs: ['nature', 'animal_handling', 'survival'],
    features: [{
        name: 'Favored Enemy - Beasts',
        description: `You have experience studying and hunting beasts.\n`+
        `* You have advantage on checks to track, investigate or recall information about any beastial creature.\n`+
        `* You deal +2 bonus damage to attacks made against beastial creatures`
    }, {
        name: 'Natural Explorer',
        description: `You are a master of navigating the natural world.\n`+
        `* Difficult terrain doesn't affect your movement.\n`+
        `* You have advantage on all initiative rolls\n`+
        `* On your first turn in combat, you have advantage on attack rolls against creatures than have not yet acted in combat.\n`+
        `* Your group cannot become lost except by magical means\n`+
        `* You have advantage when trying to forage for food or find shelter in natural terrain.\n`+
        `* When tracking creatures, you can learn their exact number, size and how long ago they passed through an area`
    }, {
        name: 'Fighting Style - Archery',
        description: `You are a skilled archer. You gain bonuses to attack and damage rolls made with a bow.`
    }, {
        name: 'Spellcasting',
        description: 'You have learned to use the magical essence of nature'
    }, {
        name: 'Primeval Awareness',
        description: `Your mastery of natural lore allows you to establish and powerful link to beasts and the land around you.\n`+
        `* As an action, you can communicate simple ideas to beasts through sound and gesture, and read their basic mood and intent.\n`+
        `* Additionally, you can spend a minute attuning your sense to determine if hostile beasts are lurking within 5 miles of you.`
    }, {
        name: 'Colossus Slayer',
        description: 'When dealing damage to a creature, if it is below its maximum hit points, you deal an extra 5 damage. This effect can occur once per turn'
    }, {
        name: 'Extra Attack',
        description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn'
    }],
    spells: []
};

export const monk = {
    name: 'Monk',
    password: 'balance',
    classes: ['Monk'],
    ac: 15,
    maxHP: 46,
    primaryResource: PrimaryResources.KI,
    maxResource: 5,
    attributes: {
        str: 10,
        dex: 18,
        con: 14,
        int: 9,
        wis: 16,
        cha: 12
    },
    skillProfs: ['acrobatics', 'history', 'stealth'],
    features: [
        {
            name: 'Martial Arts',
            description: 'You are skilled with unarmed attacks. When taking the attack action, you may make an additional unarmed attack as a minor action'
        },
        {
            name: 'Ki',
            description: 'You can harness the mystic energy of Ki to perform special attacks (see below)'
        },
        {
            name: 'Enhanced Movement',
            description: 'Your movement speed is increased. You gain advantage when attempting to scale vertical surfaces, leap across openings, etc'
        },
        {
            name: 'Slow Fall',
            description: 'You can use your reaction to reduce falling damage you take by up to 25'
        },
        {
            name: 'Extra Attack',
            description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn'
        },
        {
            name: 'Deflect Missile',
            description: `You can use your reaction to deflect or catch the projectile when hit by a ranged attack. When you do so, the damage you take is reduced by 1d10+8.\n\n`+
            `If you reduce the damage to 0, you catch the projectile, and can spend **1 Ki** point to redirect the projectile at another target. You make this attack with proficiency`
        },
        {
            name: 'Stunning Strike',
            description: `When you hit another creature with a melee attack, you may spend **1 Ki** point to attempt a Stunning Strike\n`+
            `The target must success on a Constitution saving throw (**DC 13**) or be stunned until the end of your next turn`
        },
        {
            name: 'Flurry of Blows',
            description: `After taking the attack action on your turn, you may spend **1 Ki** point to make **2 Unarmed Attacks** as a **minor action**\n`+
            `If a Flurry of Blows attack hits, you may impose one of the following effects on the target: \n`+
            `* It must succeed a Dexterity saving throw (**DC 13**) or be knocked prone\n`+
            `* It must success a Strength saving throw (**DC 13**) or be pushed backwards up to 15ft\n`+
            `* It cannot take ractions until the end of your next turn\n`
        },
        {
            name: 'Patient Defense',
            description: 'You can spend **1 Ki point** to Dodge as a minor action on your turn, giving attacks against you **Disadvantage** until your next turn'
        }
    ],
    spells: [
        
    ]
};

export const bard = {
    name: 'Bard',
    password: 'inspire',
    classes: ['Bard'],
    ac: 13,
    maxHP: 40,
    maxResource: 27,
    primaryResource: PrimaryResources.MANA,
    attributes: {
        str: 12,
        dex: 16,
        con: 9,
        int: 14,
        wis: 10,
        cha: 18
    },
    skillProfs: ['persuasion', 'deception', 'performance'],
    skillExpertise: ['persuasion', 'deception'],
    features: [{
        name: 'Spellcasting',
        description: 'You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music'
    }, {
        name: 'Bardic Inspiration',
        description: [
            'You can inspire others through stirring words, dance or music.',
            'To do so, you use a minor action to choose 1 creature within 60ft who can see or hear you.',
            'That creature gains an Inspiration die (1d8). Within the next 10minutes, they can roll that die and add the value as a bonus to any one ability check, saving throw or attack roll'
        ].join('\n'),
        usageType: UsageTypes.SR,
        uses: 3
    }, {
        name: 'Jack of all Trades',
        description: 'Add +2 to any ability check for which you are not already proficient'
    }, {
        name: 'Song of Rest',
        description: [
            'While taking a short rest, you can use soothing music or oration to help revitalise your allies',
            'Any friendly creatures who can hear your performance regain 5 hit points'
        ].join('\n')
    }, {
        name: 'Expertise - Persuasion and Deception',
        description: 'You are an expert at Persausion and Intimidation, and gain bonuses to all related skill checks'
    }, {
        name: 'Combat Inspiration',
        description: [
            'A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it has just made',
            'Alternatively, when that creature is being attacked, it can roll that die to reduce the opponent\'s attack roll by that amount'
        ].join('\n')
    }],
    spells: [

    ]
};

export const sorcerer = {
    name: 'Sorcerer',
    password: 'chaos',
    classes: ['Sorcerer'],
    ac: 11,
    maxHP: 38,
    maxResource: 27,
    primaryResource: PrimaryResources.MANA,
    attributes: {
        str: 9,
        dex: 12,
        con: 16,
        int: 18,
        wis: 10,
        cha: 14
    },
    skillProfs: ['arcana', 'history', 'investigation'],
    features: [{
        name: 'Spellcasting',
        description: 'You are innately infused with arcane magic, and understand some aspect of the nature of magic at an instinctive level'
    }, {
        name: 'Font of Magic',
        description: [
            'You can tap into a deep wellspring of magic within yourself, represented by sorcery points, which allow you to create metamagic effects.',
            'You have 5 sorcery points, and you regain these points upon completing a long rest.'
        ].join('\n')
    }, {
        name: 'Metamagic - Distant Spell',
        description: 'You can spend *1 Sorcery Point* to double the range of a spell as you cast it. If cast on a spell with touch range, the range becomes 30 ft'
    }, {
        name: 'Metamagic - Subtle Spell',
        description: 'You can spend *1 Sorcery Point* to cast a spell without any movement or sound'
    }, {
        name: 'Metamagic - Twinned Spell',
        description: 'When casting a single-target spell, you can spend a number of **SorceryPpoints equal to half the mana cost of the spell** to also target 2 second creature'
    }, {
        name: 'Wild Magic Surge',
        description: [
            'Your spellcasting can unleash surges of untamed magic.',
            'Each time you cast a spell, there is a 5% chance a random side effect will occur',
        ].join('\n')
    }, {
        name: 'Tides of Chaos',
        description: [
            'Once per day, you can manipulate the forces of choas to gain advantage on any attack roll, ability check or skill check.',
            'Whenver the Wild Magic Surge occurs, you regain use of this feature'
        ].join('\n')
    }],
    spells: [
        
    ]
};

export const allHeroes = [
    ranger, fighter, paladin, monk, bard, sorcerer
]