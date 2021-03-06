import './App.css';
import TopOfApp from './Components/TopOfApp'
import NewItemForm from './Components/NewItemForm'
import ProfilePage from './Components/ProfilePage'
import { Route, Switch } from 'react-router-dom';
import ItemContainer from './Components/ItemContainer';
import React, { Component } from 'react';
import Checkout from './Components/Checkout'
import Nav from './Components/Nav'
import SignIn from './Components/SignIn'
import MyFavs from './Components/MyFavs'
import Footer from './Components/Footer'
import AnotherNav from './Components/AnotherNav'
import UserStories from './Components/UserStories'
import MyMessages from './Components/MyMessages';
import MyStats from './Components/MyStats'
import EditYourProf from './Components/EditYourProf'
import TellMyStory from './Components/TellMyStory'
import History from './Components/History'

const itemsUrl = 'http://localhost:3000/items'
const reviewsUrl = 'http://localhost:3000/reviews'
const usersUrl = 'http://localhost:3000/users'
const purchasesUrl = 'http://localhost:3000/purchases'
const messageUrl = 'http://localhost:3000/messages'
const repliesUrl = 'http://localhost:3000/replies'
const favsUrl = 'http://localhost:3000/favorites'
const userStoriesUrl = 'http://localhost:3000/stories'
const historyUrl = 'http://localhost:3000/histories'

export class App extends Component {
  state = {
    itemIndex: 0,
    items: [],
    reviews: [],
    purchases: [],
    users: [], 
    logInFormEmail: '',
    logInFormPassWord: '',
    catagory: '',
    cart: null,
    replies: [],
    loggedInUser: {"id":1,"first_name":"Jody","last_name":"Schultz","password":"password","bio":"She has man hands.","bank_num":null,"email":"wayne@jaskolski.info","created_at":"2020-08-31T22:07:25.965Z","updated_at":"2020-08-31T22:07:25.965Z"},
    messages: [],
    favorites: [],
    searchBarInput: '',
    stories: [],
    clicks: []
}

componentDidMount(){
  fetch(itemsUrl).then(res => res.json()).then(items => this.setState({ items }))
  fetch(reviewsUrl).then(res => res.json()).then(reviews => this.setState({ reviews }))
  fetch(usersUrl).then(res => res.json()).then(users => this.setState({ users }))
  fetch(purchasesUrl).then(res => res.json()).then(purchases => this.setState({ purchases }))
  fetch(messageUrl).then(res => res.json()).then(messages => this.setState({ messages }))
  fetch(repliesUrl).then(res => res.json()).then(replies => this.setState({ replies }))
  fetch(favsUrl).then(res => res.json()).then(favorites => this.setState({ favorites }))
  fetch(userStoriesUrl).then(res => res.json()).then(stories => this.setState({ stories }))
  fetch(historyUrl).then(res => res.json()).then(clicks => this.setState({ clicks }))
}

componentDidUpdate(){
  setTimeout(this.changeTrendingItem, 9000)
}

changeTrendingItem = () => {
  let newNum = this.state.itemIndex + 1
  if(newNum > this.state.items.length){
    newNum = 0 
  }
  this.setState({ itemIndex: newNum })
}

handleOnchange = (event) => this.setState({catagory: event.target.name})

findItem = (stuff) => {
         const itemID = stuff.match.params.id
         const item = this.state.items.find(item => item.id === itemID)
         return item
}

handleInCart = (id) => {
  const item = this.state.items.find(item => item.id === id)
  if (this.state.cart === null ){
     this.setState({ cart: [item] })
  } else {
    if(this.state.cart.includes(item)){
      alert('Item Already In Cart ')
    } else {
    this.setState({ cart: [...this.state.cart, item] })
    }
  }
}

handleNewReview = (review, rating, itemId) => {
  const userId = this.state.loggedInUser.id 
  fetch(reviewsUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      item_id: itemId,
      user_id: userId,
      rating: rating, 
      content: review
    })
  }).then(res => res.json()).then(newReview => this.setState({ reviews: [...this.state.reviews, newReview] }))
}

handleSignIn = (event) => this.setState({ [event.target.name]: event.target.value })


verifyUser = () => {
  const user = this.state.users.find(user => user.email === this.state.logInFormEmail)
  if(!user) {
    alert('Incorrect Email of Password')
  } else {
    if(user.password === this.state.logInFormPassWord){
      this.setState({ loggedInUser: user })
    } else {
      alert('Incorrect Email or Password')
    }
 }
}

handleSignOut = () => this.setState({ loggedInUser: {first_name: 'User'} })

addNewMessage = (obj) => this.setState({ messages: [...this.state.messages, obj ]})

createAccout = (obj) => {
  fetch(usersUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => res.json()).then(newUser => this.setState({ users: [...this.state.users, newUser], loggedInUser: newUser }))
}

newItemSubmit = (obj) => {
  fetch(itemsUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => res.json()).then(newItem => this.setState({ items: [...this.state.items, newItem] }))
}

favorite = (id,boolean) => {
  const item = this.state.items.find(item => item.id === id)
  if (boolean == false){
  fetch(favsUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({ item_id: id, user_id: this.state.loggedInUser.id, item: item })
  }).then(res => res.json()).then(favs => this.setState({ favorites: [...this.state.favorites, {...favs, item}] }))
  } else {
    let theseFavs = this.state.favorites.filter(favs => favs.user_id === this.state.loggedInUser.id)
    let thisOne = theseFavs.find(fav => fav.item_id === id)
    fetch('http://localhost:3000/favorites/' + thisOne.id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      }
    })
    this.setState({ favorites: this.state.favorites.filter(fav => fav.id !== thisOne.id )})
  }
}

