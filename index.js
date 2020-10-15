'use strict'
console.log('--------------------------\n№28:');
// 28. Write a Javascript program to find most occurred item in an given array. 
// Sample Output: 
// Original array:
// [10, 20, 30, 40, 10, 10, 20]
// Frequency of numbers:
// {10=>3, 20=>2, 30=>1, 40=>1}

function findMostOccurredItemArray(array) {
  let arrWithCountItem = [...new Set(array)].map(el => [el,array.filter(x => x === el).length]);
  arrWithCountItem.sort( (a,b) => b[1] - a[1] );
  return arrWithCountItem.map(el => `${el[0]}=>${el[1]}`).join(', ');
}
console.log(findMostOccurredItemArray([10, 20, 30, 40, 10, 10, 20]));

console.log('--------------------------\n№29:');
// 29. Write a Javascript program to check whether all items are identical in a given array.

function checkWhetherAllItemsAreIdentical(array) {
  // return array.every(el => el === array[0]);
  return new Set(array).size === 1;
}
console.log(checkWhetherAllItemsAreIdentical([10, 20, 30, 40, 10, 10, 20]));
console.log(checkWhetherAllItemsAreIdentical([10, 10, 10]));

console.log('--------------------------\n№30:');
// 30. Write a Javascript program to search items start with specified string of a given array. 
// Sample Output: 
// Original array:
// ["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"]
// Search items start with 'ab':
// ["abcde", "abdf", "abdgse"]
// Search items start with 'b':
// ["bdefa", "bacdef"]

function searchItemsStartStringGivArray(array,str) {
  return array.filter( el => new RegExp(`^${str}`).test(el) );
}
console.log(searchItemsStartStringGivArray(["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"],'ab'));

console.log('--------------------------\n№31:');
// 31. Write a Javascript program to iterate an array starting from the last element.

function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray([10, 20, 30, 40, 10, 10, 20]));

console.log('--------------------------\n№32:');
// 32. Write a Javascript program to iterate over the first n elements of an given array.

function iterateFirstNElements(array,n) {
  return array.slice(0, n);
}
console.log(iterateFirstNElements(["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"], 3));

console.log('--------------------------\n№33:');
// 33. Write a Javascript program to sort an given array of strings by length.

function sortArrayOfStringsByLength(array) {
  return array.sort( (a,b) => a.length - b.length); 
}

console.log(sortArrayOfStringsByLength(["abcde", "abdf", "abdgeee", "abc", "ab", "a", "bacdef"]));

console.log('--------------------------\n№34:');
// 34. Compress the array, and removing all 0 from it and fill in the elements freed on the right side with the values -1

function compressAndRemovingAll0FillRightSideValuesMinus1(array) {
  const arrayValuesMinus1 = Array(array.filter(el => el === 0).length).fill(-1);
  return array.filter(el => el !== 0).concat(arrayValuesMinus1);
}
console.log(compressAndRemovingAll0FillRightSideValuesMinus1([1,2,0,4,5,0,7],));

console.log('--------------------------\n№35:');
// 35. Convert the array so that the first go all negative elements, and then positive (0 is considered positive)

function firstNegativeThenPositive(array) {
  return [...array.filter( el => (el < 0) ), ...array.filter( el => (el >= 0) )];
}
console.log(firstNegativeThenPositive([0,5,-6,7,-2,-3,8,9,-11,0]));

console.log('--------------------------\n№36:');
// 36. Write a program where a need to counts the number of times a number appear in an array.

function countNumberTimesAppearArray(array,n) {
  return array.filter(el => el === n).length;
}
// function countNumberTimesAppearArray(array) {
//   return array.filter(el => typeof el).length;
// }
console.log(countNumberTimesAppearArray([0,5,-6,7,-2,-3,8,9,-11,0],0));
// console.log(countNumberTimesAppearArray([0,'5',-6,'7',-2,-3,'8',9,-11,'0']));

console.log('--------------------------\n№37:');
// 37. In a two-dimensional array of order M and N, swap the specified columns.

function swapColumnsTwoDimensionalArray(array,m,n) {
  array.forEach(el => [el[m],el[n]] = [el[n],el[m]]);
  return array;
}
const twoDimensionalArray = 
[ [10,11,12,13,14],
  [20,21,22,23,24],
  [30,31,32,33,34],
  [40,41,42,43,44]
];
console.log(swapColumnsTwoDimensionalArray(twoDimensionalArray,1,2));

console.log('--------------------------\n№38:');
// 38. Given the single-mass array with predefined values with a size of 10 items.  Show on the screen array, and find the values that are repeated two and more times.

function findValueRepeateTwoAndMoreTimes(array) {
  return [...new Set(array)].filter( el => array.filter(x => x === el).length >= 2 );
}
console.log(findValueRepeateTwoAndMoreTimes([1,2,3,4,5,5,7,8,8,9]));

