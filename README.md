# React Color Palette App

Must give credit to Colt Steele, he designed this project for his React Class on Udemy, which I have taken.  He makes this app as a code along, using class based components.

To make it more my own (and as a refresher for myself on using React), I have used functional components with hooks instead of class based components.  

I still have a few issues to work out, as not everything was easily converted from class to functional components.  I am also customizing the styling some and may try eventually conecting it to MongoDB for user CRUD and palette storage,

## WIP Issues

- Custom validators for unique colors not working
- SetTimeOut on copied graphic (no callback built in to useState)
- Adding a dark/light theme mode
- Adding a database to save colors and user instead of local storage

## What I have added/customized so far

- All components are fuctional components
- Icon button to reset palettes to default
- Custom styling

## Technologies Used

- Material UI
- Material UI/JSS styled components with a mix of withStyles and makeStyles
- React copy to clipboard (for copy to clipboard, duh!)
- Chroma JS (for color conversion)
- React Component Slider (rc-slider) (for color palette slider)
- react Color (for color picker)
- UUID (for unique universal ID's)
- React Transition Group (for transitions)
- React Sortable HOC (for drag and drop in a grid)
- ArrayMove (helper for ordering the drag and drop)
- React Material UI Form Validator (for form validation, this may get replaced as it is not working with custom validations)
- Emoji Mart (for emoji picker)
