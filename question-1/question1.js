const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (arr) => {
   return new Promise((resolve, reject) => {

        if (!Array.isArray(arr)) {
            reject(new Error('Input should be an array'));
            return;
        }

        const words = arr.filter(item => typeof item === 'string');
        const lowerWords = words.map(word => word.toLowerCase());
        resolve(lowerWords);

   });
    
};

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));