import Loki from 'lokijs'


// 配置数据库 游览器的localstorage

export const db = new Loki('notes',{
    autoload:true,
    autoloadCallback:databaseInit,
    autosave:true,
    autosaveInterval:3000,
    persistenceMethod:'localStorage'
})


function databaseInit () {

    const notes = db.getCollection('notes')
    if (notes === null) {
        db.addCollection('notes')

        
    }


}

export function  loadCollection (collection) {

    return new Promise(
        resolve =>{
            db.loadDatabase({},()=>{
                const _collection = db.getCollection(collection) || db.addCollection(collection)
                resolve(_collection)
            })
        }



    )

}