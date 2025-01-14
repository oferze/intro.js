/**
 * Remove an entry from a string array if it's there, does nothing if it isn't there.
 */
export default function removeEntry<K, T extends Array<K>>(
  stringArray: T,
  stringToRemove: K
) {
  if (stringArray.includes(stringToRemove)) {
    stringArray.splice(stringArray.indexOf(stringToRemove), 1);
  }
}
