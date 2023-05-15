let checkboxes = []
for(let i = 1; i < 9; i ++){
    checkboxes.push(document.getElementsByClassName(`tarea${i}`))
}
let objetoSet = new Set(checkboxes)

let objetoMap = new Map

/* console.log(checkboxes[0][0]) */

for(let checkbox of checkboxes){
    checkbox[0].addEventListener("change", () => {
        objetoSet.forEach(element => {
            objetoMap.set(element[0].value, element[1].checked)
        })
        console.log(objetoMap)
    })

    checkbox[1].addEventListener("change", () => {
        objetoSet.forEach(element => {
            objetoMap.set(element[0].value, element[1].checked)
        })
        console.log(objetoMap)
    })
}
