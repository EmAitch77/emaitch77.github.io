let c_mode = 'l'
const toggle = document.getElementById('btn')
const link = document.getElementById('lnk')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    link.href = 'dark.css'
    c_mode = 'd'
}

toggle.addEventListener('click', () => {
    if (c_mode == 'l') {
        link.href = 'dark.css'
        c_mode = 'd'
        return
    }
    if (c_mode == 'd') {
        link.href = 'style.css'
        c_mode = 'l'
        return
    } 
})
// pfp icon
const pfp = document.getElementById('pfp')

pfp.addEventListener('click', () => {
    pfp.style.animation = '0.5s forwards extend'
    return
})
