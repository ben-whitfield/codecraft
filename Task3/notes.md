# Notes to myself about the challenge

## Add a new argument that sets the size of the rendered contents. 
Segments can now _not_ be a fixed list and they will need to be generated. Required a rethink and had to change my focus to the output rather than the (i.e. not thinking about storing the fixed number parts and thinking about the number lines as boolean values).

Needed a complete refactor :-( as it was based on a fixed loop size which would scale vertically.

Ended up with lots of repetition which could probably be improved.

Too much reliance on knowing the shape of the end "object", i.e. having to know the object key is `top` or `upperFiller`.

