'use strict';

// ================= Task#1=============

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user1 = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };
console.log('user :', user1)

user1.mood = 'happy';
console.log('user :', user1);

user1.hobby = 'javascript';
console.log('user :', user1);

delete user1.premium;
console.log('user :', user1);

// используя цикл for...in
for (const key in user1) {
    console.log('objektInKey; ', ` ${key}: ${user1[key]} `);
}

// используя Object.keys и for...of
const keysKey = Object.keys(user1);
console.log(keysKey);

for (const key of keysKey) {
    const objectUs = `${key}: ${user1[key]}`
    console.log('Object.keys: ', objectUs );
}
  
// используя Object.entries и for...of
const keysEntry = Object.entries(user1);
console.log(keysEntry);

for (const key of keysEntry) {
    const objectKey = key[0];
    const objectVal = key[1];
    console.log('Object.entry: ', `${objectKey}: ${objectVal}` );
}