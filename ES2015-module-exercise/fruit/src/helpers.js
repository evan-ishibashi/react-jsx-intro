
/**
 * choice:
 *
 * Takes in an array of items
 *
 * Returns a randomly selected item from the array
 *
 * @param {array} items
 *
 */
function choice(items) {
  return items[Math.floor((Math.random() * items.length))];
}


/**
 * remove:
 *
 * Takes in an array of items and a single item (string)
 *
 * Removes item, and returns it if it exists, otherwise returns undefined
 *
 * @param {array} items
 * @param {string} item
 */
function remove(items, item) {

  if (items.includes(item)) {
    return items.splice(items.indexOf(item), 1);
  }
  return undefined;
}

export { choice, remove };