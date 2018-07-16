function generateGrid(resolution) {
  let container = document.getElementById('container')
  for(let x=0;x<resolution;x++){
    let row = document.createElement('div');
    row.classList.add('row');
    for(let y=0;y<resolution;y++){
      row.appendChild(createpixel(resolution));
    }
    container.appendChild(row);

  }
}

function createpixel(resolution){
  let width = height = 640/resolution;
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.setAttribute("style", `width:${width}; height: ${height}; display: inline-block; background-color: #000; opacity:0`);
  pixel.addEventListener('mouseover', function(e) {
    e.target.style.opacity = parseFloat(e.target.style.opacity)+0.1;
  })
  return pixel;
}

function resetGrid() {
  let resolution = prompt("please enter the resolution between 1-128");
  if(resolution==parseInt(resolution)&&resolution>0&&resolution<=129){
    document.getElementById('container').innerHTML='';
    generateGrid(resolution);
  }
  else {
    alert('Input invalid! Please enter resolution between 1 - 128');
  }

}

generateGrid(16);
document.getElementById('resetBtn').addEventListener('click', resetGrid);
