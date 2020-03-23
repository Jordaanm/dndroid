export const usageTypes = {
    SR: 'Short Rest',
    LR: 'Long Rest',
    EN: 'Encounter'
}

export const fighter = {
    name: 'Fighter',
    password: 'champion',
    classes: ['Fighter'],
    ac: 15,
    maxHP: 44,
    maxMana: 0,
    usesMana: false,
    attributes: {
        str: 16,
        dex: 14,
        con: 13,
        int: 12,
        wis: 10,
        cha: 10
    },
    skillProfs: ['athletics', 'perception', 'acrobatics'],
    features: [
        {
            name: 'Improved Critical',
            description: 'Your weapon attacks score a critical hit on an attack roll of 19 or 20'
        },
        {
            name: 'Second Wind',
            description: 'On your turn, you can use a minor action to regain hit points equal to 1d10 + 4',
            usageType: usageTypes.SR,
            uses: 1
        },
        {
            name: 'Action Surge',
            description: 'While in combat, you may perform an extra action on your turn',
            usageType: usageTypes.SR,
            uses: 1
        },
        {
            name: 'Dual Wielding',
            description: 'You may attack with your secondary hand as a minor action'
        }
    ]
};

export const paladin = {
    name: 'Paladin',
    password: 'believe',
    classes: ['Paladin'],
    ac: 18,
    maxHP: 48,
    maxMana: 999,
    usesMana: true,
    attributes: {
        str: 13,
        dex: 10,
        con: 14,
        int: 10,
        wis: 12,
        cha: 16
    },
    skillProfs: ['religion', 'persuasion', 'insight'],
    features: []
};

export const ranger = {
    name: 'Ranger',
    password: 'focus',
    classes: ['Ranger'],
    ac: 14,
    maxHP: 40,
    maxMana: 999,
    usesMana: true,
    attributes: {
        str: 13,
        dex: 16,
        con: 12,
        int: 10,
        wis: 14,
        cha: 10
    },
    skillProfs: ['nature', 'animal_handling', 'survival'],
    features: []
};

export const monk = {
    name: 'Monk',
    password: 'balance',
    classes: ['Monk'],
    ac: 15,
    maxHP: 36,
    maxMana: 0,
    usesMana: false,
    attributes: {
        str: 13,
        dex: 16,
        con: 12,
        int: 10,
        wis: 14,
        cha: 10
    },
    skillProfs: ['acrobatics', 'percpetion', 'insight'],
    features: []
};

export const bard = {
    name: 'Bard',
    password: 'inspire',
    classes: ['Bard'],
    ac: 13,
    maxHP: 32,
    maxMana: 999,
    usesMana: true,
    attributes: {
        str: 13,
        dex: 14,
        con: 10,
        int: 13,
        wis: 10,
        cha: 16
    },
    skillProfs: ['acrobatics', 'percpetion', 'insight'],
    features: []
};

export const sorcerer = {
    name: 'Sorcerer',
    password: 'empower',
    classes: ['Sorcerer'],
    ac: 11,
    maxHP: 28,
    maxMana: 999,
    usesMana: true,
    attributes: {
        str: 10,
        dex: 12,
        con: 13,
        int: 16,
        wis: 14,
        cha: 10
    },
    skillProfs: ['arcana', 'history', 'investigation'],
    features: []
};

export const allHeroes = [
    ranger, fighter, paladin, monk, bard, sorcerer
]