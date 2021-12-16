import {loadScript, validateData} from '#3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function dex(global, data) {
  validateData(data, ['zoneid']);
  loadScript(global, buildUrl(data));
}

/**
 * @param {!Object} data
 * @return {string}
 */
function buildUrl(data) {
  let url = `https://adx.4strokemedia.com/www/delivery/ajs.php?zoneid=${data['zoneid']}`;

  if (data['videoid']) {
    url += `&videoid=${data['videoid']}`;
  }

  if (data['audioid']) {
    url += `&audioid=${data['audioid']}`;
  }

  return url;
}
