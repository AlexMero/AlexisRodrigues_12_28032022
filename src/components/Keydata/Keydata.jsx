import Icon from '../Icon/Icon.jsx'

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

export default Keydata
