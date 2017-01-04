import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var remote = new PouchDB('https://ab255.cloudant.com/_wellness');
var db = new PouchDB('local_pouch');

db.sync(remote, {
   live: true,
   retry: true
});

export default Adapter.extend({
  db: db
});
