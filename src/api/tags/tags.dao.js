import {instances } from 'hapi-sequelizejs'

const Tag = instances.getModel('TagMiguel');

export default class TagsDAO {

    findAll(postid){
        return Tag.findAll({where: {postid}});
    }

    create (data){
        return Tag.create(data);
    }

    findByID(postid,id){
        return Tag.findOne({where: {postid, id}});
    }

    async update(id,post){
        await Tag.update(post, {where: {id}});
        return await this.findByID(id);
    }

    destroy(id){
        return Tag.destroy({where: {id} });
    }
}