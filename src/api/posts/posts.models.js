import {Model} from 'sequelize';

export default (sequelize, dataTypes) => {

    class PostMiguel extends Model {}
    PostMiguel.init({
        title: dataTypes.STRING,
        content: dataTypes.TEXT
    }, {sequelize, modelName: 'postsMiguel'});

    return PostMiguel;
};