# Custom Cornerstone Theme For BigCommerce

## Acknowledgement

The following solutions are **not** production ready.


## Task 1
> Create a product called Special Item which will be assigned to a new category called Special Items. Be sure to add at least 2 images during the product creation.

Completed using the BigCommerce dashboard for store owners.

## Task 2
> Create a feature that will show the product's second image when it is hovered on. 

This feature was implemented by customizing 2 files.


[1.  assets/scss/components/citadel/cards/_cards.scss  **Lines 47 to 75**](https://github.com/zukaru/big-commerce-test/blob/7c061be621b9283491ed5c9e0f6c33b0dfe9d525/assets/scss/components/citadel/cards/_cards.scss#L47-L75) 

2.  templates/components/products/card.html  **Lines 31 to 41**


## Task 3
> Add a button at the top of the category page labeled Add All To Cart. When clicked, the product will be added to the cart. Notify the user that the product has been added. If the cart has an item in it - show a button next to the Add All To Cart button which says Remove All Items. When clicked it should clear the cart and notify the user. Both buttons should utilize the Storefront API for completion. 


This feature was implemented by customizing 2 files


1.  assets/js/theme/category.js  **Lines 58 to 122** 

2.  templates/components/products/card.html  **Lines 31 to 41**








