import { loadCollection, db } from '../database'

export default{
  setInitialData(state){
     // 查找所有数据
     loadCollection('notes')
     .then(collection=>{
        //  collection.insert([
        //    {body:'hello1'},
        //    {body:'hello2'},
        //    {body:'hello3'},
        //    {body:'hello4'}
        // ])
        // db.saveDatabase()
         // 调出数据
         const _entries = collection.chain()
                             .find()
                             .simplesort('$loki','isdesc')
                             .data()
         // 等于组件的data的变量
             state.entities =_entries
     })


  },
  createEntity(state){
    loadCollection('notes')
                .then((collection)=>{
                    const entity = collection.insert({
                        body:''
                    })
                    // 提交
                    db.saveDatabase()
                    // 再把新数据放到最上面
                    state.entities.unshift(entity)
                })
  },
  updateEntity(state,entity){
    loadCollection('notes')
    .then((collection)=>{
        collection.update(entity)

        db.saveDatabase()
    })

  },
  destoryEntity(state,entity){
    const _entries = state.entities.filter((_entity)=>{
        return _entity.$loki !== entity.$loki
    })

    state.entities = _entries
    loadCollection('notes')
        .then((collection)=>{
            collection.remove(entity)
            db.saveDatabase()
        })

  }

}