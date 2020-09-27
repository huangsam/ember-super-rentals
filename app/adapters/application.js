import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api'; // Support public/api

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`; // Support public/api/*.json
  }
}
