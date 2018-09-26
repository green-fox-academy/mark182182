'use strict';

function checkCard(card) {
  const cards = /^([2-9]|[TJQKA])|([CDHS])$/;
  return cards.test(card);
}

module.exports = { checkCard };