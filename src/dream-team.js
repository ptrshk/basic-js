function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const filteredMembers = members.filter((member) => typeof member === 'string');
  const firstLetters = filteredMembers.map((member) => member.trim()[0].toUpperCase());
  const sortedLetters = firstLetters.sort();
  const teamName = sortedLetters.join('');

  return teamName;
}

module.exports = {
  createDreamTeam
};
