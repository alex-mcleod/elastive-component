import _ from 'lodash';


const componentDefaults = {};


export function exportLibrary(libInfo) {
  _.each(libInfo.components, (coData, name) => {
    libInfo.components[name] = _.merge({}, componentDefaults, coData);
  });
  window.__latestElastiveLibrary__ = libInfo;
}
