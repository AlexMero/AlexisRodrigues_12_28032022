import Icon from '../Icon/Icon.jsx'
import PropTypes from 'prop-types'

/**
 * React component for the KeyData
 * @param {Object} props - properties
 * @param {String} props.name - keydata name
 * @param {String|Number} props.amount - value data from keydata
 * @param {String} props.icon - asset icon's name to call Icon
 * @param {String} props.bgColor - backcolor to call Icon
 * @component
 */
function Keydata({ name, amount, icon, bgColor }) {
  return (
    <div className="Keydata">
      <div className="keydataIconContainer">
        <Icon
          iconName={icon}
          key={icon}
          addClassName="keydataIcon"
          bgColor={bgColor}
        />
      </div>
      <span className="amount">
        {amount}
        {name === 'Calories' ? 'kCal' : 'g'}
      </span>
      <span className="name">{name}</span>
    </div>
  )
}

Keydata.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
}

export default Keydata
