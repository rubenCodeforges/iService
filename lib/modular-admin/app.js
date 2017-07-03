var config = window.config = {};

// Config reference element
var $ref = $("#ref");

// Configure responsive bootstrap toolkit
config.ResponsiveBootstrapToolkitVisibilityDivs = {
    'xs': $('<div class="device-xs 				  hidden-sm-up"></div>'),
    'sm': $('<div class="device-sm hidden-xs-down hidden-md-up"></div>'),
    'md': $('<div class="device-md hidden-sm-down hidden-lg-up"></div>'),
    'lg': $('<div class="device-lg hidden-md-down hidden-xl-up"></div>'),
    'xl': $('<div class="device-xl hidden-lg-down			  "></div>'),
};

ResponsiveBootstrapToolkit.use('Custom', config.ResponsiveBootstrapToolkitVisibilityDivs);

//validation configuration
config.validations = {
    debug: true,
    errorClass: 'has-error',
    validClass: 'success',
    errorElement: "span",

    // add error class
    highlight: function (element, errorClass, validClass) {
        $(element).parents("div.form-group")
            .addClass(errorClass)
            .removeClass(validClass);
    },

    // add error class
    unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".has-error")
            .removeClass(errorClass)
            .addClass(validClass);
    },

    // submit handler
    submitHandler: function (form) {
        form.submit();
    }
}

//delay time configuration
config.delayTime = 50;

// chart configurations
config.chart = {};

config.chart.colorPrimary = tinycolor($ref.find(".chart .color-primary").css("color"));
config.chart.colorSecondary = tinycolor($ref.find(".chart .color-secondary").css("color"));
$(function () {
    animate({
        name: 'flipInY',
        selector: '.error-card > .error-title-block'
    });


    setTimeout(function () {
        var $el = $('.error-card > .error-container');

        animate({
            name: 'fadeInUp',
            selector: $el
        });

        $el.addClass('visible');
    }, 1000);
});

/***********************************************
 *        Animation Settings
 ***********************************************/
function animate(options) {
    var animationName = "animated " + options.name;
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $(options.selector)
        .addClass(animationName)
        .one(animationEnd,
            function () {
                $(this).removeClass(animationName);
            }
        );
}

$(function () {
    var $itemActions = $(".item-actions-dropdown");

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.item-actions-dropdown').length) {
            $itemActions.removeClass('active');
        }
    });

    $('.item-actions-toggle-btn').on('click', function (e) {
        e.preventDefault();

        var $thisActionList = $(this).closest('.item-actions-dropdown');

        $itemActions.not($thisActionList).removeClass('active');

        $thisActionList.toggleClass('active');
    });
});

/***********************************************
 *        NProgress Settings
 ***********************************************/
var npSettings = {
    easing: 'ease',
    speed: 500
}

NProgress.configure(npSettings);
$(function () {
    setSameHeights();

    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setSameHeights, 150);
    });
});


function setSameHeights($container) {

    $container = $container || $('.sameheight-container');

    var viewport = ResponsiveBootstrapToolkit.current();

    $container.each(function () {

        var $items = $(this).find(".sameheight-item");

        // Get max height of items in container
        var maxHeight = 0;

        $items.each(function () {
            $(this).css({height: 'auto'});
            maxHeight = Math.max(maxHeight, $(this).innerHeight());
        });


        // Set heights of items
        $items.each(function () {
            // Ignored viewports for item
            var excludedStr = $(this).data('exclude') || '';
            var excluded = excludedStr.split(',');

            // Set height of element if it's not excluded on
            if (excluded.indexOf(viewport) === -1) {
                $(this).innerHeight(maxHeight);
            }
        });
    });
}

$(function () {

    // set sortable options
    $('.images-container').sortable({
        animation: 150,
        handle: ".control-btn.move",
        draggable: ".image-container",
        onMove: function (evt) {
            var $relatedElem = $(evt.related);

            if ($relatedElem.hasClass('add-image')) {
                return false;
            }
        }
    });


    $controlsButtons = $('.controls');

    $controlsButtonsStar = $controlsButtons.find('.star');
    $controlsButtonsRemove = $controlsButtons.find('.remove');

    $controlsButtonsStar.on('click', function (e) {
        e.preventDefault();

        $controlsButtonsStar.removeClass('active');
        $controlsButtonsStar.parents('.image-container').removeClass('main');

        $(this).addClass('active');

        $(this).parents('.image-container').addClass('main');
    })

})
$(function () {

    if (!$('#select-all-items').length) {
        return false;
    }


    $('#select-all-items').on('change', function () {
        var $this = $(this).children(':checkbox').get(0);

        $(this).parents('li')
            .siblings()
            .find(':checkbox')
            .prop('checked', $this.checked)
            .val($this.checked)
            .change();
    });


    function drawItemsListSparklines() {
        $(".items-list-page .sparkline").each(function () {
            var type = $(this).data('type');

            // Generate random data
            var data = [];
            for (var i = 0; i < 17; i++) {
                data.push(Math.round(100 * Math.random()));
            }

            $(this).sparkline(data, {
                barColor: config.chart.colorPrimary.toString(),
                height: $(this).height(),
                type: type
            });
        });
    }

    drawItemsListSparklines();

    $(document).on("themechange", function () {
        drawItemsListSparklines();
    });

});
$(function () {

    $(".wyswyg").each(function () {

        var $toolbar = $(this).find(".toolbar");
        var $editor = $(this).find(".editor");


        var editor = new Quill($editor.get(0), {
            theme: 'snow'
        });

        editor.addModule('toolbar', {
            container: $toolbar.get(0)     // Selector for toolbar container
        });


    });

});

