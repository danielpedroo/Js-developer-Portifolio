
//Json Profile
function updateProfileInfo(profileData) {
      const photo = document.getElementById('profile.photo');
      photo.src = profileData.photo;
      photo.alt = profileData.name;

      const name = document.getElementById('profile.name');
      name.innerText = profileData.name;

      const job = document.getElementById('profile.job');
      job.innerText = profileData.job;

      const github = document.getElementById('profile.github');
      github.innerText = profileData.github;
      github.href = `${profileData.github}`;

      const linkedin = document.getElementById('profile.linkedin');
      linkedin.innerText = profileData.linkedin;
      linkedin.href = `${profileData.linkedin}`;

      const location = document.getElementById('profile.location');
      location.innerText = profileData.location;

      const phone = document.getElementById('profile.phone');
      phone.innerText = profileData.phone;
      phone.href = `tel${profileData.phone}`;

      const email = document.getElementById('profile.email');
      email.innerText = profileData.email;
      email.href = `mailto:${profileData.email}`;
}

//Json Soft Skills'
function updateSoftSkills(profileData) {
      const softSkills = document.getElementById('profile.skills.softSkills');
      softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

//Json Hard Skills
function updateHardSkills(profileData) {
      const hardSkills = document.getElementById('profile.skills.hardSkills');
      hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

//Json Languages 
function updateLanguages(profileData) {
      const languages = document.getElementById('profile.languages');
      languages.innerHTML = profileData.languages.map(languages => `<li>${languages.name} (${languages.level})</li>`).join('');
}

//Json Education
function updateEducation(profileData) {
      const education = document.getElementById('profile.education');
      education.innerHTML = profileData.education.map(education => {
            return `
                  <li>
                        <h3>${education.name}</h3> 
                        <p class="period_Education">${education.period}<p>
                        <p class="typeGraduation">Graduação: <span>${education.graduation}</span></p>
                        <p class="course_Education">Curso: <span>${education.course}</p> 
                    </li>
            `
      }).join('')
}


//Json Portifolio
function updatePortifolio(profileData) {
      const portifolio = document.getElementById('profile.portifolio');
      portifolio.innerHTML = profileData.portifolio.map(project => {
            return `
              <li>
                  <a href="${project.url}" target="_blank"> <h3 ${project.git ? 'class="github"' : ''}>${project.name}</h3> </a>
              </li>
              `
      }).join('')
}

//Json Experiences
function updateExperiences(profileData) {
      const professionalExperience = document.getElementById('profile.experience');
      professionalExperience.innerHTML = profileData.professionalExperience.map(profExp => {
            return `
              <li>
                  <h3 class="title_experience expImg">${profExp.name}</h3>
                  <p class="timePeriod">${profExp.period}</p>
                  <p>${profExp.description}</p>
            </li>
              `
      }).join('')
}


//Search Json;
(async () => {
      const profileData = await fetchProfileData();
      updateProfileInfo(profileData);
      updateSoftSkills(profileData);
      updateHardSkills(profileData);
      updateLanguages(profileData);
      updateEducation(profileData);
      updatePortifolio(profileData);
      updateExperiences(profileData);
})()