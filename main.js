const user = new APIManager()
const renderData = new Renderer()


$('#load').on('click', function() {
  user.getData()
  console.log(user);
})

$('#display').on('click', function() {
  renderData.rederFriends(user.myData.friends)
  renderData.renderBacon(user.myData.bacon.meat)
  renderData.renderMainUser(user.myData.mainuser)
  renderData.renderQuote(user.myData.quote)
})
