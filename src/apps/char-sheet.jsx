import React, { useState } from "react";
import './char-sheet.scss';

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
    <div className="app phb character-sheet">
      <h1>Character Sheet</h1>

      <h2>{os.user} the {os.hero.name} </h2>
      <div className="row">
      <div className="attr-item">
          <div className="main column">
            <span className="label tx-heavy tx-s tx-upper">HP</span>
            <span className="bonus tx-l tx-heavy">{os.hero.maxHP} / {os.hero.maxHP}</span>
          </div>
        </div>        
        <div className="attr-item">
          <div className="main column">
            <span className="label tx-heavy tx-s tx-upper">Mana</span>
            <span className="bonus tx-l tx-heavy">{os.hero.maxMana} / {os.hero.maxMana}</span>
          </div>
        </div>
        <div className="attr-item">
          <div className="main column">
            <span className="label tx-heavy tx-s tx-upper">AC</span>
            <span className="bonus tx-l tx-heavy">{os.hero.ac} / {os.hero.ac}</span>
          </div>
        </div>
      </div>
      
      <h2>Attributes</h2>
      <div className="attribute-list">
        {fullSheet.attributes.map(attr => (
          <CharSheetAttribute key={attr.id} {...attr} />
        ))}
      </div>

      <h2>Skills</h2>
      <div className="section-header row">
        <div>
          <button onClick={() => setSkillSort('alpha')}>Az</button> 
        </div>
        <div>
          <button onClick={() => setSkillSort('bonus')}>+-</button>
        </div>
        <div>
          <input type="checkbox" onChange={() => setOnlyProf(!onlyProf)}/>
        </div>
      </div>
      <ul className="skill-list">
        {filteredSkills.map(skill => (
          <CharSheetSkill key={skill.id} {...skill} />
        ))}
      </ul>
      <h2>Features</h2>
      <section className="">
        {fullSheet.features.map(f => <Feature feature={f} key={f.name} />)}
      </section>
    </div>
  );
};

export const CharSheetAttribute = props => {
  const { label, score, bonus } = props;
  const bonusStr = (bonus > 0 ? '+' : '') + bonus.toString(); 

  return (
    <div className="attribute-list-item">
      <div className="attr-item">
        <div className="main column">
          <span className="label tx-heavy tx-s tx-upper">{label}</span>
          <span className="bonus tx-l tx-heavy">{bonusStr}</span>
        </div>
        <span className="score tx-heavy">{score}</span>
      </div>
    </div>
  );
};

export const CharSheetSkill = props => {
  const { label, isProficient, score} = props;
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

const Feature = ({feature}) => {
  return (
    <article className="feature-item column full-x">
      <h3 className="">{feature.name}</h3>
      <p>
        <span className="tx-m tx-medium">{feature.description}</span>
      </p>
    </article>
  );
}