const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgresql://restaurant_db_7uas_user:5zyqZleEW4rm4cv5ipzz9atlhA4r8ybl@dpg-d66vdncr85hc739vf0r0-a.singapore-postgres.render.com/restaurant_db_7uas",
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect()
    .then(() => console.log("Connected to PostgreSQL successfully"))
    .catch(err => console.error("PostgreSQL connection error", err));

module.exports = pool;