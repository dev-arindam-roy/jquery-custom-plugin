(function($) {
    /** arindam */
    $.fn.arindam = function (options) {
        var settings = $.extend({
            'name': 'Arindam Roy',
            'size': '18px',
            'color': '#ff0000',
            'weight': '600'
        }, options);
    
        return this.html('Hi,' + settings.name).css({
            'font-size': settings.size,
            'color': settings.color,
            'font-weight': settings.weight
        });
    }

    /** todaydate */
    $.fn.todaydate = function (options) {
        var formatArr = [
            'default',
            'now',
            'year',
            'month',
            'date',
            'day',
            'hour',
            'minute',
            'second',
            'millisecond',
            'timestamp',
            'local-time',
            'local-date',
            'local-date-time',
            '24hrs-time'
        ]
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
        var settings = $.extend({
            'format': formatArr[0]
        }, options);

        var displayDate = '';
        const _date = new Date();
        if (!formatArr.includes(settings.format)) {
            settings.format = 'default';
        }
        if (settings.format == 'default') {
            displayDate = _date;
        }
        if (settings.format == 'year') {
            displayDate = _date.getFullYear();
        }
        if (settings.format == 'month') {
            displayDate = months[_date.getMonth()];
        }
        if (settings.format == 'date') {
            displayDate = _date.getDate();
        }
        if (settings.format == 'day') {
            displayDate = days[_date.getDay()];
        }
        if (settings.format == 'hour') {
            displayDate = _date.getHours();
        }
        if (settings.format == 'minute') {
            displayDate = _date.getMinutes();
        }
        if (settings.format == 'second') {
            displayDate = _date.getSeconds();
        }
        if (settings.format == 'millisecond') {
            displayDate = _date.getMilliseconds();
        }
        if (settings.format == 'local-time') {
            displayDate = _date.toLocaleTimeString();
        }
        if (settings.format == 'local-date') {
            displayDate = _date.toLocaleDateString();
        }
        if (settings.format == 'timestamp') {
            displayDate = _date.getTime();
        }
        if (settings.format == 'local-date-time') {
            displayDate = _date.toLocaleString();
        }
        if (settings.format == '24hrs-time') {
            displayDate = _date.toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric"});
        }
        if (settings.format == 'now') {
            displayDate = new Date();
        }
        return this.append(displayDate);
    }
    $.fn.divbox = function(options) {
        var settings = $.extend({
            'divname': ''
        }, options);
        return this.each(function(i, e) {
            $(this).css({
                'width': '100px',
                'height': '100px',
                'border': '1px solid #ccc',
                'border-radius': '50px',
                'text-align': 'center',
                'float': 'left',
                'margin': '15px',
                'padding-top': '30px' 
            }).html(settings.divname + i);

            $(this).css({'color': setColor()});

            function setColor() {
                const colorArr = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'PINK', 'BLACK'];
                return colorArr[Math.floor(Math.random() * colorArr.length)];
            }
        });
    }
    $.fn.copyright = function(options) {
        var settings = $.extend({'copyrightText': ' All Right Received.'}, options);
        return this.each(function(i, e) {
            $(this).html('copyright @ ' + new Date().getFullYear() + settings.copyrightText);
        });
    }
    $.noelement = function(options) {
        alert('xxxx');
    }
    $.fn.arix = function(options) {
        var settings = $.extend({
            'title': 'Arix ACF',
            'buttonText': 'Arix ACF'
        }, options);

        $applicationDiv = $('<div/>');
        $applicationDiv.prop('id', 'arixApplicationDiv');
        $applicationDiv.prop('class', 'arix-app-div row mt-2');

        $applicationInnerDiv = $('<div/>');
        $applicationInnerDiv.prop('id', 'arixApplicationInnerDiv');
        $applicationInnerDiv.prop('class', 'arix-app-inner-div col-sm-12');
        $applicationInnerDiv.appendTo($applicationDiv);

        $addBtn = $('<button/>');
        $addBtn.prop('id', 'arixCreateBtn');
        $addBtn.prop('class', 'arix-add-btn btn btn-primary');
        $addBtn.text(settings.buttonText);
        $addBtn.appendTo($applicationInnerDiv);
        $addBtn.on('click', function() {
            openApplicationLayout();
        });

        $overlayDiv = $('<div/>');
        $overlayDiv.prop('id', 'arixOverlay');
        $overlayDiv.prop('class', 'arix-overlay');

        $modalDialogContainer = $('<div/>');
        $modalDialogContainer.prop('id', 'arixModalContainer');
        $modalDialogContainer.prop('class', 'arix-modal-container');
        
        function resizeDialogModal() {
            $modalDialogContainer.css({
                'top': Math.max(0, (($(window).height() - $modalDialogContainer.outerHeight()) / 2) + $(window).scrollTop()) + 'px',
                'left': Math.max(0, (($(window).width() - $modalDialogContainer.outerWidth()) / 2) + $(window).scrollLeft()) + 'px'
            });
        }

        $(window).on('resize', function() {
            //resizeDialogModal();
        });

        $modalDialogHeader = $('<div/>');
        $modalDialogHeader.prop('class', 'arix-modal-header');
        $modalDialogHeader.html('<span class="arix-modal-header-title">' + settings.title + '</span>');
        $modalDialogHeader.appendTo($modalDialogContainer);
        
        $modalDialogBody = $('<div/>');
        $modalDialogBody.prop('class', 'arix-modal-body');
        $modalDialogBody.appendTo($modalDialogContainer);

        $modalDialogFooter = $('<div/>');
        $modalDialogFooter.prop('class', 'arix-modal-footer');
        $modalDialogFooter.appendTo($modalDialogContainer);

        $closeBtn = $('<button/>');
        $closeBtn.prop('id', 'arixModalCloseBtn');
        $closeBtn.prop('class', 'arix-modalclose-btn btn btn-secondary');
        $closeBtn.text('Close');
        $closeBtn.appendTo($modalDialogFooter);
        $('body').on('click', '#' + $closeBtn.attr('id'), function() {
            closeApplicationLayout();
        });

        $saveChangesBtn = $('<button/>');
        $saveChangesBtn.prop('id', 'arixSaveChangesBtn');
        $saveChangesBtn.prop('class', 'arix-savechanges-btn btn btn-primary');
        $saveChangesBtn.text('Save Changes');
        $saveChangesBtn.appendTo($modalDialogFooter);
        $('body').on('click', '#' + $saveChangesBtn.attr('id'), function() {
            alert('Hi, Arindam - Working...');
            closeApplicationLayout();
        });

        function openApplicationLayout() {
            $overlayDiv.appendTo('body');
            $modalDialogContainer.appendTo('body');
        }

        function closeApplicationLayout() {
            $overlayDiv.remove();
            $modalDialogContainer.remove();
        }

        return $applicationDiv.appendTo(this);
    }
}(jQuery));
