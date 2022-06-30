const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


//for each sound its going to run a function & create a btn
//then we give that btn a class

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', ()=>{
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song =  document.getElementById(sound)

        song.pause()
        song.currentTime = 0;


    })
}





