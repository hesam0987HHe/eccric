let dark = document.getElementById('darkmod');
let darkTheme = true
dark.addEventListener('click' , function(){
	if (darkTheme) {
		document.getElementById('hh').setAttribute('data-theme','black')
		darkTheme = false
	} else {
		document.getElementById('hh').setAttribute('data-theme','cupcake')
		darkTheme = true
	}
	
})
