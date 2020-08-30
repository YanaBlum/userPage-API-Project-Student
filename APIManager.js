//This is the class that will manage all your APIs


class APIManager {
  constructor() {
    this.myData = {
      quote: {},
      bacon: {},
      mainuser: {},
      friends: []
  }
  
}

      getData() {
        this.getBacon()
        this.getQuote()
        this.getUsers()
    }

  getQuote() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest?format=text",
      success: (data) => {
        this.myData.quote = data;
      },
      error: function (xhr, text, error) {
        alert("not working");
      },
    })
  }
  getBacon(){
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (data) => {
        this.myData.bacon.meat = data[0];
      },
      error: function (xhr, text, error) {
        alert("not working");
      },
    })
  }
  getUsers(){
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      success: (data) => {
        this.myData.mainuser.name = `${data.results[0].name.first} ${data.results[0].name.last}`;
        this.myData.mainuser.img = data.results[0].picture.large;
        this.myData.mainuser.addreses = `${data.results[0].location.city} ${data.results[0].location.state}`;
        this.myData.friends = data.results.filter(r => (r.id.value != data.results[0].id.value)).map(r => `${r.name.first} ${r.name.last}`)

      
      },
      error: function (xhr, text, error) {
        alert("not working");
      },
    })
  }
}


