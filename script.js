const byteSize = (str) => {
  // write your code here
	let length = 0;
  for (let i = 0; i < str.length; i++) {
    length++;
  }
  return length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
