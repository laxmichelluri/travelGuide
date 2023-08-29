import './index.css'

const TravelPlacesList = props => {
  const {eachPlace} = props
  const {name, description, imageUrl} = eachPlace
  return (
    <li className="list-places-container">
      <img src={imageUrl} className="place-image" alt={name} />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelPlacesList
