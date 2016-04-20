import React from 'react';
import ReactMixin from 'react-mixin';
import _ from 'lodash';

import { StandardComponentEditor } from './component-editor';


const BaseElastiveMixin = {

  elastiveMeta: {
    editor: StandardComponentEditor,
    preview: null
  }

};


export function elastiveMixinFactory(meta) {
  return _.merge({}, BaseElastiveMixin, {
    elastiveMeta: _.merge({}, BaseElastiveMixin.elastiveMeta, meta)
  });
}


export function applyElastiveMixin(meta) {
  const mixin = elastiveMixinFactory(meta);
  return ReactMixin.decorate(mixin);
}
