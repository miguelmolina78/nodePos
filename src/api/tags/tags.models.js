import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
    class Tag extends Model {}

    Tag.init ({
        name: dataTypes.STRING,
        postID: dataTypes.INTEGER
    }, { sequelize, modelName: 'TagMiguel'});

    return Tag;
}