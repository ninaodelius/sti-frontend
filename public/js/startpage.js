const gameItems = document.querySelectorAll('.game-item-wrapper')

gameItems.forEach(gameItem => {
    gameItem.addEventListener('mouseover', () => {
        gameItem.childNodes[1].classList.add('img-darken');
    })
    gameItem.addEventListener('mouseout', () => {
        gameItem.childNodes[1].classList.remove('img-darken');
    })

})