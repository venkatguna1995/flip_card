const cardsArray = [
    {
      name: 'shell',
      img: 'assets/pokemon1.png',
    },
    {
      name: 'star',
      img: 'assets/pokemon2.png',
    },
    {
      name: 'bobomb',
      img: 'assets/pokemon3.png',
    },
    {
      name: 'mario',
      img: 'assets/pokemon4.png',
    },
    {
      name: 'luigi',
      img: 'assets/pokemon5.png',
    },
    {
      name: 'peach',
      img: 'assets/pokemon6.png',
    },
    {
      name: '1up',
      img: 'assets/pokemon7.png',
    },
    {
      name: 'mushroom',
      img: 'assets/pokemon8.png',
    },
    {
      name: 'thwomp',
      img: 'assets/pokemon9.png',
    },
    {
      name: 'bulletbill',
      img: 'assets/pokemon10.png',
    },
    {
      name: 'coin',
      img: 'assets/pokemon11.png',
    },
    {
      name: 'goomba',
      img: 'assets/pokemon12.png',
    },
  ]

    let gameGrid = cardsArray.concat(cardsArray)

    gameGrid.sort(()=> 0.5 - Math.random())

    let firstGuess = '';
    let secondGuess = '';
    let count = 0;
    let dealy = 1200;
    let imge = './assets/question2.gif'

    const game = document.getElementById('game');

    const grid = document.createElement('section');
    grid.classList.add('grid')

    game.append(grid)

    gameGrid.forEach((item)=>{
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name

        let front =  document.createElement('div')
        front.classList.add('front')

        let back = document.createElement('div')
        back.classList.add('back')
        back.style.backgroundImage = `url(${item.img})`

        grid.append(card)
        card.append(front)
        card.append(back)

    });

    const match = () =>{
        let selected = document.querySelectorAll('.selected');
        selected.forEach((card) => {
            card.classList.add('match')
            // setTimeout(()=>{
            //     card.classList.remove('match')
            // },3000)
        })
    };

    const restGuess = () => {
        firstGuess = '';
        secondGuess = '';
        count = 0;
        var selected = document.querySelectorAll('.selected');
        selected.forEach((card)=>{
            card.classList.remove('selected');
        })
    };

    let count_clicks = 0;

    grid.addEventListener('click', function (event) {
        let clicked = event.target;
        count_clicks++
        if(count < 2){
            count++
            if(count === 1){
                firstGuess = clicked.parentNode.dataset.name
                console.log(clicked.parentNode)
                console.log(firstGuess)
                clicked.parentNode.classList.add('selected')
            }else{
                secondGuess = clicked.parentNode.dataset.name
                console.log(secondGuess)
                clicked.parentNode.classList.add('selected') 
            }

            if(firstGuess !== '' && secondGuess !== ''){
                if(firstGuess === secondGuess){
                    setTimeout(match,dealy)
                    setTimeout(restGuess, dealy)
                }
                else{
                    setTimeout(restGuess,dealy)
                    console.log("sdfsfs")
                }
            }
        }
        document.getElementById('count').innerHTML = `Total Moves : ${count_clicks}`
    })
