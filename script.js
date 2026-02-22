let interviewList = [];
let rejectList = [];
let currentStatus = 'all-btn'

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

let jobCount = document.getElementById('job-count')

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

    jobCount.innerText = allCardSection.children.length;
   
      if(currentStatus === 'all-btn'){
        jobCount.innerText = `${allCardSection.children.length} All Jobs `;
    } 
    else if(currentStatus === 'interview-btn'){
        jobCount.innerText = `${interviewList.length} of ${allCardSection.children.length} jobs`;
    } 
    else if(currentStatus === 'rejected-btn'){
        jobCount.innerText = `${rejectList.length} of ${allCardSection.children.length} jobs`;
    }
} 

calculateCount()

// toggle function
function toggleStyle(id) {
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');
    
    document.getElementById(id).classList.add('btn-primary');
    currentStatus = id;

    if (id == 'interview-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
        calculateCount();
    }

    else if (id == 'all-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        calculateCount();
    } 
    else if (id == 'rejected-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderReject();
        calculateCount();
    }

}

// interview function
mainContainer.addEventListener('click', function (event) {

    if (event.target.closest('.delete-btn')) {
        const card = event.target.closest('.job-card');

        const companyName = card.querySelector('.mobileCorp').innerText;

        interviewList = interviewList.filter(item => item.mobileCorp !== companyName);
        rejectList = rejectList.filter(item => item.mobileCorp !== companyName);

        card.remove();

        calculateCount();

        if (currentStatus === 'interview-btn') {
            renderInterview();
        }
        else if (currentStatus === 'rejected-btn') {
            renderReject();
        }
    }
//
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
        rejectList = rejectList.filter(item => item.mobileCorp != cardInfo.mobileCorp)

        calculateCount()
       if(currentStatus == 'rejected-btn'){
        renderReject()

       }

  
       
    }

    else if (event.target.classList.contains('applied-rejected-btn')) {

        const parentNode = event.target.parentNode.parentNode;

        const mobileCorp = parentNode.querySelector('.mobileCorp').innerText;

        const reactNative = parentNode.querySelector('.reactNative').innerText;

        const remoteDoller = parentNode.querySelector('.remote-doller').innerText;

        const notBtn = parentNode.querySelector('.not-appiled-btn').innerText

        const statusNotes = parentNode.querySelector('.statusNotes').innerText;

        parentNode.querySelector('.not-appiled-btn').innerText = 'Rejected';

        const cardInfo = {
            mobileCorp,
            reactNative,
            remoteDoller,
            notBtn: 'Rejected',
            statusNotes
        }
        const mobileCorpExit = rejectList.find(item => item.mobileCorp == cardInfo.mobileCorp);

        if (!mobileCorpExit) {
            rejectList.push(cardInfo)
        }
        interviewList = interviewList.filter(item => item.mobileCorp != cardInfo.mobileCorp)

        if(currentStatus == 'interview-btn'){
            renderInterview();
        }
        calculateCount()
    }

});



//interview creat section

function renderInterview() {

    filterSection.innerHTML = '';
    if (interviewList.length === 0) {

    filterSection.innerHTML = '';

    const msgDiv = document.createElement('div');

    msgDiv.className =
        'flex flex-col items-center justify-center text-center ' +
        'bg-[#FFFFFF] rounded-xl ' +
        'py-24 mt-4';

    const img = document.createElement('img');
    img.src = 'jobs.png';
    img.alt = 'No interview';
    img.className = 'w-28 h-28 object-contain mb-6 opacity-80';

    const h2 = document.createElement('h2');
    h2.innerText = 'No jobs available';
    h2.className = 'text-2xl font-semibold text-[#002C5C] mb-2';

    const p = document.createElement('p');
    p.innerText = 'Check back soon for new job opportunities';
    p.className = 'text-gray-500 text-sm';

    msgDiv.appendChild(img);
    msgDiv.appendChild(h2);
    msgDiv.appendChild(p);

    filterSection.appendChild(msgDiv);
    return;
}

    for (let item of interviewList) {
        console.log(item);

        let div = document.createElement('div');
        div.className = 'job-card bg-[#FFFFFF] flex justify-between shadow-sm p-6 rounded-2xl';

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

function renderReject() {

    filterSection.innerHTML = '';

    if (rejectList.length === 0) {

    filterSection.innerHTML = '';

    const msgDiv = document.createElement('div');

    msgDiv.className =
        'flex flex-col items-center justify-center text-center ' +
        'bg-[#FFFFFF] rounded-xl ' +
        'py-24 mt-4 ';

    const img = document.createElement('img');
    img.src = 'jobs.png';
    img.alt = 'No interview';
    img.className = 'w-28 h-28 object-contain mb-6 opacity-80';

    const h2 = document.createElement('h2');
    h2.innerText = 'No jobs available';
    h2.className = 'text-2xl font-semibold text-[#002C5C] mb-2';

    const p = document.createElement('p');
    p.innerText = 'Check back soon for new job opportunities';
    p.className = 'text-gray-500 text-sm';

    msgDiv.appendChild(img);
    msgDiv.appendChild(h2);
    msgDiv.appendChild(p);

    filterSection.appendChild(msgDiv);
    return;
}


    for (let item of rejectList) {
        console.log(item);

        let div = document.createElement('div');
        div.className = 'job-card  bg-[#FFFFFF] flex justify-between shadow-sm p-6 rounded-2xl';

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