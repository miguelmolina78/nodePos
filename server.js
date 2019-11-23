const Hapi = require('@hapi/hapi');

const {Sequelize, Model, DataTypes} = require('sequelize');

const { CREATED, NO_CONTENT } = require('http-status');

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

    class PostMiguel extends Model {}
    PostMiguel.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, {sequelize, modelName: 'postsMiguel'});

    server.route({
        method: 'POST',
        path: '/posts',
        handler: async(request, h) => {
            const {payload} = request;
            const post = await  PostMiguel.create(payload);
            return h.response(post).code(CREATED);
        }
    });

    server.route({
        method: 'GET',
        path: '/posts',
        handler: async(request, h) => {
            return await PostMiguel.findAll();
        }
    });

    server.route({
        method: 'GET',
        path: '/posts/{id}',
        handler: async(request, h) => {
            const { id } = request.params;
            return await PostMiguel.findByPk(id);
        }
    });

    server.route({
        method: 'PUT',
        path: '/posts/{id}',
        handler: async(request, h) => {
            const { params: {id}, payload } = request;
            await PostMiguel.update(payload, { where: {id}});
            const post = await PostMiguel.findByPk(id);
            return post;
        }
    });

    server.route({
        method: 'DELETE',
        path: '/posts/{id}',
        handler: async(request, h) => {
            const { id} = request.params;
            await PostMiguel.destroy( { where: {id}});
            return h.response().code(NO_CONTENT);
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: async(request, h) => {
            return 'Hello hapi';
        }
    });

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