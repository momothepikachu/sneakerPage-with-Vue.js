(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: '#vue-root',
    data: {
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors,
      selectedColor: 'red',
    },
    computed: {
      sizeClass: function(){
        return "product-size--" + this.selectedSize.toString().replace(".", "_")
      },
      colorSrc: function(){
        return "assets/"+this.selectedColor+".jpg"
      }
    },
    methods: {
      updateColorsBySize: function(e){
        this.colors = window.Inventory.bySize[e.target.value]
        this.selectedColor !== this.colors[0]? 
        this.selectedColor = this.colors[0] : 
        null
      },
      updateSizesByColor: function(e){
        this.sizes = window.Inventory.byColor[e.target.value]
        this.selectedSize !== this.sizes[0]? 
        this.selectedSize = this.sizes[0] : 
        null
      }
    }
  });
})();
