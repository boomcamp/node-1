const data = require('../data.json')

const getData = (req, res) => {
    const items = data.find(val => val.id === Number(req.params.id))
    if (!items) {
        return res.status(500).send('Person Undefined')
    }
    res.status(200).send(items)
}

module.exports = getData