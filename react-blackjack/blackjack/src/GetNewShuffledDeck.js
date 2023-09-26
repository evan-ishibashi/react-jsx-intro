
let deckId;
async function GetNewShuffledDeck(){
  const resp = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");

  const newDeck = await resp.json();

  deckId = newDeck.deck_id;
}

export default GetNewShuffledDeck;

export {deckId}