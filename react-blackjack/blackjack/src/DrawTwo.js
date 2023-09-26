import GetNewShuffledDeck from "./GetNewShuffledDeck";

async function DrawTwo(){
  const deck = await GetNewShuffledDeck();
  const resp = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`);

  const newDeck = await resp.json();

  return newDeck;
}