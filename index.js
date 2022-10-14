// Your code here
const dodger = document.getElementById("dodger");
const gameArea = document.getElementById("game");

function moveDodgerLeft()
{
    const leftNumbers = dodger.style.left.replace("px", ""); // Get the left pixel position of the dodger
    const left = parseInt(leftNumbers, 10);

    if(left > 0) // Make sure that the dodger does not escape it's container
    {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight()
{
    const rightNumbers = dodger.style.left.replace("px", ""); // Get the left pixel position of the dodger
    const right = parseInt(rightNumbers, 10);

    if(right < gameArea.clientWidth - dodger.clientWidth) // Make sure that the dodger does not escape it's container (formula for left most position is container width - dodger width)
    {
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener("keydown", function(e)
{
    if(e.key === "ArrowLeft") // Move left
    {
        console.log("pre move left"+dodger.style.left);
        moveDodgerLeft();
        console.log("post move left"+dodger.style.left);
    }
    else if(e.key === "ArrowRight") // Move right
    {
        console.log("pre move right"+dodger.style.left);
        moveDodgerRight();
        console.log("post move right"+dodger.style.left);
    }
});