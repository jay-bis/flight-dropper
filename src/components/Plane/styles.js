const K_SIZE = 45;

const planePathStyle = {
    position: 'absolute',
    fill: "#159A4D",
    cursor: 'pointer', 
}

const planeSVGStyle = {
    transform: 'translate(-50%, -50%)',
    border: '1.5px solid #159A4D',
    borderRadius: K_SIZE,
}

const planePathStyleHover = {
    ...planePathStyle,
    fill: "94E08E",

}

const planeSVGStyleHover = {
    ...planeSVGStyle,
    border: '2px solid #94E08E'
}


export {planePathStyle, planeSVGStyle, planePathStyleHover, planeSVGStyleHover, K_SIZE}