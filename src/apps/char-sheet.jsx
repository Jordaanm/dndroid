import React from "react";
import './char-sheet.scss';

import { fighter } from "../data/hero-presets/fighter";
import { populateSheet } from "../utils/char-utils";

export const CharSheet = props => {
  // const {} = props;
  const fullSheet = populateSheet(fighter);

  return (
    <div className="app character-sheet">
      <div className="char-sheet-section">
        <ul className="attribute-list">
          {fullSheet.attributes.map(attr => (
            <CharSheetAttribute key={attr.id} {...attr} />
          ))}
        </ul>
      </div>
      <div className="char-sheet-section">
        <ul className="skill-list">
          {fullSheet.skills.map(skill => (
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
