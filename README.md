# Custom Cornerstone Theme For BigCommerce

## Acknowledgement

The following solutions are **not** production ready.

## Store URL
[https://testing259.mybigcommerce.com/?ctk=692fa758-dd76-4838-807a-f9c9cf893ab1](https://testing259.mybigcommerce.com/?ctk=692fa758-dd76-4838-807a-f9c9cf893ab1)

**Preview Code**  5jbstqn2p3

## Task 1
> Create a product called Special Item which will be assigned to a new category called Special Items. Be sure to add at least 2 images during the product creation.

Completed by using the BigCommerce dashboard for store owners.

## Task 2
> Create a feature that will show the product's second image when it is hovered on. 

This feature was implemented in the following files:


[1.  assets/scss/components/citadel/cards/_cards.scss  **Lines 47 to 75**](https://github.com/zukaru/big-commerce-test/blob/7c061be621b9283491ed5c9e0f6c33b0dfe9d525/assets/scss/components/citadel/cards/_cards.scss#L47-L75)

[2.  templates/components/products/card.html  **Lines 31 to 41**](https://github.com/zukaru/big-commerce-test/blob/7b57d6e90672d561f736557be25cba3177b62d41/templates/components/products/card.html#L31-L41)


## Task 3
> Add a button at the top of the category page labeled Add All To Cart. When clicked, the product will be added to the cart. Notify the user that the product has been added. If the cart has an item in it - show a button next to the Add All To Cart button which says Remove All Items. When clicked it should clear the cart and notify the user. Both buttons should utilize the Storefront API for completion. 


This feature was implemented in the following files:


[1.  assets/js/theme/category.js  **Lines 67 to 122**](https://github.com/zukaru/big-commerce-test/blob/8040be2392cbb86d49346965597d407e5619f770/assets/js/theme/category.js#L67-L122)

[2.  templates/pages/category.html  **Lines 51 to 56**](https://github.com/zukaru/big-commerce-test/blob/7b57d6e90672d561f736557be25cba3177b62d41/templates/pages/category.html#L51-L56)


## Bonus Task
> If a customer is logged in - at the top of the category page show a banner that shows some customer details (i.e. name, email, phone, etc). This should utilize the data that is rendered via Handlebars on the Customer Object.

This feature was implemented in the following files:

[1.  assets/js/theme/category.js  **Lines 62 to 63**](https://github.com/zukaru/big-commerce-test/blob/8040be2392cbb86d49346965597d407e5619f770/assets/js/theme/category.js#L62-L63)

[2.  templates/pages/category.html  **Lines 8 to 19**](https://github.com/zukaru/big-commerce-test/blob/7b57d6e90672d561f736557be25cba3177b62d41/templates/pages/category.html#L8-L19) 



  





