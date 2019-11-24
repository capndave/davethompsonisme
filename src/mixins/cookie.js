module.exports = {

  /* Return desired expiration date for cookie (1 day from now) */
  expirationDate: function() {
    var d = new Date(); 
    const days = 1; // 1 day
    d.setDate(d.getDate() + days);
    return d.toUTCString()
  },

  /* String which we will set cookie to */
  genString: function() {
    return `visited=true; expires=${this.expirationDate()};path=/;`
  },

  /* Set the Cookie */
  set: function() {
    document.cookie = this.genString(); 
  },
  
  /* Check if Cookie Exists */
  exists: function(cname) {
    const cookies = document.cookie.split(';')
    return cookies.some(cookie => cookie === 'visited=true')
  }

}