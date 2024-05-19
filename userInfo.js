// userInfo.js

// Function to create user profiles from names and modified names
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1, // Auto-incremented ID starting from 1
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage
const originalNames = ["Jerry", "God", "Marvin", "Jones", "Dad"];
const modifiedNames = ["JERRY", "god", "MARVIN", "jones", "DAD"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
/*
[
  { id: 1, originalName: 'Jerry', modifiedName: 'JERRY' },
  { id: 2, originalName: 'God', modifiedName: 'god' },
  { id: 3, originalName: 'Marvin', modifiedName: 'MARVIN' },
  { id: 4, originalName: 'Jones', modifiedName: 'jones' },
  { id: 5, originalName: 'Dad', modifiedName: 'DAD' }
]
*/

module.exports = { createUserProfiles };