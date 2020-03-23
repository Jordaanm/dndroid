import React from 'react';
import { observer } from 'mobx-react-lite';
import ReactMarkdown from 'react-markdown';

import { useStores } from '../utils/contexts'

export const Spells = observer(() => {

  const { os } = useStores();
  const { spells, currentResource } = os.hero;
  const castSpellCB = (spell) => () => {
    if(os.hero.currentResource >= spell.cost) {
      os.hero.currentResource -= spell.cost;
    }
  };


  return (
    <div className="app phb app--spells single-col">
      <div className="row flex-sb flex-ac">
        <h1>Spells</h1>
        <h4>{os.hero.currentResource} / {os.hero.maxResource} {os.hero.primaryResource}</h4>
      </div>
      <div className="row spells-header">
        <span className="f3 tx-s">Spell</span>
        <span className="f1 tx-s">Cast Time</span>
        <span className="f1 tx-s">Range</span>
        <span className="f1 tx-s">Duration</span>
        <span className="f1 tx-s"></span>
      </div>
      {spells.map(spell => <Spell
        spell={spell}
        availMana={currentResource}
        key={spell.name}
        castSpellCB = {castSpellCB}
      />)}
    </div>
  );
});

const Spell = ({spell, availMana, castSpellCB}) => {
  const canAfford = spell.cost <= availMana;
  console.log("Spell", spell.name, spell);
  return (
    <div className="spell column">
      <div className="row flex-ac spell">
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
}