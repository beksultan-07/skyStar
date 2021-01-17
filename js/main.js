let getRandom = function(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min
}


function topChange(){
    for(let i = 0; i < 201; i++){
        setTimeout(function(){
            $($('.star')[i]).css({
                top: i+1 + 'px'
            })
        }, 40 * (i+1))
    }
}

function collectStar(){
    for (let i = 0; i <201; i++){
        setTimeout(function(){
            
            $($('.star')[i]).css({
                // top: topChange(),
                top: 10 + 'px',
                left: 10 + 'px'
            })

        }, 60*(i+1))
    }
}
function randomPlace(){
    for(let i = 0; i<201; i++){
        setTimeout(function(){
            let WH = getRandom(5,10) + 'px'
            $(`.star${i+1}`).css({
                width: WH,
                height: WH,
                top: getRandom(5, $('body').height() - 50) +'px',
                left: getRandom(5, $('body').width() - 50) + 'px'
            })
        }, 20 * (i+1))
    }


    // collectStar()
}
function addStar(){
    for(let i = 0; i <=200; i++){
        let starDiv = `<div class="star star${i+1}"></div>`
        $('body').append(starDiv)
    }
    randomPlace()
}

addStar()
