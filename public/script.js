const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const logo = document.getElementById('h1')
const catalogTable = document.getElementById('catalogTable')

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

function addRowToTable (table, songName) {
	let newRow = table.insertRow(0);
	let playCell = newRow.insertCell(0);
	let nameCell = newRow.insertCell(1);
	let linkCell = newRow.insertCell(2);

	playCell.textContent = "▶";
	playCell.classList.add('symbols')
	nameCell.textContent = songName;
	nameCell.classList.add('tableTrackTitle')
	linkCell.classList.add('linkBox');
	linkCell.innerHTML += `<div class="button2">buy</div>`;
	linkCell.innerHTML += `<div class="button2">stream</div>`;
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

//LIMIT RESULTS TO 10
getDiscography().then(data => {
	const discog = data;
	const container = document.getElementById('bandcamp-grid')
	for(const track of discog.reverse()){
		const songName = track.name;
		addRowToTable(catalogTable, songName);
		const frameToAdd = `<iframe class="bc-embed" style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/track=${track.id}/size=large/bgcol=222222/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="${track.url}">${track.name} by COPYCATT</a></iframe>`
		//<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=469807755/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://itscopycatt.bandcamp.com/track/make-ya-move">Make Ya Move by COPYCATT</a></iframe>
		container.insertAdjacentHTML('afterbegin', frameToAdd);
		//container.insertAdjacentHTML('afterend', `<p style="display: flex; justify-content: center; align-items: center; flex-wrap: flex; ">hello</p>`);
	}
	const playButtons = document.querySelectorAll('.symbols')

	playButtons.forEach(button => {
		console.log("edited", button);
		button.addEventListener('click', () => {
			if (button.classList.contains('.playing')) {
				button.classList.remove('.playing')
				button.textContent = "▶"	
				console.log('pause')		
			} else {
				playButtons.forEach(b => {
					b.classList.remove('.playing')
					b.textContent = "▶"
				})
						console.log('play')
				button.classList.add('.playing')
				button.textContent = "⏸"
			}
		})
	})
});

function navHome() {
	location.reload()
}