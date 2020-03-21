export const fighter = {
    name: 'Fighter',
    password: 'champion',
    classes: ['Fighter'],
    attributes: {
        str: 16,
        dex: 14,
        con: 13,
        int: 12,
        wis: 10,
        cha: 10
    },
    skillProfs: ['athletics', 'perception', 'acrobatics']
};

export const paladin = {
    name: 'Paladin',
    password: 'believe',
    classes: ['Paladin'],
    attributes: {
        str: 14,
        dex: 10,
        con: 13,
        int: 10,
        wis: 12,
        cha: 16
    },
    skillProfs: ['religion', 'investigation', 'insight']
};

export const ranger = {
    name: 'Ranger',
    password: 'focus',
    classes: ['Ranger'],
    attributes: {
        str: 13,
        dex: 16,
        con: 12,
        int: 10,
        wis: 14,
        cha: 10
    },
    skillProfs: ['nature', 'animal_handling', 'survival']
};

export const allHeroes = [
    ranger, fighter, paladin
]