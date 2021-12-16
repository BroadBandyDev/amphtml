import {loadScript, validateData} from '#3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function dex(global, data) {
  validateData(data, ['zoneid']);
  data.url = '//adx.4strokemedia.com/www/delivery/asyncjs.php';
  data.id = '6609ba8ff88606794e22ff360400bcea';
  createIns(global, data);
  loadScript(global, data.url);
}

/**
 * @param {!Window} global
 * @param {!Object} data
 */
function createIns(global, data) {
  const ins = global.document.createElement('ins');
  ins.setAttribute('data-revive-id', data.id);
  ins.setAttribute('data-revive-zoneid', data['zoneid']);
  ins.setAttribute('data-revive-videoid', data['videoid']);
  ins.setAttribute('data-revive-audioid', data['audioid']);
  global.document.getElementById('c').appendChild(ins);
}
