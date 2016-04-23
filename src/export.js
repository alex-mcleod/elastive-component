import _ from 'lodash';

import { StandardComponentEditor } from './component-editor';


const componentDefaults = {
  editor: StandardComponentEditor
};


export function exportLibrary(libInfo) {
  _.each(libInfo.components, (coData, name) => {
    libInfo.components[name] = _.merge({}, componentDefaults, coData);
  });
  window.__latestElastiveLibrary__ = libInfo;
}
