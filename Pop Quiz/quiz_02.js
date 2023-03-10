// Pop Quiz:
// Nested loops aren’t ideal, but sometimes they’re unavoidable. Given the nested loop below, how can we break out of the nested loop when j === 2?

function loop () {
  for (let i = 0; i < 4; i++) {
    console.log('i: ', i)
    for (let j = 0; j < 4; j++) {
      console.log('j: ', j)
      if (j === 2) {
        return console.log('MATCH')
      }
    }
  }
}

loop()