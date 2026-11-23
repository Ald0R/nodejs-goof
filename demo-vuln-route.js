const fs = require('fs');
const path = require('path');

// Demo vulnerable handler for Snyk PR Check
function readUserFile(req, res) {
  const filename = req.query.file;
  const content = fs.readFileSync(path.join('/var/data/uploads', filename), 'utf8');
  res.send(content);
}

function findUser(db, req, res) {
  const username = req.query.username;
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  db.query(query, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
}

module.exports = { readUserFile, findUser };
