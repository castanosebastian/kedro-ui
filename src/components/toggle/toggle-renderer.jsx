import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * ToggleRenderer, used to output the actual DOM markup for the component
 */
const ToggleRenderer = ({
  id,
  label,
  onChange,
  texts,
  theme,
  type,
  value
}) => {
  /**
   * Triggered when on/off is clicked
   * @param {HTMLElement} the element that triggered the event
   */
  const _handleChange = e => {
    // the user can click the button, text or the underline, cover all cases
    let newValue = e.target.dataset.value || e.target.parentElement.dataset.value;

    // make our newValue a boolean
    newValue = (newValue === 'true');

    onChange(newValue);
  };

  return (
    <div className={classnames(`cbn-toggle cbn-toggle--${theme}`)}>
      {
        label && (
          <label
            htmlFor={id}
            className={classnames('cbn-toggle__label', { 'cbn-toggle--bold': type === 'bold' })}>
            { label }
          </label>
        )
      }
      <input type='checkbox' id={id} checked={value} readOnly />
      <div className='cbn-toggle__switch'>
        <div
          onClick={_handleChange}
          data-value={true}
          className={classnames('cbn-toggle__button', { 'cbn-toggle--selected': value })}>
          <div className='cbn-toggle__text'>{ texts[0] }</div>
          <div className='cbn-toggle__underline' />
        </div>
        <div
          className={classnames('cbn-toggle__separator', { 'cbn-toggle__separator--right': !value })}>
          /</div>
        <div
          onClick={_handleChange}
          data-value={false}
          className={classnames('cbn-toggle__button', { 'cbn-toggle--selected': !value })}>
          <div className='cbn-toggle__text'>{ texts[1] }</div>
          <div className='cbn-toggle__underline' />
        </div>
      </div>
    </div>
  );
};

ToggleRenderer.propTypes = {
  /**
   * A unique is for the toggle (autogenerated if not provided)
   */
  id: PropTypes.string.isRequired,
  /**
   * Label for the toggle
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback when the toggle changes value
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Array of 2 strings to display in the toggle
   */
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  /**
   * Sets the label type
   */
  type: PropTypes.oneOf(['regular', 'bold']).isRequired,
  /**
   * Initial value
   */
  value: PropTypes.bool.isRequired
};

export default ToggleRenderer;
