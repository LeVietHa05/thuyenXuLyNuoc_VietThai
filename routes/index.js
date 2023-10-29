var express = require('express');
var router = express.Router();
var user = require('../user').users;
console.log(user);
/* GET home page. */
router.get('/', function (req, res, next) {
  const { username, password } = req.query;
  console.log(checkLegit(username, password));
  if (checkLegit(username, password)) {
    res.sendFile('/views/index.html', { root: 'public' })
    // res.send({ status: 'success' })
    console.log('user logged in');
  } else {
    res.sendFile('/views/login.html', { root: 'public' });
    // res.send({ status: 'failed' })
    console.log('user not logged in');
  }
});

router.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  console.log(checkLegit(username, password));
  if (checkLegit(username, password)) {
    res.send({ status: 'success' })
    console.log('user logged in');
  } else {
    res.send({ status: 'failed' , message: 'Invalid username or password'})
    console.log('user not logged in');
  }
}
)


function checkLegit(username, password) {
  let check = user.some((user) => {
    if (user.username == username && user.password == password) {
      return true;
    }
  })
  return check;
}

module.exports = router;
