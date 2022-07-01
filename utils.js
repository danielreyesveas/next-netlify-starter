export const yearsFromNow = (birthday) => {
	var ageDifMs = Date.now() - new Date(birthday).getTime();
	var ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970) + " years ago";
};

export const getFilmsDetails = (films, characterFilms) =>
	films.filter((item) => characterFilms.includes(item.url));

export const timeout = (ms) =>
	new Promise((resolve) => setTimeout(resolve, ms));
