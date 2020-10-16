const currentBlock = (blockHistory) => {
    return blockHistory[blockHistory.length - 1].name
}

const indicateResits = (blockHistory) => {
    const currentBlock = blockHistory[blockHistory.length - 1].slug;
    const filteredHistory = [...blockHistory].filter(element => element.slug === currentBlock);
    if(filteredHistory.length > 1){
        return "resiting"
    }

}

module.exports = { currentBlock, indicateResits };