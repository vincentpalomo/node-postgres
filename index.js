// main index file, currently being run by nodemon

const { client } = require('./db');

async function getPets() {
  const { rows } = await client.query(`
 SELECT *
 FROM pets;
 `);
  console.log(rows);
}

async function getOwners() {
  const { rows } = await client.query(`
  SELECT *
  FROM owners;
  `);
  console.log(rows);
}

getPets();

getOwners();
