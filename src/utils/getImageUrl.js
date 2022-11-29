import {useApiUrl} from '../composables/useApiUrl.js';
import buildURLQuery from './buildURLQuery.js';
const {apiUrl} = useApiUrl();

export const getImageUrl = (adapter, path, index = '') => apiUrl.value + '?' + buildURLQuery({q: 'preview', adapter, path, index});
