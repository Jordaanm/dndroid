import React, { useState } from "react";
import './char-sheet.scss';

import { fighter } from "../data/hero-presets/heroes";
import { populateSheet } from "../utils/char-utils";
import { useStores } from "../utils/contexts";

const sortSkills = (skills, skillSort) => {
  if (skillSort === 'alpha') {
    return skills.sort((a, b) => a.label > b.label ? 1 : -1);
  } else if (skillSort === 'bonus') {
    return skills.sort((a, b) => a.score > b.score ? -1 : 1);
  } else {
    return skills
  }
}

export const CharSheet = props => {
  // const {} = props;
  const { os } = useStores();
  const fullSheet = populateSheet(os.hero);
  const [skillSort, setSkillSort] = useState(null);
  const [onlyProf, setOnlyProf] = useState(false);

  const sortedSkills = sortSkills(fullSheet.skills, skillSort);
  const filteredSkills = onlyProf ? sortedSkills.filter(x => x.isProficient) : sortedSkills;

  return (
    <div className="app character-sheet">
      <div className="char-sheet-section">
        <div className="section-header">
          <span>Attributes</span>
        </div>
        <ul className="attribute-list">
          {fullSheet.attributes.map(attr => (
            <CharSheetAttribute key={attr.id} {...attr} />
          ))}
        </ul>
      </div>
      <div className="char-sheet-section">
        <div className="section-header">
          <span>Skills</span>
          <button onClick={() => setSkillSort('alpha')}>Az</button> 
          <button onClick={() => setSkillSort('bonus')}>+-</button>
          <input type="checkbox" onChange={() => setOnlyProf(!onlyProf)}/>
        </div>
        <ul className="skill-list">
          {filteredSkills.map(skill => (
            <CharSheetSkill key={skill.id} {...skill} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const CharSheetAttribute = props => {
  const { label, score, bonus } = props;
  const bonusStr = (bonus > 0 ? '+' : '') + bonus.toString(); 

  return (
    <li className="attribute-list-item">
      <div className="attr-item">
        <div className="main column">
          <span className="label tx-heavy tx-s tx-upper">{label}</span>
          <span className="bonus tx-l tx-heavy">{bonusStr}</span>
        </div>
        <span className="score tx-heavy">{score}</span>
      </div>
    </li>
  );
};

export const CharSheetSkill = props => {
  const {id, label, isProficient, score} = props;
  const profClass = isProficient ? 'filled' : '';
  const scoreStr = (score > 0 ? '+' : '') + score;

  return (
    <li className="skill-list-item row">
      <span className={`proficiency ${profClass}`}></span>
      <span className="score">{scoreStr}</span>
      <span className="label">{label}</span>
    </li>
  );
};
