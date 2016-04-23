import React from 'react';
import Radium from 'radium';

import editors from './prop-editors';

const { PropTypes } = React;


function isType(type, typeName) {
  return type.typeName === typeName;
}


function getPropEditor(component, propName) {
  const type = component.constructor.propTypes[propName];
  if (isType(type, 'string')) {
    return editors.StringEditor;
  }
  if (isType(type, 'style')) {
    return editors.StyleEditor;
  }
  return null;
}


@Radium
export class StandardComponentEditor extends React.Component {

  static propTypes = {
    updateProp: React.PropTypes.func.isRequired,
    deleteComponent: React.PropTypes.func.isRequired,
    component: React.PropTypes.object.isRequired,
    editableProps: React.PropTypes.array.isRequired
  }

  static styles = {
    container: {
      position: 'fixed',
      bottom: '0px',
      right: '0px',
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid black'
    }
  }

  updateProp = (propName, newValue) => {
    this.props.updateProp(this.props.component, propName, newValue);
  }

  deleteComponent = () => {
    this.props.deleteComponent(this.props.component);
  }

  renderEditableProp = (editablePropName) => {
    const value = this.props.component.props[editablePropName];
    // TODO
    const Component = getPropEditor(this.props.component, editablePropName);
    if (!Component) {
      console.warn(`No edit component for '${editablePropName}' prop`);
      return null;
    }
    return (
      <Component
        key={editablePropName}
        update={(newVal) => {
          this.updateProp(editablePropName, newVal);
        }}
        name={editablePropName}
        currentValue={value}
      />
    );
  }

  render() {
    const { component } = this.props;
    const editable = this.props.editableProps;
    return (
      <div style={StandardComponentEditor.styles.container}>
        {editable.map(this.renderEditableProp)}
        <p onClick={this.deleteComponent}>Delete</p>
      </div>
    );
  }
}
