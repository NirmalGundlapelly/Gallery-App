// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachObject, changeImageUrl, isActive} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = eachObject

  const isActiveClassName = isActive ? 'getImageClear' : 'getImageBlur'

  const onClickButton = () => {
    changeImageUrl(id)
  }

  return (
    <li className="thumbnailItem">
      <button onClick={onClickButton} type="button" className="buttons">
        <img
          alt={thumbnailAltText}
          className={`listImageItems ${isActiveClassName}`}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