console.log('--------------------------\n№39:');
// 39. Given the single-mass array with predefined values with a size of 10 items. Show on the screen array, and find the value that is the smallest nonpaired number.

function findSmallestNonpairedNumber(array){
  return Math.min( ...array.filter( el => el % 2 ) );
}
console.log(findSmallestNonpairedNumber([11,2,8,4,5,5,7,8,8,9]));

console.log('--------------------------\n№40:');
// 40. Given the single-mass array. Cyclically shift the array on the K elements, on the right or left side.

function cyclicallyShifArray(array, k, direc) {
  const shift = (direc === 'left' ? k : direc === 'right' ? -k : 0);
  return [...array.slice(shift), ...array.slice(0,shift)];
}
console.log(cyclicallyShifArray([1,2,3,4,5,6,7,8,9,10], 3,'left' ));
console.log(cyclicallyShifArray([1,2,3,4,5,6,7,8,9,10], 4,'right'));
console.log(cyclicallyShifArray([1,2,3,4,5,6,7,8,9,10], 2));

console.log('--------------------------\n№1:');
// 1. Створити метод який приймає, введену користувачем стрічку і виводить на екран статистику по цій стрічці. Статистика повинна включати загальну кількість символів, кількість букв (і скільки букв в верхньому регістрі і нижньому), кількість цифр, символів пунктуації та кількість символів пробілів.

