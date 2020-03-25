import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactMarkdown from 'react-markdown';

import { useStores } from '../utils/contexts';
import "./combat.scss";

export const Combat = observer(() => {

  const { os } = useStores();
  const { hero } = os;
  const { spells, attacks, currentResource } = os.hero;

  const [hpMod, setHpMod] = useState(0);
  const [manaMod, setManaMod] = useState(0);

  const hpModChange = e => setHpMod(parseInt(e.target.value, 10) || 0);
  const manaModChange = e => setManaMod(parseInt(e.target.value, 10) || 0);
  const heal = _ => hero.currentHP = Math.min(hero.currentHP + hpMod, hero.maxHP);
  const damage = _ => hero.currentHP = Math.max(hero.currentHP - hpMod, 0);
  const restore = _ => hero.currentResource = Math.min(hero.currentResource + manaMod, hero.maxResource);
  
  const castSpellCB = (spell) => () => {
    if(os.hero.currentResource >= spell.cost) {
      os.hero.currentResource -= spell.cost;
    }
  };

  const sortedSpells = (spells || []).slice().sort((a, b) => {
    if(a.cost === b.cost) {
      return a.name > b.name ? 1 : -1;
    } else {
      return a.cost > b.cost ? 1 : -1;
    }
  });

  return (
    <div className="app phb app--combat single-col">
      <h1>Combat</h1>
      <div className="column sticky">
        <div className="row flex-sb flex-ac">
          <h4>{hero.currentHP} / {hero.maxHP} HP</h4>
          <h4>{hero.currentResource} / {hero.maxResource} {hero.primaryResource}</h4>
        </div>
        <div className="row flex-sb flex-ac">
          <div>
            <input type="number" className="input-small" value={hpMod} onChange={hpModChange}/>
            <button className="btn" onClick={damage}>damage</button>
            <button className="btn" onClick={heal}>heal</button>
          </div>
          <div>
            <input type="number" className="input-small" value={manaMod} onChange={manaModChange}/>
            <button className="btn" onClick={restore}>restore</button>
          </div>
        </div>
      </div>
      <div className="scroll">
        <div className="row flex-sb flex-ac">
          <h2>Weapons</h2>      
        </div>
        <div className="row weapons-header">
          <span className="f3 tx-s">Weapon</span>
          <span className="f1 tx-s">Range</span>
          <span className="f1 tx-s">To Hit</span>
          <span className="f1 tx-s">Damage</span>
        </div>
        {(attacks || []).map(attack => <Attack attack={attack} hero={hero} key={attack.name} />)}

        <div className="row flex-sb flex-ac">
          <h2>Spells</h2>
        </div>
        <div className="row spells-header">
          <span className="f3 tx-s">Spell</span>
          <span className="f1 tx-s">Cast Time</span>
          <span className="f1 tx-s">Range</span>
          <span className="f2 tx-s">Duration</span>
          <span className="f1 tx-s">Cost</span>
          <span className="f1 tx-s"></span>
        </div>
        <div className="column f1">
          {sortedSpells.map(spell => <Spell
            spell={spell}
            availMana={currentResource}
            key={spell && spell.name}
            castSpellCB = {castSpellCB}
          />)}
        </div>
      </div>
    </div>
  );
});

const Spell = ({spell, availMana, castSpellCB}) => {
  const canAfford = spell.cost <= availMana;

  return (
    <div className="spell column">
      <div className="row flex-ac">
        <span className="tx-m tx-heavy tx-cap f3">{spell.name}</span>
        <span className="tx-m f1">{spell.castTime}</span>
        <span className="tx-m f1">{spell.range}</span>
        <span className="tx-m f2">{spell.duration}</span>
        <span className="tx-m f1">{spell.cost} mana</span>
        <div className="f1">
          <button className="btn" disabled={!canAfford} onClick={castSpellCB(spell)}>Cast</button>
        </div>
      </div>
      <div className="">
        <ReactMarkdown source={spell.description} />
      </div>
    </div>
  );
};

const Attack = ({attack, hero}) => {
  const damageString = buildDamageString(attack.damage, hero);
  
  return (
    <div className="weapon row flex-ac">
      <span className="tx-m tx-heavy tx-cap f3">{attack.name}</span>
      <span className="tx-m f1">{attack.range}</span>
      <span className="tx-m f1">{attack.hit}</span>
      <span className="tx-m f1">{damageString}</span>
    </div>
  );
}

const buildDamageString = (damage, hero) => {
  const str = hero.attributes.find(a => a.id === 'str').bonus;
  const dex = hero.attributes.find(a => a.id === 'dex').score;

  return damage.replace('{DEX}', dex).replace('{STR}', str);
};