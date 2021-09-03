ember-date-fn-helpers
==============================================================================

Use Date-fns helpers (currently only `format`) in your Ember project.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-date-fn-helpers
```


Usage
------------------------------------------------------------------------------

The addon provides a handlebar helper:
```handlebars
{{format-date this.someDateObject 'dd.MM.yyyy'}}
```
optionally you can provide a locale as well, which defaults to 'en' otherwise:
```handlebars
{{format-date this.someDateObject 'dd. MMMM yyyy' 'de'}}
{{!-- which would produce "03. September 2021" as an example --}}
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
