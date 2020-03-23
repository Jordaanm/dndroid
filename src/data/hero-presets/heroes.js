export const usageTypes = {
    SR: 'Short Rest',
    LR: 'Long Rest',
    EN: 'Encounter'
}

export const fighter = {
    name: 'Fighter',
    password: 'champion',
    classes: ['Fighter'],
    maxHP: 44,
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
    maxHP: 48,
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
    maxHP: 40,
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

export const allHeroes = [
    ranger, fighter, paladin
]