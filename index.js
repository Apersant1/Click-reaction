let parent = document.querySelector('#parent');
let table = document.createElement('table')

let nums = []
for(let i = 0; i<=25;i++){
    if(nums.includes(GenNum())){
        nums.push(GenNum(i+1))
        
    } else{
        nums.push(GenNum())
    }
}
console.log(nums)
let rows = 5
let colums = 5
for (let i = 0; i <= rows; i++) {
    let row = document.createElement('tr')
    for (let j = 0; j < colums; j++) {
        let coloum = document.createElement('td')
        coloum.innerText = `${GenNum()}`
        row.appendChild(coloum)
    }
    table.appendChild(row)
}

parent.appendChild(table)



function GenNum(max=25){
    return Math.floor(Math.random() * Math.max(max))
}

// let table = document.querySelector('#table');

// for (let i = 0; i < 3; i++) {
// 	let tr = document.createElement('tr');

// 	for (let i = 0; i < 3; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}

// // 	table.appendChild(tr);
// // }