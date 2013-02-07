
# dynamic-sheet

  Dynamically creates stylesheet

## Installation

    $ component install mnmly/dynamic-sheet

## API
  - [DynamicSheet()](#dynamicsheet)
  - [DynamicSheet.insert()](#dynamicsheetinsertrulesstring)

### DynamicSheet()

  Initialize DynamicSheet

### DynamicSheet.insert(rules:String)

  Inserts the rules

## Example

```javascript

  var DynamicSheet = require( 'dynamic-sheet' ),
      dynamicSheet = new DynamicSheet(),
      style        = [ "body{ background: lightblue; }"
                     , "div{ background: lightyellow; width: 100px; height: 100px; margin: 0 auto; margin-top: 100px; }"].join( '\n' );
  dynamicSheet.insert( style );

```

## License

  MIT
