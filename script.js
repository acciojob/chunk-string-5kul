function stringChop(str, size) {
   if (str === null || size <= 0) return [];

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(JSON.stringify(stringChop(str, size)));
