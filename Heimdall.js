document.addEventListener('DOMContentLoaded', () => {
    const sortable = document.getElementById('sortable');
    if (!sortable) {
        console.error('Sortable element not found!');
        return;
    }

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    container1.id = 'container1';
    container2.id = 'container2';

    const categories = sortable.querySelectorAll('.category.item-container');
    if (categories.length === 0) {
        console.error('No category item-container elements found!');
        return;
    }

    categories.forEach((category) => {
        const categoryName = category.getAttribute('data-name');
        console.log(`Processing category: ${categoryName}`);
        if (categoryName === 'Social Media' || categoryName === 'Dev' || categoryName === 'Coding') {
            container1.appendChild(category);
            console.log(`Added ${categoryName} to container1`);
        } else {
            container2.appendChild(category);
            console.log(`Added ${categoryName} to container2`);
        }
    });

    sortable.appendChild(container1);
    sortable.appendChild(container2);
    console.log('Containers appended to sortable');
});
