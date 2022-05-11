import PropTypes from 'prop-types'

/**
 * React component for the Icon
 * @param {Object} props - properties
 * @param {String} [props.iconName=''] - asset icon's name
 * @param {String} [props.addClassName=''] - additionale classname
 * @param {String} [props.bgColor=''] - background color
 * @component
 */
function Icon({ iconName = '', addClassName = '', bgColor = '' }) {
  const icon = require('../../assets/' + iconName + '.png')
  const sumClassName = 'Icon ' + addClassName
  return (
    <div className={sumClassName} style={{ backgroundColor: bgColor }}>
      {<img src={icon} alt={iconName} />}
    </div>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string,
  addClassName: PropTypes.string,
  bgColor: PropTypes.string,
}

Icon.defaultProps = {
  iconName: '',
  addClassName: '',
  bgColor: '',
}

export default Icon
