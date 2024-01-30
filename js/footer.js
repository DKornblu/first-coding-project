let codingLanguages = ['HTML', 'CSS', 'JavaScript'];
let list = document.getElementById("code");

for (let i = 0; i < codingLanguages.length-1; i++) {
       list.append(codingLanguages[i] + ", ");
};

if (codingLanguages.length > 1) {
  list.append("and " + codingLanguages[codingLanguages.length-1] + ".");
} else {
  list.append(codingLanguages[0] + ".")
};