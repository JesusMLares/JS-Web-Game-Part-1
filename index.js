//create image function
function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url

    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'


    document.body.append(image)
    return image
}

//creating images
newImage('assets/green-character.gif', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//create item & player pickup function
function newItem(url, left, bottom){
    let item = document.createElement('img')
    item.src = url

    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'

    document.body.append(item)

    item.addEventListener('dblclick', () => {
        item.remove()
    })
}

//creating items
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)



