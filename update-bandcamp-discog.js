import bcfetch from 'bandcamp-fetch';
import fs from 'fs';

async function updateBandcamp() {
	try {
		const artistURL = 'https://itscopycatt.bandcamp.com';
		const discography = await bcfetch.band.getDiscography({bandUrl: artistURL});

		fs.writeFileSync('./public/bandcamp-discog.json', JSON.stringify(discography, null, 2));
		console.log("Bandcamp discog updated successfully.");
	} catch (error) {
		console.error("Failed to fetch: ", error);
		process.exit(1);
	}	
}

updateBandcamp();