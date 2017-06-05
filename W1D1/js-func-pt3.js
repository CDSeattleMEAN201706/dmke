function personMaker(nameIs){
  return( {
    name: nameIs,
    distance_traveled: 0,

    say_name: function(){
      alert(nameIs)
      return self
    },

    say_something: function(stringToSay){
      console.log(nameIs, " says ", stringToSay)
      return self
    },

    walk: function(){
      alert(nameIs, "is walking")
      distance_traveled += 3
      return self
    },

    run: function(){
      alert(nameIs, "is running")
      distance_traveled += 10
      return self
    },

    crawl: function(){
      alert(nameIs, "is crawling")
      distance_traveled += 1
      return self
    },
  })
}
