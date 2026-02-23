const kategoriaAdatok = {
    id: 'root',
    name: 'Kezdőlap',
    sub: [
        {
            id: 'szereles',
            name: 'Szerelés & Karbantartás',
            image: 'source/kepek-re/karbantartas.jpg',
            sub: [
                { id: 'vizszereles', name: 'Vízvezeték szerelés', image: 'source/kepek-re/vizszerelo.jpg', sub: [] },
                { id: 'futesszereles', name: 'Fűtésszerelés', image: 'source/kepek-re/futtes.jpg', sub: [] },
                { id: 'villanyszerelesz', name: 'Villanyszerelés', image: 'source/kepek-re/villany.jpg', sub: [] },
                { id: 'klimaszerelesz', name: 'Klímaszerelesz', image: 'source/kepek-re/ac.jpg', sub: [] },
                { id: 'gazszerelesz', name: 'Gázszerelés', image: 'source/kepek-re/gazszerelo.jpg', sub: [] }
            ]
        },
        {
            id: 'epitkezes',
            name: 'Építkezes & Felújítás',
            image: 'source/kepek-re/epuletgepeszet.jpg',
            sub: [
                { id: 'festes', name: 'Festés & Mázolás', image: 'source/kepek-re/festo.jpg', sub: [] },
                { id: 'burkolas', name: 'Burkolás', image: 'source/kepek-re/burkolo.jpg', sub: [] },
                { id: 'acs', name: '  Ács munka', image: 'source/kepek-re/tetofedo.jpg', sub: [] },
                { id: 'asztalos', name: 'Asztalos munka', image: 'source/kepek-re/asztalos.jpg', sub: [] },
                { id: 'badogos', name: 'Bádogos munka', image: 'source/kepek-re/badogos.jpg', sub: [] },
                { id: 'gipszkarton', name: 'Gípszkarton szerelés', image: 'source/kepek-re/gipszkarton.jpg', sub: [] }
            ]
        },
        {
            id: 'takaritas',
            name: 'Takaritás',
            image: 'source/kepek-re/takarittas.jpg',
            sub: [
                { id: 'lakastakaritas', name: 'Lakástakaritás', image: 'source/kepek-re/chome.jpg', sub: [] },
                { id: 'apartmantakaritas', name: 'Apartman & Nyaraló', image: 'source/kepek-re/choliday.jpg', sub: [] },
                { id: 'irodatakaritas', name: 'Iroda & Telephély', image: 'source/kepek-re/coffice.jpg', sub: [] }
            ]
        },
        {
            id: 'kerteszet',
            name: 'Kertészet',
            image: 'source/kepek-re/kerteszet.jpg',
            sub: [
                { id: 'kertes', name: 'Kertépítés & Gondozás', image: 'source/kepek-re/kertes.jpg', sub: [
                    { id: 'kertesz', name: 'Kertész', image: 'source/kepek-re/kertesz.jpg' },
                    { id: 'kertepites', name: 'Kertépítés', image: 'source/kepek-re/kertepites.jpg' },
                    { id: 'diszerosanyegkerteszet', name: 'Dísznövénykertész', image: 'source/kepek-re/disznovenykertesz.jpg' }
                ]},
                { id: 'viragkoteszet', name: 'Virágkötészet', image: 'source/kepek-re/viragkotok.jpg', sub: [
                     { id: 'viragbolt', name: 'Virágbolt', image: 'source/kepek-re/viragbolt.jpg' },
                     { id: 'viragkoto', name: 'Virágkötő', image: 'source/kepek-re/viragkoto.jpg' }
                ]}
            ]
        },
        {
            id: 'szepseg',
            name: 'Szépségipar',
            image: 'source/kepek-re/szepseg.jpg',
            sub: [
                { id: 'fodraszat', name: 'Fodrászat', image: 'source/kepek-re/fodraszat.jpg', sub: [] },
                { id: 'kormos', name: 'Kéz- és Lábápolás', image: 'source/kepek-re/kormos.jpg', sub: [
                    { id: 'korom', name: 'Körmös', image: 'source/kepek-re/kormos.jpg' }
                ]},
                { id: 'kozmetics', name: 'Kozmetika & Szempilla', image: 'source/kepek-re/kozmetics.jpg', sub: [
                    { id: 'kozmetus', name: 'Kozmetikus', image: 'source/kepek-re/kozmetics.jpg' },
                    { id: 'szempillaepit', name: 'Szempillaépítő', image: 'source/kepek-re/szempilla.jpg' }
                ]}
            ]
        },
        {
            id: 'butorszerelesz',
            name: 'Bútor Összeszerelesz',
            image: 'source/kepek-re/butor.jpg',
            sub: [
                { id: 'ikea', name: 'IKEA Bútorok', image: 'source/kepek-re/ikea.jpg', sub: [] },
                { id: 'jysk', name: 'Jysk Bútorok', image: 'source/kepek-re/jysk.png', sub: [] },
                { id: 'mobelix', name: 'Möbelix Bútorok', image: 'source/kepek-re/mobelix.jpg', sub: [] },
                { id: 'praktiker', name: 'Praktiker Bútorok', image: 'source/kepek-re/praktiker.jpg', sub: [] }
            ]
        },
        {
            id: 'gepjarmu',
            name: 'Gépjárműipar',
            image: 'source/kepek-re/car.jpg',
            sub: [
                { id: 'autoszerelesz', name: 'Gépjárműszerelés', image: 'source/kepek-re/mechanic.jpg', sub: [] },
                { id: 'autokozmetics', name: 'Autóközmetika & Takaritás', image: 'source/kepek-re/wash.jpg', sub: [] },
                { id: 'fenyezesfolidas', name: 'Fényezés & Fóliázás', image: 'source/kepek-re/wrap.jpg', sub: [] }
            ]
        },
        {
            id: 'informatika',
            name: 'Informatika',
            image: 'source/kepek-re/info.jpg',
            sub: [
                { id: 'programozas', name: 'Programozás & Fejlesztés', image: 'source/kepek-re/info.jpg', sub: [
                    { id: 'programozo', name: 'Programozó', image: 'source/kepek-re/info.jpg' },
                    { id: 'informatikus', name: 'Informatikus', image: 'source/kepek-re/informatics.jpg' }
                ]},
                { id: 'elektronikaszerelesz', name: 'Elektronikai szerelés', image: 'source/kepek-re/it.jpg', sub: [] }
            ]
        },
        {
            id: 'oktatas',
            name: 'Oktatás',
            image: 'source/kepek-re/tanitas.jpg',
            sub: [
                { id: 'magantan', name: 'Magántanár & Korrepetálás', image: 'source/kepek-re/magan.jpg', sub: [] },
                { id: 'autosiskola', name: 'Autósiskola', image: 'source/kepek-re/autosuli.jpg', sub: [] }
            ]
        },
        {
            id: 'mezogazd',
            name: 'Mezőgazdaság & Termelők',
            image: 'source/kepek-re/mezo.jpg',
            sub: [
                { id: 'novenytermesztes', name: 'Növénytermesztés', image: 'source/kepek-re/kaja.jpg', sub: [
                    { id: 'zeldseg', name: 'Zöldség és gyümölcs', image: 'source/kepek-re/zoldseg.jpg' },
                    { id: 'gyogynoveny', name: 'Gyógynövény', image: 'source/kepek-re/herbs.png' },
                    { id: 'gomba', name: 'Gomba', image: 'source/kepek-re/mushroom.jpg' }
                ]},
                { id: 'allattenyesztes', name: 'Állattenyésztés', image: 'source/kepek-re/cow.jpg', sub: [] },
                { id: 'boraszat', name: 'Borászat', image: 'source/kepek-re/bor.jpg', sub: [] },
                { id: 'kezmuveselelemis', name: 'Kézműves élelmiszerek', image: 'source/kepek-re/kezmuveskaja.jpg', sub: [] }
            ]
        },
        {
            id: 'kezmuves',
            name: 'Kézműves & Művészet',
            image: 'source/kepek-re/kezmu.jpg',
            sub: [
                { id: 'textil', name: 'Textil munkák', image: 'source/kepek-re/textil.jpg', sub: [
                    { id: 'varras', name: 'Varrás, Kötés, Horgolás', image: 'source/kepek-re/horog.jpg' }
                ]},
                { id: 'ekszerora', name: 'Ékszer & Óra', image: 'source/kepek-re/oras.jpg', sub: [
                    { id: 'ekszeresz', name: 'Ékszerész', image: 'source/kepek-re/ekszeresz.jpg' },
                    { id: 'oras', name: 'Órás', image: 'source/kepek-re/oras.jpg' }
                ]},
                { id: 'disztargy', name: 'Dísztárgy & Festészet', image: 'source/kepek-re/kezmuvesekfestok.jpg', sub: [] }
            ]
        },
        {
            id: 'esemeny',
            name: 'Rendezvény & Szórakoztatás',
            image: 'source/kepek-re/events.jpg',
            sub: [
                { id: 'eskuvo', name: 'Esküvőszervezés', image: 'source/kepek-re/wedding.jpg', sub: [
                    { id: 'ceremonia', name: 'Ceremóniamester', image: 'source/kepek-re/ceremony.jpg' }
                ]},
                { id: 'fenykepeszet', name: 'Fényképészet', image: 'source/kepek-re/photo.jpg', sub: [] },
                { id: 'zene', name: 'Zeneipar', image: 'source/kepek-re/music.jpg', sub: [] }
            ]
        },
        {
            id: 'penzugy',
            name: 'Biztosítás & Pénzügy',
            image: 'source/kepek-re/konyv.jpg',
            sub: [
                { id: 'biztositas', name: 'Biztosítások', image: 'source/kepek-re/bizti.jpg', sub: [
                    { id: 'eletbizti', name: 'Életbiztosítás', image: 'source/kepek-re/eletbizti.jpg' },
                    { id: 'hazbizti', name: 'Lakásbiztosítás', image: 'source/kepek-re/hazbizti.jpg' },
                    { id: 'autobizti', name: 'Gépjárműbiztosítás', image: 'source/kepek-re/kocsibizti.jpeg' },
                    { id: 'nyugdijbizti', name: 'Nyugdíjbiztosítás', image: 'source/kepek-re/nyugdijbizti.jpg' }
                ]},
                { id: 'konyvelesz', name: 'Könyvelés', image: 'source/kepek-re/konyv.jpg', sub: [] }
            ]
        },
        {
            id: 'egyeb',
            name: 'Egyéb Szolgáltatások',
            image: 'source/kepek-re/lakbe.jpg',
            sub: [
                { id: 'lakberendezes', name: 'Lakberendezés', image: 'source/kepek-re/lakbe.jpg', sub: [] }
            ]
        }
    ]
};


