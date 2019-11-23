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
}

async function exec(){
    try{
        await checaIDade(22);
        console.log('maior');
    } catch (error) {
        console.log('menor');
    }

console.log('antes?');

}

exec();
