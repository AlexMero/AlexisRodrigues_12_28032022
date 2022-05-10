import Icon from '../Icon/Icon.jsx'

/**
 * React component for the Footer
 * @component
 */
function Footer() {
  return (
    <section className="Footer">
      <div className="iconContainer">
        <Icon iconName={'iconYoga'} key="iconYoga" />
        <Icon iconName={'iconSwim'} key="iconSwim" />
        <Icon iconName={'iconBike'} key="iconBike" />
        <Icon iconName={'iconDumbbell'} key="iconDumbbell" />
      </div>
      <span>Copiryght, SportSee 2020</span>
    </section>
  )
}

export default Footer
