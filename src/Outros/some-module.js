module.exports = 'ChecaIdade';

 function checaIDade(idade) {
    return new Promise((resolve, reject) => {

        if (typeof idade != "number") {
            return reject ("This is not number");
        }
        
        if (idade >= 18) {
            return setTimeout(resolve, 2000,"sim");
        }
        
        return reject("nao");

    });
};