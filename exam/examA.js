document.getElementById("formA").addEventListener("click", function(event){
	event.preventDefault();
	let score =0;
	let tScore=document.getElementById("testScore");
	//alert("score: 95")
	//Q1
	let resultA = document.querySelector('input[name="examA1"]:checked').value;
	if(resultA === "b1"){ score += 20}
	//Q2
	let resultB = document.querySelector('input[name="examA2"]:checked').value;
	if(resultB === "a2"){ score += 20}
	//Q3
	let resultC = document.querySelector('input[name="examA3"]:checked').value;
	if(resultC === "d3"){ score += 20}
	//Q4
	let resultD = document.querySelector('input[name="examA4"]:checked').value;
	if(resultD === "c4"){ score += 20}
	//Q5
	let resultF = document.querySelector('input[name="examA5"]:checked').value;
	if(resultF === "d5"){ score += 20}
	tScore.innerHTML = score+" 分";
	alert(tScore.innerHTML = "你的测试得到 "+score+" 分");
})



