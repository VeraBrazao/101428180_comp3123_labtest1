const resolvePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { message: 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

resolvePromise()
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

rejectPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

