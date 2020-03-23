import { character } from '../data/definitions/character-sheet';

export const attrBonus = score => Math.floor((score - 10) / 2);
export const profBonus = _ => 2;

export const populateSheet = data => {

    const attributes = character.attributes.map(attr => ({
        ...attr,
        score: data.attributes[attr.id],
        bonus: attrBonus(data.attributes[attr.id])
    }));

    const skills = character.skills.map(skill => {
        const isProficient = data.skillProfs.includes(skill.id);
        const baseBonus = attrBonus(data.attributes[skill.basis]);
        return {
            ...skill,
            isProficient,
            score: baseBonus + (isProficient ? profBonus() : 0)
        };
    });

    return {
        ...data,
        attributes,
        skills
    };
};