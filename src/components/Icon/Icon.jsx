function Icon({ iconName = '', addClassName = '', bgColor = '' }) {
  const icon = require('../../assets/' + iconName + '.png')
  const sumClassName = 'Icon ' + addClassName
  return (
    <div className={sumClassName} style={{ backgroundColor: bgColor }}>
      {<img src={icon} alt={iconName} />}
    </div>
  )
}

export default Icon
