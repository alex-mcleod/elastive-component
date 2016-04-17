import React from 'react';


function makePrimitiveType(name, checkName) {
  checkName = checkName || name;
  const typeCheck = React.PropTypes[name];
  typeCheck.typeName = checkName;
  typeCheck.isRequired.typeName = checkName;
  return typeCheck;
}


export const Types = {
  string: makePrimitiveType('string'),
  style: makePrimitiveType('object', 'style')
}
