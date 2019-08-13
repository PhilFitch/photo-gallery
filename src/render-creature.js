export default function renderCreature(images) {
    const html = /*html*/`
        <li title="${images.description}">
            <h2>${images.title}</h2>
            <div class="image-container">
                <img class="card-image" src="${images.url}" alt="${images.title}">
            </div>
            <p>Horns: ${images.horns}</p>
        </li>
    `;
    return html;
}