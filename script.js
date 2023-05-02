let baseUrl='https://rickandmortyapi.com/api/character/'

async function getData(){
    const consulta=window.location.search
    let parametros=new URLSearchParams(consulta)
    let page=parametros.get('page')

    //selecciona los elementos checkbox de los filtros y los coloca en un array

    let humano=document.getElementById('humano')    
    let alien=document.getElementById('alien')
    let vivo=document.getElementById('vivo')
    let muerto=document.getElementById('muerto')
    let unknown=document.getElementById('unknown')
 


    await fetch(baseUrl+`${'?page='}${page}`).then(response=>{
        response.json().then(datos=>{
            
            let characters=datos.results
            //Hace la petición fetch

            let paginas=datos.info.pages
            render(characters,page)

            let paginacion=document.getElementById('paginacion')

     //crea el indice de las páginas
     if(Number(page)>2 && Number(page)<=paginas-2){
         var inferior=page-2;
         var superior=Number(page)+2
     }else{
         if(Number(page)<=2 || Nummber(page)==null){
             var inferior=1
             var superior=Number(page)+2
         }else if (Number(page)>=paginas-2)
         {
             var inferior=page-2
             var superior=Number(paginas)
         }
     }
     for(let i=inferior; i<=superior; i++){
         paginacion.innerHTML+=`<li><a href="personajes.html?page=${i}">${i}</a></li>`
      
     }

            }
        )
        }
    )
    
    }
    


function render(array,paginas){

     //identifica los elementos html donde se mostrará el contenido
 
     let renderizador=document.getElementById('renderizador')
     

     //renderiza los personajes de acuerdo a los filtros seleccionados
        for (let character of array){
                    renderizador.innerHTML+=`<div class='card'><h2 class="card-title">${character.name}</h1>                                    
                                        <img src=${character.image}>
                                        <div class="card-text">
                                        <h3>Status: ${character.status}</h3>
                                        <h3>Specie: ${character.species}</h3>
                                        <h3>Gender: ${character.gender}</h3>
                                        <h3>Location: ${character.location.name}</h3>
                                        </div>`
        }
        }


        function validateForm() {
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var message = document.getElementById("message").value;
			var error = false;

			// Validación del campo nombre
			if (name == "") {
				document.getElementById("name-error").innerHTML = "El campo nombre es obligatorio";
				error = true;
			} else {
				document.getElementById("name-error").innerHTML = "";
			}

			// Validación del campo correo electrónico
			if (email == "") {
				document.getElementById("email-error").innerHTML = "El campo correo electrónico es obligatorio";
				error = true;
			} else if (!/\S+@\S+\.\S+/.test(email)) {
				document.getElementById("email-error").innerHTML = "El correo electrónico no es válido";
				error = true;
			} else {
				document.getElementById("email-error").innerHTML = "";
			}

			// Validación del campo mensaje
			if (message == "") {
				document.getElementById("message-error").innerHTML = "El campo mensaje es obligatorio";
				error = true;
			} else {
				document.getElementById("message-error").innerHTML = "";
			}

			if (error) {
				return false;
			} else {
				alert("Mensaje enviado correctamente");
				return true;
			}
		}