//MENU
$(function () {

    $('#sidebar-menu, #customize-menu').metisMenu({
        activeClass: 'open'
    });


    $('#sidebar-collapse-btn').on('click', function (event) {
        event.preventDefault();

        $("#app").toggleClass("sidebar-open");
    });

    $("#sidebar-overlay").on('click', function () {
        $("#app").removeClass("sidebar-open");
    });

    $(".metismenu a.side-nav-item").on('click', function () {
        $("#app").removeClass("sidebar-open");
    });

});
$(function () {
    $('.nav-profile > li > a').on('click', function () {
        var $el = $(this).next();

        animate({
            name: 'flipInX',
            selector: $el
        });
    });
})
var modalMedia = {
    $el: $("#modal-media"),
    result: {},
    options: {},
    open: function (options) {
        options = options || {};
        this.options = options;


        this.$el.modal('show');
    },
    close: function () {
        if ($.isFunction(this.options.beforeClose)) {
            this.options.beforeClose(this.result);
        }

        this.$el.modal('hide');

        if ($.isFunction(this.options.afterClose)) {
            this.options.beforeClose(this.result);
        }
    }
};
$(function () {

    // Local storage settings
    var themeSettings = getThemeSettings();

    // Elements

    var $app = $('#app');
    var $styleLink = $('#theme-style');
    var $customizeMenu = $('#customize-menu');

    // Color switcher
    var $customizeMenuColorBtns = $customizeMenu.find('.color-item');

    // Position switchers
    var $customizeMenuRadioBtns = $customizeMenu.find('.radio');


    // /////////////////////////////////////////////////

    // Initial state

    // On setting event, set corresponding options

    // Update customize view based on options

    // Update theme based on options

    /************************************************
     *                Initial State
     *************************************************/

    setThemeSettings();

    /************************************************
     *                    Events
     *************************************************/

    // set theme type
    $customizeMenuColorBtns.on('click', function () {
        themeSettings.themeName = $(this).data('theme');

        setThemeSettings();
    });


    $customizeMenuRadioBtns.on('click', function () {

        var optionName = $(this).prop('name');
        var value = $(this).val();

        themeSettings[optionName] = value;

        setThemeSettings();
    });

    function setThemeSettings() {
        setThemeState()
            .delay(config.delayTime)
            .queue(function (next) {

                setThemeColor();
                setThemeControlsState();
                saveThemeSettings();

                $(document).trigger("themechange");

                next();
            });
    }

    /************************************************
     *            Update theme based on options
     *************************************************/

    function setThemeState() {
        // set theme type
        if (themeSettings.themeName) {
            $styleLink.attr('href', 'css/app-' + themeSettings.themeName + '.css');
        }
        else {
            $styleLink.attr('href', 'css/app.css');
        }

        // App classes
        $app.removeClass('header-fixed footer-fixed sidebar-fixed');

        // set header
        $app.addClass(themeSettings.headerPosition);

        // set footer
        $app.addClass(themeSettings.footerPosition);

        // set footer
        $app.addClass(themeSettings.sidebarPosition);

        return $app;
    }

    /************************************************
     *            Update theme controls based on options
     *************************************************/

    function setThemeControlsState() {
        // set color switcher
        $customizeMenuColorBtns.each(function () {
            if ($(this).data('theme') === themeSettings.themeName) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active');
            }
        });

        // set radio buttons
        $customizeMenuRadioBtns.each(function () {
            var name = $(this).prop('name');
            var value = $(this).val();

            if (themeSettings[name] === value) {
                $(this).prop("checked", true);
            }
            else {
                $(this).prop("checked", false);
            }
        });
    }

    /************************************************
     *            Update theme color
     *************************************************/
    function setThemeColor() {
        config.chart.colorPrimary = tinycolor($ref.find(".chart .color-primary").css("color"));
        config.chart.colorSecondary = tinycolor($ref.find(".chart .color-secondary").css("color"));
    }

    /************************************************
     *                Storage Functions
     *************************************************/

    function getThemeSettings() {
        var settings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) : {};

        settings.headerPosition = settings.headerPosition || '';
        settings.sidebarPosition = settings.sidebarPosition || '';
        settings.footerPosition = settings.footerPosition || '';

        return settings;
    }

    function saveThemeSettings() {
        localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
    }

});
$(function () {

    $("body").addClass("loaded");

});


/***********************************************
 *        NProgress Settings
 ***********************************************/

// start load bar
NProgress.start();

// end loading bar 
NProgress.done();