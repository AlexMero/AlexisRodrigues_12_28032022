function Icon({ iconName = '', addClassName = '' }) {
  const icon = require('../../assets/' + iconName + '.png')
  const sumClassName = 'Icon ' + addClassName
  return <div className={sumClassName}>{<img src={icon} alt={iconName} />}</div>
}

export default Icon