let navigationStack = [kategoriaAdatok];
let currentSearch = '';

const grid = document.getElementById('grid');
const navigation = document.getElementById('navigation');
const searchInput = document.getElementById('search-input');
const empty = document.getElementById('empty');

function deepSearch(item, searchText) {
    let results = [];
    if (item.name.toLowerCase().includes(searchText.toLowerCase()) && item.id !== 'root') {
        results.push(item);
    }
    if (item.sub) {
        item.sub.forEach(child => {
            results = [...results, ...deepSearch(child, searchText)];
        });
    }
    return results;
}

function update() {
    grid.innerHTML = '';
    const currentCategory = navigationStack[navigationStack.length - 1];
    let itemsToShow = [];
    if (currentSearch.trim() !== '') {
        const allMatches = deepSearch(kategoriaAdatok, currentSearch);
        itemsToShow = Array.from(new Map(allMatches.map(m => [m.id, m])).values());
    } else {
        itemsToShow = currentCategory.sub || [];
    }
    navigation.innerHTML = '';
    navigationStack.forEach((category, index) => {
        const item = document.createElement('span');
        item.className = `navigation-item ${index === navigationStack.length - 1 ? 'active' : ''}`;
        item.textContent = category.name;
        item.onclick = () => navigateTo(index);
        navigation.appendChild(item);
    });
    if (itemsToShow.length === 0) {
        empty.classList.add('visible');
    } else {
        empty.classList.remove('visible');
        itemsToShow.forEach(item => {
            grid.appendChild(createCard(item));
        });
    }
}

