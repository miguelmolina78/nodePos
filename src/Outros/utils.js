exports.checaIdade = (idade, sleep = 200) => {
    return new Promise((resolve, reject) => {

        if (idade >= 18) {
            return setTimeout(resolve, sleep);
        }
        
        return reject();

    });
};