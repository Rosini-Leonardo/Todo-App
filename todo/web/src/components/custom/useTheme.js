// class
const dark = 'dark';
const light = 'light';

export default function useTheme(state) {
  if(typeof state !== "boolean"){
    console.warn('Not Boolean value!');
  }else if (state === true){
    // Dark mode
    document.body.classList.remove(light);
    document.body.classList.add(dark);
    
    // Single IDs
    document.getElementById('button-close').classList.add('btn-close-white');
    document.getElementById('navbar').classList.add('navbar-dark');
  }else if(state === false){
    // Light mode
    document.body.classList.remove(dark);
    document.body.classList.add(light);
    
    // Single IDs
    document.getElementById('button-close').classList.remove('btn-close-white');
    document.getElementById('navbar').classList.remove('navbar-dark'); 
  }
};