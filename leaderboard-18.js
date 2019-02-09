//OLD 
function makeLeaderBoard (scores) {
  const players = []
  scores.forEach(score => {
    const foundPlayer = players.find(player => player.id === score.id)
    if (foundPlayer) {
      foundPlayer.rounds.push(score.score)
    } else {
      const playerEdit = Object.assign({}, foundPlayer)
      playerEdit.id = score.id
      playerEdit.name = score.name
      playerEdit.icon = score.icon
      playerEdit.rounds = [score.score]
      return players.push(playerEdit)
    }
  })
  console.log('this is players: ', players)
  return players
}

// what did things look like?
// scores = [{score, name, icon, id}, {}, {}, {}]
// want = [{rounds: [1, 2, 3]}, {rounds: [1, 2, 3]}]

function betterWithReduce (scores) {
	return scores.reduce((acc, score, i) => {
		const playerObj = acc.find(player => player.id === score.id)
		if (playerObj) {
		// add score to player.rounds if playerObj exists
			playerObj.rounds.push(score.score)
		} else {
		// make new playerObj if doesnt exist
			acc.push({
				id: score.id,
				name: score.name,
				icon: score.icon,
				rounds: [score.score],
			})
		}
		return acc
	}, [])
}

// reduce was absolutely the right tool for the job, but we were not v good at code ey

//revisit revised solution
function revisedRevised (scores) {
  const players = []
  scores.forEach(score => {
    const foundPlayer = players.find(player => player.id === score.id)
    if (foundPlayer) foundPlayer.rounds.push(score.score)
    else {
      const { score, ...playerData } = score
      playerData.rounds = [score.score]
      return players.push(playerData)
    }
  })
  console.log('this is players: ', players)
  return players
}