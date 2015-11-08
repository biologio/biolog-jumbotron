Template.categories.helpers({
    categoriesList: function() {
        return Categories.find({
            "trending": true
        }, {
            sort: {
                order: 1
            }
        }).map(function(category, index) {
            category.post = Posts.find({
                categories: {
                    $in: [category._id]
                }
            }).count();
            category.subCategories = Categories.find({
                "parentId": category._id
            }).fetch();
            return category;
        });
    },
    showPostCount: function(post) {
        if (post <= 1) {
            return '<span class="ui small   label"> ' + post + '  <span class="detail" >post</span></span>'
        } else {
            return '<span class="ui small label"> ' + post + '  <span class="detail" >posts</span></span>'
        }
    }
});

Template.categories.rendered = function() {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        $(document).on('click', '.image', function(e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        })
        $(document).on('click', '.close-overlay', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".image").hasClass("hover")) {
                $(this).closest(".image").removeClass("hover");
            }
        })
    } else {
        $(document).on('mouseenter', '.image', function() {
            $(this).addClass("hover");

        })
        $(document).on('mouseleave', '.image', function() {
            $(this).removeClass("hover");

        })
    }
};
Template.categories.events({
    'click a.expand': function(e, tpl) {
        Session.set("categoryId", this._id);
    
           
    }
});

Template.post_submit.rendered = function() {
    if (Session.get("categoryId")) {
        $("input[value=" + Session.get("categoryId") + "]").attr("checked", true);
    };
};
Template.post_submit.destroyed = function() {
    Session.set("categoryId", null);
 
};