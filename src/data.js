// The data has 6 Top most Menu items. 
// The first two items will show the message that menu items are not implemented yet.
// Third menu item has 3 children with 2 items has form and 1 has a message.
// Fourth menu item has deep nesting of menu items and has forms and message links in them.
// Same for fifth and sixth menu items.

export default {
  "data" : [
    {
      "name": "Item1",
      "url": "/item"
    },
    {
      "name": "Item2",
      "url": "/item"
    },
    {
      "name": "Item3",
      "children": [
        {
          "name": "Item3 - Child1",
          "url": "/form"
        },
        {
          "name": "Item3 - Child2",
          "url": "/item"
        },
        {
          "name": "Item3 - Child3",
          "url": "/form"
        }
      ]
    },
    {
      "name": "Item4",
      "children": [
        {
          "name": "Item4 - Child1",
          "url": "/form"
        },
        {
          "name": "Item4 - Child2",
          "url": "/item"
        },
        {
          "name": "Item4 - Child2 - SubChild1",
          "children": [
            {
              "name": "Item4 - Child2 - SubSubChild1",
              "url": "/form"
            },
            {
              "name": "Item4 - Child2 - SubSubChild2",
              "url": "/item"
            },
            {
              "name": "Item4 - Child2 - SubSubChild3",
              "children": [
                {
                  "name": "Item4 - Child2 - SubSubChild3 - 1",
                  "url": "/form"
                },
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Item5",
      "children": [
        {
          "name": "Item5 - Child1",
          "url": "/form"
        },
        {
          "name": "Item5 - Child2",
          "url": "/item"
        },
      ]
    },
    {
      "name": "Item6",
      "children": [
        {
          "name": "Item6 - Child1",
          "url": "/form"
        },
        {
          "name": "Item6 - Child2",
          "url": "/form"
        },
      ]
    }
  ]
}
