function rockFunction(){
	let randomNum = Math.floor((Math.random()*3)+1);
	if (randomNum == 1){
	document.querySelector("h1").innerHTML="It's a Tie";
	document.querySelector("img.img1").src="images/rock.jpg";
	document.querySelector("img.img2").src="images/rock.jpg";
	}

	else if(randomNum == 2){
	document.querySelector("h1").innerHTML="Computer Wins";
	document.querySelector("img.img1").src="images/rock.jpg";
	document.querySelector("img.img2").src="images/paper.jpg";
	}

	else{
	document.querySelector("h1").innerHTML="You Win";
	document.querySelector("img.img1").src="images/rock.jpg";
	document.querySelector("img.img2").src="images/scissors.jpg";
	}
}

function paperFunction(){
	let randomNum = Math.floor((Math.random()*3)+1);
	if (randomNum == 1){
	document.querySelector("h1").innerHTML="You Win!";
	document.querySelector("img.img1").src="images/paper.jpg";
	document.querySelector("img.img2").src="images/rock.jpg";
	}

	else if(randomNum == 2){
	document.querySelector("h1").innerHTML="It's a Tie!";
	document.querySelector("img.img1").src="images/paper.jpg";
	document.querySelector("img.img2").src="images/paper.jpg";
	}

	else{
	document.querySelector("h1").innerHTML="Computer Wins!";
	document.querySelector("img.img1").src="images/paper.jpg";
	document.querySelector("img.img2").src="images/scissors.jpg";
	}
}

function scissorsFunction(){
	let randomNum = Math.floor((Math.random()*3)+1);
	if (randomNum == 1){
	document.querySelector("h1").innerHTML="Computer Wins!";
	document.querySelector("img.img1").src="images/scissors.jpg";
	document.querySelector("img.img2").src="images/rock.jpg";
	}

	else if(randomNum == 2){
	document.querySelector("h1").innerHTML="You Win!";
	document.querySelector("img.img1").src="images/scissors.jpg";
	document.querySelector("img.img2").src="images/paper.jpg";
	}

	else{
	document.querySelector("h1").innerHTML="It's a Tie";
	document.querySelector("img.img1").src="images/scissors.jpg";
	document.querySelector("img.img2").src="images/scissors.jpg";
	}
}