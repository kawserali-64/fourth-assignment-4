let interviewList = [];
let rejectList = [];

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

//toggle id
const allFilterBtn = document.getElementById('all-btn')
const interviewFilterBtn = document.getElementById('interview-btn');
const rejectedFilterBtn = document.getElementById('rejected-btn')


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filterSection');

//header count function
function calculateCount() {
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

    document.getElementById(id).classList.add('btn-primary');

    if (id == 'interview-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if (id == 'all-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

}

// interview function
mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('applied-interview-btn'));

    if (event.target.classList.contains('applied-interview-btn')) {

        const parentNode = event.target.parentNode.parentNode;

        const mobileCorp = parentNode.querySelector('.mobileCorp').innerText;

        const reactNative = parentNode.querySelector('.reactNative').innerText;

        const remoteDoller = parentNode.querySelector('.remote-doller').innerText;

        const notBtn = parentNode.querySelector('.not-appiled-btn').innerText

        const statusNotes = parentNode.querySelector('.statusNotes').innerText;

        parentNode.querySelector('.not-appiled-btn').innerText = 'Interview';

        const cardInfo = {
            mobileCorp,
            reactNative,
            remoteDoller,
            notBtn: 'Interview',
            statusNotes
        }
        const mobileCorpExit = interviewList.find(item => item.mobileCorp == cardInfo.mobileCorp);

        if (!mobileCorpExit) {
            interviewList.push(cardInfo)
        }
        renderInterview()
    }

});

//interview creat section

function renderInterview() {

    filterSection.innerHTML = '';

    for (let item of interviewList) {
        console.log(item);

        let div = document.createElement('div');
        div.className = 'bg-[#FFFFFF] flex justify-between shadow-sm p-6 rounded-2xl';

        div.innerHTML = `
           <div class="right">
                <h1 class="mobileCorp text-[#002C5C] text-xl font-bold">${item.mobileCorp}</h1>
                <div>
                    <p class="reactNative my-1 text-[#64748B]">${item.reactNative}</p>
                    <p class="remote-doller my-5 text-[#64748B]">${item.remoteDoller}</p>

                    <button class="not-appiled-btn btn bg-blue-100 text-[#002C5C]">
                        ${item.notBtn}
                    </button>

                    <p class="statusNotes my-5">${item.statusNotes}</p>
                </div>

                <div>
                    <button class="applied-interview-btn btn btn-outline btn-success">Interview</button>
                    <button class="applied-rejected-btn btn btn-outline btn-error">Rejected</button>
                </div>
            </div>

            <div>
                <button class="delete-btn btn rounded-full h-8 w-8">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;

        filterSection.appendChild(div);
    }
}