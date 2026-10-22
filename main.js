let currentLocation = 1;
let numOfPapers = 7; 
let maxLocation = numOfPapers + 1;

const book = document.querySelector("#book");
const papers = document.querySelectorAll(".paper");

papers.forEach((paper, index) => {
    paper.addEventListener("click", (e) => {
        e.stopPropagation();

        let pageNum = index + 1;

        if (pageNum >= currentLocation) {
            goNextPage();
        } else {
            goPrevPage();
        }
    });
});

function goNextPage() {
    if (currentLocation < maxLocation) {
        let paperIndex = currentLocation - 1;
        
        papers[paperIndex].classList.add("flipped");
        papers[paperIndex].style.zIndex = currentLocation;

        if (currentLocation === 1) {
            openBook();
        }
        
        if (currentLocation === numOfPapers) {
            closeBook(false); 
        }

        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        let paperIndex = currentLocation - 2;

        papers[paperIndex].classList.remove("flipped");
        
        papers[paperIndex].style.zIndex = numOfPapers - paperIndex + 1;

        if (currentLocation === 2) {
            closeBook(true); 
        } else if (currentLocation === maxLocation) {
            openBook();
        }

        currentLocation--;
    }
}

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}
