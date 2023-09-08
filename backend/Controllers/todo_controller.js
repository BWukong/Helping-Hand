const model = require('../Models/todo_models')

module.exports.getInfo = async (req, res) => {
    const info = await model.find()
    res.send(info)
}

module.exports.saveInfo = async (req, res) => {
    const {text} = req.body
    model.create({text}).then((data) => {
        console.log("Added");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateInfo = async (req, res) => {
    const {_id, text} = req.body
    model.findByIdAndUpdate(_id, {text}).then(() => res.send("Updated")).catch((err) => console.log(err))
}

module.exports.deleteInfo = async (req, res) => {
    const {_id} = req.body
    model.findByIdAndDelete(_id).then(() => res.send("Deleted")).catch((err) => console.log(err))
}