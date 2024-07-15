// Array of movie objects
let movies = [
	{
		title: "Ponniyin Selvan I",
		image: "https://preview.redd.it/lq72e1sl4fo91.jpg?width=1080&crop=smart&auto=webp&v=enabled&s=f391d8ce58a242c21bb0446f2e3a93a408b518cb",
		info: "History, Romance, Drama",
	},
	{
		title: "Ponniyin Selvan II",
		image: "https://popcornusa.s3.amazonaws.com/movies/650/13502-49244-Ponniyin",
		info: "History, Drama, Romance",
	},
	{
		title: "Finding Nemo",
		image: "https://m.media-amazon.com/images/M/MV5BZjMxYzBiNjUtZDliNC00MDAyLTg3N2QtOWNjNmNhZGQzNDg5XkEyXkFqcGdeQXVyNjE2MjQwNjc@._V1_.jpg",
		info: "Animation, Adventure, Comedy",
	},
	{
		title: "Avengers: Endgame",
		image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e9ee9896b5f53928b73097566a48f4d0_b6e23fef-e1e3-47d4-9085-811b4481ebb0_500x749.jpg?v=1573652578",
		info: "Action, Adventure, Drama",
	},
	{
		title: "Joker",
		image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/joker_th6ifhph_500x749.jpg?v=1662670525",
		info: "Crime, Drama, Thriller",
	},
	{
		title: "Toy Story 4",
		image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/475ae438ad4a0701b92f9373ef9f7f1f_d3dfa8b8-2dbf-4a64-a55f-4d514f5c944d_500x749.jpg?v=1573593942",
		info: "Animation, Adventure, Comedy",
	},
	{
		title: "The Lion King",
		image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-lion-king_051a1b60_500x749.jpg?v=1668796556",
		info: "Animation, Adventure, Drama",
	},
	{
		title: "Aladdin",
		image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1dabdc477e56537824a97e94e0976942_7c3f808e-a627-45ce-8f79-94d3f70c51fd_480x.progressive.jpg?v=1573585427",
		info: "Adventure, Comedy, Family",
	},
	{
		title: "Spider-Man: Far From Home",
		image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/02dc63572a549d04e405681c4ed3718b_7e3b25a8-e2b1-4e45-947f-00d3b2f2d6a3_500x749.jpg?v=1573616050",
		info: "Action, Adventure, Sci-Fi",
	},
];

// Function to display movies on the webpage
function displayMovies() {
	const movieGrid = document.querySelector(".movie-grid");
	movieGrid.innerHTML = "";
	for (let i = 0; i < movies.length; i++) {
		const movie = movies[i];
		const movieDiv = document.createElement("div");
		movieDiv.classList.add("movie");

		const movieImage = document.createElement("img");
		movieImage.src = movie.image;
		movieDiv.appendChild(movieImage);

		const movieTitle = document.createElement("h3");
		movieTitle.classList.add("movie-title");
		movieTitle.textContent = movie.title;
		movieDiv.appendChild(movieTitle);

		const movieInfo = document.createElement("p");
		movieInfo.classList.add("movie-info");
		movieInfo.textContent = movie.info;
		movieDiv.appendChild(movieInfo);

		const dateInput = document.createElement("input");
		dateInput.type = "date";
		dateInput.classList.add("date-input");
		movieDiv.appendChild(dateInput);
	
		const timeInput = document.createElement("input");
		timeInput.type = "time";
		timeInput.classList.add("time-input");
		movieDiv.appendChild(timeInput);

		const bookButton = document.createElement("button");
		bookButton.classList.add("btn-book");
		bookButton.textContent = "Book Now";
		bookButton.addEventListener("click", function() {
			var est=false;
			const date = dateInput.value;
			if(date==""){
				alert("Please enter a date");
			};
			const time = timeInput.value;
			if(time==""){
				alert("Please enter a time");
			};
			if(date!="" && time!=""){
				est=true;
			};
			if (est) {
				var email = localStorage.getItem("varemail");
				var ticket = `
				  <div style="text-align: center; border: 10px solid yellow; padding: 20px;">
					<h1 style="color: red">Profit's Movie Ticket Booking</h1>
					<h2>Booked Ticket Details</h2>
				  </div>
				  <div>
				   <h1>                                          
				   </h1>
				  </div>
				  <div style="text-align: left; border: 5px solid red; padding: 20px;">
					<h3 style="color: slateblue">Email: ${email}</h3>
					<h3 style="color: slateblue">Movie: ${movie.title}</h3>
					<h3 style="color: slateblue">Date: ${date}</h3>
					<h3 style="color: slateblue">Time: ${time}</h3>
				  </div>
				  <div>
				  <h1>
				  </h1>
				  </div>
				  <div style="text-align: center; border: 5px solid #050578; padding: 20px;">
				  	<h3 style="color: red; align: center;">Congrats! Discount Availed</h3>
				  	<h2 style="color:#ff0073">Thank you for booking</h2>
				  </div>
				`;			  
				const printWindow = window.open("", "PrintWindow", "width=800,height=800");
				printWindow.document.write(ticket);
				printWindow.document.close();
				printWindow.focus();
				printWindow.print();
				printWindow.close();
			  };			  
		  });
					
		movieDiv.appendChild(bookButton);
		movieGrid.appendChild(movieDiv);
	}
}

// Event listener to handle form submission
const searchForm = document.querySelector(".hero form");
searchForm.addEventListener("submit", function(event) {
	event.preventDefault();
	const searchInput = document.querySelector(".hero input[type='text']");
	const searchTerm = searchInput.value.toLowerCase();
	const filteredMovies = movies.filter(function(movie) {
		return movie.title.toLowerCase().includes(searchTerm);
	});
	movies = filteredMovies;
	displayMovies();
	searchInput.value = "";
});

// Call the displayMovies function initially to show all movies
displayMovies();