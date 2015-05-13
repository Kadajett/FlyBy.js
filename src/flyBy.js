var FlyBy = FlyBy || {};

//begin private closure
(function() {
    'use strict';

    this.Engine = famous.core.Engine;
    this.Modifier = famous.core.Modifier;
    this.Transform = famous.core.Transform;
    this.Surface = famous.core.Surface;
    this.Lightbox = famous.views.Lightbox;

    // Set up the main container
    this.context = FlyBy.Engine.createContext();
    this.context.setPerspective(1000);
    this.context.add(new this.Surface({
        size: [undefined, undefined],
        properties: {
            backgroundColor: "#333",
            zIndex: -10
        }
    }))

    this.Page = function Page() {
        var page = this;
        // If the user is NOT using the 'new' keyword
        if (!(page instanceof Page)) {
            return new Page();
        }

        page.view = new FlyBy.Lightbox();
        page.view.resetOptions = function(){
          this.setOptions(Lightbox.DEFAULT_OPTIONS);
        }

        page.routeTo = function(){
          FlyBy.context.add(page.view);
        }
    }
}).call(FlyBy);
