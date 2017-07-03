var bio = {
	"name": "Andrew Prine",
	"role": "Amateur",
	"contacts": {
    "mobile": "415-517-5987",
		"email": "andrewpprine@gmail.com",
		"github": "andrewpprine",
		"location": "Bay Area, California"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "I'm here to utilize my experience and expertise in media, education, and technology to create and refine informational tools for a global audience.",
	"skills": ["HTML, CSS, Javascript, Python, and Git", "Key UIs and hardware of popular consumer technology", "Empathizing to relate information in most meaningful way", "Outstanding written and communication skills", "Effective under deadlines", "Seeking and embracing critical feedback", "Wondrous recognition and dispensing of movie quotes"]
};

var education = {
	"schools": [
		{ "name": "San Francisco State University",
			"location": "San Francisco, CA",
      "degree": "M.A.",
      "major": "Special Education",
      "dateCompleted": "May 2014",
			"url": "www.sfsu.edu"
		},
    { "name": "San Francisco State University",
      "location": "San Francisco, CA",
      "degree": "B.A.",
      "major": "Journalism",
      "dateCompleted": "May 2008",
      "url": "www.sfsu.edu"
    }
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intro to Programming",
			"completed": "July 2017",
			"url": "https://www.udacity.com/course/ud015"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Seneca Family of Agencies",
			"title": "Teacher",
			"location": "Petaluma, CA",
			"datesWorked": "August 2016 - June 2017",
			"description": "I taught at a non-public high school for students with mild learning disabilities and moderate to severe emotional disturbance and history of trauma. My primary objectives were to teach english and social studies classes while establishing and maintaining an environment in which students felt secure and supported."
		},
		{
			"employer": "Lattice Educational Services",
			"title": "Teacher",
			"location": "Santa Rosa, CA",
			"datesWorked": "June 2015 - July 2016",
			"description": "I taught a class of high school-aged students with severe disabilities and behaviors. Curriculum focused on essential life skills and behavior management, including self-regulating techniques. I coordinated with several therapists, behavioral specialists, administrators, and students' family members to develop student goals, IEP content, and learning materials that were highly specific to each individual student."
		},
		{
			"employer": "San Francisco Unified School District",
			"title": "Teacher",
			"location": "San Francisco, CA",
			"datesWorked": "January 2014 - May 2015",
			"description": "I led and oversaw a community-based program for 18-22 year-old students that focused on developing students' independence by practicing key living skills, such as how to utilize public transportation, creating a shopping list and buying groceries, mainting employment, and money management. Because the majority of activities took place in small groups traveling throughout San Francisco, successful team management and communication were critical to my responsibilities."
		},
		{
			"employer": "Freelance",
			"title": "Photographer",
			"location": "Bay Area, California",
			"datesWorked": "2006 - Present",
			"description": "Regular hobbyist and occasional professional work, primarily focused on environmental portaiture, events, landscapes, and daily life."
		},
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Resume",
			"datesWorked": "July 2017",
			"description": "Created an online resume as part of Udacity's Intro to Programming Nanodegree. You're reading it now.",
			"images": [],
			"url": "http://www.greatestmanever.com/"
		},
    {
			"title": "One Tall Pour",
			"datesWorked": "2016",
			"description": "Created and managed blog focused on self-produced written and visual reviews of breweries, beer bars, and related content.",
			"images": [],
			"url": "http://www.onetallpour.com"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0, len = bio.skills.length; i < len; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for (var i = 0, len = formattedContactInfo.length; i < len; i++) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(var i = 0, len = work.jobs.length; i < len; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i = 0, iLen = projects.projects.length; i < iLen; i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(var m = 0, mLen = projects.projects[i].images.length; m < mLen; m++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0, iLen = education.schools.length; i < iLen; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dateCompleted);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var j = 0, len = education.onlineCourses.length; j < len; j++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
};

education.display();

$("#mapDiv").append(googleMap);
