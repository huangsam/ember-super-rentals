import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api'; // public/api

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`; // public/api/*.json
  }
}
