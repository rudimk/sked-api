# sked/sked-api

The sked API is responsible for adding new schedules and associated workflows, as well as deactivating them.

## Getting started

First, install dependencies:

```
cd sked-api
npm install -g knex
npm install
```

Next, you need to set up Sked's database and run migrations and seed constants. Sked currently support MySQL. Ensure there's a blank database available. Database configuration data is injected as environment variables:

```
DB_HOST=localhost DB_USER=root DB_PASSWD=porcupinetreevoyage34 DB_NAME=sked npm run migrate:db
DB_HOST=localhost DB_USER=root DB_PASSWD=porcupinetreevoyage34 DB_NAME=sked npm run seed:db
```

To create a new migration for a new table or altering an existing table, use `DB_HOST=localhost DB_USER=root DB_PASSWD=porcupinetreevoyage34 DB_NAME=sked npm run create:migration -- <NAME_OF_MIGRATION>`.

Now you can run a dev server: `DB_HOST=localhost DB_USER=root DB_PASSWD=porcupinetreevoyage34 DB_NAME=sked npm run dev`