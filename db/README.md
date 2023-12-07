Need to install psql, pgformat, pg and dotenv.

To run, connect to psql locally in your terminal by running `psql template1 <username>` then run `CREATE DATABASE library_database_test`. `\q` to exit, run `psql -l` to check it worked and you created the database.

Then cd into `/seeds`, run `node run-seed.js`. Run `psql library_database_test <username>` then run `dt` to see the tables that have been created.

Woohoo!

Run `DROP DATABASE IF EXISTS library_database_test;` when you are done.