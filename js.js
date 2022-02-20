
function show (e) {
    var questions = document.getElementsByClassName("question");
    for (let i = 0 ; i < 5 ; i++) {
        if (questions[i] != e) {
        questions[i].nextElementSibling.classList = "answer";}
    };
    e.nextElementSibling.classList.toggle("show");
}
