import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    color,
    fontSize,
    component: Component,
    titleAccess,
    viewBox,
    ...other
  } = props;

  return (
    <Component
      aria-hidden={titleAccess ? 'false' : 'true'}
      className={className}
      color={color}
      focusable="false"
      ref={ref}
      role={titleAccess ? 'img' : 'presentation'}
      style={{
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        fontSize
      }}
      viewBox={viewBox}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
});

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Apply a color attribute to the SVG element.
   */
  color: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string
};

SvgIcon.defaultProps = {
  color: 'inherit',
  component: 'svg',
  fontSize: 24,
  viewBox: '0 0 24 24'
};

export default SvgIcon;
