var express = require('express')
var router = express.Router()

const formData = { data: { "task_data": "[]" }, answers: {} };

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send(formData.data.task_data);
})


router.post('/', function (req, res) {
  formData.data = req.body;
    // console.log('post formdata: ', formData.data);
    res.status(200).send();
})


module.exports = router