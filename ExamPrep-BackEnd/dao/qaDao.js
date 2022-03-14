const db = require('../database')

// retrieve all qas
exports.getAll = function(){
    return db.qas
}

// retrieve a qa by id
exports.getById = function(id){
    return db.qas.filter(s => s.id==id)
}

// add a qa
exports.addOne = function(qa){
    db.qas.push(qa)
    return true
}

// delete a qa by id
exports.removeOne = function(id){
    db.qas = db.qas.filter(s => s.id != id)
    return true
}

// replace a qa
exports.replaceOne = function(qa){
    db.qas = db.qas.filter(s => s.id != qa.id)
    db.qas.push(qa)
    return true
}

// add image to qa
exports.addImage = function(id, imageName){
    const target = db.qas.filter(s=>s.id==id)
    if(target.length>0){
        target[0].picture = imageName
        return true
    }
    return false
}


