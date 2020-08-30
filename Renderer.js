
class Renderer {
  renderQuote (quote) {
    $('.quote-container').empty();
    const source = $('#quote-template').html();
    const template = Handlebars.compile(source);
    const quoteHtml = template(quote);
    $('.quote-container').append(quoteHtml);
  }
  renderBacon (bacon) {
    $('.meat-container').empty();
    const source = $('#bacon-template').html();
    const template = Handlebars.compile(source);
    const meatHtml = template(bacon);
    $('.meat-container').append(meatHtml);
  }
  renderMainUser (mainuser) {
    $('.user-container').empty();
    const source = $('#mainuser-template').html();
    const template = Handlebars.compile(source);
    const mainuserHtml = template(mainuser);
    $('.user-container').append(mainuserHtml);
  }
  rederFriends (friends) {
    $('.friends-container').empty();
    const source = $('#friends-template').html();
    const template = Handlebars.compile(source);
    const friendsHtml = template({friends});
    $('.friends-container').append(friendsHtml);
  }
}