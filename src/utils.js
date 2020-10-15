
const currentBlock = (blockHistory) => {
	return blockHistory[blockHistory.length - 1].name
}

module.exports = currentBlock;
