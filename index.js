


const score = document.getElementById('score')
const block = document.getElementById('block')
const dino = document.getElementById('dino')
const game_over = document.getElementById('over')



let score_no = 0
let interval = null
game_over.innerHTML = 'Press Enter';
window.addEventListener('keydown',(start)=>{



    if(start.code == "Enter"){
        let score_no = 0;
    
    let increase_score = ()=>{
        score_no++;
        score.innerHTML = score_no
        
    
    }
    
    interval = setInterval(increase_score, 100)    
       block.classList.add('Blockactive')
       game_over.innerHTML = '';
    }
    
})





//jumping our character

window.addEventListener('keydown',(jump)=>{




    if(jump.code == "Space"){
       if(dino.classList != "dinoactive"){
        dino.classList.add('dinoactive');
        
        setTimeout(()=>{
            dino.classList.remove('dinoactive')
        },500)

    }

    } 
})

//down the dino


window.addEventListener('keydown',(down)=>{
    if(down.code == "ArrowDown"){
        dino.classList.add('down');

        setTimeout(()=>{
            dino.classList.remove('down')

        },500)

    }
    }
)
//results


let results =()=>{
    let dino_bottom = parseInt(getComputedStyle(dino).getPropertyValue("top")) 
    let block_left = parseInt(getComputedStyle(block).getPropertyValue("left"))
   //console.log( "dino_bottom"+ block_left)
    //console.log( "dino_bottom"+ dino_bottom)




    if(block_left < 55  && block_left > 0 && dino_bottom >= 200  ){
        
        block.classList.remove('Blockactive')
        game_over.innerHTML = "Game Over";
        clearInterval(interval)
        
        }
         
    
}

setInterval(results,1)



