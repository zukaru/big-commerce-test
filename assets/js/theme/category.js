import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import utils from '@bigcommerce/stencil-utils';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';
import swal from './global/sweet-alert';

export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
    }

    setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
        $element.attr({
            role: roleType,
            'aria-live': ariaLiveStatus,
        });
    }

    makeShopByPriceFilterAccessible() {
        if (!$('[data-shop-by-price]').length) return;

        if ($('.navList-action').hasClass('is-active')) {
            $('a.navList-action.is-active').focus();
        }

        $('a.navList-action').on('click', () => this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive'));
    }

    onReady() {
        this.arrangeFocusOnSortBy();

        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));

        this.makeShopByPriceFilterAccessible();

        compareProducts(this.context.urls);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));

        this.ariaNotifyNoProducts();







        // Custom functionality



        // Fade in banner
        $('.banners').show('slow')


        
        // 
        // On ready, toggles #removeAllItems if cart data is undefined
        utils.api.cart.getCart({}, (err, data) => {
            $('button#removeAllItems').toggle( (data != undefined) )
        });

        


        // When #addToCart is clicked add special item to cart
        // The special item ID is hardwired to the get request
        // It will only add the special item with id=112

        $("button#addToCart").on('click', function(event) {

            $.get("/cart.php?action=add&product_id=112")
            .then((data) => {
           
            swal.fire({
                    text: `Item added to cart`,
                    icon: 'success',
                });
                $("button#removeAllItems").show().css('opacity', '1')
            })
            
            .catch(error => {
                swal.fire({
                    text: `Error, item not added. Try again.`,
                    icon: 'error',
                });
            });
        });

        // When #removeAllItems is clicked it fetches the first physical line item ID in the cart
        // It's hardwired to only fetch the first physical line item
        
        $('button#removeAllItems').on('click', function(event) {
            utils.api.cart.getCart({}, (err, data) => {
                const itemId = data.lineItems.physicalItems[0].id;
                

                // Then it calls util.api.cart.itemRemove() passing in the physical line item ID  
                utils.api.cart.itemRemove(itemId, (err, response) => {
                    swal.fire({
                        text: `All items removed from cart.`,
                        icon: 'warning',
                    })
                    
                    // Toggles #removeAllItems button
                    $('button#removeAllItems').toggle()
                });
            });
        });


        // End of custom funtionality
           
    }

    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
    }

    initFacetedSearch() {
        const {
            price_min_evaluation: onMinPriceError,
            price_max_evaluation: onMaxPriceError,
            price_min_not_entered: minPriceNotEntered,
            price_max_not_entered: maxPriceNotEntered,
            price_invalid_value: onInvalidPrice,
        } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
        });
    }
}

