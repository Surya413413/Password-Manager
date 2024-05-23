import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import UserDetailsItem from '../UserDetailsItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class UserLogin extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    userList: [],
    passwordInput: '',
    passwordCount: 0,
    searchInput: '',
    showPassword: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  addDetiles = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput, userList} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newUserList = {
      id: uuidv4(),
      url: websiteInput,
      passwordInput: passwordInput,
      usernameInput: usernameInput,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(previous => ({
      userList: [...previous.userList, newUserList],
      websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    }))
    this.setState(prevous => ({passwordCount: prevous.passwordCount + 1}))
  }

  deleteComment = id => {
    const {userList} = this.state
    const deleteCom = userList.filter(each => each.id !== id)
    this.setState({userList: deleteCom})
    this.setState(prevous => ({passwordCount: prevous.passwordCount - 1}))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onCheckChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  getResult = () => {
    const {userList, searchInput} = this.state
    return userList.filter(eachDetails =>
      eachDetails.url.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {
      websiteInput,
      userList,
      usernameInput,
      passwordInput,
      passwordCount,
      searchInput,
      showPassword,
    } = this.state

    const searchResults = this.getResult()

    return (
      <div className="app-container">
        <div className="password-logo">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="password-manager-logo"
          />
        </div>

        <div className="second1-container">
          <form className="forn-container" onSubmit={this.addDetiles}>
            <h1>Add New Password</h1>
            <div className="input-and-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="website-icon"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-text"
                onChange={this.onChangeWebsite}
                value={websiteInput}
              />
            </div>
            <div className="input-and-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="website-icon"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-text"
                onChange={this.onChangeUsername}
                value={usernameInput}
              />
            </div>
            <div className="input-and-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="website-icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-text"
                onChange={this.onChangePassword}
               value={passwordInput}
              />
            </div>
            <div className="button-container">
              <button className="button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-lg"
            />
          </div>
        </div>
        <div className="second2-container">
          <div className="passwordCount-serach-container">
            <h1>
              Your Passwords
              <p className="para-passwordCount">{searchResults.length}</p>
            </h1>

            <div className="input-and-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-icon"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-text"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr/>
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox-input"
              id="checkbox"
              onChange={this.onCheckChange}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              Show Passwords
            </label>
          </div>
          <div>
            {searchResults.length !== 0 ? (
              <ul className="unorder-list">
                {searchResults.map(each => (
                  <UserDetailsItem
                    userList={each}
                    key={each.id}
                    deleteComment={this.deleteComment}
                    showPassword={showPassword}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="password-manager-lg"
                />
                <p className="password-para-no">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default UserLogin