function statisticsString(str){
  console.log('Загальна кількість символів:',str.length);
  const char = str.match(/[A-Za-zА-Яа-я]/g);
  console.log('Кількість букв:',checkNull(char));
  const upperChar = str.match(/[A-ZА-Я]/g);
  console.log('Верхній регістр:',checkNull(upperChar));
  const lowerChar = str.match(/[a-zа-я]/g);
  console.log('Нижній регістр:',checkNull(lowerChar));
  const num = str.match(/\d/g);
  console.log('Кількість цифрр:',checkNull(num));
  const punctChar = str.match(/[\.\-,:;'"...!?]/g); 
  console.log('Кількість символів пунктуації:',checkNull(punctChar));
  const gap = str.match(/\s/g);
  console.log('Кількість пробілів:',checkNull(gap));
}
function checkNull(data) {
  return (data || []).length;
}
statisticsString('Створити метод який приймає, введену: користувачем стрічку, і виводить на екран статистику по цій стрічці.');

console.log('--------------------------\n№2:');
// 2. Користувач вводить рядок і символ. У рядку знайти всі входження цього символу і перевести його в верхній регістр, а також видалити частину рядка, починаючи з останнього входження цього символу і до кінця.

function changeCharToUpperCaseAndDeleteStringAfterThisChar(str,char) {
  const regFromMatch   = new RegExp(`.+${char}`,'g');
  const regFromReplace = new RegExp(char,'g');
  return (str.match(regFromMatch) || [''])[0].replace(regFromReplace, char.toUpperCase());
}
console.log(changeCharToUpperCaseAndDeleteStringAfterThisChar('Write a Javascript program','a'));

console.log('--------------------------\n№3:');
// 3. Даний текст. Здійснити в цьому тексті пошук і заміну заданої фрази.

function repleceSentenceInString(str,sentence,changeSentence) {
  const reg = new RegExp(sentence,'g');
  return str.replace(reg, changeSentence);
}
console.log(repleceSentenceInString('Write a Javascript program','Javascript', 'Python'));

console.log('--------------------------\n№4:');
// 4. Створити функцію, що дозволяє вставляти (видаляти) рядок символів в (з) масив (-а) рядків.

function pushOrDeleteStringWithArray(array, string) {
  return array.some(el => el === string) ? array.filter(el => el !== string) : array.concat(string);
}
console.log(pushOrDeleteStringWithArray(['Write','a','Javascript','program'], 'Python'));
console.log(pushOrDeleteStringWithArray(['Write','a','Javascript','program'], 'Javascript'));

console.log('--------------------------\n№5:');
// 5. Створити функцію для перевірки коректності розстановки дужок у виразі.

function checkCorrectPositioningParenthesesInExpression(expr){
  const checkArr = [];
  const openBracket = '({[';
  const closeBracket = ')}]';
  for(const el of expr){
    if(openBracket.includes(el)) checkArr.push(el);
    if(closeBracket.includes(el)) {
      if(checkArr.slice(-1)[0] === openBracket[closeBracket.indexOf(el)]) {checkArr.pop()}
      else {return false};
    }
  }
  return !checkArr.length;
}
console.log(checkCorrectPositioningParenthesesInExpression('(5+3)*(7-8)'));
console.log(checkCorrectPositioningParenthesesInExpression('[[5+3]]*{7-8}'));
console.log(checkCorrectPositioningParenthesesInExpression('{(5+3})'));

console.log('--------------------------\n№6:');
// 6. Користувач вводить з клавіатури арифметичний вираз. Необхідно обчислити його значення з урахуванням пріоритетів введених математичних операцій і дужок. Якщо у виразі зустрічаються інші символи, видати повідомлення, що вираз введено некоректно.

function evalCalculate(expr) {
  const funct = new Function ('return ' + expr);
  try {
    console.log(funct());
  } catch (log) {
    console.log('вираз некоректний');
  }
}
evalCalculate('2+2');
evalCalculate('h2+2*6');
evalCalculate('2+2*2');

console.log('--------------------------\n№7:');
// 7. Написати функцію, що перетворює дробове або ціле число в рядок.

function numToString(num){
  return num.toString();
}
console.log(numToString(5.3));
console.log(numToString(5.3e+2));
console.log(numToString(5.3e-2));

console.log('--------------------------\n№8:');
// 8. Написати функцію, що перетворює рядок в дробове або ціле число.

function stringToNum(str){
  return parseFloat(str);
}
console.log(stringToNum('3.14159'));
console.log(stringToNum('3.14число пі'));
console.log(stringToNum('0.00000001'));

console.log('--------------------------\n№9:');
// 9. З клавіатури вводиться ціле число в діапазоні від 0 до 1000000. Необхідно вивести його прописний стрічковий еквівалент. 999 999

function numToWritten(number){
  const num = parseInt(number);
  if(typeof num !== 'number' || Number.isNaN(num)) return 'wrong number';
  if(num > 1e+6 || num < 0) return 'wrong number';
  const oneTeen = ['','one ','two ','three ','four ','five ','six ','seven ','eight ','nine ', 'ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ', 'sixteen ','seventeen ','eighteen ','nineteen '];
  const dozens = ['','','twenty ','thirty ','forty ','fifty ','sixty ','seventy ','eighty ','ninety '];
  const hundred = ['','hundred '];
  const thousand = ['','thousand '];
  if(num === 1e+6) return 'number: ' + num + ' => one million';
  if(num === 0) return 'number: ' + num + ' => zero';
  const numStr = num.toString().padStart(6,0);
  let res = '';
  res += oneTeen[+numStr[0]] + hundred[+numStr[0] && 1];
  res += dozens[+numStr[1]] + (oneTeen[+numStr.slice(1,3)] || oneTeen[+numStr[2]]);
  res += thousand[+numStr.slice(0,3) && 1];
  res += oneTeen[+numStr[3]] + hundred[+numStr[3] && 1];
  res += dozens[+numStr[4]] + (oneTeen[+numStr.slice(4,6)] || oneTeen[+numStr[5]]);
  return 'number: ' + [num,res.trim()].join(' => ');
}
console.log(numToWritten(-3));
console.log(numToWritten(0));
console.log(numToWritten(1));
console.log(numToWritten(10));
console.log(numToWritten(20));
console.log(numToWritten(21));
console.log(numToWritten(100));
console.log(numToWritten(101));
console.log(numToWritten(121));
console.log(numToWritten(999));
console.log(numToWritten(1000));
console.log(numToWritten(1563));
console.log(numToWritten(10000));
console.log(numToWritten(99999));
console.log(numToWritten(100000));
console.log(numToWritten(156900));
console.log(numToWritten(888080));
console.log(numToWritten(1000000));
console.log(numToWritten(1001000));
console.log(numToWritten(983.2147));
console.log(numToWritten('536.36G'));
console.log(numToWritten('SDGSDG'));
console.log(numToWritten(NaN));
console.log(numToWritten(undefined));
console.log(numToWritten([1,2,3]));
console.log(numToWritten(String(1)));
console.log(numToWritten(Number(1)));

console.log('--------------------------\n№10:');
// 10. Написати функцію, яка визначає чи є рядок паліндромом (тобто рядк, який можна читати зліва направо, і справа наліво: «А роза упала на лапу Азора», «Аргентина манить негра»).

function palindrom(str){
  const charsArray = str.toLowerCase().replace(/\s/g,'').split('');
  return charsArray.join('') === charsArray.reverse().join('');
}

console.log(palindrom('Де помити мопед'));
console.log(palindrom('Кіт утік'));
console.log(palindrom('Я несу гусеня'));
console.log(palindrom('Що завгодно напишу'));

console.log('--------------------------\n№11:');
// 11.Скільки разів в рядку, введеним користувачем, зустрічається вказане слово?

function countGiveWordInString(str,word){
  const reg = new RegExp(`(\\W|^)${word}(\\W|$)`,'g');
  return (str.match(reg) || []).length;
}

console.log(countGiveWordInString('nine... ninety nine:  nine, nineteen nine. nine','nine'));
console.log(countGiveWordInString('nine... ninety nine:  nine, nineteen nine. nine','ninety'));
console.log(countGiveWordInString('nine... ninety nine:  nine, nineteen nine. nine','nin'));
