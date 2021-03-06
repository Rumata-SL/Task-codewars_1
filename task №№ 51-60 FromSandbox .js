"use strict";
// Task № 51 7 kyu---------------------------
// Friend or Foe?
/*
      Make a program that filters a list of strings
      and returns
      a list with only your friends name in it.
      If a name has exactly 4 letters in it, you can
      be sure that it has to be a friend of yours! Otherwise,
      you can be sure he's not...
      Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] 
 */
/* function friend(friends) {
      return friends.filter((item) => item.length === 4);
} */

// Task № 52 7 kyu---------------------------
// Square Every Digit
/* 
Welcome. In this kata, you are asked to square every
digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
/* function squareDigits(num) {
      return +[...(num + "")].map((el) => el * el).join``;
} */

// Task № 53 8 kyu---------------------------
// Beginner - Reduce but Grow
/*
      Given a non-empty array of integers, 
      return the result of multiplying the 
      values together in order. Example:
      [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
 */
/* function grow(x) {
      let sum = 1;
      for (let i = 0; i < x.length; i++) {
            sum *= x[i];
      }
      return sum;
} */
// Task № 54 5 kyu---------------------------
// Rot13
/*
      ROT13 is a simple letter substitution cipher that replaces 
      a letter with the letter 13 letters after it in the alphabet.
      ROT13 is an example of the Caesar cipher.
      Create a function that takes a string and returns the string 
      ciphered with Rot13. If there are numbers or special characters
      included in the string, they should be returned as they are.
      Only letters from the latin/english alphabet should be shifted,
      like in the original Rot13 "implementation". 
 */
/* 
      ROT13 — это простой шифр с заменой букв, который заменяет букву 
      буквой через 13 букв после нее в алфавите. ROT13
      является примером шифра Цезаря.
      Создайте функцию, которая принимает строку и возвращает строку,
      зашифрованную с помощью Rot13. Если в строку включены числа
      или специальные символы, они должны быть возвращены как есть.
      Сдвинуты должны быть только буквы латинского/английского алфавита,
      как в оригинальной "реализации" Rot13.
 */
/* 
function rot13(message) {
      return message.replace(/[a-z]/gi, str => String.fromCharCode(str.charCodeAt(0) + (str.toLowerCase() <= 'm' ? 13 : -13)));
} */

// Task № 55 8 kyu---------------------------
// I love you, a little , a lot, passionately ... not at all
/* 
      Who remembers back to their time in the schoolyard,
      when girls would take a flower and tear its petals,
      saying each of the following phrases each time a petal was torn:
      I love you
      a little
      a lot
      passionately
      madly
      not at all
      When the last petal was torn there were cries of excitement,
      dreams, surging thoughts and emotions.
      Your goal in this kata is to determine which phrase the girls
      would say for a flower of a given number of petals, where nb_petals > 0.
 */
/* 
      Кто помнит свое время на школьном дворе, когда девочки брали 
      цветок и рвали его лепестки, произнося каждую из следующих
      фраз каждый раз, когда отрывался лепесток:
      я тебя люблю
      немного
      много
      страстно
      безумно
      нисколько
      Когда был сорван последний лепесток, раздались крики волнения,
      мечты, нахлынувшие мысли и эмоции
      Ваша цель в этом ката — определить, какую фразу девушки 
      сказали бы о цветке с заданным количеством лепестков,
      где nb_petals > 0.
 */
/* 
function howMuchILoveYou(nbPetals) {
      const str = [
            "I love you",
            "a little",
            "a lot",
            "passionately",
            "madly",
            "not at all",
      ];
      return str[(nbPetals - 1) % str.length];
} */

// Task № 56 7 kyu---------------------------
// Regex validate PIN code
/*
      ATM machines allow 4 or 6 digit PIN codes and PIN 
      codes cannot contain anything but exactly 4 
      digits or exactly 6 digits.
      If the function is passed a valid PIN string, return true,
      else return false. 
*/
/* 
      Банкоматы позволяют использовать 4- или 6-значные PIN-коды,
      а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
      Если функции передана допустимая строка PIN-кода,
      верните true, иначе верните false.
 */
/* 
function validatePIN(pin) {
      return (pin.length === 4 || str.length === 6) && pin.match(/^[0-9]+$/)
            ? true
            : false;
}
 */

// Task № 57 8 kyu---------------------------
// You only need one - Beginner
/*
      You will be given an array a and a value x.
      All you need to do is check whether the provided array 
      contains the value.
      Array can contain numbers or strings. X can be either.
      Return true if the array contains the value, false if not.
*/
/*
      Вам будет предоставлен массив aи значение x.
      Все, что вам нужно сделать, это проверить,
      содержит ли предоставленный массив значение.
      Массив может содержать числа или строки. Х может быть любым.
      Возврат true, если массив содержит значение, falseесли нет. 
*/
/* function check(a, x) {
      return a.includes(x) ? true : false;
} */
// Task № 58 6 kyu---------------------------
// Find the unique number
/*
      There is an array with some numbers.
      All numbers are equal except for one.
      Try to find it!
      findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
      findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
*/
/*
      Есть массив с некоторыми числами.
      Все числа равны, кроме одного. Попробуйте найти!
      findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
      findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/
/* 
function findUniq(arr) {
      arr.sort((a, b) => a - b);
      if (arr[0] === arr[1]) {
            return arr[arr.length - 1];
      }
      return arr[0];
}
 */
// Task № 59 8 kyu---------------------------
// Third Angle of a Triangle
/*
      You are given two interior angles (in degrees) 
      of a triangle.
      Write a function to return the 3rd.
      Note: only positive integers will be tested. 
*/
/* 
      Вам даны два внутренних угла (в градусах) треугольника.
      Напишите функцию, возвращающую 3-е число.
      Примечание: будут проверены только
      положительные целые числа.
 */
/* 
function otherAngle(a, b) {
      return 180 - (a + b);
} */

// Task № 60 8 kyu---------------------------
// If you can't sleep, just count sheep!!
/* 
      Если не можешь уснуть, считай овец!!
      Задача:
      Например, если задано неотрицательное целое число, 3верните строку с бормотанием: 
      "1 sheep...2 sheep...3 sheep...". 
      Ввод всегда будет действительным,
      т.е. отрицательных целых чисел не будет.
 */

/* 
      Если не можешь уснуть, считай овец!!
      Задача:
      Например, если задано неотрицательное целое число, 3верните строку с бормотанием:
      "1 sheep...2 sheep...3 sheep...".
      Ввод всегда будет действительным,
      т.е. отрицательных целых чисел не будет. 
   */
/* 
function cheep(num) {
      if (num === 0) {
            return "";
      } else {
            let arr = [];
            for (let i = 1; i < num + 1; i++) {
                  arr.push(`${i} sheep...`);
            }
            arr = arr.join("");
            return arr;
      }
}
 */
