// Add the jumbotron template as the first hero module
Telescope.modules.add('hero', {
    template: 'jumbotron',
    order: 1,
    only: ['postsDefault']
});


// Subscribe to JumbotronSettings publication
Template.jumbotron.onCreated(function() {
    this.subscribe('jumbotron-settings');
});

Template.jumbotron_config_overlay.onCreated(function() {
    this.subscribe('jumbotron-settings');
});


Template.jumbotron.helpers({
    showJumbotron: function() {
        // if (FlowRouter.current().path.indexOf("?cat=") == -1 && JumbotronSettings.get('on')) {
        //     return true;
        // } else {
        //     return false;
        // }
        return JumbotronSettings.get('on');

    },
    jumbotronData: function() {
        var s = JumbotronSettings.findOne();
        if (s) {
            return {
                title: s.title,
                titleImage: s.titleImage,
                subheading: s.subheading,
                extraHtml: s.extraHtml,
                extraCss: s.extraCss,
                image: s.image
            }
        }
    }
});


Template.jumbotron_config_overlay.helpers({
    jumbotronSettings: function() {
        return JumbotronSettings.findOne();
    },
    switchState: function() {
        // Return .on class if hero state is on
        var s = JumbotronSettings.findOne();

        if (s && s.on)
            return 'on';

        return;
    }
});

Template.jumbotron.rendered = function() {

    $('.sidebar-toggle').on('click', function() {
        $('.sidebar-jumbotron-settings')
            .sidebar('setting', 'transition', 'scale down').sidebar('toggle');
        console.log(this);

    })
};
Template.jumbotron_config_overlay.events({

    'click #onHandel': function(e, t) {
        console.log(e);
        // Toggle hero state when toggling on/off switch
        var s = JumbotronSettings.findOne();
        JumbotronSettings.update({
            _id: s._id
        }, {
            $set: {
                on: !s.on
            }
        });
    }
});


/*
 *  CodeMirror inputs
 */

var initCodeMirror = function(t) {
    // Grab the HTML and CSS fields
    var html = t.find("textarea[data-schema-key='extraHtml']");
    var css = t.find("textarea[data-schema-key='extraCss']");

    // Init CodeMirror
    CodeMirror.fromTextArea(html, {
        lineNumbers: false,
        mode: "htmlmixed"
    });
    CodeMirror.fromTextArea(css, {
        lineNumbers: false,
        mode: "css"
    });
};

Template.jumbotron_config_overlay.onRendered(function() {
    var self = this;

    self.autorun(function() {
        var isReady = Template.instance().subscriptionsReady();
        if (isReady) {
            Meteor.setTimeout(function() {
                initCodeMirror(self);
            }, 500); // Give Autoform 500ms to render
        }
    });
    $


    ;
});

AutoForm.hooks({
    updateJumbotronForm: {
        onSuccess: function() {
            var self = this;
            Meteor.setTimeout(function() {
                initCodeMirror(self.template);
            }, 50); // Give input 50ms to re-render after submit
        }
    }
});
