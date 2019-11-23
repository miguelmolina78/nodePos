console.log('src/config/server.js');

//const Hapi = require('@hapi/hapi');
import Hapi from '@hapi/hapi';

//const {Sequelize, Model, DataTypes} = require('sequelize');
import {Sequelize, Model, DataTypes} from 'sequelize';

//const { CREATED, NO_CONTENT } = require('http-status');
import { CREATED, NO_CONTENT } from 'http-status';

const sequelize = new Sequelize('trabalhopos','usuariopos', 'usuariopos', {
    dialect: 'mysql',
    host: 'db4free.net',
    port: 3306
});

sequelize.authenticate()
.then(function(){
    console.log('conected!!');
})
.catch(function(err){
    console.log('errou');
})
.done();

const data = [
    {
        title: 'Novo Post',
        content: 'conteudo post primeiro zaz'
    },
    {
        title: 'Outro Post',
        content: 'conteudo post segundo ddd'
    }
];

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register([
        {
            plugin: require('hapi-sequelizejs'),
            options: [
                {
                    name: 'fitafit',
                    models: [
                        './src/api/**/**.models.js'
                    ],
                    sequelize,
                    sync: true
                }
            ]
        },
        {
        plugin: require('hapi-router'),
        options: {
            routes: 'src/api/**/**.routes.js'
        }
        }
    ]);

    /*class PostMiguel extends Model {}
    PostMiguel.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, {sequelize, modelName: 'postsMiguel'});
*/
   
    try {
        await sequelize.sync();
        //PostMiguel.bulkCreate(data);
    }
    catch(error){
        throw new Error(error);
    }

    
    await server.start();
    console.log('Server runnig on %s', server.info.uri);
}

process.on('unhadledRejetipn', (err) => {
    console.log(err);
    process.exit(1);
})

init();