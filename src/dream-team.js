const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = false;
  if (Array.isArray(members)) {
    let teamName = [];
    for (let i = 0; i < members.length; i += 1) {
      if (typeof members[i] === 'string') {
        let memberName = members[i].trim();
        let firstLetter = memberName[0].toUpperCase();
        teamName.push(firstLetter);
      }
      result = teamName.sort().join('');
    }

  } else {
    result = false;
  }
  return result;
}

module.exports = {
  createDreamTeam
};
