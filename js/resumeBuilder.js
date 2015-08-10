
/* bio object in JSON containing my biodata */
var bio = {
	"name": "Harini Anand",
	"role": " Web Developer",
	"contacts": {
		"mobile": "312-445-3231",
		"email": "harini_kalahasti@yahoo.com",
		"github": "https://github.com/harinikanand",
		"twitter": "@harinikanand",
		"location": "Chicago"
	},
	"welcomeMessage": "Welcome to Harini's resume. Looking for a challenging career with a solid company.",
	"skills": ["Machine Design",
				"Programming",
				"Graphic Design",
				"Technical Operations",
				"Network Protocols",
				"Volunteering"],
				"biopic": "Female_engineer.jpg"
};

/* display attribute of the bio object*/
bio.display = (function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	for (var contact in bio.contacts) {
		var formattedContacts = (HTMLcontactGeneric.replace("%contact%", contact))
								.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContacts);
	}

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	$(".flex-box:last").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	$(".flex-box:last").append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	$(".flex-box:last").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	$(".flex-box:last").append(formattedGithub);

	/*var formattedBlog = HTMLblog.replace("%data%", bio.contacts["blog"]);
	$(".flex-box:last").append(formattedBlog); */

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	$(".flex-box:last").append(formattedLocation);      

	var formattedBiopic = HTMLbioPic.replace("%data%", "images/" + bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	if (bio["skills"].length > 0 ) {
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
})();

/* projects object in JSON containing information about my Udacity project */
var projects = {
	"projects": [
	{
		"title": "Hello World!",
		"dates": "05-28-2015 - 05-30-2015",
		"description": "My first web page. Shows Hello World!.",
		"images": ["Hello-World-Vector.jpg"]	
	},
	{
		"title": "Movie Trailer Website",
		"dates": "07-13-2015 - 07-20-2015",
		"description": "Movie Trailer Website shows my favorite movies with trailer, cast information and rating",
		"images": ["P1-MovieTrailer-img1.png", "P1-MovieTrailer-img2.png"]	
	},
	{
		"title": "Portfolio web page",
		"dates": "07-06-2015 - 07-13-2015",
		"description": "Shows my portfolio of favorite Chicago spots",
		"images": ["P1-Portfolio-img1.png", "P1-Portfolio-img2.png"]	
	}
	]
};

/* display attribute of the projects object*/
projects.display = (function() {
	$("#projects").append(HTMLprojectStart);

	for (var proj in projects.projects) {

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);

		var len = projects.projects[proj].images.length;
		for (var img = 0; img < len; img++){
			var formattedImage = HTMLprojectImage.replace("%data%", "images/" + projects.projects[proj].images[img]);
			$(".project-entry:last").append(formattedImage);
		}
	}
})();

/* work object in JSON containing information about my jobs */
var work = {
	"jobs": [
	{
		"employer": "Peerless Network",
		"title": "Engineer I",
		"location": "Boston, MA",
		"dates": "2010-2011",
		"description": "Worked as a Mechanical Engineer with Mobile phone assembly"
	},
	{
		"employer": "PBE",
		"title": "Engineer II",
		"location": "Chicago, IL",
		"dates": "2011-current",
		"description": "Working as a Device Engineer devicing PCBs"
	}
	]
};

/* display attribute of the work object*/
work.display = (function(){
	$("#workExperience").append(HTMLworkStart);

	var len = work.jobs.length;

	for (var job = 0; job < len; job++){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle; 
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
})();

/* education object in JSON containing information about my education and online courses */
var education = {
	"schools":[
	{
		"name": "San Diego State University",
		"location": "San Diego",
		"degree": "Bachelor of Science",
		"majors": ["Mechanical Engineering"],
		"dates": "2004-2009"       
	}
	],
	"onlineCourses":[
	{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Full Stack Web Developer",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
	}
	]
};

/* display attribute of the education object*/
education.display = (function(){
	$("#education").append(HTMLschoolStart);

	var len = education.schools.length;
	for (var school = 0; school < len; school++){
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		var formattedSchool = formattedSchoolName + formattedSchoolDegree; 
		$(".education-entry").append(formattedSchool);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry").append(formattedSchoolLocation);

		for (var major in education.schools[school].majors){
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry").append(formattedSchoolMajor);
		}
	}

	$(".education-entry").append(HTMLonlineClasses); 

	var onlineCourses_len = education.onlineCourses.length;
	for (var course = 0; course < onlineCourses_len; course++) {
		var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineCourseTitleSchool = formattedOnlineCourseTitle + formattedOnlineCourseSchool
		$(".education-entry").append(formattedOnlineCourseTitleSchool);
		var formattedOnlineCourseSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry").append(formattedOnlineCourseSchoolDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry").append(formattedOnlineURL);
	}
})();

function inName(name) {
	var internationalName = name;

	var str = internationalName.trim().split(" ");
	internationalName = str[0].charAt(0).toUpperCase() + str[0].slice(1).toLowerCase() + ' ' + str[1].toUpperCase();
	return internationalName;
}

/*$("#main").append(internationalizeButton);*/

$("#mapDiv").append(googleMap);


/* The following part adds a pie chart to show my skills set */
/* The following D3 JS code for drawing a Pie chart is sourced from the */
/* URL: https://gist.githubusercontent.com/enjalot/1203641/raw/a0cf0631a25e9789fe43071f8f8998935352c40c/index.html */
 var w = 600,                            //width
	h = 400,                            //height
	r = 200,                            //radius
	//color = d3.scale.category20c();      //builtin range of colors
	color = ["#336600", "#996600", "#FF9933","#669933","#FF9900","#D0660F"];

	data = [{"label":"Machine Design", "value":40}, 
			{"label":"Programming", "value":20}, 
			{"label":"Graphic Design", "value":20},
			{"label":"Tech. Operations", "value":10},
			{"label":"N/W Protocols", "value":3},
			{"label":"Volunteering", "value":7}];
	
	var vis = d3.select("#pie")
		.append("svg:svg")              //create the SVG element inside the <body>
		.data([data])                   //associate our data with the document
			.attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
			.attr("height", h)
		.append("svg:g")                //make a group to hold our pie chart
			.attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

	var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
		.outerRadius(r);

	var pie = d3.layout.pie()           //this will create arc data for us given a list of values
		.value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

	var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
		.data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
		.enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
			.append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
				.attr("class", "slice")     //allow us to style things in the slices (like text)
				.on('mouseover', function(d) {
					$("#tooltip") 
						.html("<strong>Experience in "+ d.data.label + " in years: "+ (d.data.value/10)+"</strong>" )
						.offset([-10,10])
						.show();
				})
				.on('mousemove', function(d) {
					$("#tooltip")
						.css('left', d3.mouse(this)[0])
						.css('top', d3.mouse(this)[1]-20)
				})
				.on('mouseout', function(d) {
					$("#tooltip").html('').hide();
				});

		arcs.append("svg:path")
				.attr("fill", function(d, i) { return color[i]; } ) //set the color for each slice to be chosen from the color function defined above
				.attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

		arcs.append("svg:text")                                     //add a label to each slice
				.attr("transform", function(d) {                    //set the label's origin to the center of the arc
				//we have to make sure to set these before calling arc.centroid
				d.innerRadius = 0;
				d.outerRadius = r;
				return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
			})
			.attr("text-anchor", "middle")                          //center the text on it's origin
			.text(function(d, i) { return data[i].label; });        //get the label from our original data array