let name1 = "Yonathan";
let name2 = "Blake";

if (name1.length > name2.length) {
  console.log(`The name ${name1} is longer than ${name2} by ${name1.length - name2.length} characters.`);
} else if (name2.length > name1.length) {
  console.log(`The name ${name2} is longer than ${name1} by ${name2.length - name1.length} characters.`);
} else {
  console.log(`The names ${name1} and ${name2} are of the same length.`);
}
