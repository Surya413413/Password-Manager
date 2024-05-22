import './index.css'

const UserDetailsItem = props => {
  const {userList, deleteComment, showPassword} = props
  const {url, usernameInput, passwordInput, id, initialClassName} = userList

  const initial = url ? url[0].toUpperCase() : ''

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const passwordPattern = showPassword ? (
    <p>{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  return (
    <li className="list-items">
      <div className="name-comment-button-like">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <p>{url}</p>
        <p>{usernameInput}</p>
        <p>{passwordPattern}</p>
      </div>
      <div className="delete-container">
        <button type="button" data-testid="delete" onClick={onDeleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default UserDetailsItem