cartCheckout = () => {
this.state.cart.forEach(item => 
  fetch(purchasesUrl,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({ item_id: item.id, user_id: this.state.loggedInUser.id })
  }).then(res => res.json()).then(newPurch => this.setState({ purchases: [...this.state.purchases, newPurch] }) )
  )
  this.setState({ cart: null })
}

updatePrice = (money, id) => {
  let itemsArray = this.state.items 
  let updatedItem = itemsArray.find(item => item.id === id)
  let index = itemsArray.indexOf(updatedItem)
  itemsArray[index].price = money 
  fetch(itemsUrl + '/' + id, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({ price: money })
  }).then(res => res.json()).then(item => this.setState({ items: itemsArray }))
}

addReply = obj => this.setState({ replies: [...this.state.replies, obj]})

addToStats = (obj, item) => this.setState({ clicks: [...this.state.clicks, {...obj,item}] })

handleOnSearch = event => this.setState({ searchBarInput: event.target.value })

handleDeleteUser = (id) => this.setState({ users: this.state.users.filter(user => user.id !== id), loggedInUser: {first_name: 'User'} })

newStory = newStoryObj => this.setState({ stories: [...this.state.stories, newStoryObj] })

addItemToCLicks = obj => this.setState({ clicks: [...this.state.clicks, {item: obj, item_id: obj.id, user_id: this.state.loggedInUser.id, id: this.state.clicks.length + 1}] })

  render() {
    let materials = this.state.items.map(item => item.material)
    let categories = this.state.items.map(item => item.category)
    let items = this.state.items.filter(item => item.title.toLowerCase().includes(this.state.searchBarInput.toLowerCase()) || item.category.toLowerCase().includes(this.state.searchBarInput.toLowerCase()))

  return(
    <div className="App">
      <AnotherNav handleOnSearch={this.handleOnSearch} searchBarInput={this.state.searchBarInput} userSignedIn={this.state.userSignedIn} loggedInUser={this.state.loggedInUser} cart={this.state.cart}/> 
      <Nav handleOnSearch={this.handleOnSearch} searchBarInput={this.state.searchBarInput} userSignedIn={this.state.userSignedIn} loggedInUser={this.state.loggedInUser} cart={this.state.cart} /> 
      <Switch>
       <Route path='/items/:id' name='item' render={(stuff) => {
         const thisID = parseInt(stuff.match.params.id)
       return <ItemContainer sales={this.state.purchases} favorite={this.favorite} loggedInUser={this.state.loggedInUser} favorites={this.state.favorites} addNewMessage={this.addNewMessage} messages={this.state.messages} replies={this.state.replies} userSignedIn={this.state.userSignedIn} handleNewReview={this.handleNewReview} users={this.state.users} reviews={this.state.reviews} thisID={thisID} items={this.state.items} handleInCart={this.handleInCart}/>
       } }/> 
       <Route path='/favorites' render={() => <MyFavs loggedInUser={this.state.loggedInUser} favorites={this.state.favorites} users={this.state.users} /> } /> 
       <Route path='/stories' render={() => <UserStories stories={this.state.stories}/> }/>
       <Route path='/profile/tellmystory' render={() => <TellMyStory loggedInUser={this.state.loggedInUser} newStory={this.newStory}/> }/>
       <Route path='/profile/edit' render={() => <EditYourProf handleDeleteUser={this.handleDeleteUser} updatePrice={this.updatePrice} loggedInUser={this.state.loggedInUser} items={this.state.items} /> }/>
       <Route path='/profile/stats' render={() => <MyStats clicks={this.state.clicks} loggedInUser={this.state.loggedInUser} purchases={this.state.purchases} />} /> 
       <Route path='/profile/messages' render={() => <MyMessages addReply={this.addReply} items={this.state.items} replies={this.state.replies} loggedInUser={this.state.loggedInUser} messages={this.state.messages} />} /> 
       <Route path='/profile/newitem' render={() => <NewItemForm materials={materials} /> }/>
       <Route path='/login' render={() => <SignIn createAccout={this.createAccout} verifyUser={this.verifyUser} handleSignIn={this.handleSignIn} logInFormEmail={this.props.logInFormEmail} logInFormPassWord={this.props.logInFormPassWord} />} /> 
       <Route path='/profile' render={() => <ProfilePage addToStats={this.addToStats} materials={materials} favorites={this.state.favorites} newItemSubmit={this.newItemSubmit} handleSignOut={this.handleSignOut} replies={this.state.replies} users={this.state.users} messages={this.state.messages} categories={categories} reviews={this.state.reviews} items={this.state.items} purchases={this.state.purchases} items={this.state.items} loggedInUser={this.state.loggedInUser}/> }/> 
       <Route path='/checkout' render={()=> <Checkout loggedInUser={this.state.loggedInUser} cartCheckout={this.cartCheckout} cart={this.state.cart} reviews={this.state.reviews} /> } />
       <Route path='/' render={() => <TopOfApp addItemToCLicks={this.addItemToCLicks} addToStats={this.addToStats} loggedInUser={this.state.loggedInUser} materials={materials} categories={categories} index={this.state.itemIndex} items={items} reviews={this.state.reviews} catagory={this.state.catagory} handleOnchange={this.handleOnchange} /> }/> 
       </Switch>
       <History loggedInUser={this.state.loggedInUser} history={this.state.clicks} />
       <Footer /> 
    </div>
  )
 }
}

export default App;
