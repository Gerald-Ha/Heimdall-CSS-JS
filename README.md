# Heimdall-CSS-JS

## Overview

This repository contains custom CSS and JavaScript settings for Heimdall.

### Features

- **JavaScript**: The script divides the categories in Heimdall into two containers. Container 1 is positioned at the top and contains specifically defined categories. Container 2 automatically includes all other categories not listed in Container 1.
- **CSS**: Customizations for improved display of containers and categories.

### Setup

1. **Bookmark Tags**: Ensure your bookmarks in Heimdall are categorized according to the created tags. These tags act as categories that will be displayed in their respective containers.
2. **Settings**: Go to the Heimdall settings and select "Categories" under "Treat Tags as". This is necessary for the JavaScript code to function correctly.


### Customization

To specify which tags should be included in Container 1, modify the following JavaScript code snippet:

```javascript
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
``` 

Replace the tags in the following line with the desired tags for Container 1:

``` if (categoryName === 'Social Media' || categoryName === 'Dev' || categoryName === 'Coding')``` 


### Installation

1. Copy the CSS and JS files to the appropriate directory of your Heimdall setup.
2. Update your Heimdall configuration according to the provided instructions.

### Notes

- Ensure all categories and tags are correctly defined to guarantee proper display and functionality.
- Test the settings after implementation to ensure everything works as expected.



This should include the necessary instructions for customizing the tags in Container 1.


<img src="https://github.com/user-attachments/assets/61abcf90-dd2e-4e24-b0ff-0d2b93dddbab" width="800" height="auto">
