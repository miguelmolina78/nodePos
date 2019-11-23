import {instances} from 'hapi-sequelizejs'

const Post = instances.getModel('postsMiguel');

export default class PostsDAO {
    findAll(){
        return Post.findAll();
    }

    create(data){
        return Post.create(data);
    }

    findByID(id){
        return Post.findByPk(id);
    }

    async update(id,post){
        await Post.update(post, {where: {id}});
        return await this.findByID(id);
    }

    destroy(id){
        return Post.destroy({where: {id} });
    }
}