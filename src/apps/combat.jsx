import React from 'react';
import { observer } from 'mobx-react-lite';
import ReactMarkdown from 'react-markdown';

import { useStores } from '../utils/contexts';
import "./combat.scss";

export const Combat = observer(() => {

  const { os } = useStores();
  const { hero } = os;
  const { spells, attacks, currentResource } = os.hero;
  const castSpellCB = (spell) => () => {
    if(os.hero.currentResource >= spell.cost) {
      os.hero.currentResource -= spell.cost;
    }
  };


  return (
    <div className="app phb app--spells single-col">
      <h1>Combat</h1>

      <div className="row flex-sb flex-ac">
        <h2>Weapons</h2>      
        <h4>{hero.currentHP} / {hero.maxHP} HP</h4>
      </div>
      <div className="row weapons-header">
        <span className="f3 tx-s">Weapon</span>
        <span className="f1 tx-s">Range</span>
        <span className="f1 tx-s">Damage</span>
      </div>
      {(attacks || []).map(attack => <Attack attack={attack} hero={hero} key={attack.name} />)}

      <div className="row flex-sb flex-ac">
        <h2>Spells</h2>
        <h4>{hero.currentResource} / {hero.maxResource} {hero.primaryResource}</h4>
      </div>
      <div className="row spells-header">
        <span className="f3 tx-s">Spell</span>
        <span className="f1 tx-s">Cast Time</span>
        <span className="f1 tx-s">Range</span>
        <span className="f1 tx-s">Duration</span>
        <span className="f1 tx-s"></span>
      </div>
      <div className="column f1">
        {(spells || []).map(spell => <Spell
          spell={spell}
          availMana={currentResource}
          key={spell && spell.name}
          castSpellCB = {castSpellCB}
        />)}
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
        <span className="tx-m f1">{spell.duration}</span>
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
      <span className="tx-m f1">{damageString}</span>
    </div>
  );
}

const buildDamageString = (damage, hero) => {
  const str = hero.attributes.find(a => a.id === 'str').bonus;
  const dex = hero.attributes.find(a => a.id === 'dex').score;

  return damage.replace('{DEX}', dex).replace('{STR}', str);
};