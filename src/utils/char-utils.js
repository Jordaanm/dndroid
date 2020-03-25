import { character } from '../data/definitions/character-sheet';
import { spells } from '../data/spells';

export const attrBonus = score => Math.floor((score - 10) / 2);
export const profBonus = _ => 3;

export const populateSheet = data => {

    //Populate HP and Mana/Ki
    const currentHP = data.maxHP;
    const currentResource = data.maxResource;

    const attributes = character.attributes.map(attr => ({
        ...attr,
        score: data.attributes[attr.id],
        bonus: attrBonus(data.attributes[attr.id])
    }));

    const skills = character.skills.map(skill => {
        const isProficient = data.skillProfs.includes(skill.id);
        const isExpert = data.skillExpertise ? data.skillExpertise.includes(skill.id) : false;

        const baseBonus = attrBonus(data.attributes[skill.basis]);
        return {
            ...skill,
            isProficient,
            score: baseBonus + (isProficient ? profBonus() : 0) + (isExpert ? profBonus() : 0)
        };
    });

    const characterSpells = (data.spells || []).map(name => {
        const spell = spells.find(sp => sp && sp.name === name)
        if(!spell) { console.log("Spell not found", spell); }
        return spell || {};
    });

    return {
        ...data,
        attributes,
        skills,
        spells: characterSpells,
        currentHP,
        currentResource
    };
};