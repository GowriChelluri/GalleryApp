import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, changeImg} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const onChangeImg = () => {
    changeImg(id)
  }
  return (
    <li className="list-container">
      <button type="button" onClick={onChangeImg} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbImg" />
      </button>
    </li>
  )
}
export default ThumbnailItem
