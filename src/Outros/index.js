const { checaIdade } = require('./utils');

async function main() {
    try {
        await checaIdade(19);
        console.log('Maior');
    } catch (error) {
        console.log('menor');

    
    }
}

main();
