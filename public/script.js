const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const logo = document.getElementById('h1')

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