Meteor.startup(function() {
    // Custom Category Field
    Categories.addField({
        fieldName: 'tagline',
        fieldSchema: {
            type: String,
            optional: true,
            editableBy: ["member", "admin"]

        }
    });
       Categories.addField({
        fieldName: 'trending',
        fieldSchema: {
            type: Boolean,
            optional: true,
            editableBy: ["member", "admin"]

        }
    });

})