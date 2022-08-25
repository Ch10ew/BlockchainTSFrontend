// @TODO: Temporary measure
const artworkNames = [
    {
        title: 'You play Genshin Impact? Get the fuck away from me!',
        artist: 'Ricey',
        owner: 'Bob',
    },
    {
        title: 'Le Fishe au Chocolat',
        artist: 'Ricey',
        owner: '',
    },
    {
        title: 'Node Modules',
        artist: 'Chew',
        owner: '',
    },
    {
        title: 'Ganyu',
        artist: 'Ricey',
        owner: '',
    },
];

export function getAllArtworkData() {
    const allArtworkData = artworkNames.map(({ title, artist, owner }) => {
        const id = title.replace(/[^a-zA-Z0-9 ]/g, '').toLocaleLowerCase().split(' ').join('-');
        const filename = id + '.png';
        return {
            id: id,
            title: title,
            artist: artist,
            owner: owner,
            filename: filename,
        };
    });

    return allArtworkData;
}

export function getAllArtworkIds() {
    return artworkNames.map(({ title }) => {
        const id = title.replace(/[^a-zA-Z0-9 ]/g, '').toLocaleLowerCase().split(' ').join('-');
        return {
            params: {
                id: id,
            },
        };
    });
}


export async function getArtworkData(id: string) {
    let artworkData = {};
    artworkNames.forEach(({ title, artist, owner }) => {
        const tmpId = title.replace(/[^a-zA-Z0-9 ]/g, '').toLocaleLowerCase().split(' ').join('-');
        if (tmpId === id) {
            const filename = id + '.png';
            artworkData = {
                id: id,
                title: title,
                artist: artist,
                owner: owner,
                filename: filename,
            };
        }
    });

    return artworkData;
}