function createCard(item) {
    const div = document.createElement('div');
    div.className = 'service-card'; // Changed from 'card' to 'service-card'
    const hasSub = item.sub && item.sub.length > 0;
    const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e2e8f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial, sans-serif" font-size="20" fill="%2394a3b8" text-anchor="middle" dominant-baseline="middle"%3EKép nem elérhető%3C/text%3E%3C/svg%3E';
    div.innerHTML = `
        <div class="card-image">
            <img src="${item.image || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400'}" 
                 alt="${item.name}"
                 onerror="this.src='${fallbackImage}'">
            <div class="overlay"></div>
        </div>
        <div class="card-content">
            <div>
                <h3 class="card-title">${highlightText(item.name, currentSearch)}</h3>
                <p class="card-subtitle">${hasSub ? `${item.sub.length} Kategória` : 'Közvetlen szolgáltatás'}</p>
            </div>
            <div class="action">
                <span>${hasSub ? 'Megtekintés' : 'Kiválasztás'}</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
        </div>
    `;
    div.onclick = () => {
        if (hasSub) {
            navigationStack.push(item);
            currentSearch = '';
            searchInput.value = '';
            update();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert(`Kiválasztott munka: ${item.name}`);
        }
    };
    return div;
}

function highlightText(text, searchText) {
    if (!searchText) return text;
    const regex = new RegExp(`(${searchText})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function navigateTo(index) {
    navigationStack = navigationStack.slice(0, index + 1);
    currentSearch = '';
    searchInput.value = '';
    update();
}

searchInput.oninput = (e) => {
    currentSearch = e.target.value;
    update();
};

update();
