const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const logo = document.getElementById('h1')

async function getDiscography() {
	try {
		const response = await fetch('./bandcamp-discog.json');
		if (!response.ok) throw new Error("He is not okay.");

		const data = await response.json();

		console.log("Successfully fetched bandcamp discog: ", data);
		return data;

	} catch (error) {
		console.error("Error fetching bandcamp discog file: ", error)
	}
}

getDiscography().then(data => {
	const discog = data;
	const container = document.getElementById('bandcamp-grid')
	for(const track of discog){
		console.log(track);
		const frameToAdd = `<iframe class="bc-embed" style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/track=${track.id}/size=large/bgcol=222222/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="${track.url}">${track:name} by COPYCATT</a></iframe>`
		container.insertAdjacentHTML('afterend', frameToAdd);
	}
});

alert(discog)

function navHome() {
	location.reload()
}

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget)
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active')
		})
		target.classList.add('active')
	})
})

const plus = document.getElementById('plus')
plus.addEventListener('click', addAGuy)


function addAGuy() {
	const container = document.getElementById('bandcamp-grid')
	const newGuy = '<iframe class="bc-embed" style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/track=469807755/size=large/bgcol=222222/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://itscopycatt.bandcamp.com/track/make-ya-move">Make Ya Move by COPYCATT</a></iframe>'
	container.insertAdjacentHTML('afterend', newGuy)
}