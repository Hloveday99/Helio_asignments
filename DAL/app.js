const db = require("./dal")

db.connect()
.then(() => {
    
            db.insertOne()

})
.then(() => {

            return db.readAll()

})
.then(users => {
    
            console.log(users)

})

.then(() => {
    return db.findOne();
})

.then((oneFound) => {
    console.log(oneFound);
})

.then(() => {

            db.close()
})