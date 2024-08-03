document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            toggleButton.checked = true;
        } else {
            document.body.classList.add('light-mode');
        }
    } else {
        document.body.classList.add('dark-mode');
        toggleButton.checked = true;
    }

    toggleButton.addEventListener('change', function() {
        if (toggleButton.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const universitySelect = document.getElementById('university');
    const branchSelect = document.getElementById('branch');
    const yearSelect = document.getElementById('year');
    const notesDisplay = document.getElementById('notes-display');

    // Populate university options
    const universities = [
        'Gujarat Technological University', 'Indian Institute of Technology Gandhinagar', 'National Institute of Design',
        'The Maharaja Sayajirao University of Baroda', 'Gujarat University', 'Ahmedabad University', 'Parul University',
        'Nirma University', 'CEPT University', 'Saurashtra University', 'Dhirubhai Ambani Institute of Information and Communication Technology',
        'Veer Narmad South Gujarat University', 'Sardar Vallabhbhai National Institute of Technology, Surat', 'National Forensic Sciences University',
        'Sardar Patel University', 'Gujarat National Law University', 'Hemchandracharya North Gujarat University', 'Maharaja Krishnakumarsinhji Bhavnagar University',
        'Pandit Deendayal Petroleum University', 'Gujarat Ayurved University', 'Swarnim Gujarat Sports University', 'Junagadh Agricultural University',
        'Bhakta Kavi Narsinh Mehta University', 'Gujarat Vidyapith', 'Anand Agricultural University', 'Dharmsinh Desai University',
        'Navsari Agricultural University', 'Marwadi University', 'Central University of Gujarat', 'Anant National University',
        'Rashtriya Raksha University', 'Indian Institute of Information Technology, Vadodara', 'RK University', 'Ganpat University',
        'Gujarat University of Transplantation Sciences', 'Karnavati University', 'Indian Institute of Public Health',
        'Shri Govind Guru University', 'Children\'s University', 'Charotar University of Science and Technology',
        'Shree Somnath Sanskrit University', 'P P Savani University', 'Indian Institute of Teacher Education', 'Rai University',
        'Institute of Infrastructure, Technology, Research and Management', 'Navrachana University', 'Uka Tarsadia University',
        'National Institute of Pharmaceutical Education and Research, Ahmedabad', 'AURO University', 'ITM Vocational University'
    ];

    universities.forEach(function(university) {
        const option = document.createElement('option');
        option.value = university;
        option.textContent = university;
        universitySelect.appendChild(option);
    });

    // Populate branch options
    const branches = [
        'Computer Science', 'Information Technology', 'Electronics and Communication', 'Electrical', 'Mechanical', 'Civil',
        'Chemical', 'Biotechnology', 'Aerospace', 'Automobile', 'Structural', 'Production', 'Environmental', 'Instrumentation',
        'Metallurgical', 'Textile', 'Marine', 'Agricultural', 'Architectural', 'Mining'
    ];

    branches.forEach(function(branch) {
        const option = document.createElement('option');
        option.value = branch;
        option.textContent = branch;
        branchSelect.appendChild(option);
    });

    // Populate year options
    const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

    years.forEach(function(year) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    // Handle university selection
    universitySelect.addEventListener('change', function() {
        if (universitySelect.value) {
            branchSelect.disabled = false;
        } else {
            branchSelect.disabled = true;
        }
    });

    // Handle branch selection
    branchSelect.addEventListener('change', function() {
        if (branchSelect.value) {
            yearSelect.disabled = false;
        } else {
            yearSelect.disabled = true;
        }
    });

    // Handle year selection
    yearSelect.addEventListener('change', function() {
        if (universitySelect.value && branchSelect.value && yearSelect.value) {
            // Display notes based on selections
            notesDisplay.textContent = `Notes for ${universitySelect.value} - ${branchSelect.value} - ${yearSelect.value}`;
        } else {
            notesDisplay.textContent = '';
        }
    });
});
