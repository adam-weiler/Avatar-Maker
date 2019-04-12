export const all_styles = [ //An array of each 
  {
    id: 'shirt', //A list of all the styles / clickable options.
    name: 'Shirt', //The visible name of all the styles / clickable options.
    length: 'clothes.length', //The length of each array from each JSON file.
    current: 'current_shirt', //The current value in state.
    mode: 1 //1 means always visible, in Basic & Advanced.
  },
  {
    id: 'pants',
    name: 'Pants',
    length: 'clothes.length',
    current: 'current_pants',
    mode: 1
  },
  {
    id: 'hair',
    name: 'Hair',
    length: 'hair.length',
    current: 'current_hair',
    mode: 1
  },
  {
    id: 'hair_colour',
    name: 'Hair Colour',
    length: 'hair_colours.length',
    current: 'current_hair_colour',
    mode: 0 //0 means only visible in Advanced.
  },
  {
    id: 'beard',
    name: 'Beard',
    length: 'male_beards.length',
    current: 'current_beard',
    mode: 0
  },
  {
    id: 'headwear',
    name: 'Headwear',
    length: 'headwear.length',
    current: 'current_headwear',
    mode:1
  },
  {
    id: 'feature',
    name: 'Feature',
    length: 'feature.length',
    current: 'current_feature',
    mode: 1
  },
  {
    id: 'face',
    name: 'Face',
    length: 'face.length',
    current: 'current_face',
    mode: 0
  },
  {
    id: 'gloves',
    name: 'Gloves',
    length: 'gloves.length',
    current: 'current_gloves',
    mode: 0
  },
]