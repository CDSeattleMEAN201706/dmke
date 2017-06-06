function personMaker(nameIs){
  return( {
    name: nameIs,
    distance_traveled: 0,

    say_name: function(){
      alert(nameIs)
      return this
    },

    say_something: function(stringToSay){
      console.log(nameIs, " says ", stringToSay)
      return this
    },

    walk: function(){
      alert(nameIs, "is walking")
      distance_traveled += 3
      return this
    },

    run: function(){
      alert(nameIs, "is running")
      distance_traveled += 10
      return this
    },

    crawl: function(){
      alert(nameIs, "is crawling")
      distance_traveled += 1
      return this
    },
  })
}
