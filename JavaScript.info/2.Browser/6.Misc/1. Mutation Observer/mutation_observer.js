/**
 * 
 * MutationObserver is a built-in object that observes a DOM element and 
 * fires a callback when it detects a change.
 * 
 *  : MutationObserver allows to react on any changes within DOM subtree.
 * 
 */


const headline = document.getElementById("headline");

const observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords);
})

observer.observe(headline, {
  characterDataOldValue: true,
  subtree: true,
  childList: true,
})