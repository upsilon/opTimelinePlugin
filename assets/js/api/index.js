import ActivityApi from './ActivityApi';

const { apiBase, apiKey } = global.openpne;

export default {
  activity: new ActivityApi(apiBase, apiKey),
};
