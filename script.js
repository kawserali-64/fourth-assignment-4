let interviewList = [];
let rejectList = [];

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

//toggle id
const allFilterBtn = document.getElementById('all-btn')
const interviewFilterBtn = document.getElementById('interview-btn')
const rejectedFilterBtn = document.getElementById('rejected-btn')


const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');

//header count function
function calculateCount(){
    total.innerText = allCardSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectList.length;
}
calculateCount()

// toggle function
function toggleStyle(id) {
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');

    const selected = document.getElementById(id)
    selected.classList.add('btn-primary')

   
}