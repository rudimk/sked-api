# sked/sked-api

The sked API is responsible for adding new schedules and associated workflows, as well as deactivating them.

## Getting started

First, install dependencies:

```
cd sked-api
npm install -g knex
npm install
```

Next, you need to set up Sked's database and run migrations and seed constants. Sked currently supports MySQL. Ensure there's a blank database available. Database configuration data is injected as environment variables:

```
DB_HOST=localhost DB_USER=root DB_PASSWD=porcupinetreevoyage34 DB_NAME=sked npm run migrate:db
DB_HOST=localhost DB_USER=root DB_PASSWD=porcupinetreevoyage34 DB_NAME=sked npm run seed:db
```

To create a new migration for a new table or altering an existing table, use `DB_HOST=localhost DB_USER=root DB_PASSWD=porcupinetreevoyage34 DB_NAME=sked npm run create:migration -- <NAME_OF_MIGRATION>`.

Now you can run a dev server: `DB_HOST=<> DB_USER=<> DB_PASSWD=<> DB_NAME=<> RANCHER_URL=<http://IP:PORT> RANCHER_API_KEY=<> RANCHER_API_SECRET=<> RANCHER_ENV_ID=<Rancher Environment ID> RANCHER_STACK_ID=<Rancher Sked Stack ID> RUNNER_IMAGE_ID=registry.indiqus.net/sked/sked-api:<TAG> npm run dev`

To run this on Rancher, simply create a new service, and ensure the same environment variables listed above are present in the service configuration.

## Build

The Sked API is packaged as a Docker container. Make sure you've bumped up versioning. Then, run `npm run prep` inside the code directory, which will build, tag and push an image to the apiculus registry.

## API

To create a new schedule, use `POST /api/v2/schedule`

Body:

```json
{
  "schedule":{
    "name": "Sample Schedule 4",
    "minutes": [45, 47, 48], 
    "hours": [], 
    "weekdays": [],
    "days": [], 
    "months": [],
    "timezone": "Asia/Kolkata" 
  },
  "action": "AMQP",
  "workflow": {
    "host": "52.66.159.65", 
    "port": 5672, 
    "username": "rudimk", 
    "password": "porcupinetreevoyage34",
    "exchange": "testExchange",
    "queue": "testQueue",
    "routing_key": "testRoutingKey", 
    "payload": {"message": "Hi again", "timestamp": 1521703512}
  }
}
```

To update an existing schedule, call `PUT /api/v2/schedule?id={}` where `id` is the existing schedule ID. You need to provide the same body as when creating a new schedule, with updated values.

To activate/deactivate a schedule, use `PATCH /api/v2/schedule?id={}&active={}` where `id` is the schedule ID and `active` is set to 0(deactivate) or 1(activate). 