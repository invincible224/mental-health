const therapists = {
    therapist1: {
        name: "Dr. John Doe",
        title: "Clinical Psychologist",
        details: "Dr. John Doe is an expert in cognitive behavioral therapy and has over 10 years of experience in treating depression, anxiety, and other mental health disorders."
    },
    therapist2: {
        name: "Dr. Jane Smith",
        title: "Behavioral Therapist",
        details: "Dr. Jane Smith specializes in child behavioral therapy and works with both children and adolescents to help them overcome emotional and psychological issues."
    },
    therapist3: {
        name: "Dr. Michael Lee",
        title: "Marriage Counselor",
        details: "Dr. Michael Lee is a licensed marriage counselor who has helped numerous couples navigate the complexities of relationships, communication, and conflict resolution."
    }
};

function showDetails(therapistId) {
    const modal = document.getElementById("modal");
    const modalDetails = document.getElementById("modalDetails");
    const therapist = therapists[therapistId];

    modalDetails.innerHTML = `
        <h2>${therapist.name}</h2>
        <h4>${therapist.title}</h4>
        <p>${therapist.details}</p>
    `;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}